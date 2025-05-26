import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center"
      style={{
        backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url("https://images.pexels.com/photos/3997383/pexels-photo-3997383.jpeg?auto=compress&cs=tinysrgb&w=1600")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container-custom relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">
            Revele sua beleza natural
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Cuidados personalizados para realçar o que você tem de melhor, com profissionais experientes e ambiente acolhedor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/+351963881820"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button target="_blank" className="btn-primary">
                Agende seu horário
              </button>
            </a>
            <a
              href="https://maps.app.goo.gl/773pm1TukSB7yibA9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="py-3 px-6 rounded-full text-sm font-medium border-2 border-white text-white hover:bg-white/20 transition-all duration-300">
                Conheça nosso salão
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero