import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Components/Header/Header.jsx";
import Home from './Pages/Home-Page/Home.jsx'
import Catalogue from "./Pages/Catalogue/Catalogue.jsx";
import './App.css'

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
                        <h1 style={{ textAlign: 'center', fontFamily: 'Roboto Mono' }}>Cars Catalogue</h1>
                        <Catalogue page={true} />
                    </div>
                } />
            </Routes>
        </Router>
    );
}

export default App;