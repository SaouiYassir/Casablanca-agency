import './Home.css'

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
        </>
    );
}

export default Home;