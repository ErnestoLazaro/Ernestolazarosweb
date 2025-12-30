import { ExternalLink } from 'lucide-react';

export function PortfolioSection() {
  const projects = [
    {
      title: 'Electrosound App',
      category: 'UI/UX Design',
      image: 'https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjB1aSUyMGRlc2lnbnxlbnwxfHx8fDE3NjcxMTQyMzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      link: '#'
    },
    {
      title: 'El Locazo de los Dioses',
      category: 'E-commerce',
      image: 'https://images.unsplash.com/photo-1694599048261-a1de00f0117e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc2NzAyOTg0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      link: '#'
    },
    {
      title: 'Platzi Messages',
      category: 'Chat Interface',
      image: 'https://images.unsplash.com/photo-1763810021881-49b45b0717d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGF0JTIwaW50ZXJmYWNlJTIwbWVzc2FnaW5nfGVufDF8fHx8MTc2NzExNDIzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      link: '#'
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
