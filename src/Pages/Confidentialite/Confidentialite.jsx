import LegalLayout from '../../Components/Legal/LegalLayout.jsx'
import SEO from '../../Components/SEO/SEO.jsx'


function Confidentialite() {

    const sections = [
        {
            id: 'donnees-collectees',
            title: 'Données collectées',
            paragraphs: [
                "Le site collecte uniquement les informations que vous transmettez volontairement via le formulaire de contact : nom, adresse e-mail, sujet et contenu du message.",
                "Si vous nous contactez via WhatsApp, les échanges (numéro de téléphone, messages) ont lieu directement sur cette application et relèvent de la politique de confidentialité de WhatsApp.",
            ],
        },
        {
            id: 'finalite',
            title: 'Finalité du traitement',
            paragraphs: [
                "Les données transmises via le formulaire de contact sont utilisées exclusivement pour répondre à votre demande et, le cas échéant, organiser une location de véhicule. Elles ne sont ni revendues ni transmises à des tiers à des fins commerciales.",
            ],
        },
        {
            id: 'transmission',
            title: 'Transmission des données',
            paragraphs: [
                "Le site ne dispose d'aucune base de données ni serveur de stockage : les messages envoyés via le formulaire de contact sont acheminés directement à l'adresse e-mail professionnelle de l'Agence grâce au service EmailJS, sans être conservés sur le site lui-même.",
            ],
        },
        {
            id: 'cookies-cartes',
            title: 'Cookies et carte intégrée',
            paragraphs: [
                "Le site intègre une carte Google Maps pour afficher la localisation de l'Agence. Google peut, dans ce cadre, déposer ses propres cookies conformément à sa politique de confidentialité, consultable sur policies.google.com/privacy.",
                "En dehors de cet élément, le site n'utilise pas de cookies de suivi ou de traceurs publicitaires.",
            ],
        },
        {
            id: 'conservation',
            title: 'Durée de conservation',
            paragraphs: [
                "Les messages reçus via le formulaire de contact sont conservés uniquement le temps nécessaire au traitement de votre demande, dans la messagerie de l'Agence.",
            ],
        },
        {
            id: 'droits',
            title: 'Vos droits',
            paragraphs: [
                "Conformément à la loi n° 09-08 relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel, vous disposez d'un droit d'accès, de rectification et d'opposition sur les données vous concernant.",
                "Vous pouvez exercer ces droits en nous contactant à contact@casablanca-location.ma. Pour toute réclamation, l'autorité compétente au Maroc est la Commission Nationale de contrôle de la protection des Données à caractère Personnel (CNDP, www.cndp.ma).",
            ],
        },
        {
            id: 'securite',
            title: 'Sécurité',
            paragraphs: [
                "L'Agence met en œuvre des mesures raisonnables pour protéger les informations transmises via le site. Aucune transmission de données sur Internet ne peut toutefois être garantie totalement sécurisée.",
            ],
        },
        {
            id: 'modification',
            title: 'Modification de la politique',
            paragraphs: [
                "La présente politique de confidentialité peut être mise à jour à tout moment. Nous vous invitons à la consulter régulièrement.",
            ],
        },
        {
            id: 'contact',
            title: 'Contact',
            paragraphs: [
                "Pour toute question relative à la présente politique : contact@casablanca-location.ma ou +212 XX XX XX XX.",
            ],
        },
    ]

    return (
        <>
            <SEO
                title="Politique de confidentialité"
                description="Découvrez comment Casablanca Agency collecte, utilise et protège vos données personnelles conformément à la réglementation en vigueur."
                path="/confidentialite"
                noIndex
            />
            <LegalLayout
                eyebrow="Confidentialité"
                title="Politique de confidentialité"
                updatedDate="13 juillet 2026"
                intro="Cette page explique quelles données sont collectées via le site, comment elles sont utilisées, et quels droits vous pouvez exercer."
                sections={sections}
            />
        </>
    )

}


export default Confidentialite
