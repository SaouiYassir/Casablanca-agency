import './Home.css'
import Catalogue from "../Catalogue/Catalogue.jsx";

function Home() {
    return (
        <>
        <div className="hero-container"> 
            <div className="hero-cards">
                <span>120+ vehicles</span>
                <span>Best prices</span>
                <span>24/7 support</span>
            </div>
            <div className="hero-content">
                <div className="welcome-part">
                    <h1>Welcome to<br />Casablanca Location</h1>
                    <p>Your trusted partner for car rentals in Casablanca.</p>
                </div>
                <div className="hero-buttons">
                    <button className="explore-btn" onClick={()=> window.open('/all-cars', '_parent')}>Explore The Catalog</button>
                    <button className="contact-btn" onClick={() => window.open('https://wa.me/212601109965', '_blank')}>
                        <i className="bi bi-whatsapp"></i> Reserve Now
                    </button>
                </div>
            </div>
            <div className="explore">
                <p>Explore</p>            
                <i className="bi bi-chevron-down"></i>
            </div>
        </div>
        <Catalogue page={false} />
        <div className="why-us-container">
            <span className="why-us-title">Pourquoi nous choisir</span>
            <div className="why-us-grid">
                <div className="why-us-item">
                    <i className="bi bi-shield-shaded"></i>
                    <span>Assurance incluse</span>
                </div>
                <div className="why-us-item">
                    <i className="bi bi-cash-coin"></i>
                    <span>Sans caution</span>
                </div>
                <div className="why-us-item">
                    <i className="bi bi-whatsapp"></i>
                    <span>Réservation rapide</span>
                </div>
                <div className="why-us-item">
                    <i className="bi bi-headset"></i>
                    <span>Support 24/7</span>
                </div>
            </div>
        </div>
        </>
    );
}

export default Home;