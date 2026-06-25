import { Link } from 'react-router-dom';
import './About.css'
import React from 'react';

function About() {
    return (
        <div className="about-page">

            <div className="about-hero">
                <h2>A propos de nous</h2>
            </div>

            <div className="about-grid">
                <div className="about-story">
                    <span className="section-label">Notre histoire</span>
                    <p>
                        Depuis nos debuts, Casablanca Location accompagne les voyageurs
                        et habitants de Casablanca avec une flotte fiable, des prix
                        transparents et un service disponible a tout moment. Notre
                        objectif est simple : vous offrir une experience de location
                        simple, rapide et sans mauvaise surprise.
                    </p>
                </div>

                <div className="about-stats">
                    <div className="stat-item">
                        <span className="stat-number">120+</span>
                        <span className="stat-label">Vehicules</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">5000+</span>
                        <span className="stat-label">Clients satisfaits</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">24/7</span>
                        <span className="stat-label">Support disponible</span>
                    </div>
                </div>
            </div>

            <div className="about-why">
                <h3>Pourquoi nous choisir</h3>

                <div className="why-grid">
                    <div className="why-card">
                        <span className="why-title">Fiabilite</span>
                        <p>Vehicules entretenus regulierement et controles avant chaque depart.</p>
                    </div>
                    <div className="why-card">
                        <span className="why-title">Prix justes</span>
                        <p>Tarifs clairs, affiches a l'avance, sans frais caches.</p>
                    </div>
                    <div className="why-card">
                        <span className="why-title">Reservation rapide</span>
                        <p>Reservez directement via WhatsApp en quelques minutes.</p>
                    </div>
                </div>
            </div>

            <div className="about-cta">
                <div className="cta-text">
                    <span className="cta-title">Pret a prendre la route ?</span>
                    <span className="cta-subtitle">Decouvrez notre catalogue et reservez en quelques clics.</span>
                </div>
                {/* <Link to="/all-cars">
                    <button className="cta-btn">Voir le catalogue</button>
                </Link> */}
                <button className="cta-btn" onClick={() => window.open('/all-cars', '_parent')}>Voir le catalogue</button>
            </div>

        </div>
    );
}

export default About