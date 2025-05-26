import { FaInstagram, FaFacebook, FaYoutube, FaTiktok, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-charcoal text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">Aline Cunha <span className="text-primary-400">Beauty</span></h3>
            <p className="text-gray-300 mb-4">
              Transformando beleza em arte a mais de 20 anos, com atendimento personalizado e produtos de alta qualidade.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/alinecunhabeauty/" className="text-white hover:text-primary-400 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="https://www.facebook.com/alinecunhabeauty" className="text-white hover:text-primary-400 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="https://www.tiktok.com/@alinecunhabeauty_" className="text-white hover:text-primary-400 transition-colors">
                <FaTiktok size={20} />
              </a>
              <a href="https://www.youtube.com/channel/UCq-rs7e4hScMyHDzEE1K04g" className="text-white hover:text-primary-400 transition-colors">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {['services', 'about', 'testimonials', 'contact'].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={800}
                    className="text-gray-300 hover:text-primary-400 transition-colors cursor-pointer"
                  >
                    {link === 'services' && 'Serviços'}
                    {link === 'about' && 'Sobre Nós'}
                    {link === 'testimonials' && 'Depoimentos'}
                    {link === 'contact' && 'Contato'}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-primary-400 mt-1 mr-3" />
                <span className="text-gray-300">R. de Faria Guimarães 248, 4000-203 Porto, Portugal</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-primary-400 mr-3" />
                <span className="text-gray-300">+351 963 881 820</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-primary-400 mr-3" />
                <span className="text-gray-300">compreeaplique@gmail.com</span>
              </li>
            </ul>
          </div>
          
          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Horário de Funcionamento</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <FaClock className="text-primary-400 mt-1 mr-3" />
                <div>
                  <p className="text-gray-300">Segunda a Sexta</p>
                  <p className="text-white">10:00 - 18:00</p>
                </div>
              </li>
              <li className="flex items-start">
                <FaClock className="text-primary-400 mt-1 mr-3" />
                <div>
                  <p className="text-gray-300">Sábados</p>
                  <p className="text-white">10:00 - 19:00</p>
                </div>
              </li>
              <li className="flex items-start">
                <FaClock className="text-primary-400 mt-1 mr-3" />
                <div>
                  <p className="text-gray-300">Domingos</p>
                  <p className="text-white">Fechado</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Aline Cunha Beauty. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer