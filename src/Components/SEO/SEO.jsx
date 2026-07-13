import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://casablanca-agency.vercel.app'
const DEFAULT_IMAGE = `${SITE_URL}/Gallery/og-default.jpg`
const SITE_TITLE = 'Casablanca Agency'

function SEO({ title, description, path = '', image, noIndex = false, }) {
  const fullTitle = `${title} | ${SITE_TITLE}`
  const url = `${SITE_URL}${path}`
  const ogImage = image || DEFAULT_IMAGE

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noIndex && (
        <meta name="robots" content="noindex, nofollow" />
      )}
      <link rel="canonical" href={url} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Casablanca Agency" />
      <meta property="og:locale" content="fr_FR" />

      <meta name="twitter:card" content="summary_large_image" />

      <meta name="author" content="Casablanca Agency" />

      <meta
        name="keywords"
        content="
    location voiture Casablanca,
    location de voitures Casablanca,
    location voiture Maroc,
    louer une voiture Casablanca,
    agence location voiture Casablanca,
    location SUV Casablanca,
    location berline Casablanca,
    location utilitaire Casablanca,
    location voiture aéroport Mohammed V,
    location voiture Maroc pas cher,
    Casablanca Agency,
    location automobile Casablanca
  "
      />

      <meta name="theme-color" content="#C0392B" />
    </Helmet>
  )
}

export default SEO