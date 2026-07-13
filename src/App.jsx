import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Home from './Pages/Home/Home.jsx'
import Catalogue from './Pages/Catalogue/Catalogue.jsx'
import About from './Pages/About/About.jsx'
import Contact from './Pages/Contact/Contact.jsx'
import ConditionsGenerales from './Pages/ConditionsGenerales/ConditionsGenerales.jsx'
import Confidentialite from './Pages/Confidentialite/Confidentialite.jsx'
import MentionsLegales from './Pages/MentionsLegales/MentionsLegales.jsx'
import NotFound from './Pages/NotFound/NotFound.jsx'

function App() {

  return (
    <>
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/catalogue' element={<Catalogue />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/conditions' element={<ConditionsGenerales />} />
          <Route path='/confidentialite' element={<Confidentialite />} />
          <Route path='/mentions-legales' element={<MentionsLegales />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
