import { Link, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Testimonials from './pages/Testimonials'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Foundation from './pages/Foundation'
import ScrollToTop from './components/ScrollToTop'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function AppShell() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className={`flex-grow ${isHome ? '' : 'pt-20'}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/foundation" element={<Foundation />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppShell />
    </Router>
  )
}

export default App
