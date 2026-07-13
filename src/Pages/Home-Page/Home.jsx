import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Catalogue from '../Catalogue/Catalogue.jsx'
import PageMeta from '../../Components/PageMeta/PageMeta.jsx'
import agency, { whatsappUrl } from '../../Config/Agency.js'
import cars from '../../Data/Catalogue.js'
import './Home.css'

const LOCATIONS = [
  { value: 'aeroport', label: 'Aéroport Mohammed V' },
  { value: 'agence', label: 'Agence Casa-Ville' },
  { value: 'hotel', label: 'Livraison à votre hôtel' },
]

const CATEGORIES = [
  { value: '', label: 'Toutes les catégories' },
  { value: 'Citadine', label: 'Citadine' },
  { value: 'Berline', label: 'Berline' },
  { value: 'SUV', label: 'SUV' },
  { value: 'Familiale', label: 'Familiale' },
  { value: 'Utilitaire', label: 'Utilitaire' },
]

const localDateTime = () => {
  const now = new Date()
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset())
  return now.toISOString().slice(0, 16)
}

function Home() {
  const navigate = useNavigate()
  const [lieu, setLieu] = useState(LOCATIONS[0].value)
  const [depart, setDepart] = useState('')
  const [retour, setRetour] = useState('')
  const [categorie, setCategorie] = useState('')
  const [error, setError] = useState('')
  const [minimumDate] = useState(localDateTime)

  const validateDates = () => {
    if (!depart || !retour) {
      setError('Sélectionnez les dates de départ et de retour.')
      return false
    }
    if (new Date(retour) <= new Date(depart)) {
      setError('La date de retour doit être postérieure à la date de départ.')
      return false
    }
    setError('')
    return true
  }

  const searchCars = () => {
    if (!validateDates()) return
    const params = new URLSearchParams({ lieu, depart, retour })
    if (categorie) params.set('categorie', categorie)
    navigate(`/all-cars?${params.toString()}`)
  }

  const openWhatsapp = () => {
    if (!validateDates()) return
    const locationLabel = LOCATIONS.find((location) => location.value === lieu)?.label || lieu
    const message = [
      `Bonjour ${agency.name} ! Je souhaite réserver une voiture.`,
      `Lieu de prise en charge : ${locationLabel}`,
      `Date de départ : ${depart}`,
      `Date de retour : ${retour}`,
      categorie ? `Catégorie souhaitée : ${categorie}` : '',
    ].filter(Boolean).join('\n')
    window.open(whatsappUrl(message), '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <PageMeta path="/" />
      <section className="hero-container">
        <div className="hero-grid">
          <div className="hero-content">
            <span className="hero-eyebrow">Location de voitures à Casablanca</span>
            <h1 className="hero-title">Louez une voiture à Casablanca,<br />sans complications.</h1>
            <p className="hero-sub">Prix transparents, livraison flexible et réservation rapide.</p>

            <div className="booking-widget" aria-label="Rechercher un véhicule">
              <div className="booking-widget-row">
                <div className="booking-field">
                  <label htmlFor="hero-lieu">Lieu de prise en charge</label>
                  <select id="hero-lieu" value={lieu} onChange={(event) => setLieu(event.target.value)}>
                    {LOCATIONS.map((location) => (
                      <option key={location.value} value={location.value}>{location.label}</option>
                    ))}
                  </select>
                </div>
                <div className="booking-field">
                  <label htmlFor="hero-categorie">Catégorie</label>
                  <select id="hero-categorie" value={categorie} onChange={(event) => setCategorie(event.target.value)}>
                    {CATEGORIES.map((category) => (
                      <option key={category.value} value={category.value}>{category.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="booking-widget-row">
                <div className="booking-field">
                  <label htmlFor="hero-depart">Date de départ</label>
                  <input id="hero-depart" type="datetime-local" min={minimumDate} value={depart} onChange={(event) => setDepart(event.target.value)} />
                </div>
                <div className="booking-field">
                  <label htmlFor="hero-retour">Date de retour</label>
                  <input id="hero-retour" type="datetime-local" min={depart || minimumDate} value={retour} onChange={(event) => setRetour(event.target.value)} />
                </div>
              </div>

              {error && <p className="booking-error" role="alert">{error}</p>}
              <button type="button" className="booking-cta" onClick={searchCars}>Voir les voitures disponibles</button>
              <button type="button" className="booking-whatsapp-link" onClick={openWhatsapp}>
                <i className="bi bi-whatsapp" aria-hidden="true" /> Réserver directement via WhatsApp
              </button>
            </div>

            <div className="hero-trust-line">
              <span><i className="bi bi-lightning-charge-fill" aria-hidden="true" /> Réponse rapide</span>
              <span className="hero-trust-dot">·</span>
              <span>{agency.legal.cancellationPolicy}</span>
            </div>
          </div>
          <div className="hero-image" role="img" aria-label="Voiture de location devant la mosquée Hassan II à Casablanca" />
        </div>
      </section>

      <section className="trust-bar" aria-label="Nos engagements">
        <div className="trust-bar-item"><i className="bi bi-shield-check" /><span>Assurance selon le véhicule</span></div>
        <div className="trust-bar-item"><i className="bi bi-car-front" /><span>{cars.length} véhicules dans le catalogue</span></div>
        <div className="trust-bar-item"><i className="bi bi-headset" /><span>Accompagnement avant la prise en charge</span></div>
        <div className="trust-bar-item"><i className="bi bi-geo-alt" /><span>Livraison dans le Grand Casablanca</span></div>
      </section>

      <section id="fleet" aria-label="Sélection de véhicules">
        <Catalogue preview />
      </section>
    </>
  )
}

export default Home
