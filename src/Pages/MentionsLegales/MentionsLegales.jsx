import LegalLayout from '../../Components/Legal/LegalLayout.jsx'
import SEO from '../../Components/SEO/SEO.jsx'


function MentionsLegales() {

    const sections = [
        {
            id: 'editeur',
            title: 'Éditeur du site',
            paragraphs: [
                "Le présent site est édité par [Nom de la société], [forme juridique, ex. SARL] au capital social de [montant] MAD, dont le siège social est situé [adresse complète, Casablanca, Maroc].",
            ],
            list: [
                "Registre de Commerce (RC) : [numéro], Casablanca",
                "Identifiant Commun de l'Entreprise (ICE) : [numéro]",
                "Numéro de Patente : [numéro]",
                "Identifiant Fiscal (IF) : [numéro]",
                "Directeur de la publication : [nom]",
            ],
        },
        {
            id: 'hebergement',
            title: 'Hébergement',
            paragraphs: [
                "Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.",
            ],
        },
        {
            id: 'propriete-intellectuelle',
            title: 'Propriété intellectuelle',
            paragraphs: [
                "L'ensemble des éléments du site (textes, images, logo, structure, mise en page) est la propriété de [Nom de la société], sauf mention contraire. Toute reproduction, représentation ou diffusion, totale ou partielle, sans autorisation préalable est interdite.",
            ],
        },
        {
            id: 'liens-hypertextes',
            title: 'Liens hypertexte',
            paragraphs: [
                "Le site peut contenir des liens vers des services tiers, notamment WhatsApp et Google Maps. Ces services sont soumis à leurs propres conditions d'utilisation et politiques de confidentialité, sur lesquelles [Nom de la société] n'exerce aucun contrôle.",
            ],
        },
        {
            id: 'limitation-responsabilite',
            title: 'Limitation de responsabilité',
            paragraphs: [
                "L'Agence s'efforce d'assurer l'exactitude des informations diffusées sur le site (disponibilité, tarifs, photos des véhicules) mais ne peut en garantir l'exhaustivité ou l'actualité permanente. Le catalogue présenté a une valeur indicative et toute réservation est soumise à confirmation.",
            ],
        },
        {
            id: 'contact',
            title: 'Contact',
            paragraphs: [
                "Pour toute question relative aux présentes mentions légales : contact@casablanca-location.ma ou +212 XX XX XX XX.",
            ],
        },
    ]

    return (
        <>
            <SEO
                title="Mentions légales"
                description="Informations légales concernant Casablanca Agency, éditeur du site de location de voitures à Casablanca."
                path="/mentions-legales"
                noIndex
            />
            <LegalLayout
                eyebrow="Mentions légales"
                title="Mentions légales"
                updatedDate="13 juillet 2026"
                intro="Informations relatives à l'éditeur, à l'hébergeur et aux conditions d'utilisation du site, conformément à la réglementation en vigueur."
                sections={sections}
            />

        </>
    )

}


export default MentionsLegales
