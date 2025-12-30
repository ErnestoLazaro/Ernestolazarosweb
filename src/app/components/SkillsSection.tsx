export function SkillsSection() {
  const skillCategories = [
    {
      title: 'Design Tools',
      skills: ['Figma', 'Adobe XD', 'Sketch', 'Illustrator', 'Photoshop']
    },
    {
      title: 'UX/UI',
      skills: ['User Research', 'Wireframing', 'Prototyping', 'User Testing', 'Design Systems']
    },
    {
      title: 'Development',
      skills: ['HTML/CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Responsive Design']
    },
    {
      title: 'Soft Skills',
      skills: ['Communication', 'Team Collaboration', 'Problem Solving', 'Time Management', 'Adaptability']
    }
  ];

  return (
    <section id="habilidades" className="py-20 bg-[var(--portfolio-navy-medium)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">Habilidades</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-[var(--portfolio-navy-light)] border border-[var(--portfolio-blue-primary)]/20 hover:border-[var(--portfolio-blue-primary)]/50 transition-all"
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 bg-[var(--portfolio-navy-dark)] text-[var(--portfolio-text-secondary)] rounded-lg text-sm border border-[var(--portfolio-navy-light)] hover:border-[var(--portfolio-blue-primary)]/30 hover:text-white transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
