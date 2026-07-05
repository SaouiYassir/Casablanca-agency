import { useState } from 'react';
import './Home.css';
import Catalogue from "../Catalogue/Catalogue.jsx";

const LOCATIONS = [
    { value: "aeroport", label: "Aéroport Mohammed V" },
    { value: "agence", label: "Agence Casa-Ville" },
    { value: "hotel", label: "Livraison hôtel" },
];

const CATEGORIES = [
    { value: "", label: "Toutes catégories" },
    { value: "Économique", label: "Économique" },
    { value: "Berline", label: "Berline" },
    { value: "SUV", label: "SUV" },
    { value: "Utilitaire", label: "Utilitaire" },
];

function Home() {
    const [lieu, setLieu] = useState(LOCATIONS[0].value);
    const [depart, setDepart] = useState("");
    const [retour, setRetour] = useState("");
    const [categorie, setCategorie] = useState("");

    const scrollToFleet = () => {
        document.getElementById('fleet')?.scrollIntoView({ behavior: 'smooth' });
    };

    const openWhatsapp = () => {
        const phoneNumber = "212601109965"; // Replace with your client's real phone line number
        const lieuLabel = LOCATIONS.find(l => l.value === lieu)?.label || lieu;

        const message = encodeURIComponent(
            `Bonjour Casablanca Location ! Je souhaite réserver une voiture.\n` +
            `- Lieu de prise en charge : ${lieuLabel}\n` +
            `- Date de départ : ${depart || 'À préciser'}\n` +
            `- Date de retour : ${retour || 'À préciser'}` +
            (categorie ? `\n- Catégorie souhaitée : ${categorie}` : '')
        );

        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank', 'noopener,noreferrer');
    };

    return (
        <>
            <section className="hero-container">
                <div className="hero-grid">
                    <div className="hero-content">
                        {/* <span className="hero-eyebrow">Agence à Casablanca · Depuis 2020</span> */}

                        <h1 className="hero-title">
                            Louez une voiture à Casablanca,<br />sans complications.
                        </h1>

                        <p className="hero-sub">
                            Prix transparents, livraison à l'aéroport, assistance 24/7.
                        </p>

                        <div className="booking-widget">
                            <div className="booking-widget-row">
                                <div className="booking-field">
                                    <label htmlFor="hero-lieu">Lieu de prise en charge</label>
                                    <select
                                        id="hero-lieu"
                                        value={lieu}
                                        onChange={(e) => setLieu(e.target.value)}
                                    >
                                        {LOCATIONS.map(l => (
                                            <option key={l.value} value={l.value}>{l.label}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="booking-field">
                                    <label htmlFor="hero-categorie">Catégorie</label>
                                    <select
                                        id="hero-categorie"
                                        value={categorie}
                                        onChange={(e) => setCategorie(e.target.value)}
                                    >
                                        {CATEGORIES.map(c => (
                                            <option key={c.value} value={c.value}>{c.label}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="booking-widget-row">
                                <div className="booking-field">
                                    <label htmlFor="hero-depart">Date de départ</label>
                                    <input
                                        id="hero-depart"
                                        type="datetime-local"
                                        value={depart}
                                        onChange={(e) => setDepart(e.target.value)}
                                    />
                                </div>

                                <div className="booking-field">
                                    <label htmlFor="hero-retour">Date de retour</label>
                                    <input
                                        id="hero-retour"
                                        type="datetime-local"
                                        value={retour}
                                        onChange={(e) => setRetour(e.target.value)}
                                    />
                                </div>
                            </div>

                            <button className="booking-cta" onClick={scrollToFleet}>
                                Voir les voitures disponibles
                            </button>

                            <button className="booking-whatsapp-link" onClick={openWhatsapp}>
                                <i className="bi bi-whatsapp"></i>
                                Réserver directement via WhatsApp
                            </button>
                        </div>

                        <div className="hero-trust-line">
                            <span><i className="bi bi-star-fill"></i> 4.8 (243 avis Google)</span>
                            <span className="hero-trust-dot">·</span>
                            <span>Annulation gratuite 24h</span>
                            <span className="hero-trust-dot">·</span>
                            <span>Kilométrage illimité</span>
                        </div>
                    </div>

                    <div className="hero-image" role="img" aria-label="Voiture de location devant un site emblématique de Casablanca">
                    </div>
                </div>
            </section>

            <section className="trust-bar">
                <div className="trust-bar-item">
                    <i className="bi bi-shield-shaded"></i>
                    <span>Assurance tous risques incluse</span>
                </div>
                <div className="trust-bar-item">
                    <i className="bi bi-car-front"></i>
                    <span>120+ véhicules récents (&lt; 3 ans)</span>
                </div>
                <div className="trust-bar-item">
                    <i className="bi bi-headset"></i>
                    <span>Support 24/7 en FR/EN/AR</span>
                </div>
                <div className="trust-bar-item">
                    <i className="bi bi-geo-alt"></i>
                    <span>Livraison partout au Grand Casablanca</span>
                </div>
            </section>

            <div id="fleet">
                <Catalogue page={false} />
            </div>
        </>
    );
}

export default Home;
