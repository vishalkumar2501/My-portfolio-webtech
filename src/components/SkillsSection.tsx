import { Code, Database, Cloud, Wrench, Globe, Terminal } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Java (DSA)", "JavaScript", "Python", "TypeScript"],
    },
    {
      title: "Frontend Development",
      icon: Globe,
      skills: ["HTML5", "CSS3", "ReactJS", "Tailwind CSS", "GSAP"],
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "SQL", "MongoDB", "PostgreSQL"],
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: ["AWS (Certified)", "Cloud Fundamentals", "Linux (Red Hat)"],
    },
    {
      title: "Tools & IDEs",
      icon: Wrench,
      skills: ["VS Code", "IntelliJ IDEA", "Eclipse", "Git & GitHub"],
    },
    {
      title: "Other Skills",
      icon: Terminal,
      skills: ["REST APIs", "Context API", "Responsive Design", "UI/UX"],
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px]" />
      </div>

      <div className="container px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent mx-auto rounded-full" />
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit of technologies I use to bring ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="card-glow p-6 rounded-xl group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="skill-badge px-3 py-1.5 rounded-lg text-sm text-foreground/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
