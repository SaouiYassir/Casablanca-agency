import { Link } from 'react-router-dom'
import agency, { fullAddress, whatsappUrl } from '../../Config/Agency.js'
import './Footer.css'

const socialIcons = {
  instagram: 'bi-instagram',
  facebook: 'bi-facebook',
  tiktok: 'bi-tiktok',
}

function Footer() {
  const configuredSocials = Object.entries(agency.socials).filter(([, url]) => url)

  return (
    <footer className="footer-container">
      <div className="footer-columns">
        <div className="footer-col">
          <h2>Contact</h2>
          <p>{fullAddress}</p>
          <a href={`tel:${agency.phoneHref}`}>{agency.phoneDisplay}</a>
          <a href={whatsappUrl()} target="_blank" rel="noreferrer">WhatsApp</a>
          <a href={`mailto:${agency.email}`}>{agency.email}</a>
        </div>

        <div className="footer-col">
          <h2>Liens utiles</h2>
          <Link to="/all-cars">Catalogue et tarifs</Link>
          <Link to="/conditions">Conditions générales</Link>
          <Link to="/mentions-legales">Mentions légales</Link>
          <Link to="/confidentialite">Confidentialité</Link>
        </div>

        <div className="footer-col">
          <h2>Informations</h2>
          <p>{agency.hours}</p>
          <p>Réservation rapide par WhatsApp</p>
          {configuredSocials.length > 0 && (
            <div className="footer-socials">
              {configuredSocials.map(([network, url]) => (
                <a key={network} href={url} target="_blank" rel="noreferrer" aria-label={network}>
                  <i className={`bi ${socialIcons[network]}`} />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {agency.name}. Tous droits réservés.</span>
      </div>
    </footer>
  )
}

export default Footer
