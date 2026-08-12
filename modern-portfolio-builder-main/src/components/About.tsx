import { GraduationCap, Target, User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Get to know my background, education, and what drives me as a developer.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
            <div className="relative glass-card p-2 rounded-2xl">
              <img
                src="/images/profile.jpeg"
                alt="Patthan Amreen Khan"
                className="w-full aspect-[3/4] object-cover object-top rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Bio Content */}
          <div className="space-y-8">
            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <User className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2">Who I Am</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I am a final-year B.Tech Computer Science (AI & ML) student at Vignan Institute of Technology and Sciences with strong programming and problem-solving skills. My primary interests include Python, Java, Data Structures & Algorithms, machine learning, data analytics, and software development.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2">Education</h3>
                  <p className="text-muted-foreground leading-relaxed font-medium text-foreground">
                    Vignan Institute of Technology and Sciences
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    B.Tech — Computer Science Engineering (AI & ML) (2023–2027)
                  </p>
                  <p className="text-sm font-semibold text-primary mt-1">
                    Status: Final-Year Student • Percentage: 86%
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Target className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2">Career Goal</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Seeking an entry-level Software Engineering or AI/ML role where I can apply my technical knowledge, continue learning, and contribute to impactful projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
