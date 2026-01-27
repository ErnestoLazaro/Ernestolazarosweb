import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag, Facebook, Linkedin, Share2 } from 'lucide-react';

/**
 * BlogPost - Página individual de artículo de blog
 * 
 * FUNDAMENTOS DE ACCESIBILIDAD (WCAG 2.1 AA):
 * - Navegación por teclado completa
 * - Estructura semántica con article
 * - Contraste de colores adecuado
 * - Botón de regreso claro y accesible
 * - Botones de compartir con etiquetas descriptivas
 */

interface BlogPostData {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
  content: string[];
}

export function BlogPost() {
  const { id } = useParams<{ id: string }>();

  // Función para compartir en redes sociales
  const shareOnSocialMedia = (platform: 'facebook' | 'twitter' | 'linkedin') => {
    const url = window.location.href;
    const title = post?.title || '';
    
    let shareUrl = '';
    
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
    }
    
    // Abrir ventana de compartir
    window.open(shareUrl, '_blank', 'width=600,height=400,scrollbars=yes');
  };

  // Datos de ejemplo de artículos
  const posts: Record<string, BlogPostData> = {
    '1': {
      id: '1',
      title: 'El Futuro del Desarrollo Web en 2026',
      description: 'Exploramos las tendencias y tecnologías que están transformando la forma en que construimos aplicaciones web modernas.',
      image: 'https://images.unsplash.com/photo-1675495277087-10598bf7bcd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwY29kaW5nJTIwcHJvZ3JhbW1pbmd8ZW58MXx8fHwxNzY5NTQ4MjUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      date: '27 de Enero, 2026',
      category: 'Desarrollo Web',
      content: [
        'El desarrollo web ha evolucionado significativamente en los últimos años, y 2026 no es la excepción. Las tecnologías emergentes están redefiniendo la forma en que construimos, desplegamos y mantenemos aplicaciones web.',
        'Una de las tendencias más importantes es el auge de los frameworks modernos que priorizan la experiencia del desarrollador sin sacrificar el rendimiento. React Server Components, por ejemplo, está cambiando la forma en que pensamos sobre la renderización del lado del servidor.',
        'La inteligencia artificial también está jugando un papel crucial. Herramientas como GitHub Copilot y ChatGPT están acelerando el desarrollo, permitiendo a los desarrolladores enfocarse en resolver problemas complejos mientras la IA maneja tareas repetitivas.',
        'El edge computing es otra área emocionante. Con plataformas como Cloudflare Workers y Vercel Edge Functions, podemos ejecutar código más cerca de nuestros usuarios, resultando en experiencias más rápidas y personalizadas.',
        'La accesibilidad web ya no es opcional. Con regulaciones más estrictas y una mayor conciencia, las herramientas y frameworks están incorporando características de accesibilidad por defecto, haciendo más fácil crear experiencias inclusivas.',
        'Finalmente, el desarrollo web está volviéndose más ecológico. La comunidad está cada vez más consciente del impacto ambiental del código, optimizando para reducir el consumo de energía y las emisiones de carbono.'
      ]
    },
    '2': {
      id: '2',
      title: 'Inteligencia Artificial y Machine Learning',
      description: 'Descubre cómo la IA está revolucionando la industria tecnológica y las oportunidades que ofrece para desarrolladores.',
      image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbWFjaGluZSUyMGxlYXJuaW5nfGVufDF8fHx8MTc2OTQ4Mjk2NHww&ixlib=rb-4.1.0&q=80&w=1080',
      date: '20 de Enero, 2026',
      category: 'Inteligencia Artificial',
      content: [
        'La inteligencia artificial y el machine learning están transformando radicalmente la forma en que interactuamos con la tecnología. Desde asistentes virtuales hasta sistemas de recomendación, la IA está en todas partes.',
        'Para los desarrolladores, esto representa una oportunidad única. Las herramientas de IA generativa están democratizando la creación de contenido, permitiendo que personas sin conocimientos técnicos profundos puedan crear aplicaciones complejas.',
        'Los modelos de lenguaje grandes (LLMs) como GPT-4 y sus sucesores están abriendo nuevas posibilidades en procesamiento de lenguaje natural. Las aplicaciones van desde chatbots inteligentes hasta sistemas de análisis de sentimientos y traducción automática.',
        'El machine learning también está revolucionando el análisis de datos. Con frameworks como TensorFlow y PyTorch, los desarrolladores pueden crear modelos personalizados que aprenden de sus datos específicos.',
        'Sin embargo, con gran poder viene gran responsabilidad. Es crucial considerar aspectos éticos como el sesgo en los datos, la privacidad y la transparencia en los sistemas de IA.',
        'El futuro de la IA es prometedor, y los desarrolladores que inviertan tiempo en aprender estas tecnologías estarán bien posicionados para liderar la próxima ola de innovación tecnológica.'
      ]
    },
    '3': {
      id: '3',
      title: 'Mejores Prácticas en TypeScript',
      description: 'Guía completa sobre patrones y mejores prácticas para escribir código TypeScript mantenible y escalable.',
      image: 'https://images.unsplash.com/photo-1637937459053-c788742455be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGUlMjBzY3JlZW58ZW58MXx8fHwxNzY5NDgwMzc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      date: '15 de Enero, 2026',
      category: 'TypeScript',
      content: [
        'TypeScript se ha convertido en el estándar de facto para el desarrollo de aplicaciones JavaScript a gran escala. Su sistema de tipos estáticos ayuda a prevenir errores y mejora la experiencia del desarrollador.',
        'Una de las mejores prácticas es usar tipos estrictos desde el inicio. Habilitar "strict": true en tu tsconfig.json puede parecer intimidante al principio, pero te ayudará a detectar errores temprano en el desarrollo.',
        'Los tipos genéricos son una herramienta poderosa que permite escribir código reutilizable y type-safe. Aprende a usarlos efectivamente para crear funciones y componentes que funcionan con múltiples tipos.',
        'Evita el uso excesivo de "any". Aunque puede ser tentador usar "any" para resolver rápidamente problemas de tipos, esto elimina los beneficios de TypeScript. En su lugar, considera usar "unknown" o tipos más específicos.',
        'Utiliza utility types como Partial, Required, Pick y Omit para manipular tipos existentes. Estos tipos integrados hacen que el código sea más expresivo y reducen la duplicación.',
        'Finalmente, mantén tus tipos organizados. Considera crear un directorio dedicado para tipos compartidos y usa archivos .d.ts para declaraciones de tipos globales. Un código bien organizado es más fácil de mantener y escalar.'
      ]
    }
  };

  const post = id ? posts[id] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-[var(--portfolio-navy-dark)] flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Artículo no encontrado</h1>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--portfolio-blue-primary)] hover:bg-[var(--portfolio-blue-secondary)] text-white rounded-lg transition-all"
          >
            <ArrowLeft size={20} />
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--portfolio-navy-dark)]">
      {/* Header del artículo */}
      <div className="bg-[var(--portfolio-navy-medium)] border-b border-[var(--portfolio-navy-light)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            to="/#blog"
            className="inline-flex items-center gap-2 text-[var(--portfolio-blue-primary)] hover:text-[var(--portfolio-blue-secondary)] mb-6 transition-colors"
            aria-label="Volver a la sección de blog"
          >
            <ArrowLeft size={20} />
            Volver al blog
          </Link>

          {/* Categoría y fecha */}
          <div className="flex items-center gap-4 mb-4">
            <span className="inline-flex items-center gap-2 text-sm text-[var(--portfolio-text-muted)]">
              <Tag size={16} className="text-[var(--portfolio-blue-primary)]" />
              {post.category}
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-[var(--portfolio-text-muted)]">
              <Calendar size={16} className="text-[var(--portfolio-blue-primary)]" />
              {post.date}
            </span>
          </div>

          {/* Título y descripción */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {post.title}
          </h1>
          <p className="text-lg text-[var(--portfolio-text-muted)]">
            {post.description}
          </p>
        </div>
      </div>

      {/* Imagen destacada */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="aspect-[16/9] rounded-xl overflow-hidden border border-[var(--portfolio-navy-light)]">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Contenido del artículo */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-invert prose-lg max-w-none">
          {post.content.map((paragraph, index) => (
            <p key={index} className="text-[var(--portfolio-text-muted)] mb-6 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Botones de compartir */}
        <div className="mt-12 pt-8 border-t border-[var(--portfolio-navy-light)]">
          <div className="flex items-center justify-end gap-3">
            <button
              onClick={() => shareOnSocialMedia('facebook')}
              className="inline-flex items-center justify-center w-10 h-10 bg-[#1877F2] hover:bg-[#1665D8] text-white rounded-lg transition-all"
              aria-label="Compartir en Facebook"
            >
              <Facebook size={20} />
            </button>
            <button
              onClick={() => shareOnSocialMedia('twitter')}
              className="inline-flex items-center justify-center w-10 h-10 bg-[#000000] hover:bg-[#1a1a1a] text-white rounded-lg transition-all"
              aria-label="Compartir en X (Twitter)"
            >
              <Share2 size={20} />
            </button>
            <button
              onClick={() => shareOnSocialMedia('linkedin')}
              className="inline-flex items-center justify-center w-10 h-10 bg-[#0A66C2] hover:bg-[#084D92] text-white rounded-lg transition-all"
              aria-label="Compartir en LinkedIn"
            >
              <Linkedin size={20} />
            </button>
          </div>
        </div>

        {/* Botón de retorno */}
        <div className="mt-12 pt-8 border-t border-[var(--portfolio-navy-light)]">
          <Link
            to="/#blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--portfolio-blue-primary)] hover:bg-[var(--portfolio-blue-secondary)] text-white rounded-lg transition-all"
          >
            <ArrowLeft size={20} />
            Volver al blog
          </Link>
        </div>
      </article>
    </div>
  );
}