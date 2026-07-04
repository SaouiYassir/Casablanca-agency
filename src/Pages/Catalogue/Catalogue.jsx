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


// import React, { useState, useEffect, useMemo } from 'react';
// import Card from '../../Components/Card/Card.jsx';
// import './Catalogue.css'

// function Catalogue({ page }) {
//     const [cars, setCars] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [activeFilter, setActiveFilter] = useState('Tous');

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

//     // Build the list of available filters dynamically from the fetched data
//     const filterTypes = useMemo(() => {
//         const types = cars
//             .map(car => car.type)
//             .filter(Boolean)
//             .map(type => type.trim());

//         const uniqueTypes = [...new Set(types)];
//         return ['Tous', ...uniqueTypes];
//     }, [cars]);

//     const filteredCars = useMemo(() => {
//         if (activeFilter === 'Tous') return cars;
//         return cars.filter(car => car.type && car.type.trim() === activeFilter);
//     }, [cars, activeFilter]);

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
//         <div className="catalogue-section">
//             <h1 className='catalogue-title'>Notre Flotte</h1>
//             <p className="catalogue-subtitle">
//                 Trouvez le véhicule qui correspond à vos besoins, parmi une sélection variée et entretenue avec soin.
//             </p>

//             {/* Filter bar */}
//             {filterTypes.length > 1 && (
//                 <div className="catalogue-filters">
//                     {filterTypes.map((type) => (
//                         <button
//                             key={type}
//                             className={`filter-chip ${activeFilter === type ? 'filter-chip-active' : ''}`}
//                             onClick={() => setActiveFilter(type)}
//                         >
//                             {type}
//                         </button>
//                     ))}
//                 </div>
//             )}

//             <div className="catalogue-results-bar">
//                 <span className="catalogue-results-count">
//                     {filteredCars.length} véhicule{filteredCars.length !== 1 ? 's' : ''} disponible{filteredCars.length !== 1 ? 's' : ''}
//                 </span>
//             </div>

//             {filteredCars.length === 0 ? (
//                 <div className="catalogue-empty-state">
//                     <i className="bi bi-car-front catalogue-empty-icon"></i>
//                     <p className="catalogue-empty-text">
//                         Aucun véhicule ne correspond à ce filtre pour le moment.
//                     </p>
//                     <button
//                         className="catalog-retry-btn"
//                         onClick={() => setActiveFilter('Tous')}
//                     >
//                         Voir tous les véhicules
//                     </button>
//                 </div>
//             ) : (
//                 <div id="cars-container" className="cars-container">
//                     {filteredCars.map((car, index) => (
//                         <Card
//                             key={car.id || car.idVoiture || index}
//                             id={car.id || car.idVoiture || index}
//                             marque={car.marque}
//                             modèle={car.modèle}
//                             year={car.année}
//                             prixParJour={car.prixParJour || "A discuter"}
//                             status={car.status}
//                             type={car.type}
//                             fuel={car.fuel}
//                             image={car.image || car.photo}
//                         />
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Catalogue;



import './Catalogue.css'
import React from 'react';
// import styled from 'styled-components';
import Card from '../../Components/Card/Card.jsx';

import { useState, useMemo } from 'react';


