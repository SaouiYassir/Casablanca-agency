import LegalLayout from '../../Components/Legal/LegalLayout.jsx'


function ConditionsGenerales() {

    const sections = [
        {
            id: 'objet',
            title: 'Objet',
            paragraphs: [
                "Les présentes conditions générales régissent l'utilisation du site et les modalités de mise en relation pour la location de véhicules proposée par [Nom de la société] (ci-après « l'Agence »), immatriculée sous le Registre de Commerce n° [Numéro RC] à Casablanca.",
                "Toute demande de réservation transmise via le site (formulaire de contact ou WhatsApp) implique l'acceptation pleine et entière des présentes conditions.",
            ],
        },
        {
            id: 'reservation',
            title: 'Réservation',
            paragraphs: [
                "Le catalogue présenté sur le site a une valeur indicative. Le site ne permet ni paiement en ligne ni confirmation automatique : chaque demande transmise via le formulaire de contact ou WhatsApp constitue une pré-réservation.",
                "La réservation n'est considérée comme confirmée qu'après échange avec l'Agence portant sur la disponibilité du véhicule, les dates, le tarif définitif et les conditions de retrait.",
            ],
        },
        {
            id: 'tarifs',
            title: 'Tarifs',
            paragraphs: [
                "Les tarifs affichés sur le site sont donnés à titre indicatif et peuvent varier selon la saison, la durée de location, le lieu de prise en charge et les options choisies (siège enfant, GPS, conducteur additionnel, etc.).",
                "Le prix définitif est communiqué et validé avec le client avant la signature du contrat de location.",
            ],
        },
        {
            id: 'documents',
            title: 'Documents requis',
            paragraphs: [
                "La location est soumise à la présentation des documents suivants :",
            ],
            list: [
                "Permis de conduire valide, en cours de validité depuis au moins [durée, ex. 1 an]",
                "Carte d'identité nationale ou passeport en cours de validité",
                "Justificatif de domicile si demandé par l'Agence",
                "Dépôt de garantie (caution), restitué après retour du véhicule sans dommage",
            ],
        },
        {
            id: 'duree-restitution',
            title: 'Durée et restitution',
            paragraphs: [
                "Sauf accord contraire, la location minimale est de 24 heures. Tout retard dans la restitution du véhicule non signalé à l'avance à l'Agence peut entraîner une facturation complémentaire.",
                "Le véhicule doit être restitué avec le même niveau de carburant qu'au départ, sauf disposition contraire indiquée sur le contrat.",
            ],
        },
        {
            id: 'assurance-responsabilite',
            title: 'Assurance et responsabilité',
            paragraphs: [
                "Les véhicules proposés à la location sont assurés conformément à la réglementation marocaine en vigueur.",
                "En cas de sinistre, la franchise reste à la charge du locataire, sauf souscription d'un rachat de franchise proposé par l'Agence. Le locataire demeure responsable des infractions au code de la route commises pendant la durée de la location, ainsi que des amendes et frais qui en découlent.",
            ],
        },
        {
            id: 'annulation',
            title: 'Annulation',
            paragraphs: [
                "Les conditions d'annulation applicables à une réservation sont communiquées au moment de sa confirmation. Sauf indication contraire, toute annulation doit être signalée à l'Agence dans les meilleurs délais, par WhatsApp ou téléphone.",
            ],
        },
        {
            id: 'droit-applicable',
            title: 'Droit applicable et litiges',
            paragraphs: [
                "Les présentes conditions générales sont soumises au droit marocain. À défaut de résolution amiable, tout litige relève de la compétence exclusive des tribunaux de Casablanca.",
            ],
        },
        {
            id: 'modification',
            title: 'Modification des conditions générales',
            paragraphs: [
                "L'Agence se réserve le droit de modifier les présentes conditions générales à tout moment. La version applicable est celle en vigueur au moment de la confirmation de la réservation.",
            ],
        },
        {
            id: 'contact',
            title: 'Contact',
            paragraphs: [
                "Pour toute question relative aux présentes conditions générales, l'Agence est joignable par WhatsApp, par téléphone au +212 XX XX XX XX, ou par e-mail à contact@casablanca-location.ma.",
            ],
        },
    ]

    return (
        <LegalLayout
            eyebrow="Conditions générales"
            title="Conditions générales de vente et d'utilisation"
            updatedDate="13 juillet 2026"
            intro="Les présentes conditions décrivent les règles applicables à la consultation du site et aux demandes de location de véhicules auprès de [Nom de la société]."
            sections={sections}
        />
    )

}


export default ConditionsGenerales
