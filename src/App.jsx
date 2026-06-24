import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Components/Header/Header.jsx";
import Home from './Pages/Home-Page/Home.jsx'
import Catalogue from "./Pages/Catalogue/Catalogue.jsx";
import './App.css'
import About from './Pages/About/About.jsx';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={
                    <>
                        <Home />
                        <Catalogue page={false} />
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
            </Routes>
        </Router>
    );
}

export default App;