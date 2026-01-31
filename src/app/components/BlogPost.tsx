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

interface LawSection {
  number: string;
  title: string;
  description: string;
  inUXUI: string;
  example: string;
  image: string;
}

interface BlogPostData {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
  content?: string[];
  laws?: LawSection[];
  conclusion?: string[];
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
      title: '🧠 Las 10 leyes principales del UX/UI (explicadas fácil)',
      description: 'El diseño UX/UI no es solo estética: se basa en principios psicológicos que explican cómo las personas perciben, entienden y usan los productos digitales. Estas leyes nos ayudan a diseñar interfaces más claras, intuitivas y humanas.',
      image: 'https://images.unsplash.com/photo-1598668724808-d08ede183e5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1eCUyMHVpJTIwZGVzaWduJTIwcHJpbmNpcGxlcyUyMGxhd3N8ZW58MXx8fHwxNzY5ODkwMzgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      date: '31 de Enero, 2026',
      category: 'UX/UI Design',
      laws: [
        {
          number: '1️⃣',
          title: 'Ley de Hick',
          description: '👉 Mientras más opciones tiene un usuario, más tiempo tarda en decidir.',
          inUXUI: 'Reduce opciones innecesarias. Menús simples, CTAs claros y jerarquía visual ayudan a que el usuario no se sienta abrumado.',
          example: 'Ejemplo: Un botón principal ("Comprar ahora") funciona mejor que cinco botones compitiendo entre sí.',
          image: 'https://images.unsplash.com/photo-1589216532372-1c2a367900d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1eCUyMHVpJTIwZGVzaWduJTIwaGlja3MlMjBsYXd8ZW58MXx8fHwxNzY5ODkwMzcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        },
        {
          number: '2️⃣',
          title: 'Ley de Fitts',
          description: '👉 Cuanto más grande y cercano es un elemento, más fácil es interactuar con él.',
          inUXUI: 'Botones grandes, bien espaciados y accesibles (especialmente en mobile).',
          example: 'Ejemplo: El botón de "Enviar" debe ser más grande y visible que un link secundario.',
          image: 'https://images.unsplash.com/photo-1528747008803-f9f5cc8f1a64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXR0cyUyMGxhdyUyMGludGVyYWN0aW9uJTIwZGVzaWdufGVufDF8fHx8MTc2OTg5MDM3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        },
        {
          number: '3️⃣',
          title: 'Ley de Jakob',
          description: '👉 Los usuarios prefieren interfaces que ya conocen.',
          inUXUI: 'No reinventes la rueda. Usa patrones comunes: menú arriba, logo a la izquierda, carrito en la esquina superior derecha.',
          example: 'Ejemplo: Un e-commerce debe comportarse como otros e-commerce.',
          image: 'https://images.unsplash.com/photo-1717501217778-367e9cdb0e03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwaW50ZXJmYWNlJTIwcGF0dGVybnMlMjBjb25zaXN0ZW5jeXxlbnwxfHx8fDE3Njk4OTAzNzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        },
        {
          number: '4️⃣',
          title: 'Ley de Miller',
          description: '👉 Las personas solo pueden retener entre 5 y 9 elementos a la vez.',
          inUXUI: 'Divide la información en bloques pequeños (chunking).',
          example: 'Ejemplo: Listas cortas, formularios por pasos y secciones bien separadas.',
          image: 'https://images.unsplash.com/photo-1653213096268-d232d07c4f82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2duaXRpdmUlMjBsb2FkJTIwbWVtb3J5JTIwaW5mb3JtYXRpb258ZW58MXx8fHwxNzY5ODkwMzc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        },
        {
          number: '5️⃣',
          title: 'Ley de Tesler (Complejidad)',
          description: '👉 Todo sistema tiene una complejidad mínima inevitable.',
          inUXUI: 'El trabajo del diseñador es absorber la complejidad, no pasársela al usuario.',
          example: 'Ejemplo: Automatizar procesos en lugar de pedirle todo al usuario.',
          image: 'https://images.unsplash.com/photo-1727522974735-44251dfe61b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXNsZXIlMjBsYXclMjBjb21wbGV4aXR5JTIwZGVzaWdufGVufDF8fHx8MTc2OTg5MDM3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        },
        {
          number: '6️⃣',
          title: 'Ley de Postel',
          description: '👉 Sé flexible con lo que recibes y claro con lo que entregas.',
          inUXUI: 'Los sistemas deben tolerar errores humanos.',
          example: 'Ejemplo: Aceptar formatos distintos de fecha o corregir errores de escritura automáticamente.',
          image: 'https://images.unsplash.com/photo-1617609277590-ec2d145ca13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlcnJvciUyMHRvbGVyYW5jZSUyMGZsZXhpYmxlJTIwaW5wdXR8ZW58MXx8fHwxNzY5ODkwMzgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        },
        {
          number: '7️⃣',
          title: 'Ley de Pareto (80/20)',
          description: '👉 El 80% del uso viene del 20% de las funciones.',
          inUXUI: 'Prioriza lo que más usan los usuarios.',
          example: 'Ejemplo: Destacar funciones clave y ocultar opciones avanzadas.',
          image: 'https://images.unsplash.com/photo-1634325846582-aa16f3294a30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJldG8lMjBwcmluY2lwbGUlMjA4MCUyMDIwJTIwcnVsZXxlbnwxfHx8fDE3Njk4OTAzNzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        },
        {
          number: '8️⃣',
          title: 'Ley de Proximidad (Gestalt)',
          description: '👉 Elementos cercanos se perciben como relacionados.',
          inUXUI: 'Agrupa visualmente lo que pertenece a lo mismo.',
          example: 'Ejemplo: Campos de formulario alineados y separados por secciones claras.',
          image: 'https://images.unsplash.com/photo-1555602998-aaead0450f56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXN1YWwlMjBncm91cGluZyUyMHByb3hpbWl0eSUyMHNwYWNpbmd8ZW58MXx8fHwxNzY5ODkwMzgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        },
        {
          number: '9️⃣',
          title: 'Ley de Similitud (Gestalt)',
          description: '👉 Elementos similares se entienden como parte del mismo grupo.',
          inUXUI: 'Mantén consistencia en colores, botones e íconos.',
          example: 'Ejemplo: Todos los botones primarios deben verse igual.',
          image: 'https://images.unsplash.com/photo-1761434558042-5374764b865b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zaXN0ZW50JTIwZGVzaWduJTIwcGF0dGVybnMlMjBlbGVtZW50c3xlbnwxfHx8fDE3Njk4OTAzODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        },
        {
          number: '🔟',
          title: 'Ley de Prägnanz (Simplicidad)',
          description: '👉 Las personas perciben primero las formas más simples.',
          inUXUI: 'Menos es más. Claridad antes que decoración.',
          example: 'Ejemplo: Diseños limpios, con buen uso de espacios en blanco.',
          image: 'https://images.unsplash.com/photo-1761830476467-0ff86dbcc75d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXNtJTIwc2ltcGxpY2l0eSUyMGNsZWFuJTIwZGVzaWdufGVufDF8fHx8MTc2OTg5MDM3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        }
      ],
      conclusion: [
        'Las leyes del UX/UI no son reglas rígidas, sino guías para diseñar experiencias más humanas. Si las aplicas bien, tus productos serán:',
        '✔ Más intuitivos',
        '✔ Más fáciles de usar',
        '✔ Más eficientes',
        '✔ Más agradables'
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
          {post.content?.map((paragraph, index) => (
            <p key={index} className="text-[var(--portfolio-text-muted)] mb-6 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Sección de leyes */}
        {post.laws?.map((law, index) => (
          <div key={index} className="mt-12">
            <h2 className="text-2xl font-bold text-white mb-4">
              {law.number} {law.title}
            </h2>
            <p className="text-lg text-[var(--portfolio-text-muted)] mb-4">
              {law.description}
            </p>
            <div className="bg-[var(--portfolio-navy-light)] p-6 rounded-lg mb-4 border border-[var(--portfolio-navy-medium)]">
              <p className="text-base text-white mb-3 font-semibold">En UX/UI:</p>
              <p className="text-base text-[var(--portfolio-text-muted)] mb-4">
                {law.inUXUI}
              </p>
              <p className="text-base text-[var(--portfolio-blue-primary)] font-medium">
                {law.example}
              </p>
            </div>
            <div className="aspect-[16/9] rounded-xl overflow-hidden border border-[var(--portfolio-navy-light)] mb-8">
              <img
                src={law.image}
                alt={law.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}

        {/* Conclusión */}
        {post.conclusion && (
          <div className="mt-12 p-8 bg-gradient-to-br from-[var(--portfolio-blue-primary)]/10 to-[var(--portfolio-navy-light)] rounded-xl border border-[var(--portfolio-blue-primary)]/30">
            <h2 className="text-2xl font-bold text-white mb-6">✨ Conclusión</h2>
            {post.conclusion.map((line, index) => (
              <p key={index} className="text-lg text-[var(--portfolio-text-muted)] mb-2 leading-relaxed">
                {line}
              </p>
            ))}
          </div>
        )}

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