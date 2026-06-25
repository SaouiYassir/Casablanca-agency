import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('pending');

    emailjs.sendForm(
      'service_t3kgw2g',
      'template_5s7byy3',
      form.current,
      'shAkDUqexRq2d1Kz2'
    )
    .then(() => {
        setStatus('success');
        form.current.reset();
        setTimeout(() => setStatus(''), 5000);
    }, (error) => {
        console.error('EmailJS Error:', error.text);
        setStatus('error');
    });
  };

  const statusMessages = {
    pending: 'Envoi en cours...',
    success: 'Message envoye avec succes !',
    error: 'Echec de l\'envoi. Veuillez reessayer.',
  };

  return (
    <div id='ContactForm'>
      <form className='form' ref={form} onSubmit={sendEmail}>

        <div className='input-group'>
          <label htmlFor="from_name">Nom Complet</label>
          <input id="from_name" placeholder='Votre Nom' type="text" name="from_name" required />
        </div>

        <div className='input-group'>
          <label htmlFor="from_email">Email</label>
          <input
            id="from_email"
            type="email"
            name="from_email"
            placeholder='vous@gmail.com'
            required
          />
        </div>

        <div className='input-group message-group'>
          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder='Decrivez votre besoin ...' name="message" required />
        </div>

        <input type="hidden" name="time" value={new Date().toLocaleString()} />

        <button
          type="submit"
          disabled={status === 'pending'}
          className='send-butt'
        >
          {status === 'pending' ? 'Envoi en cours...' : 'Envoyer le message'}
        </button>

        {status && (
          <p className={`form-status ${status}`}>
            {statusMessages[status]}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;