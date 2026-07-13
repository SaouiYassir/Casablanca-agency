import HeroSection from "./Sections/Hero/Hero";
import Catalogue from "../Catalogue/Catalogue";
import Avis from "./Sections/Avis/Avis";
import Benefits from "./Sections/Benefits/Benefits";
import SEO from "../../Components/SEO/SEO";

function Home() {
    return (
        <>
            <SEO
                title="Location de Voitures à Casablanca"
                description="Louez une voiture à Casablanca en toute simplicité. Casablanca Agency propose des véhicules récents, des tarifs transparents et un service rapide pour vos déplacements au Maroc."
                path="/"
            />
            <main>
                <HeroSection />
                <Catalogue preview />
                <Avis />
                <Benefits />
            </main>
        </>
    )
}

export default Home