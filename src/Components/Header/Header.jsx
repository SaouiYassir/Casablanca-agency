import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        setIsOpen(false);
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };

    return (

        <header className="header">
            <div className="logo" onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}>Casablanca Location</div>
            <nav className="nav-links">
                <Link to="/" onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}>Home</Link>
                <Link to="/about" onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}>About</Link>
                <Link to="/all-cars" onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}>Catalogue</Link>
                <Link to="/contact" onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}>Contact</Link>
            </nav>

            <div className="header-actions">
                <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>

            <nav className={`nav ${isOpen ? 'active' : ''}`}>
                <Link to="/" onClick={handleLinkClick}>Home</Link>
                <Link to="/about" onClick={handleLinkClick}>About</Link>
                <Link to="/all-cars" onClick={handleLinkClick}>Catalogue</Link>
                <Link to="/contact" onClick={handleLinkClick}>Contact</Link>     
            </nav>
        </header>
    );
}

export default Header;