const STATIC_CARS = [
  {
    id: 1,
    marque: "Peugeot",
    modèle: "208",
    année: 2022,
    prixParJour: 45,
    status: "Disponible",
    type: "Citadine",
    fuel: "Essence",
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=500&q=80"
  },
  {
    id: 2,
    marque: "Dacia",
    modèle: "Sandero Stepway",
    année: 2023,
    prixParJour: 35,
    status: "Disponible",
    type: "Citadine",
    fuel: "Diesel",
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=500&q=80"
  },
  {
    id: 3,
    marque: "Renault",
    modèle: "Clio 5",
    année: 2022,
    prixParJour: 40,
    status: "Disponible",
    type: "Citadine",
    fuel: "Diesel",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=500&q=80"
  },
  {
    id: 4,
    marque: "Hyundai",
    modèle: "i10",
    année: 2021,
    prixParJour: 30,
    status: "Loué",
    type: "Citadine",
    fuel: "Essence",
    image: "https://images.unsplash.com/photo-1617469767053-d3b508a0d822?w=500&q=80"
  },
  {
    id: 5,
    marque: "Kia",
    modèle: "Picanto",
    année: 2022,
    prixParJour: 35,
    status: "Disponible",
    type: "Citadine",
    fuel: "Essence",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500&q=80"
  },
  {
    id: 6,
    marque: "Volkswagen",
    modèle: "Golf 8",
    année: 2023,
    prixParJour: 70,
    status: "Disponible",
    type: "Citadine",
    fuel: "Diesel",
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=500&q=80"
  },
  {
    id: 7,
    marque: "Dacia",
    modèle: "Duster",
    année: 2022,
    prixParJour: 55,
    status: "Disponible",
    type: "SUV",
    fuel: "Diesel",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=500&q=80"
  },
  {
    id: 8,
    marque: "Hyundai",
    modèle: "Tucson",
    année: 2023,
    prixParJour: 85,
    status: "Disponible",
    type: "SUV",
    fuel: "Diesel",
    image: "https://images.unsplash.com/photo-1702578948021-9980b181a17f?w=500&q=80"
  },
  {
    id: 9,
    marque: "Kia",
    modèle: "Sportage",
    année: 2022,
    prixParJour: 80,
    status: "Loué",
    type: "SUV",
    fuel: "Diesel",
    image: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=500&q=80"
  },
  {
    id: 10,
    marque: "Peugeot",
    modèle: "3008",
    année: 2022,
    prixParJour: 75,
    status: "Disponible",
    type: "SUV",
    fuel: "Diesel",
    image: "https://images.unsplash.com/photo-1621007947382-cc34a3646d7e?w=500&q=80"
  },
  {
    id: 11,
    marque: "Toyota",
    modèle: "RAV4",
    année: 2023,
    prixParJour: 95,
    status: "Disponible",
    type: "SUV",
    fuel: "Hybride",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=500&q=80"
  },
  {
    id: 12,
    marque: "Tesla",
    modèle: "Model 3",
    année: 2023,
    prixParJour: 120,
    status: "Disponible",
    type: "Berline",
    fuel: "Électrique",
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=500&q=80"
  },
  {
    id: 13,
    marque: "Tesla",
    modèle: "Model Y",
    année: 2023,
    prixParJour: 140,
    status: "Disponible",
    type: "SUV",
    fuel: "Électrique",
    image: "https://images.unsplash.com/photo-1619551741245-f196de14e5ce?w=500&q=80"
  },
  {
    id: 14,
    marque: "Dacia",
    modèle: "Jogger",
    année: 2022,
    prixParJour: 60,
    status: "Disponible",
    type: "Familiale",
    fuel: "Essence",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&q=80"
  },
  {
    id: 15,
    marque: "Volkswagen",
    modèle: "Tiguan",
    année: 2022,
    prixParJour: 110,
    status: "Disponible",
    type: "SUV",
    fuel: "Diesel",
    image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=500&q=80"
  },
  {
    id: 16,
    marque: "Mercedes-Benz",
    modèle: "Classe A",
    année: 2023,
    prixParJour: 100,
    status: "Disponible",
    type: "Berline",
    fuel: "Diesel",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=500&q=80"
  },
  {
    id: 17,
    marque: "BMW",
    modèle: "Série 1",
    année: 2022,
    prixParJour: 95,
    status: "Disponible",
    type: "Berline",
    fuel: "Essence",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500&q=80"
  },
  {
    id: 18,
    marque: "Audi",
    modèle: "A3",
    année: 2023,
    prixParJour: 105,
    status: "Loué",
    type: "Berline",
    fuel: "Diesel",
    image: "https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?w=500&q=80"
  },
  {
    id: 19,
    marque: "Citroën",
    modèle: "C3",
    année: 2021,
    prixParJour: 35,
    status: "Disponible",
    type: "Citadine",
    fuel: "Essence",
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=500&q=80"
  },
  {
    id: 20,
    marque: "Fiat",
    modèle: "500",
    année: 2022,
    prixParJour: 35,
    status: "Disponible",
    type: "Citadine",
    fuel: "Essence",
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=500&q=80"
  },
  {
    id: 21,
    marque: "Fiat",
    modèle: "500e",
    année: 2023,
    prixParJour: 55,
    status: "Disponible",
    type: "Citadine",
    fuel: "Électrique",
    image: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?w=500&q=80"
  },
  {
    id: 22,
    marque: "Skoda",
    modèle: "Octavia",
    année: 2022,
    prixParJour: 65,
    status: "Disponible",
    type: "Berline",
    fuel: "Diesel",
    image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=500&q=80"
  },
  {
    id: 23,
    marque: "Seat",
    modèle: "Ibiza",
    année: 2022,
    prixParJour: 40,
    status: "Disponible",
    type: "Citadine",
    fuel: "Essence",
    image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=500&q=80"
  },
  {
    id: 24,
    marque: "Nissan",
    modèle: "Qashqai",
    année: 2022,
    prixParJour: 75,
    status: "Disponible",
    type: "SUV",
    fuel: "Hybride",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=500&q=80"
  },
  {
    id: 25,
    marque: "Ford",
    modèle: "Kuga",
    année: 2022,
    prixParJour: 70,
    status: "Disponible",
    type: "SUV",
    fuel: "Diesel",
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=500&q=80"
  },
  {
    id: 26,
    marque: "Range Rover",
    modèle: "Evoque",
    année: 2023,
    prixParJour: 160,
    status: "Disponible",
    type: "SUV",
    fuel: "Diesel",
    image: "https://images.unsplash.com/photo-1508974239320-0a029497e820?w=500&q=80"
  },
  {
    id: 27,
    marque: "Jeep",
    modèle: "Compass",
    année: 2022,
    prixParJour: 80,
    status: "Disponible",
    type: "SUV",
    fuel: "Essence",
    image: "https://images.unsplash.com/photo-1609521271165-ff10189bf443?w=500&q=80"
  },
  {
    id: 28,
    marque: "Peugeot",
    modèle: "2008",
    année: 2023,
    prixParJour: 60,
    status: "Disponible",
    type: "SUV",
    fuel: "Essence",
    image: "https://images.unsplash.com/photo-1632245889029-e406faaa34cd?w=500&q=80"
  },
  {
    id: 29,
    marque: "Volkswagen",
    modèle: "Touareg",
    année: 2023,
    prixParJour: 190,
    status: "Disponible",
    type: "SUV",
    fuel: "Diesel",
    image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=500&q=80"
  },
  {
    id: 30,
    marque: "Renault",
    modèle: "Express Van",
    année: 2022,
    prixParJour: 45,
    status: "En Maintenance",
    type: "Utilitaire",
    fuel: "Diesel",
    image: "https://images.unsplash.com/photo-1517994112540-009c47fa476b?w=500&q=80"
  }
];


