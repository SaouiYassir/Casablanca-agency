import HeroSection from "./Sections/Hero/Hero";
import Catalogue from "../Catalogue/Catalogue";
import Avis from "./Sections/Avis/Avis";

function Home() {
    return (
        <>
            <main>
                <HeroSection />
                <Catalogue preview />
                <Avis />
            </main>
        </>
    )
}

export default Home