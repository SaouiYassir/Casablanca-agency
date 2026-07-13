import PageMeta from '../../Components/PageMeta/PageMeta.jsx'
import agency, { fullAddress } from '../../Config/Agency.js'
import './Legal.css'

function MentionsLegales() {
  return (
    <article className="legal-page">
      <PageMeta title="Mentions légales" path="/mentions-legales" />
      <span className="section-label">Informations légales</span>
      <h1>Mentions légales</h1>
      <section><h2>Éditeur du site</h2><p><strong>{agency.name}</strong><br />Adresse : {fullAddress}<br />Téléphone : {agency.phoneDisplay}<br />E-mail : {agency.email}<br />RC : {agency.legal.rc || 'à renseigner avant publication'}<br />ICE : {agency.legal.ice || 'à renseigner avant publication'}</p></section>
      <section><h2>Hébergement</h2><p>Le site de démonstration est déployé sur Vercel. Les informations d’hébergement définitives doivent être mises à jour lors du transfert au client.</p></section>
      <section><h2>Contenu</h2><p>Les textes, visuels et informations sur les véhicules doivent être vérifiés par l’agence. Toute reproduction du contenu propre à l’agence nécessite son autorisation.</p></section>
      <p className="legal-note">Complétez les données d’entreprise avant la livraison finale.</p>
    </article>
  )
}

export default MentionsLegales
