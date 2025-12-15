import { Award, Heart, Clock, Star } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Profissionais Qualificados',
    description: 'Equipe especializada com anos de experiência e cursos de atualização constantes.'
  },
  {
    icon: Heart,
    title: 'Atendimento Personalizado',
    description: 'Cada cliente é única. Criamos tratamentos personalizados para suas necessidades.'
  },
  {
    icon: Clock,
    title: 'Horários Flexíveis',
    description: 'Atendemos de segunda a sábado com horários que se adaptam à sua rotina.'
  },
  {
    icon: Star,
    title: 'Produtos Premium',
    description: 'Trabalhamos apenas com produtos de alta qualidade e marcas reconhecidas.'
  }
];

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Por Que Nos Escolher?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Somos apaixonadas por realçar a beleza de cada cliente com carinho e profissionalismo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-4">
                  <Icon className="w-8 h-8 text-pink-500" />
                </div>
                <h3 className="text-xl mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl text-pink-500 mb-2">5+</p>
              <p className="text-gray-600">Anos de Experiência</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl text-pink-500 mb-2">500+</p>
              <p className="text-gray-600">Clientes Felizes</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl text-pink-500 mb-2">98%</p>
              <p className="text-gray-600">Satisfação</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
