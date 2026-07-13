import { Link } from 'react-router-dom'
import PageMeta from '../../Components/PageMeta/PageMeta.jsx'
import './NotFound.css'

function NotFound() {
  return (
    <section className="not-found">
      <PageMeta title="Page introuvable" path="/404" noIndex />
      <span>Erreur 404</span>
      <h1>Cette route ne mène nulle part.</h1>
      <p>La page demandée n’existe pas ou a été déplacée.</p>
      <Link to="/">Retour à l’accueil</Link>
    </section>
  )
}

export default NotFound
