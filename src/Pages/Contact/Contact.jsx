import ContactForm from '../../Components/Form/ContactForm.jsx'
import "./Contact.css";


function Contact() {

    return (

        <main className="contact-page">


            <section className="contact-header">

                <span>
                    Contact
                </span>


                <h1>
                    Parlons de votre prochaine location
                </h1>


                <p>
                    Une question ? Une demande particulière ?
                    Notre équipe est disponible pour vous accompagner.
                </p>

            </section>




            <section className="contact-content">


                <div className="contact-info">


                    <div>
                        <i className="bi bi-whatsapp"></i>

                        <h3>
                            WhatsApp
                        </h3>

                        <p>
                            Réponse rapide pour vos demandes
                        </p>

                    </div>



                    <div>
                        <i className="bi bi-telephone"></i>

                        <h3>
                            Téléphone
                        </h3>

                        <p>
                            +212 XX XX XX XX
                        </p>

                    </div>



                    <div>
                        <i className="bi bi-envelope"></i>

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


        </main>

    )

}


export default Contact;