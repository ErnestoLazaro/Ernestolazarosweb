import image_23edc61b227cf1c26b2bba46200005c2837bafe9 from 'figma:asset/23edc61b227cf1c26b2bba46200005c2837bafe9.png';
import image_143eacea212c0129e9c3f06340093b8093f06f7b from 'figma:asset/143eacea212c0129e9c3f06340093b8093f06f7b.png';
import image_34e81ddd289cf5864ad561395494af2e546b1a9e from 'figma:asset/34e81ddd289cf5864ad561395494af2e546b1a9e.png';
import image_c8e9ed0324ffd44d956731c451204fed7aefec0c from 'figma:asset/c8e9ed0324ffd44d956731c451204fed7aefec0c.png';
import image_83bec1e4593f666d9845bdc1ab4124305b91b7f7 from 'figma:asset/83bec1e4593f666d9845bdc1ab4124305b91b7f7.png';
import image_144c61191f6810894749e47554b00ef20b6ad5b6 from 'figma:asset/144c61191f6810894749e47554b00ef20b6ad5b6.png';
import image_e2b2d74c78a4cba2f97e4ac5b41a1677fa913bcc from 'figma:asset/e2b2d74c78a4cba2f97e4ac5b41a1677fa913bcc.png';
import image_2a242cb28c3d2cbccfc18213ae4a527c748b7f18 from 'figma:asset/2a242cb28c3d2cbccfc18213ae4a527c748b7f18.png';
import image_bcfb8fd68beebea35db5c989f191145e82e71dd5 from 'figma:asset/bcfb8fd68beebea35db5c989f191145e82e71dd5.png';
import image_4aae47470f3f7a772da7f54c3a73a59848863074 from 'figma:asset/4aae47470f3f7a772da7f54c3a73a59848863074.png';
import { ExternalLink } from 'lucide-react';

export function PortfolioSection() {
  const projects = [
    {
      title: 'Quiero mi Tamal app',
      category: 'Delivery',
      description: 'Aplicación de delivery diseñada para conectar a los amantes de los tamales con los mejores vendedores locales. Ofrece una experiencia de compra intuitiva con seguimiento en tiempo real del pedido y múltiples opciones de pago para facilitar la entrega a domicilio.',
      image: image_2a242cb28c3d2cbccfc18213ae4a527c748b7f18,
      link: 'https://quieromitamalapp.figma.site/'
    },
    {
      title: 'Electrosound 2026',
      category: 'E-Commerce',
      description: 'Tienda en línea moderna especializada en equipos de audio profesional y dispositivos electrónicos. Integra un catálogo completo de productos con sistema de filtros avanzados, carrito de compras y proceso de checkout optimizado para conversión.',
      image: image_bcfb8fd68beebea35db5c989f191145e82e71dd5,
      link: 'https://electrosound.figma.site/'
    },
    {
      title: 'Web Profesional',
      category: 'Landing Page',
      description: 'Landing page personal diseñada para destacar experiencia profesional y proyectos destacados. Implementa diseño responsivo, animaciones sutiles y un enfoque en la conversión de visitantes mediante call-to-actions estratégicos y formulario de contacto directo.',
      image: image_4aae47470f3f7a772da7f54c3a73a59848863074,
      link: 'https://www.figma.com/proto/4UGHGya41HgTRF305QfI7V/MVP_Ernesto_Lazaro?node-id=0-1&t=6ymlxkT71qo1srPi-1/'
    },
    {
      title: 'Platzi Messages',
      category: 'Chat Interface',
      description: 'Interfaz de mensajería instantánea desarrollada como parte del reto Platzi Master. Incluye sistema de chat en tiempo real, notificaciones push, gestión de conversaciones grupales e individuales, y diseño adaptado para múltiples dispositivos.',
      image: image_23edc61b227cf1c26b2bba46200005c2837bafe9,
      link: 'https://www.behance.net/gallery/120904329/Reto-Platzi-Master'
    },
    {
      title: 'Electrosound App',
      category: 'Retail',
      description: 'Aplicación móvil de retail para consulta de productos electrónicos y equipos de audio. Ofrece búsqueda inteligente, comparación de productos, lista de deseos, y sistema de notificaciones para ofertas especiales y disponibilidad de artículos.',
      image: image_34e81ddd289cf5864ad561395494af2e546b1a9e,
      link: 'https://www.behance.net/gallery/158172957/Electrosound-App'
    },
    {
      title: 'Mercado Renovable',
      category: 'E-commerce',
      description: 'Plataforma de e-commerce enfocada en productos de energía renovable y soluciones sustentables. Diseñada para educar a los usuarios sobre opciones ecológicas mientras facilita la compra de paneles solares, baterías y equipos de eficiencia energética.',
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
                <p className="text-[var(--portfolio-text-muted)] text-sm mb-2">
                  {project.category}
                </p>
                <p className="text-[var(--portfolio-text-muted)] text-sm leading-relaxed mb-4">
                  {project.description}
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