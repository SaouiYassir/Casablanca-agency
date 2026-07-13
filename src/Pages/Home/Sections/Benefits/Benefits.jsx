import './Benefits.css'


const benefits = [
    {
        icon: "bi bi-geo-alt",
        title: "Livraison partout au Maroc",
        text: "Recevez votre véhicule à l'aéroport, hôtel ou adresse de votre choix."
    },
    {
        icon: "bi bi-shield-check",
        title: "Véhicules vérifiés",
        text: "Une flotte entretenue régulièrement pour voyager en toute sérénité."
    },
    {
        icon: "bi bi-clock-history",
        title: "Réservation rapide",
        text: "Une demande simple et une équipe disponible pour vous accompagner."
    }
]


function Benefits() {

    return (
        <section className="benefits-section">

            <div className="benefits-header">

                <span>
                    Pourquoi nous choisir
                </span>

                <h2>
                    Une location pensée pour votre voyage
                </h2>

            </div>


            <div className="benefits-grid">

                {benefits.map((item, index) => (

                    <article 
                        className="benefit-card"
                        key={index}
                    >

                        <div className="benefit-icon">

                            <i className={item.icon}></i>

                        </div>


                        <h3>
                            {item.title}
                        </h3>


                        <p>
                            {item.text}
                        </p>


                    </article>

                ))}

            </div>

        </section>
    )
}


export default Benefits