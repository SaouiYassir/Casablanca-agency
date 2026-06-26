import './Footer.css'

function Footer() {
    return(
        <>
            <div className="footer-container">
                <span>Copyright &copy; {new Date().getFullYear()} Casablanca Location | Designed by Yassir SAOUI</span>
                <div className="footer-socials">
                    <a href="https://wa.me/212601109965" target="_blank" rel="noreferrer"><i className="bi bi-whatsapp"></i></a>
                    <a href="https://instagram.com/" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a>
                    <a href="mailto:contact@casablancalocation.com"><i className="bi bi-envelope-at"></i></a>
                </div>
            </div>
        </>
    );
}

export default Footer