import ContactForm from '../../Components/Form/ContactForm.jsx'
import agency from '../../Config/Agency.js';
import SEO from '../../Components/SEO/SEO.jsx';
import "./Contact.css";


function Contact() {

    return (

        <>
            <SEO
                title="Contact"
                description="Contactez Casablanca Agency pour réserver un véhicule ou obtenir un devis personnalisé. Notre équipe est à votre disposition pour répondre à toutes vos questions."
                path="/contact"
            />
            <main className="contact-page">


                <section className="contact-header">

                    <div className="contact-header__eyebrow">
                        <span className="eyebrow-dot" aria-hidden="true"></span>
                        Contact
                    </div>

                    <h1>
                        Parlons de votre <em>prochaine location</em>
                    </h1>

                    <p>
                        Une question ? Une demande particulière ?
                        Notre équipe est disponible pour vous accompagner.
                    </p>

                </section>


                <div className="contact-divider" role="presentation">
                    <svg viewBox="0 0 400 20" preserveAspectRatio="none">
                        <polyline points="0,10 20,2 40,18 60,2 80,18 100,2 120,18 140,2 160,18 180,2 200,18 220,2 240,18 260,2 280,18 300,2 320,18 340,2 360,18 380,2 400,10" />
                    </svg>
                </div>


                <section className="contact-content">


                    <div className="contact-channels">

                        <a
                            href={`https://wa.me/${agency.whatsapp}`}
                            target="_blank"
                            rel="noreferrer"
                            className="channel-card channel-card--featured"
                        >
                            <span className="channel-card__badge">
                                <span className="pulse-dot" aria-hidden="true"></span>
                                Réponse la plus rapide
                            </span>

                            <i className="bi bi-whatsapp" aria-hidden="true"></i>

                            <h3>
                                WhatsApp
                            </h3>

                            <p>
                                Réponse rapide pour vos demandes
                            </p>
                        </a>


                        <div className="channel-card">

                            <i className="bi bi-telephone" aria-hidden="true"></i>

                            <h3>
                                Téléphone
                            </h3>

                            <p>
                                {agency.phoneDisplay}
                            </p>

                        </div>


                        <div className="channel-card">

                            <i className="bi bi-envelope" aria-hidden="true"></i>

                            <h3>
                                Email
                            </h3>

                            <p>
                                contact@casablanca-location.ma
                            </p>

                        </div>

                    </div>


                    <ContactForm />


                </section>


                <section className="contact-map">
                    <div className="contact-map__frame">
                        <iframe
                            title="Localisation Casablanca Location"
                            src="https://maps.google.com/maps?q=Boulevard%20de%20la%20Corniche%2C%20Casablanca%2C%20Maroc&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="strict-origin-when-cross-origin"
                        ></iframe>
                    </div>
                </section>


            </main>
        </>

    )

}


export default Contact;