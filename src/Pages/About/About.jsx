import "./About.css";


const values = [
    {
        icon: "bi bi-key-fill",
        title: "Une flotte adaptée",
        text: "Des véhicules sélectionnés pour répondre aux besoins des voyageurs, des familles et des professionnels."
    },
    {
        icon: "bi bi-shield-check",
        title: "Une expérience simple",
        text: "Une réservation claire, un accompagnement personnalisé et aucune étape inutile."
    },
    {
        icon: "bi bi-headset",
        title: "Un accompagnement disponible",
        text: "Notre équipe reste à votre écoute pour faciliter votre location avant et pendant votre séjour."
    }
];


function About(){

    return (

        <main className="about-page">


            <section className="about-hero">

                <span>
                    À propos de nous
                </span>

                <h1>
                    Votre mobilité,
                    notre priorité
                </h1>

                <p>
                    Casablanca Location vous accompagne dans la location
                    de véhicules au Maroc avec une approche simple,
                    transparente et adaptée à vos besoins.
                </p>

            </section>



            <section className="about-values">


                <div className="section-title">

                    <h2>
                        Nos engagements
                    </h2>

                    <p>
                        Une expérience pensée pour rendre votre déplacement
                        plus agréable et plus serein.
                    </p>

                </div>



                <div className="values-grid">


                    {
                        values.map((item,index)=>(

                            <article 
                                className="value-card"
                                key={index}
                            >

                                <div className="value-icon">
                                    <i className={item.icon}></i>
                                </div>


                                <h3>
                                    {item.title}
                                </h3>


                                <p>
                                    {item.text}
                                </p>

                            </article>

                        ))
                    }


                </div>


            </section>




            <section className="about-process">


                <h2>
                    Comment ça fonctionne ?
                </h2>


                <div className="steps">


                    <div>
                        <strong>01</strong>
                        <h3>Choisissez votre véhicule</h3>
                        <p>
                            Consultez notre catalogue et trouvez
                            le véhicule adapté à votre séjour.
                        </p>
                    </div>


                    <div>
                        <strong>02</strong>
                        <h3>Envoyez votre demande</h3>
                        <p>
                            Contactez-nous rapidement par WhatsApp
                            ou via notre formulaire.
                        </p>
                    </div>


                    <div>
                        <strong>03</strong>
                        <h3>Profitez du voyage</h3>
                        <p>
                            Récupérez votre véhicule et partez
                            en toute tranquillité.
                        </p>
                    </div>


                </div>


            </section>


        </main>

    )
}


export default About;