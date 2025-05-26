const About = () => {
  return (
    <section id="about" className="section-padding bg-beige/30">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-charcoal mb-6">
              Sobre o Aline Cunha Beauty
            </h2>
            <p className="text-gray-700 mb-4">
            Criadora do Método" Revirginação de Fios Brancos", oferecendo soluções personalizadas para cada cliente.
            </p>
            <p className="text-gray-700 mb-4">
            Aqui você encontrar uma variedade de serviços que vão desde corte, coloração, tratamentos capilares e muito mais.
            </p>
            <p className="text-gray-700 mb-6">
            Oferecemos produtos de cabelo a granel das melhores marcas do mercado, incluindo uma ampla variedade de shampoos, condicionadores e tratamentos especiais para cabelos danificados.
            </p>
            <div className="flex gap-4">
              <div className="flex flex-col">
                <span className="text-3xl font-serif font-bold text-primary-600">20+</span>
                <span className="text-sm text-gray-600">Anos de experiência</span>
              </div>  
              <div className="flex flex-col">
                <span className="text-3xl font-serif font-bold text-primary-600">5k+</span>
                <span className="text-sm text-gray-600">Clientes satisfeitos</span>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3992855/pexels-photo-3992855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Equipe Bella Salon" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-100 rounded-full -z-10"></div>
            <div className="absolute -top-4 -left-4 w-48 h-48 bg-secondary-100 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About