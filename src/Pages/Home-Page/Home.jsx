import Header from "../../Components/Header/Header";
import './Home.css'

function Home() {
    return (
        <>
            <Header />
            <div className="hero-container">
                <h1>Welcome to Casablanca Location</h1>
                <p>Your trusted partner for car rentals in Casablanca.</p>
            </div>
        </>
    );
}

export default Home;