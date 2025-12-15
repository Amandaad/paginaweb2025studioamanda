import { Sparkles, Droplets, Palette, Scissors, Eye } from 'lucide-react';

const services = [
  {
    icon: Droplets,
    title: 'Selagem',
    description: 'Tratamento de selagem para cabelos macios, brilhantes e livres de frizz por mais tempo.',
    price: 'A partir de R$ 150'
  },
  {
    icon: Sparkles,
    title: 'Mechas',
    description: 'Mechas personalizadas para iluminar seu visual com técnicas modernas e naturais.',
    price: 'A partir de R$ 150'
  },
  {
    icon: Palette,
    title: 'Coloração',
    description: 'Coloração completa com produtos de alta qualidade para um resultado vibrante e duradouro.',
    price: 'A partir de R$ 50'
  },
  {
    icon: Scissors,
    title: 'Depilação',
    description: 'Depilação profissional com cera de alta qualidade para pele macia e resultado duradouro.',
    price: 'A partir de R$ 30'
  },
  {
    icon: Eye,
    title: 'Sobrancelhas',
    description: 'Design de sobrancelhas personalizado, henna, micropigmentação e laminação.',
    price: 'A partir de R$ 25'
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Nossos Serviços</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma variedade de tratamentos de beleza com produtos de primeira linha e profissionais experientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-pink-100 rounded-lg">
                    <Icon className="w-6 h-6 text-pink-500" />
                  </div>
                  <h3 className="text-2xl">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <p className="text-pink-500">{service.price}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}