import { useState } from 'react';
import './Footer.css'

function Footer() {
    const [lang, setLang] = useState('FR');

    return (
        <div className="footer-container">
            <div className="footer-columns">
                <div className="footer-col">
                    <h4>Contact</h4>
                    <p>Casablanca, Maroc</p>
                    <a href="tel:+212601109965">+212 6 01 10 99 65</a>
                    <a href="https://wa.me/212601109965" target="_blank" rel="noreferrer">WhatsApp</a>
                    <a href="mailto:contact@casablancalocation.com">contact@casablancalocation.com</a>
                </div>

                <div className="footer-col">
                    <h4>Liens</h4>
                    <a href="/all-cars">Flotte</a>
                    <a href="/all-cars">Tarifs</a>
                    <a href="/conditions">Conditions générales</a>
                    <a href="/mentions-legales">Mentions légales</a>
                </div>

                <div className="footer-col">
                    <h4>Suivez-nous</h4>
                    <div className="footer-socials">
                        <a href="https://instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
                        <a href="https://facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
                        <a href="https://tiktok.com/" target="_blank" rel="noreferrer" aria-label="TikTok"><i className="bi bi-tiktok"></i></a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <span>© {new Date().getFullYear()} Casablanca Location</span>
            </div>
        </div>
    );
}

export default Footer