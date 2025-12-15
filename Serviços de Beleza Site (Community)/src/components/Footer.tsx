import { Sparkles } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-pink-500" />
              <span className="text-xl">Studio Amanda Simplicio</span>
            </div>
            <p className="text-gray-400">
              Realçando a beleza natural de cada cliente com profissionalismo e dedicação.
            </p>
          </div>

          <div>
            <h4 className="text-lg mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Selagem</li>
              <li>Mechas</li>
              <li>Coloração</li>
              <li>Depilação</li>
              <li>Sobrancelhas</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg mb-4">Horário de Atendimento</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Segunda a Domingo</li>
              <li>Horário sob agendamento</li>
              <li>WhatsApp: (83) 99650-3562</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 Studio Amanda Simplicio. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}