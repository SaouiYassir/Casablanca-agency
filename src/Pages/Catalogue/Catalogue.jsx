import './Catalogue.css'
import React, { useState, useMemo, useEffect } from 'react';
import Card from '../../Components/Card/Card.jsx';
import CardSkeleton from '../../Components/SkeletonCard/SkeletonCard.jsx';

import cars from '../../Data/Catalogue.js'

const CARDS_PER_PAGE = 9;

// Price is a range filter, not an exact match, so it's modeled as
// { label, min, max } instead of being derived from the raw car prices.
const PRICE_RANGES = [
    { label: "Tous les prix", min: 0, max: Infinity },
    { label: "Moins de 50 MAD", min: 0, max: 49 },
    { label: "50 - 100 MAD", min: 50, max: 100 },
    { label: "100 - 150 MAD", min: 100, max: 150 },
    { label: "Plus de 150 MAD", min: 150, max: Infinity },
];

const categories = ["Tous", ...new Set(cars.map(car => car.type))];
const fuels = ["Tous", ...new Set(cars.map(car => car.fuel))];


const FAKE_LOADING_DELAY = 500;


function Catalogue({ page }) {
    const [selectedCategory, setSelectedCategory] = useState("Tous");
    const [selectedFuel, setSelectedFuel] = useState("Tous");
    const [selectedPriceRange, setSelectedPriceRange] = useState(PRICE_RANGES[0].label);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    // Reactive filtering: every dropdown/search change recomputes this list
    // immediately, combined with AND logic (a car must match all active filters).
    const filteredCars = useMemo(() => {
        const priceRange = PRICE_RANGES.find(r => r.label === selectedPriceRange) || PRICE_RANGES[0];
        const term = searchTerm.trim().toLowerCase();

        return cars.filter(car => {
            const matchesCategory = selectedCategory === "Tous" || car.type === selectedCategory;
            const matchesFuel = selectedFuel === "Tous" || car.fuel === selectedFuel;
            const matchesPrice = car.prixParJour >= priceRange.min && car.prixParJour <= priceRange.max;
            const matchesSearch =
                term === "" ||
                car.marque.toLowerCase().includes(term) ||
                car.modèle.toLowerCase().includes(term);

            return matchesCategory && matchesFuel && matchesPrice && matchesSearch;
        });
    }, [selectedCategory, selectedFuel, selectedPriceRange, searchTerm]);

    // Any filter change should bring the user back to page 1, otherwise they
    // can land on an empty page if the new result set is shorter.
    useEffect(() => {
        setCurrentPage(1);
        setIsLoading(true);

        const timer = setTimeout(() => {
            setIsLoading(false);
        }, FAKE_LOADING_DELAY);

        return () => clearTimeout(timer);
    }, [selectedCategory, selectedFuel, selectedPriceRange, searchTerm]);

    const totalPages = Math.ceil(filteredCars.length / CARDS_PER_PAGE);
    const indexOfLastCar = currentPage * CARDS_PER_PAGE;
    const indexOfFirstCar = indexOfLastCar - CARDS_PER_PAGE;
    const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);

    const resetFilters = () => {
        setSelectedCategory("Tous");
        setSelectedFuel("Tous");
        setSelectedPriceRange(PRICE_RANGES[0].label);
        setSearchTerm("");
    };

    // Homepage preview: just the first 3 cars + a link to the full catalogue.
    if (page === false) {
        return (
            <div className="catalogue-section">
                <h2 className="catalogue-title">Take a Look Here ...</h2>
                <div id="cars-container" className="cars-container">
                    {cars.slice(0, 3).map((car, index) => (
                        <Card
                            key={`preview-${car.id}-${index}`}
                            id={car.id}
                            marque={car.marque}
                            modèle={car.modèle}
                            year={car.année}
                            prixParJour={car.prixParJour}
                            status={car.status}
                            type={car.type}
                            fuel={car.fuel}
                            image={car.image}
                        />
                    ))}
                </div>

                <div className="view-more-container">
                    <a href="/all-cars" className="view-more-btn">
                        Voir Tout Le Catalogue
                        <i className="bi bi-arrow-right"></i>
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className="catalogue-section">
            <h1 className="catalogue-title">Our Fleet</h1>
            <p>Choose the car that suits your needs</p>

            <div className="filters-container">
                <div className="filter-field">
                    <label htmlFor="search-input" className="sr-only">Rechercher une voiture</label>
                    <div className="search-wrapper">
                        <i className="bi bi-search search-icon"></i>
                        <input
                            id="search-input"
                            type="text"
                            placeholder="Rechercher (marque, modèle...)"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                <div className="filter-field">
                    <label htmlFor="categories-select" className="sr-only">Catégorie</label>
                    <select
                        id="categories-select"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        {categories.map((categorie) => (
                            <option key={categorie} value={categorie}>{categorie}</option>
                        ))}
                    </select>
                </div>

                <div className="filter-field">
                    <label htmlFor="fuels-select" className="sr-only">Carburant</label>
                    <select
                        id="fuels-select"
                        value={selectedFuel}
                        onChange={(e) => setSelectedFuel(e.target.value)}
                    >
                        {fuels.map((fuel) => (
                            <option key={fuel} value={fuel}>{fuel}</option>
                        ))}
                    </select>
                </div>

                <div className="filter-field">
                    <label htmlFor="price-select" className="sr-only">Prix par jour</label>
                    <select
                        id="price-select"
                        value={selectedPriceRange}
                        onChange={(e) => setSelectedPriceRange(e.target.value)}
                    >
                        {PRICE_RANGES.map((range) => (
                            <option key={range.label} value={range.label}>{range.label}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="catalogue-results-bar">
                <span className="catalogue-results-count">
                    {filteredCars.length} véhicule{filteredCars.length !== 1 ? 's' : ''} disponible{filteredCars.length !== 1 ? 's' : ''}
                </span>
            </div>

            <div className="cars-list-container">
                {isLoading ? (
                    Array.from({ length: CARDS_PER_PAGE }).map((_, i) => (
                        <CardSkeleton key={`skeleton-${i}`} />
                    ))
                ) : currentCars.length > 0 ? (
                    currentCars.map((car) => (
                        <Card
                            key={car.id}
                            id={car.id}
                            marque={car.marque}
                            modèle={car.modèle}
                            year={car.année}
                            prixParJour={car.prixParJour}
                            status={car.status}
                            type={car.type}
                            fuel={car.fuel}
                            image={car.image}
                            transmission={car.transmission}
                            rating={car.rating}
                            seats={car.seats}
                            luggage={car.luggage}
                            ac={car.ac}
                        />
                    ))
                ) : (
                    <div className="no-results">
                        <p>Aucune voiture ne correspond à vos critères.</p>
                        <button className="reset-filters-btn" onClick={resetFilters}>
                            Réinitialiser les filtres
                        </button>
                    </div>
                )}
            </div>

            {!isLoading && totalPages > 1 && (
                <div className="pagination">
                    <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                    >
                        Page précédente
                    </button>

                    <span className="page-indicator">
                        Page <strong>{currentPage}</strong> sur {totalPages}
                    </span>

                    <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                    >
                        Page suivante
                    </button>
                </div>
            )}
        </div>
    );
}

export default Catalogue;
