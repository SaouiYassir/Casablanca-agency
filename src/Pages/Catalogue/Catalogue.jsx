import React, { useState, useEffect } from 'react';
import Card from '../../Components/Card/Card.jsx';
import './Catalogue.css'

function Catalogue({ page }) {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const url = 'https://api.sheety.co/2010bc932455f0a94970d2187f0fb46a/carsAgency/feuille1';

        fetch(url)
            .then(response => response.json())
            .then(json => {
                setCars(json.feuille1 || []);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
    return (
        <div className="catalog-loading-container">
            <div className="catalog-spinner"></div>
            <p className="catalog-loading-text">Chargement du catalogue...</p>
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
        <div>
            <h1 className='catalogue-title'>Cars Catalogue</h1>
            <div id="cars-container" className="cars-container">
                {cars.map((car, index) => (
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
                    />
                ))}
            </div>
        </div>
    );
}

export default Catalogue;