import { useState } from 'react'
import { Link } from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const navLinks = [
    { id: 'services', label: 'Serviços' },
    { id: 'about', label: 'Sobre' },
    { id: 'testimonials', label: 'Depoimentos' },
    { id: 'contact', label: 'Contato' },
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-soft py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <div className="z-10">
          <h1 className={`font-serif text-2xl font-bold transition-colors duration-300 ${
            scrolled || isMenuOpen ? 'text-primary-700' : 'text-white'
          }`}>
            Aline Cunha<span className="text-primary-500"> Beauty</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.id}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={800}
                  className={`cursor-pointer font-medium transition-colors duration-300 hover:text-primary-500 ${
                    scrolled ? 'text-charcoal' : 'text-white'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-10 text-2xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <FaTimes className={`${scrolled || isMenuOpen ? 'text-charcoal' : 'text-white'}`} />
          ) : (
            <FaBars className={`${scrolled ? 'text-charcoal' : 'text-white'}`} />
          )}
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-white z-0 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
        >
          <div className="flex flex-col items-center justify-center h-full">
            <ul className="flex flex-col items-center space-y-8">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.id}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={800}
                    className="text-charcoal text-xl font-medium hover:text-primary-500 transition-colors duration-300"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header