import image_8d872f12ea9741361ad982c31fa76442d9adc8eb from 'figma:asset/8d872f12ea9741361ad982c31fa76442d9adc8eb.png';
import image_cdbf46178ea2d5345171aef0fd65f04e5e481247 from 'figma:asset/cdbf46178ea2d5345171aef0fd65f04e5e481247.png';
import profileImage from 'figma:asset/5ccd15c1839f54a30ff7e3f45788fba272dfaa03.png';
import aboutSectionImage from 'figma:asset/8d872f12ea9741361ad982c31fa76442d9adc8eb.png';

export function AboutSection() {
  const certifications = [
    {
      name: 'Google UX Design',
      type: 'Certified',
      icon: '🎨',
      color: 'var(--portfolio-blue-primary)'
    },
    {
      name: 'Carrera Platzi UX/UI',
      type: 'Diploma',
      icon: '📚',
      color: 'var(--portfolio-blue-primary)'
    },
        {
      name: 'AWS Certified Cloud Practitioner',
      type: 'Certified',
      icon: '☁️',
      color: 'var(--portfolio-blue-primary)'
    }
  ];

  return (
    <section id="sobre-mi" className="py-20 bg-[var(--portfolio-navy-medium)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">Sobre Mi</h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-64 h-64 rounded-2xl overflow-hidden border-2 border-[var(--portfolio-navy-light)] bg-[var(--portfolio-navy-light)]">
              <img
                src={aboutSectionImage}
                alt="Ernesto Lázaro Guerrero"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Description and Certifications */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-[var(--portfolio-text-secondary)] text-lg leading-relaxed">
                La tecnología ha sido el motor que ha guiado cada etapa de mi camino profesional. Con 13 años de experiencia como Ingeniero de Soporte en sitios físicos ahora le doy pauta a un cambio de carrera en lo otro que me apasiona lo que es en el mundo del diseño. 
              </p>
              <p className="text-[var(--portfolio-text-secondary)] text-lg leading-relaxed">
                Hoy, cada proyecto representa la suma de ese recorrido y el compromiso de seguir evolucionando.
              </p>
            </div>

            {/* Certifications */}
            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-[var(--portfolio-navy-light)] border border-[var(--portfolio-blue-primary)]/20 hover:border-[var(--portfolio-blue-primary)]/50 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[var(--portfolio-blue-primary)]/10 flex items-center justify-center text-xl">
                      {cert.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-medium">{cert.name}</h3>
                      <p className="text-[var(--portfolio-text-muted)] text-sm">{cert.type}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}