import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Sobre Mi', href: '#sobre-mi' },
    { label: 'Portafolio', href: '#portafolio' },
    { label: 'Habilidades', href: '#habilidades' },
    { label: 'Contacto', href: '#contacto' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--portfolio-navy-dark)]/80 backdrop-blur-md border-b border-[var(--portfolio-navy-light)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a 
            href="#" 
            className="text-white text-xl font-semibold tracking-tight hover:text-[var(--portfolio-blue-primary)] transition-colors"
          >
            ELG
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[var(--portfolio-text-secondary)] hover:text-white transition-colors text-sm"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-[var(--portfolio-navy-light)] rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-3 border-t border-[var(--portfolio-navy-light)]">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-[var(--portfolio-text-secondary)] hover:text-white transition-colors py-2"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
