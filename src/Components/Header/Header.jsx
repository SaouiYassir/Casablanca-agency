import React, { useState, useEffect } from 'react';
import './Header.css'

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

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

    return (
    
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="logo">Casablanca Location</div>
            <nav className="nav">
                <a href="/">Home</a>
                <a href="#about">About</a>
                <a href="/all-cars">Catalogue</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
}

export default Header;