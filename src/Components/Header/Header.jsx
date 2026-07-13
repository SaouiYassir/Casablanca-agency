import { useEffect, useId, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
// import agency from '../../Config/Agency.js'
import './Header.css'

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/all-cars', label: 'Catalogue' },
  { to: '/about', label: 'À propos' },
  { to: '/contact', label: 'Contact' },
]

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const menuId = useId()

  useEffect(() => {
    if (!isOpen) return undefined

    const handleEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  const renderNavItems = () => links.map(({ to, label }) => (
    <NavLink
      key={to}
      to={to}
      end={to === '/'}
      className={({ isActive }) => (isActive ? 'active' : undefined)}
      onClick={() => setIsOpen(false)}
    >
      {label}
    </NavLink>
  ))

  return (
    <header className="header">
      <Link className="logo" to="/" > 
        {/* {agency.name}    aria-label={`${agency.name} — Accueil`}  */}
        Casablanca Agency
      </Link>
      <nav className="nav-links" aria-label="Navigation principale">{renderNavItems()}</nav>
      <button
        type="button"
        className={`hamburger ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
        aria-controls={menuId}
        aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>
      <nav
        id={menuId}
        className={`nav ${isOpen ? 'active' : ''}`}
        aria-label="Navigation mobile"
        inert={!isOpen}
      >
        {renderNavItems()}
      </nav>
    </header>
  )
}

export default Header