const categories = ["Tous", ...new Set(STATIC_CARS.map(car => car.type))];
// const transmissions = ["Tous", ...new Set(STATIC_CARS.map(car => (car.transmissions)))];
const fuels = ["Tous", ...new Set(STATIC_CARS.map(car => (car.fuel)))];
// const seats = ["Tous", ...new Set(STATIC_CARS.map(car => (car.seats)))];
const prices = [...new Set(STATIC_CARS.map(car => (car.prixParJour)))];


function Catalogue( {page} ) {

  // Add this inside your function App() component body:
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [selectedFuel, setSelectedFuel] = useState("Tous");
  const [filteredCars, setFilteredCars] = useState(STATIC_CARS);
  const [currentPage, setCurrentPage] = useState(1);

  const cardsPerPage = 9;

  const indexOfLastCar = currentPage * cardsPerPage;
  const indexOfFirstCar = indexOfLastCar - cardsPerPage;

  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);
  const totalPages = Math.ceil(filteredCars.length / cardsPerPage);

  const handleFilterSubmit = () => {

    let res = [...STATIC_CARS];

    if (selectedCategory !== "Tous") {
      res = res.filter(car => car.type === selectedCategory);
    }

    if (selectedFuel !== "Tous") {
      res = res.filter(car => car.fuel === selectedFuel);
    }

    setFilteredCars(res);
    setCurrentPage(1);
  };


  if (page === false) {
        return (
            <div className="catalogue-section">
                {/* 1. Main Grid: Limited strictly to 3 elements */}
                <h2 className='catalogue-title'>Take a Look Here ...</h2>
                <div id="cars-container" className="cars-container">
                    {STATIC_CARS.slice(0, 3).map((car, index) => (
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
    <>
      <div>

        <h1>Our Fleet</h1>
        <p>Choose the car that suits your needs</p>

        <div className='filters-container'>

          <select name="Categories" id="categories-select" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            {/* Loop to add the categories automaticTousy */}

            {categories.map((categorie, index) => (
              <option key={index} value={categorie}>
                {categorie}
              </option>
            ))}

          </select>

          {/* <select name="Transmission" id=""> */}
          {/* <option value="Tous" defaultChecked>Tous</option> */}
          {/* Loop to add the transmissions automaticTousy */}
          {/* </select> */}

          <select name="Fuel" id="fuels-selected" value={selectedFuel} onChange={(e) => setSelectedFuel(e.target.value)}>
            {/* Loop to add the Fuels automaticTousy */}

            {fuels.map((fuel, index) => (
              <option key={index} value={fuel}>{fuel}</option>
            ))}

          </select>

          {/* <select name="Seats" id=""> */}
          {/* Loop to add the Seats automaticTousy */}
          {/* </select> */}

          <select name="Price" id="">
            <option value="Tous" defaultChecked>Tous</option>
            {/* Add the price variation */}
          </select>

          <button onClick={handleFilterSubmit}>Filtrer</button>

        </div>

        <div className='cars-list-container'>
          {/* 2. Loop over filteredCars instead of the raw STATIC_CARS array */}
          {currentCars.length > 0 ? (
            currentCars.map((car, index) => (
              <Card
                key={`preview-${car.id || index}`}
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
            ))
          ) : (
            /* FTousback UI if no cars match the selected filters */
            <p className="no-results">Aucune voiture ne correspond à vos critères.</p>
          )}
        </div>

        {/* --- 4. PAGINATION CONTROLS CONTROLLER --- */}
        {totalPages > 1 && (
          <div className="pagination">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              style={{ opacity: currentPage === 1 ? 0.5 : 1, cursor: currentPage === 1 ? 'not-allowed' : 'pointer' }}
            >
              Page précédente
            </button>

            <span className="page-indicator">
              Page <strong>{currentPage}</strong> sur {totalPages}
            </span>

            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              style={{ opacity: currentPage === totalPages ? 0.5 : 1, cursor: currentPage === totalPages ? 'not-allowed' : 'pointer' }}
            >
              Page suivante
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Catalogue;