import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Components/Header/Header.jsx";
import Home from './Pages/Home-Page/Home.jsx'
import Catalogue from "./Pages/Catalogue/Catalogue.jsx";
import './App.css'
import About from './Pages/About/About.jsx';
import Contact from './Pages/Contact/Contact.jsx';
import Footer from './Components/Footer/Footer.jsx';

function App() {
    return (
        <Router>
            <div className="app-layout">
                <Header />
                <main className="app-main">
                    <Routes>
                        <Route path="/" element={
                            <>
                                <Home />                        
                            </>
                        } />

                        <Route path="/all-cars" element={
                            <div style={{ paddingTop: '120px' }}>
                                <Catalogue page={true} />
                            </div>
                        } />

                        <Route path='/about' element={
                            <>
                                <About />
                            </>
                        } />

                        <Route path='/contact' element={
                            <>
                                <Contact />
                            </>
                        } />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;