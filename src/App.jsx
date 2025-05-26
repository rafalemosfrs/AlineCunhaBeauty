import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])

  return (
    <div className="App">
      <Header scrolled={scrolled} />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}

export default App