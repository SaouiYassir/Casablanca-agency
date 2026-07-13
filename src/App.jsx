import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./Components/Header/Header.jsx";
import Home from './Pages/Home-Page/Home.jsx'
import Catalogue from "./Pages/Catalogue/Catalogue.jsx";
import About from './Pages/About/About.jsx';
import Contact from './Pages/Contact/Contact.jsx';
import Footer from './Components/Footer/Footer.jsx';
import './App.css'

function App() {
    return (
        <BrowserRouter>
            <Header />

            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/all-cars" element={<Catalogue />} />
                <Route path='/about' element={<About />}></Route>
                <Route path='/contact' element={<Contact />}></Route>            

            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default App;