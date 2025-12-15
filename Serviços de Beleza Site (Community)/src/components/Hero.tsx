import { ImageWithFallback } from './figma/ImageWithFallback';
import studioImg from 'figma:asset/68e061a1189ccb777107ad44674bc1bd4f36db7b.png';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl mb-6">
              Realce Sua
              <span className="block text-pink-500">Beleza Natural</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Serviços especializados em cabelo, sobrancelhas e depilação para você se sentir ainda mais incrível.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="bg-pink-500 text-white px-8 py-4 rounded-full hover:bg-pink-600 transition-colors"
              >
                Agendar Horário
              </button>
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-pink-500 text-pink-500 px-8 py-4 rounded-full hover:bg-pink-50 transition-colors"
              >
                Ver Serviços
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={studioImg}
                alt="Studio Amanda Simplicio"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
              <p className="text-4xl mb-1">500+</p>
              <p className="text-gray-600">Clientes Satisfeitas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}