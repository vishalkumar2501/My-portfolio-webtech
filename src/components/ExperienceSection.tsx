import { useRef, useEffect } from "react";
import { Briefcase, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const responsibilities = [
    "Designed and developed responsive web applications with modern UI/UX",
    "Created user-friendly, accessible layouts following best practices",
    "Implemented frontend features using HTML, CSS, and JavaScript",
    "Worked across the full project lifecycle from design to deployment",
    "Strengthened problem-solving and development skills through hands-on projects",
    "Collaborated on graphic design elements for cohesive brand experiences",
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".exp-title",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".exp-card",
        { opacity: 0, y: 40, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".exp-card",
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        ".exp-item",
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".exp-list",
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-20 relative">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="exp-title text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Professional <span className="text-gradient">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent mx-auto rounded-full" />
          </div>

          {/* Experience Card */}
          <div className="exp-card card-glow p-8 rounded-2xl relative overflow-hidden">
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-2xl" />
            
            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground">
                    UI/UX Web Developer (Full Stack) & Graphic Designer
                  </h3>
                  <p className="text-muted-foreground mt-1">
                    Academic & Self-Directed Projects
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      Project Experience
                    </span>
                  </div>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="space-y-3">
                <h4 className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
                  Key Responsibilities
                </h4>
                <ul className="exp-list space-y-3">
                  {responsibilities.map((item, index) => (
                    <li key={index} className="exp-item flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
