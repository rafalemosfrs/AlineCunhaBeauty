import { FaCut, FaPaintBrush, FaHandSparkles, FaSpa } from 'react-icons/fa'

const Services = () => {
  const servicesList = [
    {
      id: 1,
      icon: <FaCut />,
      title: 'Cortes',
      description: 'Cortes personalizados que valorizam seu estilo e tipo de cabelo, realizados por profissionais experientes.'
    },
    {
      id: 2,
      icon: <FaPaintBrush />,
      title: 'Coloração',
      description: 'Técnicas modernas de coloração que respeitam a saúde dos seus cabelos, com produtos de alta qualidade.'
    },
    {
      id: 3,
      icon: <FaHandSparkles />,
      title: 'Manicure & Pedicure',
      description: 'Tratamentos completos para mãos e pés, com esmaltação em gel e técnicas de embelezamento de unhas.'
    },
    {
      id: 4,
      icon: <FaSpa />,
      title: 'Tratamentos',
      description: 'Hidratação, reconstrução e nutrição para todos os tipos de cabelo, devolvendo brilho e saúde.'
    }
  ]

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="section-title">Nossos Serviços</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Oferecemos uma variedade de serviços de beleza com produtos premium e atendimento personalizado para realçar sua beleza natural.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesList.map((service) => (
            <div 
              key={service.id}
              className="bg-beige/30 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="text-primary-600 text-3xl mb-4 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif font-semibold text-center mb-3">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services