import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simula envio do formulário
    alert('Obrigada! Entraremos em contato em breve para confirmar seu agendamento.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Agende Seu Horário</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Entre em contato conosco e agende seu atendimento. Estamos ansiosas para cuidar de você!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="bg-gradient-to-br from-pink-500 to-purple-500 text-white rounded-2xl p-8 mb-8">
              <h3 className="text-3xl mb-6">Informações de Contato</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p>Campina Grande</p>
                    <p>Paraíba, Brasil</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 flex-shrink-0" />
                  <p>(83) 99650-3562</p>
                </div>

                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 flex-shrink-0" />
                  <p>cursotiamanda@hotmail.com</p>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p>Segunda a Domingo</p>
                    <p>Horário sob agendamento</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="mb-4">Siga-nos nas redes sociais:</p>
                <div className="flex gap-4">
                  <a 
                    href="https://instagram.com/amandasimplicioesteticaebeleza" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="#" className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                    <Facebook className="w-6 h-6" />
                  </a>
                </div>
                <p className="mt-4 text-sm">@amandasimplicioesteticaebeleza</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-gray-700">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-gray-700">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block mb-2 text-gray-700">
                    Telefone/WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block mb-2 text-gray-700">
                    Serviço de Interesse *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="selagem">Selagem</option>
                    <option value="mechas">Mechas</option>
                    <option value="coloracao">Coloração</option>
                    <option value="depilacao">Depilação</option>
                    <option value="sobrancelhas">Sobrancelhas</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-gray-700">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-pink-500 text-white py-4 rounded-lg hover:bg-pink-600 transition-colors"
                >
                  Enviar Solicitação
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}