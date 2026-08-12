import { Award, Trophy, Users, Zap, CheckCircle2 } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    { title: 'Programming in Java', issuer: 'NPTEL' },
    { title: 'Database Management System', issuer: 'NPTEL' },
    { title: 'Learning Data Structures and Algorithms', issuer: 'Udemy' },
    { title: 'Workshop on SQL', issuer: 'Hands-on Workshop' },
    { title: 'Python Programming', issuer: 'NPTEL' },
    { title: 'Gen AI Tools', issuer: 'NASSCOM' },
  ];

  const achievements = [
    {
      title: 'Hackathon Team Leadership',
      description:
        'Led teams of 3–5 members during hackathons, coordinating project development, task allocation, and final presentations.',
      icon: Users,
    },
    {
      title: 'Rapid Project Development',
      description:
        'Built end-to-end project prototypes within limited time constraints using modern technologies.',
      icon: Zap,
    },
  ];

  return (
    <section id="certifications" className="py-20 md:py-32 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Recognitions, verified certifications, and key accomplishments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Certifications List */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xl font-heading font-semibold flex items-center gap-2 mb-6">
              <Award className="text-primary" size={24} />
              <span>Certifications</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="glass-card p-5 rounded-xl flex items-start gap-3 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="p-2 bg-primary/10 rounded-lg text-primary shrink-0 mt-0.5">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm sm:text-base leading-snug">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-primary font-medium mt-1">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements List */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xl font-heading font-semibold flex items-center gap-2 mb-6">
              <Trophy className="text-primary" size={24} />
              <span>Key Achievements</span>
            </h3>
            <div className="space-y-4">
              {achievements.map((item, index) => (
                <div
                  key={index}
                  className="glass-card p-6 rounded-xl flex items-start gap-4 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-base mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
