import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Home from './Pages/Home/Home.jsx'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/all-cars' element={<Catalogue />} /> */}
        {/* <Route path='/about' element={<About />} /> */}
        {/* <Route path='/contact' element={<Contact />} /> */}
        {/* <Route path='*' element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </>
  )
}

export default App
