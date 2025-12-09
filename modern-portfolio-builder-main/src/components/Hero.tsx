import { ArrowDown, Briefcase, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      style={{ background: 'var(--gradient-hero)' }}
    >
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-primary font-medium mb-4 animate-fade-up opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            Hello, I'm
          </p>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold mb-6 animate-fade-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <span className="gradient-text">Patthan Amreen Khan</span>
          </h1>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-foreground/90 mb-6 animate-fade-up opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            Aspiring Web Developer
          </h2>
          
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            Passionate about building clean and user-friendly web interfaces. 
            Turning ideas into responsive websites.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            <button
              onClick={() => scrollToSection('#projects')}
              className="btn-primary"
            >
              <Briefcase size={20} />
              View Projects
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="btn-secondary"
            >
              <Mail size={20} />
              Contact Me
            </button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('#about')}
            className="text-muted-foreground hover:text-primary transition-colors"
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
