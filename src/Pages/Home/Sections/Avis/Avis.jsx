import AvisCards from '../../../../Components/AvisCard/AvisCards'
import './Avis.css'

const sampleReviews = [
    {
        id: 1,
        nom: "Thomas K.",
        stars: 5,
        comment:
            "Voiture impeccable livrée directement à notre hôtel. Service client très réactif via WhatsApp."
    },
    {
        id: 2,
        nom: "Karim Benjelloun",
        stars: 5,
        comment:
            "Service exceptionnel ! La Range Rover était d'une propreté impeccable et livrée à l'heure exacte directement à la sortie de l'Aéroport de Marrakech. Équipe professionnelle et arrangeante sur WhatsApp."
    },
    {
        id: 3,
        nom: "Sarah & Thomas",
        stars: 5,
        comment:
            "Nous avons loué une citadine pour notre séjour et tout était parfait. Pas de frais cachés ou de mauvaises surprises au moment du retour. Le kilométrage illimité nous a permis de visiter la région l'esprit tranquille."
    }
];


function Avis() {
    return (
        <section className="avis-section">

            <div className="avis-header">
                <span className="avis-eyebrow">
                    Témoignages
                </span>

                <h2>
                    Les avis de nos clients
                </h2>

                <p>
                    Découvrez les expériences de nos clients lors de leurs locations
                    de véhicules au Maroc.
                </p>
            </div>


            <div className="reviews-grid">

                {sampleReviews.map((review) => (
                    <AvisCards
                        key={review.id}
                        {...review}
                    />
                ))}

            </div>

        </section>
    )
}

export default Avis;