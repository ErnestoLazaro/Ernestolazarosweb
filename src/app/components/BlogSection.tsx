import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

/**
 * BlogSection - Sección de Blog de Tecnología
 * 
 * FUNDAMENTOS DE ACCESIBILIDAD (WCAG 2.1 AA):
 * - Navegación por teclado completa
 * - Enlaces descriptivos y accesibles
 * - Contraste de colores adecuado
 * - Estructura semántica con landmarks
 */

interface BlogPost {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
}

export function BlogSection() {
  const posts: BlogPost[] = [
    {
      id: '1',
      title: '🧠 Las 10 leyes principales del UX/UI (explicadas fácil)',
      description: 'El diseño UX/UI no es solo estética: se basa en principios psicológicos que explican cómo las personas perciben, entienden y usan los productos digitales.',
      image: 'https://images.unsplash.com/photo-1598668724808-d08ede183e5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1eCUyMHVpJTIwZGVzaWduJTIwcHJpbmNpcGxlcyUyMGxhd3N8ZW58MXx8fHwxNzY5ODkwMzgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      date: '31 de Enero, 2026',
      category: 'UX/UI Design'
    },
    {
      id: '2',
      title: 'Inteligencia Artificial y Machine Learning',
      description: 'Descubre cómo la IA está revolucionando la industria tecnológica y las oportunidades que ofrece para desarrolladores.',
      image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbWFjaGluZSUyMGxlYXJuaW5nfGVufDF8fHx8MTc2OTQ4Mjk2NHww&ixlib=rb-4.1.0&q=80&w=1080',
      date: '20 de Enero, 2026',
      category: 'Inteligencia Artificial'
    },
    {
      id: '3',
      title: 'Mejores Prácticas en TypeScript',
      description: 'Guía completa sobre patrones y mejores prácticas para escribir código TypeScript mantenible y escalable.',
      image: 'https://images.unsplash.com/photo-1637937459053-c788742455be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGUlMjBzY3JlZW58ZW58MXx8fHwxNzY5NDgwMzc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      date: '15 de Enero, 2026',
      category: 'TypeScript'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-[var(--portfolio-navy-dark)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Mi Blog Tech</h2>
          <p className="text-[var(--portfolio-text-muted)] max-w-2xl">
            Artículos sobre tecnología, desarrollo web, y las últimas tendencias en la industria del software.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group relative bg-[var(--portfolio-navy-light)] rounded-xl overflow-hidden border border-[var(--portfolio-navy-light)] hover:border-[var(--portfolio-blue-primary)]/50 transition-all"
            >
              {/* Imagen del artículo */}
              <div className="aspect-[16/9] overflow-hidden bg-[var(--portfolio-navy-medium)]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Contenido del artículo */}
              <div className="p-6">
                {/* Categoría y fecha */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium text-[var(--portfolio-blue-primary)] bg-[var(--portfolio-blue-primary)]/10 px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <span className="text-xs text-[var(--portfolio-text-muted)]">
                    {post.date}
                  </span>
                </div>

                {/* Título */}
                <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2">
                  {post.title}
                </h3>

                {/* Descripción */}
                <p className="text-[var(--portfolio-text-muted)] mb-4 line-clamp-3">
                  {post.description}
                </p>

                {/* Botón de leer más */}
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--portfolio-blue-primary)] hover:bg-[var(--portfolio-blue-secondary)] text-white rounded-lg transition-all text-sm font-medium"
                  aria-label={`Leer artículo completo: ${post.title}`}
                >
                  Seguir leyendo
                  <ArrowRight size={16} />
                </Link>
              </div>

              {/* Efecto hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--portfolio-blue-primary)]/0 to-[var(--portfolio-blue-primary)]/0 group-hover:from-[var(--portfolio-blue-primary)]/10 group-hover:to-transparent transition-all pointer-events-none" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}