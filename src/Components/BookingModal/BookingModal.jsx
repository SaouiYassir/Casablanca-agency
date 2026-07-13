import { useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import agency, { whatsappUrl } from '../../Config/Agency.js'
import './BookingModal.css'

const emptyForm = (initial = {}) => ({
  nom: '',
  telephone: '',
  dateDebut: initial.dateDebut?.slice(0, 10) || '',
  dateFin: initial.dateFin?.slice(0, 10) || '',
  message: '',
})

function BookingModal({ isOpen, onClose, car, initialBooking = {} }) {
  const [formData, setFormData] = useState(() => emptyForm(initialBooking))
  const [error, setError] = useState('')
  const titleId = useId()
  const fieldPrefix = useId()
  const modalRef = useRef(null)
  const closeRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return undefined
    const previousOverflow = document.body.style.overflow
    const previouslyFocused = document.activeElement
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key !== 'Tab' || !modalRef.current) return

      const focusable = [...modalRef.current.querySelectorAll('button, input, textarea, select, a[href]')]
        .filter((element) => !element.disabled)
      if (!focusable.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
      previouslyFocused?.focus?.()
    }
  }, [isOpen, onClose])

  if (!isOpen || !car) return null

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (new Date(formData.dateFin) <= new Date(formData.dateDebut)) {
      setError('La date de fin doit être postérieure à la date de début.')
      return
    }

    const message = [
      `Bonjour ${agency.name} ! Je souhaite réserver ce véhicule :`,
      `Modèle : ${car.carName} (${car.year || 'année à confirmer'})`,
      `Prix indicatif : ${car.prixParJour} DH/jour`,
      `Carburant : ${car.fuel || 'à confirmer'}`,
      initialBooking.lieu ? `Lieu : ${initialBooking.lieu}` : '',
      '',
      `Nom : ${formData.nom}`,
      `Téléphone : ${formData.telephone}`,
      `Date de début : ${formData.dateDebut}`,
      `Date de fin : ${formData.dateFin}`,
      formData.message ? `Message : ${formData.message}` : '',
    ].filter((line) => line !== '').join('\n')

    window.open(whatsappUrl(message), '_blank', 'noopener,noreferrer')
    setFormData(emptyForm(initialBooking))
    setError('')
    onClose()
  }

  return createPortal(
    <div className="booking-modal-overlay" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div ref={modalRef} className="booking-modal" role="dialog" aria-modal="true" aria-labelledby={titleId}>
        <button ref={closeRef} type="button" className="booking-modal-close" onClick={onClose} aria-label="Fermer la fenêtre">
          <i className="bi bi-x-lg" aria-hidden="true" />
        </button>
        <div className="booking-modal-header">
          <h2 id={titleId}>Réserver ce véhicule</h2>
          <p className="booking-modal-car">{car.carName} <span className="booking-modal-price">{car.prixParJour} DH/jour</span></p>
        </div>

        <form className="booking-modal-form" onSubmit={handleSubmit}>
          <div className="booking-form-group">
            <label htmlFor={`${fieldPrefix}-nom`}>Nom complet</label>
            <input id={`${fieldPrefix}-nom`} name="nom" type="text" autoComplete="name" required value={formData.nom} onChange={handleChange} placeholder="Votre nom" />
          </div>
          <div className="booking-form-group">
            <label htmlFor={`${fieldPrefix}-telephone`}>Téléphone</label>
            <input id={`${fieldPrefix}-telephone`} name="telephone" type="tel" autoComplete="tel" inputMode="tel" required pattern="[+0-9 ()-]{8,20}" value={formData.telephone} onChange={handleChange} placeholder="06 XX XX XX XX" />
          </div>
          <div className="booking-form-row">
            <div className="booking-form-group">
              <label htmlFor={`${fieldPrefix}-debut`}>Date de début</label>
              <input id={`${fieldPrefix}-debut`} name="dateDebut" type="date" required value={formData.dateDebut} onChange={handleChange} />
            </div>
            <div className="booking-form-group">
              <label htmlFor={`${fieldPrefix}-fin`}>Date de fin</label>
              <input id={`${fieldPrefix}-fin`} name="dateFin" type="date" min={formData.dateDebut} required value={formData.dateFin} onChange={handleChange} />
            </div>
          </div>
          <div className="booking-form-group">
            <label htmlFor={`${fieldPrefix}-message`}>Message (optionnel)</label>
            <textarea id={`${fieldPrefix}-message`} name="message" rows="3" maxLength="500" value={formData.message} onChange={handleChange} placeholder="Précisions sur votre demande…" />
          </div>
          {error && <p className="booking-form-error" role="alert">{error}</p>}
          <button type="submit" className="booking-form-submit"><i className="bi bi-whatsapp" aria-hidden="true" /> Envoyer via WhatsApp</button>
        </form>
      </div>
    </div>,
    document.body,
  )
}

export default BookingModal
