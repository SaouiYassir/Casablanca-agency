import React, { useState, useEffect } from 'react';
import './Header.css'

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (

        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="logo">Casablanca Location</div>
            <nav className="nav">
                <a href="/">Home</a>
                <a href="#about">About</a>
                <a href="/all-cars">Catalogue</a>
                <a href="#contact">Contact</a>
            </nav>


            <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            
            <nav className={`nav ${isOpen ? 'active' : ''}`}>
                <a href="/" onClick={() => setIsOpen(false)}>Home</a>
                <a href="#about" onClick={() => setIsOpen(false)}>About</a>
                <a href="/all-cars" onClick={() => setIsOpen(false)}>Catalogue</a>
                <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
            </nav>
        </header>
    );
}

export default Header;