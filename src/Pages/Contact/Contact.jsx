import ContactForm from '../../Components/Form/ContactForm.jsx'
import PageMeta from '../../Components/PageMeta/PageMeta.jsx'
import agency, { fullAddress, whatsappUrl } from '../../Config/Agency.js'
import './Contact.css'

function Contact() {
  return (
    <div className="contact-page">
      <PageMeta title="Contact" description={`Contactez ${agency.name} pour votre location de voiture à Casablanca.`} path="/contact" />
      <div className="contact-header">
        <span className="section-label">Nous contacter</span>
        <h1>Parlons de votre trajet</h1>
        <p>Une question ou une demande particulière ? Écrivez-nous ou passez directement par WhatsApp.</p>
      </div>
      <div className="contact-grid">
        <div className="contact-info">
          <div className="info-list">
            <div className="info-item"><span className="info-label">Adresse</span><span className="info-value">{fullAddress}</span></div>
            <div className="info-item"><span className="info-label">Téléphone</span><a className="info-value" href={`tel:${agency.phoneHref}`}>{agency.phoneDisplay}</a></div>
            <div className="info-item"><span className="info-label">E-mail</span><a className="info-value" href={`mailto:${agency.email}`}>{agency.email}</a></div>
            <div className="info-item"><span className="info-label">Horaires</span><span className="info-value">{agency.hours}</span></div>
          </div>
          <a className="whatsapp-btn" href={whatsappUrl()} target="_blank" rel="noreferrer">Discuter sur WhatsApp</a>
        </div>
        <div className="contact-form-wrapper"><ContactForm /></div>
      </div>
      <div className="contact-map">
        <iframe title={`Localisation de ${agency.name}`} src={agency.address.mapEmbedUrl} width="100%" height="350" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin" />
      </div>
    </div>
  )
}

export default Contact
