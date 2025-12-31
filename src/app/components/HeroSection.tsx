import image_cdbf46178ea2d5345171aef0fd65f04e5e481247 from 'figma:asset/cdbf46178ea2d5345171aef0fd65f04e5e481247.png';
import image_8bbc0d83a610da106433d8220493c9e84b4eb187 from 'figma:asset/8bbc0d83a610da106433d8220493c9e84b4eb187.png';
import image_5ccd15c1839f54a30ff7e3f45788fba272dfaa03 from 'figma:asset/5ccd15c1839f54a30ff7e3f45788fba272dfaa03.png';
import { Download } from 'lucide-react';
import profileImage from 'figma:asset/d1d051bc1013cbe40f6814b87c8bb68964b22141.png';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--portfolio-navy-dark)] via-[var(--portfolio-navy-medium)] to-[var(--portfolio-navy-dark)]">
        {/* Decorative Blue Glow */}
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[var(--portfolio-blue-primary)] rounded-full opacity-20 blur-[150px] transform translate-x-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Ernesto Lázaro Guerrero
              </h1>
              <p className="text-2xl sm:text-3xl text-[var(--portfolio-blue-primary)]">
                Ingeniero de Soporte CTC | Diseñador UX/UI
              </p>
            </div>

            <p className="text-[var(--portfolio-text-secondary)] text-lg max-w-xl">
              Diseño experiencias digitales funcionales y centradas en el usuario.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#portafolio"
                className="px-6 py-3 bg-[var(--portfolio-blue-primary)] hover:bg-[var(--portfolio-blue-secondary)] text-white rounded-lg transition-all hover:shadow-lg hover:shadow-[var(--portfolio-blue-glow)]"
              >
                Ver Portafolio
              </a>
              <a
                href="#"
                className="px-6 py-3 bg-transparent border border-[var(--portfolio-text-secondary)] hover:border-white text-white rounded-lg transition-all flex items-center gap-2"
              >
                <Download size={18} />
                Descargar CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <span className="text-[var(--portfolio-text-muted)] text-sm">ELG</span>
              <a
                href="https://www.behance.net/ernestolazaro1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--portfolio-text-secondary)] hover:text-[var(--portfolio-blue-primary)] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/ernesto-lazaro/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--portfolio-text-secondary)] hover:text-[var(--portfolio-blue-primary)] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow Effect Behind Image */}
              <div className="absolute inset-0 bg-[var(--portfolio-blue-primary)] rounded-full blur-3xl opacity-30" />
              <img
                src={image_cdbf46178ea2d5345171aef0fd65f04e5e481247}
                alt="Ernesto Lázaro Guerrero"
                className="relative w-full max-w-md h-auto object-cover rounded-2xl mix-blend-screen"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}