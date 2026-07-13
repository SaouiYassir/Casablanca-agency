import PageMeta from '../../Components/PageMeta/PageMeta.jsx'
import agency from '../../Config/Agency.js'
import './Legal.css'

function Privacy() {
  return (
    <article className="legal-page">
      <PageMeta title="Confidentialité" path="/confidentialite" />
      <span className="section-label">Données personnelles</span>
      <h1>Politique de confidentialité</h1>
      <section><h2>Données collectées</h2><p>Le formulaire peut recueillir votre nom, votre e-mail, le sujet et le contenu de votre demande. Une réservation WhatsApp peut inclure votre téléphone, les dates souhaitées et le véhicule choisi.</p></section>
      <section><h2>Finalité</h2><p>Ces informations servent uniquement à répondre à votre demande, vérifier la disponibilité et préparer la réservation.</p></section>
      <section><h2>Services externes</h2><p>Le site peut ouvrir WhatsApp, afficher Google Maps et transmettre le formulaire via EmailJS. Ces services appliquent leurs propres politiques de confidentialité.</p></section>
      <section><h2>Vos demandes</h2><p>Pour demander l’accès, la correction ou la suppression d’une information transmise, contactez-nous à <a href={`mailto:${agency.email}`}>{agency.email}</a>.</p></section>
      <p className="legal-note">Cette politique doit être ajustée aux outils réellement activés et aux pratiques de l’agence.</p>
    </article>
  )
}

export default Privacy
