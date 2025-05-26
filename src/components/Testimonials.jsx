import { useState } from 'react'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import foto1 from '../assets/images/Cristina.png'
import foto2 from '../assets/images/Gal.png'
import foto3 from '../assets/images/Raquel.png'

const Testimonials = () => {
  const testimonialsList = [
    {
      id: 1,
      name: 'Cirstina Reis',
      image: foto1,
      rating: 5,
      text: 'Não vou a outro lugar cuidar do meu cabelo. Tenho total confiança no profissionalismo da Aline. Sem contar que o papo é bom, falamos sobre metas, sonhos, fé..... É divertido também, pois o bom humor esta vivo lá. É isso.'
    },
    {
      id: 2,
      name: 'Gal Gomes',
      image: foto2,
      rating: 5,
      text: 'Atendimento maravilhoso! Fui indicada por uma amiga e posso dizer que super vou recomendar. Profissionais de primeira!!!'
    },
    {
      id: 3,
      name: 'Raquel Ferreira',
      image: foto3,
      rating: 5,
      text: 'Amei minha experiência!!!! Virei cliente com certeza. Espaço agradável e aconchegante. Excelente profissionais. Tem um café no estabelecimento com produtos de qualidade.'
    }
  ]

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="section-title">O que nossos clientes dizem</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsList.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-cream rounded-lg p-6 shadow-soft hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <div className="mb-4 flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-medium text-lg">{testimonial.name}</h3>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i} 
                        className={i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'} 
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex-1 relative">
                <FaQuoteLeft className="text-primary-200 text-opacity-50 text-4xl absolute -top-2 -left-2" />
                <p className="text-gray-700 relative z-10 pl-4">
                  {testimonial.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials