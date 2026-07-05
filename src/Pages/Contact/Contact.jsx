import './Contact.css'
import ContactForm from '../../Components/Form/ContactForm';
import React from 'react';

function Contact() {
    return (
        <div className="contact-page">
            <div className="contact-header">
                <h2>Contactez-nous</h2>
                <p>Une question, une reservation ? Ecrivez-nous ou contactez-nous directement.</p>
            </div>

            <div className="contact-grid">
                <div className="contact-info">
                    <div className="info-list">
                        <div className="info-item">
                            <span className="info-label">Adresse</span>
                            <span className="info-value">Boulevard de la Corniche,<br />Casablanca</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Telephone</span>
                            <span className="info-value">+212 6 00 00 00 00</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Email</span>
                            <span className="info-value">contact@casablancalocation.ma</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Horaires</span>
                            <span className="info-value">Lun - Dim : 8h - 22h</span>
                        </div>
                    </div>

                    <button className="whatsapp-btn" onClick={() => window.open('https://wa.me/212601109965', '_blank')}>Discuter sur WhatsApp</button>
                </div>

                <div className="contact-form-wrapper">
                    <ContactForm />
                </div>
            </div>

            <div className="contact-map">
                <iframe
                    title="Localisation Casablanca Location"
                    src="https://maps.google.com/maps?q=Boulevard%20de%20la%20Corniche%2C%20Casablanca%2C%20Maroc&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
            </div>
        </div>
    );
}

export default Contact