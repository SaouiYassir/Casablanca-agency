import PageMeta from '../../Components/PageMeta/PageMeta.jsx'
import agency from '../../Config/Agency.js'
import './Legal.css'

function Conditions() {
  return (
    <article className="legal-page">
      <PageMeta title="Conditions générales" description={`Conditions générales de réservation de ${agency.name}.`} path="/conditions" />
      <span className="section-label">Informations contractuelles</span>
      <h1>Conditions générales de réservation</h1>
      <p className="legal-intro">Les informations ci-dessous présentent le fonctionnement général du service. Les conditions définitives sont confirmées avec le client avant la prise en charge.</p>
      <section><h2>1. Demande de réservation</h2><p>Une demande envoyée depuis le site ou WhatsApp ne constitue pas une confirmation automatique. La réservation devient effective après validation du véhicule, des dates, du tarif et des documents nécessaires par l’agence.</p></section>
      <section><h2>2. Conducteur</h2><p>Le conducteur doit être âgé d’au moins {agency.legal.minAge} ans et détenir un permis valide depuis au moins {agency.legal.minLicenseYears} an. Des conditions différentes peuvent s’appliquer selon le véhicule.</p></section>
      <section><h2>3. Tarifs et paiement</h2><p>Les prix affichés sont indicatifs et exprimés par jour. Le montant final dépend des dates, du véhicule, du lieu de livraison et des options confirmées. {agency.legal.paymentNote}</p></section>
      <section><h2>4. Annulation</h2><p>{agency.legal.cancellationPolicy} Toute exception ou retenue éventuelle doit être communiquée avant confirmation.</p></section>
      <section><h2>5. Assurance et responsabilité</h2><p>La couverture, la franchise, le dépôt de garantie et les exclusions sont précisés dans le contrat remis au client. Le conducteur reste responsable des infractions, usages interdits et dommages exclus du contrat.</p></section>
      <section><h2>6. Retour du véhicule</h2><p>Le véhicule doit être retourné au lieu et à l’heure convenus, dans l’état décrit au départ. Tout retard ou changement doit être signalé dès que possible.</p></section>
      <p className="legal-note">Ce modèle doit être adapté et validé avec les informations juridiques réelles de l’agence avant une mise en production commerciale.</p>
    </article>
  )
}

export default Conditions
