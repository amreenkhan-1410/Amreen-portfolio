import { Github } from 'lucide-react';

const projects = [
  {
    title: 'Meridian Market Basket Analysis',
    description: 'A data analytics project using the Apriori algorithm to analyze customer transaction data, identify frequently purchased item combinations and association rules, and generate product recommendations based on purchasing patterns.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    techStack: ['Python', 'Apriori', 'Data Analytics'],
    github: 'https://github.com/amreenkhan-1410',
  },
  {
    title: 'Heart Disease Prediction Using Machine Learning',
    description: 'Developed a heart disease prediction model using Python, Pandas, Scikit-learn, and Logistic Regression, including data preprocessing, model training, and performance evaluation.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
    techStack: ['Python', 'Pandas', 'Scikit-learn', 'Logistic Regression', 'Machine Learning'],
    github: 'https://github.com/amreenkhan-1410/Machine-learning.git',
  },
  {
    title: 'Layoffs Data Cleaning and Preprocessing Using SQL',
    description: 'Performed comprehensive data cleaning and preprocessing on a real-world layoffs dataset using MySQL, including duplicate detection and removal, data standardization, missing/null value handling, correction of inconsistencies, and preparation for analysis.',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&h=400&fit=crop',
    techStack: ['SQL', 'MySQL', 'Data Cleaning', 'Data Preprocessing'],
    github: 'https://github.com/amreenkhan-1410',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A selection of my recent work and personal projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card rounded-2xl overflow-hidden group hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={18} />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
