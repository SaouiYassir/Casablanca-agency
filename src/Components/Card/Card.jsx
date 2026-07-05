import { useState } from 'react';
import './Card.css';
import BookingModal from '../BookingModal/BookingModal.jsx';

function Card({ id, marque, modèle, year, status, prixParJour, type, fuel, image, transmission }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const getStatusClass = (statusString) => {
        if (!statusString) return 'available';
        const s = statusString.toLowerCase().trim();
        if (s.includes('lou') || s.includes('rent')) return 'rented';
        if (s.includes('maint')) return 'maintenance';
        return 'available';
    };

    const statusClass = getStatusClass(status);
    const carName = `${marque || ''} ${modèle || ''}`.trim() || "Véhicule Premium";
    const isUnavailable = statusClass !== 'available';

    return (
        <div className="car-rental-card" data-id={id}>
            {/* Photo */}
            <div className="card-image-wrapper">
                {image ? (
                    <img src={image} alt={carName} className="card-image" loading="lazy" />
                ) : (
                    <div className="card-image-placeholder">
                        <i className="bi bi-car-front"></i>
                    </div>
                )}
            </div>

            <div className="card-badge-row">
                <span className="car-category-tag">{type || 'Économique'}</span>
                <span className={`car-status-pill ${statusClass}`}>
                    {status || 'Disponible'}
                </span>
            </div>

            <div className="card-main-info">
                <h3 className="car-title">{carName}</h3>
                <span className="car-year">{year || '2023'}</span>
            </div>

            <div className="car-specs-row">
                <div className="spec-item">
                    <i className="bi bi-fuel-pump"></i>
                    <span>{fuel || 'Essence'}</span>
                </div>
                {transmission && (
                    <div className="spec-item">
                        <i className="bi bi-gear"></i>
                        <span>{transmission}</span>
                    </div>
                )}
            </div>

            <hr className="card-divider" />

            <div className="card-footer-row">
                <div className="price-box">
                    <span className="price-amount">{prixParJour} DH</span>
                    <span className="price-unit">/ jour</span>
                </div>

                {isUnavailable ? (
                    <span className="card-book-btn card-book-btn-disabled" aria-disabled="true">
                        Indisponible
                    </span>
                ) : (
                    <button
                        className="card-book-btn"
                        onClick={() => setIsModalOpen(true)}
                    >
                        Réserver
                    </button>
                )}
            </div>

            <BookingModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                car={{ carName, year, prixParJour, fuel }}
            />
        </div>
    );
}

export default Card;