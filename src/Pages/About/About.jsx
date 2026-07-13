import { Link } from 'react-router-dom'
import PageMeta from '../../Components/PageMeta/PageMeta.jsx'
import agency, { fullAddress } from '../../Config/Agency.js'
import cars from '../../Data/Catalogue.js'
import './About.css'

function About() {
  const availableCars = cars.filter((car) => car.status === 'Disponible').length
  const legalDetails = [
    agency.legal.rc && { label: 'RC', value: agency.legal.rc },
    agency.legal.ice && { label: 'ICE', value: agency.legal.ice },
    { label: 'Adresse', value: fullAddress },
  ].filter(Boolean)

  return (
    <div className="about-page">
      <PageMeta title="À propos" description={`Découvrez ${agency.name}, service de location de voitures à Casablanca.`} path="/about" />
      <div className="about-hero">
        <span className="section-label">Notre agence</span>
        <h1>Une location plus simple et plus humaine</h1>
      </div>
      <div className="about-grid">
        <div className="about-story">
          <span className="section-label">Notre approche</span>
          <p>Nous aidons les voyageurs et habitants de Casablanca à trouver un véhicule adapté, avec des informations claires et un échange direct avant la réservation. Notre priorité : une prise en charge fluide, sans promesse ambiguë ni frais cachés.</p>
        </div>
        <div className="about-stats">
          <div className="stat-item"><span className="stat-number">{cars.length}</span><span className="stat-label">Véhicules référencés</span></div>
          <div className="stat-item"><span className="stat-number">{availableCars}</span><span className="stat-label">Disponibles actuellement</span></div>
          <div className="stat-item"><span className="stat-number">7j/7</span><span className="stat-label">Demandes en ligne</span></div>
        </div>
      </div>
      <div className="about-why">
        <h2>Pourquoi nous choisir</h2>
        <div className="why-grid">
          <div className="why-card"><span className="why-title">Informations claires</span><p>Tarifs indicatifs, statut et caractéristiques visibles avant la demande.</p></div>
          <div className="why-card"><span className="why-title">Échange direct</span><p>Votre demande arrive sur WhatsApp avec toutes les informations utiles.</p></div>
          <div className="why-card"><span className="why-title">Service local</span><p>Prise en charge adaptée à Casablanca, à l’aéroport ou à votre hôtel.</p></div>
        </div>
      </div>
      <div className="about-legal">
        {legalDetails.map((detail) => (
          <div className="about-legal-item" key={detail.label}><span className="about-legal-label">{detail.label}</span><span className="about-legal-value">{detail.value}</span></div>
        ))}
      </div>
      <div className="about-cta">
        <div className="cta-text"><span className="cta-title">Prêt à prendre la route ?</span><span className="cta-subtitle">Découvrez la flotte et envoyez votre demande en quelques clics.</span></div>
        <Link className="cta-btn" to="/all-cars">Voir le catalogue</Link>
      </div>
    </div>
  )
}

export default About
