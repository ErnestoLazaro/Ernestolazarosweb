import image_23edc61b227cf1c26b2bba46200005c2837bafe9 from 'figma:asset/23edc61b227cf1c26b2bba46200005c2837bafe9.png';
import image_143eacea212c0129e9c3f06340093b8093f06f7b from 'figma:asset/143eacea212c0129e9c3f06340093b8093f06f7b.png';
import image_34e81ddd289cf5864ad561395494af2e546b1a9e from 'figma:asset/34e81ddd289cf5864ad561395494af2e546b1a9e.png';
import { ExternalLink } from 'lucide-react';

export function PortfolioSection() {
  const projects = [
    {
      title: 'Platzi Messages',
      category: 'Chat Interface',
      image: image_23edc61b227cf1c26b2bba46200005c2837bafe9,
      link: 'https://www.behance.net/gallery/120904329/Reto-Platzi-Master'
    },
    {
      title: 'Electrosound App',
      category: 'Retail',
      image: image_34e81ddd289cf5864ad561395494af2e546b1a9e,
      link: 'https://www.behance.net/gallery/158172957/Electrosound-App'
    },
    {
      title: 'Mercado Renovable',
      category: 'E-commerce',
      image: image_143eacea212c0129e9c3f06340093b8093f06f7b,
      link: 'https://www.behance.net/gallery/148775089/Redux-Energy-Mercado-Renovable'
    }
  ];

  return (
    <section id="portafolio" className="py-20 bg-[var(--portfolio-navy-dark)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">Portafolio</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-[var(--portfolio-navy-light)] rounded-xl overflow-hidden border border-[var(--portfolio-navy-light)] hover:border-[var(--portfolio-blue-primary)]/50 transition-all"
            >
              {/* Project Image */}
              <div className="aspect-[4/3] overflow-hidden bg-[var(--portfolio-navy-medium)]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-[var(--portfolio-text-muted)] mb-4">
                  {project.category}
                </p>
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--portfolio-blue-primary)] hover:bg-[var(--portfolio-blue-secondary)] text-white rounded-lg transition-all text-sm"
                >
                  Ver Caso
                  <ExternalLink size={16} />
                </a>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--portfolio-blue-primary)]/0 to-[var(--portfolio-blue-primary)]/0 group-hover:from-[var(--portfolio-blue-primary)]/10 group-hover:to-transparent transition-all pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}