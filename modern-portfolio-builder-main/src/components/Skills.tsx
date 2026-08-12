import { Code2, Brain, Wrench, Users } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming & Computer Science',
    icon: Code2,
    skills: ['Python', 'Java', 'Data Structures & Algorithms', 'OOP', 'SQL'],
  },
  {
    title: 'AI & Data',
    icon: Brain,
    skills: ['Machine Learning', 'Data Analytics', 'MySQL', 'Excel'],
  },
  {
    title: 'Development & Tools',
    icon: Wrench,
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'Google Colab'],
  },
  {
    title: 'Soft Skills',
    icon: Users,
    skills: ['Problem Solving', 'Communication', 'Team Collaboration', 'Time Management', 'Adaptability'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Technologies and tools I use to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass-card p-8 rounded-2xl hover:border-primary/50 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <category.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-2xl font-heading font-semibold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-muted text-sm font-medium text-foreground/80 hover:bg-primary/20 hover:text-primary transition-colors duration-300"
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
};

export default Skills;
