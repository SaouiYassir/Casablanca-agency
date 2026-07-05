import './Catalogue.css'
import React, { useState, useMemo, useEffect } from 'react';
import Card from '../../Components/Card/Card.jsx';
import CardSkeleton from '../../Components/SkeletonCard/SkeletonCard.jsx';

const STATIC_CARS = [
    { id: 1, marque: "Peugeot", modèle: "208", année: 2022, prixParJour: 45, status: "Disponible", type: "Citadine", fuel: "Essence", image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=500&q=80" },
    { id: 2, marque: "Dacia", modèle: "Sandero Stepway", année: 2023, prixParJour: 35, status: "Disponible", type: "Citadine", fuel: "Diesel", image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=500&q=80" },
    { id: 3, marque: "Renault", modèle: "Clio 5", année: 2022, prixParJour: 40, status: "Disponible", type: "Citadine", fuel: "Diesel", image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=500&q=80" },
    { id: 4, marque: "Hyundai", modèle: "i10", année: 2021, prixParJour: 30, status: "Loué", type: "Citadine", fuel: "Essence", image: "https://images.unsplash.com/photo-1646119253693-0b80f2906791?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 5, marque: "Kia", modèle: "Picanto", année: 2022, prixParJour: 35, status: "Disponible", type: "Citadine", fuel: "Essence", image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500&q=80" },
    { id: 6, marque: "Volkswagen", modèle: "Golf 8", année: 2023, prixParJour: 70, status: "Disponible", type: "Citadine", fuel: "Diesel", image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=500&q=80" },
    { id: 7, marque: "Dacia", modèle: "Duster", année: 2022, prixParJour: 55, status: "Disponible", type: "SUV", fuel: "Diesel", image: "https://images.unsplash.com/photo-1604395924490-a3a18bb7193e?q=80&w=1602&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 8, marque: "Hyundai", modèle: "Tucson", année: 2023, prixParJour: 85, status: "Disponible", type: "SUV", fuel: "Diesel", image: "https://images.unsplash.com/photo-1630051191354-932e27e318fe?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 9, marque: "Kia", modèle: "Sportage", année: 2022, prixParJour: 80, status: "Loué", type: "SUV", fuel: "Diesel", image: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=500&q=80" },
    { id: 10, marque: "Peugeot", modèle: "3008", année: 2022, prixParJour: 75, status: "Disponible", type: "SUV", fuel: "Diesel", image: "https://images.unsplash.com/photo-1742811969388-d73cc0413d76?q=80&w=1119&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 11, marque: "Toyota", modèle: "RAV4", année: 2023, prixParJour: 95, status: "Disponible", type: "SUV", fuel: "Hybride", image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=500&q=80" },
    { id: 12, marque: "Tesla", modèle: "Model 3", année: 2023, prixParJour: 120, status: "Disponible", type: "Berline", fuel: "Électrique", image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=500&q=80" },
    { id: 13, marque: "Tesla", modèle: "Model Y", année: 2023, prixParJour: 140, status: "Disponible", type: "SUV", fuel: "Électrique", image: "https://images.unsplash.com/photo-1619317214850-7d361bdff9e4?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 14, marque: "Dacia", modèle: "Jogger", année: 2022, prixParJour: 60, status: "Disponible", type: "Familiale", fuel: "Essence", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&q=80" },
    { id: 15, marque: "Volkswagen", modèle: "Tiguan", année: 2022, prixParJour: 110, status: "Disponible", type: "SUV", fuel: "Diesel", image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=500&q=80" },
    { id: 16, marque: "Mercedes-Benz", modèle: "Classe A", année: 2023, prixParJour: 100, status: "Disponible", type: "Berline", fuel: "Diesel", image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=500&q=80" },
    { id: 17, marque: "BMW", modèle: "Série 1", année: 2022, prixParJour: 95, status: "Disponible", type: "Berline", fuel: "Essence", image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500&q=80" },
    { id: 18, marque: "Audi", modèle: "A3", année: 2023, prixParJour: 105, status: "Loué", type: "Berline", fuel: "Diesel", image: "https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?w=500&q=80" },
    { id: 19, marque: "Citroën", modèle: "C3", année: 2021, prixParJour: 35, status: "Disponible", type: "Citadine", fuel: "Essence", image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=500&q=80" },
    { id: 20, marque: "Fiat", modèle: "500", année: 2022, prixParJour: 35, status: "Disponible", type: "Citadine", fuel: "Essence", image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=500&q=80" },
    { id: 21, marque: "Fiat", modèle: "500e", année: 2023, prixParJour: 55, status: "Disponible", type: "Citadine", fuel: "Électrique", image: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?w=500&q=80" },
    { id: 22, marque: "Skoda", modèle: "Octavia", année: 2022, prixParJour: 65, status: "Disponible", type: "Berline", fuel: "Diesel", image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=500&q=80" },
    { id: 23, marque: "Seat", modèle: "Ibiza", année: 2022, prixParJour: 40, status: "Disponible", type: "Citadine", fuel: "Essence", image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=500&q=80" },
    { id: 24, marque: "Nissan", modèle: "Qashqai", année: 2022, prixParJour: 75, status: "Disponible", type: "SUV", fuel: "Hybride", image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=500&q=80" },
    { id: 25, marque: "Ford", modèle: "Kuga", année: 2022, prixParJour: 70, status: "Disponible", type: "SUV", fuel: "Diesel", image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=500&q=80" },
    { id: 26, marque: "Range Rover", modèle: "Evoque", année: 2023, prixParJour: 160, status: "Disponible", type: "SUV", fuel: "Diesel", image: "https://images.unsplash.com/photo-1508974239320-0a029497e820?w=500&q=80" },
    { id: 27, marque: "Jeep", modèle: "Compass", année: 2022, prixParJour: 80, status: "Disponible", type: "SUV", fuel: "Essence", image: "https://images.unsplash.com/photo-1511527844068-006b95d162c2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 28, marque: "Peugeot", modèle: "2008", année: 2023, prixParJour: 60, status: "Disponible", type: "SUV", fuel: "Essence", image: "https://images.unsplash.com/photo-1632245889029-e406faaa34cd?w=500&q=80" },
    { id: 29, marque: "Volkswagen", modèle: "Touareg", année: 2023, prixParJour: 190, status: "Disponible", type: "SUV", fuel: "Diesel", image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=500&q=80" },
    { id: 30, marque: "Renault", modèle: "Express Van", année: 2022, prixParJour: 45, status: "En Maintenance", type: "Utilitaire", fuel: "Diesel", image: "https://images.unsplash.com/photo-1666335009171-3ddc17937d6d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

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

const categories = ["Tous", ...new Set(STATIC_CARS.map(car => car.type))];
const fuels = ["Tous", ...new Set(STATIC_CARS.map(car => car.fuel))];


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

        return STATIC_CARS.filter(car => {
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
                    {STATIC_CARS.slice(0, 3).map((car, index) => (
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
