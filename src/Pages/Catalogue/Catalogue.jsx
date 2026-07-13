import { useMemo, useState, useEffect } from 'react' // 1. Added useEffect
import { Link, useSearchParams } from 'react-router-dom'
import Card from '../../Components/Card/Card.jsx'
import cars from '../../Data/Catalogue.js'
import './Catalogue.css'

const CARDS_PER_PAGE = 9
const PRICE_RANGES = [
  { label: 'Tous les prix', min: 0, max: Infinity },
  { label: 'Moins de 50 MAD', min: 0, max: 49 },
  { label: '50 – 99 MAD', min: 50, max: 99 },
  { label: '100 – 149 MAD', min: 100, max: 149 },
  { label: '150 MAD et plus', min: 150, max: Infinity },
]

const categories = ['Tous', ...new Set(cars.map((car) => car.type))]
const fuels = ['Tous', ...new Set(cars.map((car) => car.fuel))]

function formatDate(value) {
  if (!value) return ''
  return new Intl.DateTimeFormat('fr-MA', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(value))
}

function Catalogue({ preview = false }) {
  const [searchParams] = useSearchParams()
  const requestedCategory = searchParams.get('categorie')
  const [selectedCategory, setSelectedCategory] = useState(
    categories.includes(requestedCategory) ? requestedCategory : 'Tous',
  )
  const [selectedFuel, setSelectedFuel] = useState('Tous')
  const [selectedPriceRange, setSelectedPriceRange] = useState(PRICE_RANGES[0].label)
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  // 2. Added hook: Whenever the page state changes, smoothly scroll back to top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const bookingContext = useMemo(() => ({
    lieu: searchParams.get('lieu') || '',
    dateDebut: searchParams.get('depart') || '',
    dateFin: searchParams.get('retour') || '',
  }), [searchParams])

  const filteredCars = useMemo(() => {
    const priceRange = PRICE_RANGES.find((range) => range.label === selectedPriceRange) || PRICE_RANGES[0]
    const term = searchTerm.trim().toLocaleLowerCase('fr')

    return cars.filter((car) => {
      const matchesCategory = selectedCategory === 'Tous' || car.type === selectedCategory
      const matchesFuel = selectedFuel === 'Tous' || car.fuel === selectedFuel
      const matchesPrice = car.prixParJour >= priceRange.min && car.prixParJour <= priceRange.max
      const searchableName = `${car.marque} ${car.modèle}`.toLocaleLowerCase('fr')
      return matchesCategory && matchesFuel && matchesPrice && searchableName.includes(term)
    })
  }, [searchTerm, selectedCategory, selectedFuel, selectedPriceRange])

  const updateFilter = (setter) => (event) => {
    setter(event.target.value)
    setCurrentPage(1)
  }

  const resetFilters = () => {
    setSelectedCategory('Tous')
    setSelectedFuel('Tous')
    setSelectedPriceRange(PRICE_RANGES[0].label)
    setSearchTerm('')
    setCurrentPage(1)
  }

  if (preview) {
    const previewCars = cars.filter((car) => car.status === 'Disponible').slice(0, 3)
    return (
      <div className="catalogue-section catalogue-preview">
        <span className="catalogue-kicker">Notre sélection</span>
        <h2 className="catalogue-title">Trouvez votre prochaine voiture</h2>
        <p className="catalogue-subtitle">Des véhicules adaptés aux trajets urbains, vacances et déplacements professionnels.</p>
        <div className="cars-container">
          {previewCars.map((car) => <Card key={car.id} {...car} year={car.année} />)}
        </div>
        <div className="view-more-container">
          <Link to="/all-cars" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="view-more-btn">Voir tout le catalogue <i className="bi bi-arrow-right" /></Link>
        </div>
      </div>
    )
  }

  const totalPages = Math.ceil(filteredCars.length / CARDS_PER_PAGE)
  const firstIndex = (currentPage - 1) * CARDS_PER_PAGE
  const currentCars = filteredCars.slice(firstIndex, firstIndex + CARDS_PER_PAGE)
  const hasSearchDates = bookingContext.dateDebut && bookingContext.dateFin

  return (
    <div className="catalogue-section catalogue-page">
      <span className="catalogue-kicker">Catalogue</span>
      <h1 className="catalogue-title">Notre flotte</h1>
      <p className="catalogue-subtitle">Choisissez le véhicule qui correspond à votre trajet.</p>

      {hasSearchDates && (
        <div className="search-summary" role="status">
          <i className="bi bi-calendar-check" /> Du {formatDate(bookingContext.dateDebut)} au {formatDate(bookingContext.dateFin)}
        </div>
      )}

      <div className="filters-container" aria-label="Filtres du catalogue">
        <div className="filter-field">
          <label htmlFor="search-input" className="sr-only">Rechercher une voiture</label>
          <div className="search-wrapper">
            <i className="bi bi-search search-icon" aria-hidden="true" />
            <input id="search-input" type="search" placeholder="Marque ou modèle" value={searchTerm} onChange={updateFilter(setSearchTerm)} />
          </div>
        </div>
        <div className="filter-field">
          <label htmlFor="categories-select" className="sr-only">Catégorie</label>
          <select id="categories-select" value={selectedCategory} onChange={updateFilter(setSelectedCategory)}>
            {categories.map((category) => <option key={category} value={category}>{category}</option>)}
          </select>
        </div>
        <div className="filter-field">
          <label htmlFor="fuels-select" className="sr-only">Carburant</label>
          <select id="fuels-select" value={selectedFuel} onChange={updateFilter(setSelectedFuel)}>
            {fuels.map((fuel) => <option key={fuel} value={fuel}>{fuel}</option>)}
          </select>
        </div>
        <div className="filter-field">
          <label htmlFor="price-select" className="sr-only">Prix par jour</label>
          <select id="price-select" value={selectedPriceRange} onChange={updateFilter(setSelectedPriceRange)}>
            {PRICE_RANGES.map((range) => <option key={range.label} value={range.label}>{range.label}</option>)}
          </select>
        </div>
      </div>

      <div className="catalogue-results-bar">
        <span className="catalogue-results-count">{filteredCars.length} résultat{filteredCars.length !== 1 ? 's' : ''}</span>
        {(selectedCategory !== 'Tous' || selectedFuel !== 'Tous' || selectedPriceRange !== PRICE_RANGES[0].label || searchTerm) && (
          <button type="button" className="reset-inline" onClick={resetFilters}>Réinitialiser</button>
        )}
      </div>

      <div className="cars-list-container">
        {currentCars.length > 0 ? currentCars.map((car) => (
          <Card key={car.id} {...car} year={car.année} bookingContext={bookingContext} />
        )) : (
          <div className="no-results">
            <i className="bi bi-car-front" aria-hidden="true" />
            <p>Aucune voiture ne correspond à vos critères.</p>
            <button type="button" className="reset-filters-btn" onClick={resetFilters}>Réinitialiser les filtres</button>
          </div>
        )}
      </div>

      {totalPages > 1 && (
        <nav className="pagination" aria-label="Pagination du catalogue">
          <button
            type="button"
            onClick={() => setCurrentPage((page) => Math.max(page - 1, 1))}
            disabled={currentPage === 1}
          >
            Page précédente
          </button>

          <span className="page-indicator">
            Page <strong>{currentPage}</strong> sur {totalPages}
          </span>

          <button
            type="button"
            onClick={() => setCurrentPage((page) => Math.min(page + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Page suivante
          </button>
        </nav>
      )}
    </div>
  )
}

export default Catalogue