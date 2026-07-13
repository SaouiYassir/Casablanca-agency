import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import './ContactForm.css'

const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
}

function ContactForm() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle')

  const sendEmail = async (event) => {
    event.preventDefault()
    if (event.currentTarget.elements.website.value) return
    if (!emailConfig.serviceId || !emailConfig.templateId || !emailConfig.publicKey) {
      setStatus('unconfigured')
      return
    }

    setStatus('pending')
    try {
      await emailjs.sendForm(emailConfig.serviceId, emailConfig.templateId, formRef.current, emailConfig.publicKey)
      formRef.current.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const messages = {
    success: 'Votre message a bien été envoyé.',
    error: 'L’envoi a échoué. Contactez-nous par WhatsApp ou réessayez.',
    unconfigured: 'Le formulaire doit encore être connecté à EmailJS. Utilisez WhatsApp pour le moment.',
  }

  return (
    <form className="form" ref={formRef} onSubmit={sendEmail}>
      <div className="input-group">
        <label htmlFor="from_name">Nom complet</label>
        <input id="from_name" name="from_name" type="text" autoComplete="name" placeholder="Votre nom" required />
      </div>
      <div className="input-group">
        <label htmlFor="from_email">E-mail</label>
        <input id="from_email" name="from_email" type="email" autoComplete="email" placeholder="vous@exemple.com" required />
      </div>
      <div className="input-group">
        <label htmlFor="subject">Sujet</label>
        <input id="subject" name="subject" type="text" placeholder="Objet de votre demande" required />
      </div>
      <div className="input-group message-group">
        <label htmlFor="contact_message">Message</label>
        <textarea id="contact_message" name="message" maxLength="1500" placeholder="Décrivez votre besoin…" required />
      </div>
      <input className="form-honeypot" type="text" name="website" tabIndex="-1" autoComplete="off" aria-hidden="true" />
      <input type="hidden" name="time" value={new Date().toLocaleString('fr-MA')} />
      <button type="submit" disabled={status === 'pending'} className="send-butt">
        {status === 'pending' ? 'Envoi en cours…' : 'Envoyer le message'}
      </button>
      {messages[status] && <p className={`form-status ${status}`} role="status" aria-live="polite">{messages[status]}</p>}
    </form>
  )
}

export default ContactForm
