import HeroSection from "./Sections/Hero/Hero";
import Catalogue from "../Catalogue/Catalogue";

function Home() {
    return(
        <>
            <main>
                <HeroSection />
                <Catalogue preview />
            </main>
        </>
    )
}

export default Home