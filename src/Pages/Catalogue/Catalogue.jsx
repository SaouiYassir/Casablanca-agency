// import React, { useState, useEffect } from 'react';
// import Card from '../../Components/Card/Card.jsx';
// import './Catalogue.css'

// function Catalogue({ page }) {
//     const [cars, setCars] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const url = 'https://api.sheety.co/2010bc932455f0a94970d2187f0fb46a/carsAgency/feuille1';

//         fetch(url)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error(`Erreur ${response.status}`);
//                 }
//                 return response.json();
//             })
//             .then(json => {
//                 setCars(json.feuille1 || []);
//                 setLoading(false);
//             })
//             .catch(err => {
//                 console.error('Error fetching data:', err);
//                 setError(err.message || "Impossible de charger le catalogue.");
//                 setLoading(false);
//             });
//     }, []);

//     if (loading) {
//         return (
//             <div className="catalog-loading-container">
//                 <div className="catalog-spinner"></div>
//                 <p className="catalog-loading-text">Chargement du catalogue...</p>
//             </div>
//         );
//     }

//     if (error) {
//         return (
//             <div className="catalog-error-container">
//                 <i className="bi bi-exclamation-triangle catalog-error-icon"></i>
//                 <p className="catalog-error-text">{error}</p>
//                 <button
//                     className="catalog-retry-btn"
//                     onClick={() => window.location.reload()}
//                 >
//                     Réessayer
//                 </button>
//             </div>
//         );
//     }

//     if (page === false) {
//         return (
//             <div className="catalogue-section">
//                 {/* 1. Main Grid: Limited strictly to 3 elements */}
//                 <h2 className='catalogue-title'>Take a Look Here ...</h2>
//                 <div id="cars-container" className="cars-container">
//                     {cars.slice(0, 3).map((car, index) => (
//                         <Card
//                             key={`preview-${car.id || car.idVoiture || index}-${index}`}
//                             id={car.id || car.idVoiture || index}
//                             marque={car.marque}
//                             modèle={car.modèle}
//                             year={car.année}
//                             prixParJour={car.prixParJour}
//                             status={car.status}
//                             type={car.type}
//                             fuel={car.fuel}
//                             image={car.image || car.photo}
//                         />
//                     ))}
//                 </div>

//                 {/* 2. Redirection Link Container */}
//                 <div className="view-more-container">
//                     <a href="/all-cars" className="view-more-btn">
//                         Voir Tout Le Catalogue
//                         <i className="bi bi-arrow-right"></i>
//                     </a>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div>
//             <h1 className='catalogue-title'>Cars Catalogue</h1>
//             <div id="cars-container" className="cars-container">
//                 {cars.map((car, index) => (
//                     <Card
//                         key={car.id || car.idVoiture || index}
//                         id={car.id || car.idVoiture || index}
//                         marque={car.marque}
//                         modèle={car.modèle}
//                         year={car.année}
//                         prixParJour={car.prixParJour || "A discuter"}
//                         status={car.status}
//                         type={car.type}
//                         fuel={car.fuel}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Catalogue;


import React, { useState, useEffect, useMemo } from 'react';
import Card from '../../Components/Card/Card.jsx';
import './Catalogue.css'

function Catalogue({ page }) {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeFilter, setActiveFilter] = useState('Tous');

    useEffect(() => {
        const url = 'https://api.sheety.co/2010bc932455f0a94970d2187f0fb46a/carsAgency/feuille1';

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Erreur ${response.status}`);
                }
                return response.json();
            })
            .then(json => {
                setCars(json.feuille1 || []);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching data:', err);
                setError(err.message || "Impossible de charger le catalogue.");
                setLoading(false);
            });
    }, []);

    // Build the list of available filters dynamically from the fetched data
    const filterTypes = useMemo(() => {
        const types = cars
            .map(car => car.type)
            .filter(Boolean)
            .map(type => type.trim());

        const uniqueTypes = [...new Set(types)];
        return ['Tous', ...uniqueTypes];
    }, [cars]);

    const filteredCars = useMemo(() => {
        if (activeFilter === 'Tous') return cars;
        return cars.filter(car => car.type && car.type.trim() === activeFilter);
    }, [cars, activeFilter]);

    if (loading) {
        return (
            <div className="catalog-loading-container">
                <div className="catalog-spinner"></div>
                <p className="catalog-loading-text">Chargement du catalogue...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="catalog-error-container">
                <i className="bi bi-exclamation-triangle catalog-error-icon"></i>
                <p className="catalog-error-text">{error}</p>
                <button
                    className="catalog-retry-btn"
                    onClick={() => window.location.reload()}
                >
                    Réessayer
                </button>
            </div>
        );
    }

    if (page === false) {
        return (
            <div className="catalogue-section">
                {/* 1. Main Grid: Limited strictly to 3 elements */}
                <h2 className='catalogue-title'>Take a Look Here ...</h2>
                <div id="cars-container" className="cars-container">
                    {cars.slice(0, 3).map((car, index) => (
                        <Card
                            key={`preview-${car.id || car.idVoiture || index}-${index}`}
                            id={car.id || car.idVoiture || index}
                            marque={car.marque}
                            modèle={car.modèle}
                            year={car.année}
                            prixParJour={car.prixParJour}
                            status={car.status}
                            type={car.type}
                            fuel={car.fuel}
                            image={car.image || car.photo}
                        />
                    ))}
                </div>

                {/* 2. Redirection Link Container */}
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
            <h1 className='catalogue-title'>Notre Flotte</h1>
            <p className="catalogue-subtitle">
                Trouvez le véhicule qui correspond à vos besoins, parmi une sélection variée et entretenue avec soin.
            </p>

            {/* Filter bar */}
            {filterTypes.length > 1 && (
                <div className="catalogue-filters">
                    {filterTypes.map((type) => (
                        <button
                            key={type}
                            className={`filter-chip ${activeFilter === type ? 'filter-chip-active' : ''}`}
                            onClick={() => setActiveFilter(type)}
                        >
                            {type}
                        </button>
                    ))}
                </div>
            )}

            <div className="catalogue-results-bar">
                <span className="catalogue-results-count">
                    {filteredCars.length} véhicule{filteredCars.length !== 1 ? 's' : ''} disponible{filteredCars.length !== 1 ? 's' : ''}
                </span>
            </div>

            {filteredCars.length === 0 ? (
                <div className="catalogue-empty-state">
                    <i className="bi bi-car-front catalogue-empty-icon"></i>
                    <p className="catalogue-empty-text">
                        Aucun véhicule ne correspond à ce filtre pour le moment.
                    </p>
                    <button
                        className="catalog-retry-btn"
                        onClick={() => setActiveFilter('Tous')}
                    >
                        Voir tous les véhicules
                    </button>
                </div>
            ) : (
                <div id="cars-container" className="cars-container">
                    {filteredCars.map((car, index) => (
                        <Card
                            key={car.id || car.idVoiture || index}
                            id={car.id || car.idVoiture || index}
                            marque={car.marque}
                            modèle={car.modèle}
                            year={car.année}
                            prixParJour={car.prixParJour || "A discuter"}
                            status={car.status}
                            type={car.type}
                            fuel={car.fuel}
                            image={car.image || car.photo}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Catalogue;