import { Briefcase, Calendar, Building2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'Web Development Intern',
      company: 'Unify Labs',
      period: 'January 2026 – February 2026',
      type: '4-week Virtual Internship',
      description:
        'Participated in a 4-week virtual internship program focused on web development technologies, responsive design principles, and building modern web interface components.',
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle mx-auto">
            My professional internship and hands-on experience.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div className="flex items-start sm:items-center gap-3">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-foreground">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-primary font-medium text-sm mt-1">
                      <Building2 size={16} />
                      <span>{exp.company}</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-xs bg-muted px-2.5 py-1 rounded-full text-foreground/80 font-normal">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-muted-foreground bg-muted px-3 py-1.5 rounded-full self-start sm:self-auto font-medium">
                  <Calendar size={14} className="text-primary" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
