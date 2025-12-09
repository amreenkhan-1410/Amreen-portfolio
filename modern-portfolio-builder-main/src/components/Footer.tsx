import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-heading font-bold gradient-text mb-2">
              Patthan Amreen Khan
            </h3>
            <p className="text-muted-foreground text-sm flex items-center gap-1 justify-center md:justify-start">
              Made with <Heart size={14} className="text-primary" /> © {currentYear}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:pamreenkhan14@gmail.com"
              className="p-3 rounded-lg bg-secondary hover:bg-primary/20 hover:text-primary transition-all"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://github.com/amreenkhan-1410"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary hover:bg-primary/20 hover:text-primary transition-all"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/amreen-khan-43b000324/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary hover:bg-primary/20 hover:text-primary transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
