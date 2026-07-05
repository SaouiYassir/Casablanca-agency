import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './BookingModal.css';

function BookingModal({ isOpen, onClose, car }) {
    const [formData, setFormData] = useState({
        nom: '',
        telephone: '',
        dateDebut: '',
        dateFin: '',
        message: ''
    });

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    if (!isOpen || !car) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const phoneNumber = "212601109965"; // Replace with your client's real phone line number

        const whatsappMessage = encodeURIComponent(
            `Bonjour Casablanca Location ! Je souhaite réserver le véhicule suivant :\n` +
            `- Modèle : ${car.carName} (${car.year || 'N/A'})\n` +
            `- Prix : ${car.prixParJour} DH/jour\n` +
            `- Carburant : ${car.fuel || ''}\n\n` +
            `Mes informations :\n` +
            `- Nom : ${formData.nom}\n` +
            `- Téléphone : ${formData.telephone}\n` +
            `- Date de début : ${formData.dateDebut || 'N/A'}\n` +
            `- Date de fin : ${formData.dateFin || 'N/A'}` +
            (formData.message ? `\n- Message : ${formData.message}` : '')
        );

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

        onClose();
        setFormData({ nom: '', telephone: '', dateDebut: '', dateFin: '', message: '' });
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) onClose();
    };

    return createPortal(
        <div className="booking-modal-overlay" onClick={handleOverlayClick}>
            <div className="booking-modal" role="dialog" aria-modal="true" aria-labelledby="booking-modal-title">
                <button className="booking-modal-close" onClick={onClose} aria-label="Fermer">
                    <i className="bi bi-x-lg"></i>
                </button>

                <div className="booking-modal-header">
                    <h2 id="booking-modal-title">Réserver ce véhicule</h2>
                    <p className="booking-modal-car">
                        {car.carName} <span className="booking-modal-price">{car.prixParJour} DH/jour</span>
                    </p>
                </div>

                <form className="booking-modal-form" onSubmit={handleSubmit}>
                    <div className="booking-form-group">
                        <label htmlFor="nom">Nom complet</label>
                        <input
                            id="nom"
                            name="nom"
                            type="text"
                            required
                            value={formData.nom}
                            onChange={handleChange}
                            placeholder="Votre nom"
                        />
                    </div>

                    <div className="booking-form-group">
                        <label htmlFor="telephone">Téléphone</label>
                        <input
                            id="telephone"
                            name="telephone"
                            type="tel"
                            required
                            value={formData.telephone}
                            onChange={handleChange}
                            placeholder="06 XX XX XX XX"
                        />
                    </div>

                    <div className="booking-form-row">
                        <div className="booking-form-group">
                            <label htmlFor="dateDebut">Date de début</label>
                            <input
                                id="dateDebut"
                                name="dateDebut"
                                type="date"
                                required
                                value={formData.dateDebut}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="booking-form-group">
                            <label htmlFor="dateFin">Date de fin</label>
                            <input
                                id="dateFin"
                                name="dateFin"
                                type="date"
                                required
                                value={formData.dateFin}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="booking-form-group">
                        <label htmlFor="message">Message (optionnel)</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="3"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Précisions sur votre demande..."
                        />
                    </div>

                    <button type="submit" className="booking-form-submit">
                        <i className="bi bi-whatsapp"></i>
                        Envoyer via WhatsApp
                    </button>
                </form>
            </div>
        </div>,
        document.body
    );
}

export default BookingModal;