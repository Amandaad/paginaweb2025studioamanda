import { Sparkles, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-pink-500" />
            <span className="text-xl">Studio Amanda Simplicio</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-pink-500 transition-colors">
              Início
            </button>
            <button onClick={() => scrollToSection('services')} className="hover:text-pink-500 transition-colors">
              Serviços
            </button>
            <button onClick={() => scrollToSection('about')} className="hover:text-pink-500 transition-colors">
              Sobre
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-pink-500 transition-colors">
              Contato
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-colors"
            >
              Agendar
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav className="md:hidden py-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection('home')} className="text-left hover:text-pink-500 transition-colors">
              Início
            </button>
            <button onClick={() => scrollToSection('services')} className="text-left hover:text-pink-500 transition-colors">
              Serviços
            </button>
            <button onClick={() => scrollToSection('about')} className="text-left hover:text-pink-500 transition-colors">
              Sobre
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-left hover:text-pink-500 transition-colors">
              Contato
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-colors w-full"
            >
              Agendar
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}