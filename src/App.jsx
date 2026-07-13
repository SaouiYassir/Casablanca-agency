import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx'
import ScrollToTop from './Components/ScrollToTop/ScrollToTop.jsx'
import Home from './Pages/Home-Page/Home.jsx'
import Catalogue from './Pages/Catalogue/Catalogue.jsx'
import About from './Pages/About/About.jsx'
import Contact from './Pages/Contact/Contact.jsx'
import Conditions from './Pages/Legal/Conditions.jsx'
import MentionsLegales from './Pages/Legal/MentionsLegales.jsx'
import Privacy from './Pages/Legal/Privacy.jsx'
import NotFound from './Pages/NotFound/NotFound.jsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-layout">
        <Header />
        <main className="app-main" id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/all-cars" element={<Catalogue />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/conditions" element={<Conditions />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/confidentialite" element={<Privacy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
