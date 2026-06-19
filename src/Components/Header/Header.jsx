import './Header.css'

function Header() {
    return (
        <header className="header">
            <div className="logo">Casablanca Location</div>
            <div className="nav">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Catalogue</a>
                <a href="">Contact</a>
            </div>
        </header>
    );
}

export default Header;