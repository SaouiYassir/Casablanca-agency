import React, { useState, useEffect } from 'react';
import './Header.css'

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [lang, setLang] = useState('FR');

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

    // Visual toggle only for now — swap this for real i18next locale
    // switching + /en/ routing once the bilingual dictionaries are wired up.
    const toggleLang = () => {
        setLang(prev => (prev === 'FR' ? 'EN' : 'FR'));
    };

    return (

        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="logo">Casablanca Location</div>
            <nav className="nav-links">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/all-cars">Catalogue</a>
                <a href="/contact">Contact</a>
            </nav>

            <div className="header-actions">
                <button className="lang-toggle" onClick={toggleLang} aria-label="Changer de langue">
                    {lang}
                </button>

                <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>

            <nav className={`nav ${isOpen ? 'active' : ''}`}>
                <a href="/" onClick={() => setIsOpen(false)}>Home</a>
                <a href="/about" onClick={() => setIsOpen(false)}>About</a>
                <a href="/all-cars" onClick={() => setIsOpen(false)}>Catalogue</a>
                <a href="/contact" onClick={() => setIsOpen(false)}>Contact</a>
                <button className="lang-toggle lang-toggle-mobile" onClick={toggleLang}>
                    {lang === 'FR' ? 'Switch to EN' : 'Passer en FR'}
                </button>
            </nav>
        </header>
    );
}

export default Header;