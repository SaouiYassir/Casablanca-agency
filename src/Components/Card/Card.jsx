import { useState } from 'react';
import './Card.css';
import BookingModal from '../BookingModal/BookingModal.jsx';

function Card({
    id,
    marque,
    modèle,
    year,
    status,
    prixParJour,
    type,
    fuel,
    image,
    transmission,
    rating,
    seats,
    luggage,
    ac,
    bookingContext
}) {
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

    // Fallbacks so the new layout renders sensibly until STATIC_CARS has
    // real values for every car — replace these once the data model is updated.
    const displayTransmission = transmission || 'Manuelle';
    const displaySeats = seats ?? 5;
    const displayLuggage = luggage ?? 2;
    const hasAc = ac ?? true;

    return (
        <div className="car-rental-card" data-id={id}>
            {/* Photo */}
            <div className="card-image-wrapper">
                {image ? (
                    <img src={image} alt={carName} className="card-image" loading="lazy" width="500" height="300" />
                ) : (
                    <div className="card-image-placeholder">
                        <i className="bi bi-car-front"></i>
                    </div>
                )}

                <span className={`card-status-pill ${statusClass}`}>
                    {status || 'Disponible'}
                </span>

                {rating && (
                    <span className="card-rating-badge">
                        <i className="bi bi-star-fill"></i>
                        {rating.toFixed(1)}
                    </span>
                )}
            </div>

            {/* Main Information */}
            <div className="card-main-info">
                <h3 className="car-title">{carName}</h3>
                <span className="car-meta-line">
                    {type || 'Économique'} · {fuel || 'Essence'} · {displayTransmission}
                </span>
            </div>

            {/* Specs row: seats / luggage / AC */}
            <div className="car-specs-row">
                <div className="spec-item">
                    <i className="bi bi-people"></i>
                    <span>{displaySeats}</span>
                </div>
                <div className="spec-item">
                    <i className="bi bi-suitcase"></i>
                    <span>{displayLuggage}</span>
                </div>
                {hasAc && (
                    <div className="spec-item">
                        <i className="bi bi-snow"></i>
                        <span>Clim</span>
                    </div>
                )}
            </div>

            <hr className="card-divider" />

            {/* Price & Primary Action */}
            <div className="card-footer-row">
                <div className="price-box">
                    <span className="price-label">À partir de</span>
                    <span className="price-amount">
                        {prixParJour} DH <span className="price-unit">/ jour</span>
                    </span>
                </div>

                {isUnavailable ? (
                    <span className="card-book-btn card-book-btn-disabled" aria-disabled="true">
                        Indisponible
                    </span>
                ) : (
                    <button
                        type="button"
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
                initialBooking={bookingContext}
            />
        </div>
    );
}

export default Card;
