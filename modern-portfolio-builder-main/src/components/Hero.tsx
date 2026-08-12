import { ArrowDown, Briefcase, Mail, GraduationCap, Award, Code2, Download } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-[92vh] flex items-center justify-center relative overflow-hidden pt-24 pb-12"
    >
      {/* Decorative gradient glowing spheres */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="section-container relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <GraduationCap size={16} />
            <span>Final-Year B.Tech CSE (AI & ML) • Vignan Institute</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-heading font-extrabold mb-6 tracking-tight">
            Hello, I'm <span className="gradient-text">Patthan Amreen Khan</span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-semibold text-foreground/90 mb-6 max-w-3xl mx-auto leading-snug">
            Computer Science (AI & ML) Student | Software & AI/ML Enthusiast
          </h2>
          
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Passionate final-year computer science student with a strong foundation in Python, Java, Data Structures & Algorithms, Machine Learning, and Web Development. Dedicated to building intelligent applications and solving real-world challenges.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-10 text-xs sm:text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary/80 border border-border">
              <Code2 size={14} className="text-primary" /> Python & Java
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary/80 border border-border">
              <Award size={14} className="text-primary" /> 86% Percentage
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary/80 border border-border">
              <Briefcase size={14} className="text-primary" /> Web Dev Intern @ Unify Labs
            </span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('#resume')}
              className="btn-primary text-base shadow-md hover:shadow-lg"
            >
              <Download size={20} />
              Resume / CV
            </button>
            <button
              onClick={() => scrollToSection('#projects')}
              className="btn-secondary text-base"
            >
              <Briefcase size={20} />
              View Projects
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="btn-secondary text-base"
            >
              <Mail size={20} />
              Contact Me
            </button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center animate-bounce">
          <button
            onClick={() => scrollToSection('#about')}
            className="text-muted-foreground hover:text-primary transition-colors p-2"
            aria-label="Scroll to about section"
          >
            <ArrowDown size={28} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
