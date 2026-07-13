import HeroSection from "./Sections/Hero/Hero";
import Catalogue from "../Catalogue/Catalogue";
import Avis from "./Sections/Avis/Avis";
import Benefits from "./Sections/Benefits/Benefits";

function Home() {
    return (
        <>
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