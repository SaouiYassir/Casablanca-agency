import { Link } from 'react-router-dom'
import './Hero.css'
import heroBackground from '../../../../../public/hero-background.webp'
import agency from '../../../../Config/Agency'

const dailyPrice = 250;

function HeroSection() {

  const whatsappMessage = encodeURIComponent(
    `Bonjour, je souhaite louer une voiture à ${agency.address.city}. Pouvez-vous me renseigner sur les véhicules disponibles ?`,
  )

  return (
    <section className="home-hero" aria-labelledby="hero-title">
      <div className="home-hero__glow home-hero__glow--one" />
      <div className="home-hero__glow home-hero__glow--two" />

      <div className="home-hero__container">
        <div className="home-hero__grid">
          <div className="home-hero__content">
            <div className="home-hero__eyebrow">
              <span className="home-hero__eyebrow-icon"><i className="bi bi-geo-alt-fill"></i></span>
              Location de voitures à {agency.address.city}
            </div>

            <h1 id="hero-title">
              La route commence avec <em>le bon choix.</em>
            </h1>

            <p className="home-hero__intro">
              Des véhicules fiables, des tarifs clairs et une équipe locale disponible pour vous accompagner
              dès votre arrivée au Maroc.
            </p>

            <div className="home-hero__actions">
              <Link to='/all-cars' className="hero-button hero-button--primary">
                Voir les véhicules
                <i className="bi bi-arrow-right"></i>
              </Link>
              {agency.whatsapp ? (
                <a
                  className="hero-button hero-button--whatsapp"
                  href={`https://wa.me/${agency.whatsapp}?text=${whatsappMessage}`}
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="bi bi-whatsapp"></i>
                  Réserver sur WhatsApp
                </a>
              ) : (
                <Link to='/contact' className="hero-button hero-button--whatsapp">
                  <i className="bi bi-telephone-fill"></i>
                  Nous contacter
                </Link>
              )}
            </div>

            <ul className="home-hero__proof" aria-label="Nos engagements">
              <li><i className="bi bi-shield-check"></i><span><strong>Tarifs transparents</strong>Sans frais cachés</span></li>
              <li><i className="bi bi-send"></i><span><strong>Livraison flexible</strong>Aéroport ou hôtel</span></li>
              <li><i className="bi bi-check2"></i><span><strong>Contact direct</strong>Avec l’agence</span></li>
            </ul>
          </div>

          <div className="home-hero__visual">
            <div className="home-hero__image-frame">
              <img
                alt="SUV de location sur une route marocaine au coucher du soleil"
                className="home-hero__image"
                src={heroBackground}
              />

              <div className="home-hero__available">
                <span className="home-hero__pulse" />
                Disponibilité à confirmer
              </div>

              {dailyPrice ? (
                <div className="home-hero__price-card">
                  <span>À partir de</span>
                  <strong>{dailyPrice} MAD</strong>
                  <small>/ jour</small>
                </div>
              ) : (
                <div className="home-hero__price-card home-hero__price-card--message">
                  <span>Avant de réserver</span>
                  <strong>Tarif confirmé</strong>
                </div>
              )}
            </div>
            <span className="home-hero__stamp" aria-hidden="true">CASA · MAROC</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection