import { useRef, useEffect } from "react";
import { GraduationCap, BookOpen, Award } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EducationSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const education = [
    {
      icon: GraduationCap,
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science & Engineering",
      institution: "KIET Group of Institutions, Ghaziabad",
      university: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
      year: "2024 – 2028 (Expected)",
      status: "Pursuing",
    },
    {
      icon: BookOpen,
      degree: "Senior Secondary (Class XII)",
      field: "Science Stream",
      institution: "Kendriya Vidyalaya",
      year: "2023 – 2024",
      score: "71%",
    },
    {
      icon: Award,
      degree: "Secondary (Class X)",
      field: "General",
      institution: "Kendriya Vidyalaya",
      year: "2021 – 2022",
      score: "85%",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        ".edu-title",
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

      // Timeline items animation
      gsap.fromTo(
        ".edu-card",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".edu-timeline",
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="education" ref={sectionRef} className="py-20 relative">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="edu-title text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              <span className="text-gradient">Education</span> Journey
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent mx-auto rounded-full" />
          </div>

          {/* Timeline */}
          <div className="edu-timeline relative">
            {/* Vertical Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

            <div className="space-y-12">
              {education.map((item, index) => (
                <div
                  key={index}
                  className={`edu-card relative flex items-start gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-primary shadow-lg shadow-primary/50" />

                  {/* Content Card */}
                  <div className={`ml-14 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                    <div className="card-glow p-6 rounded-xl">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-display font-semibold text-foreground">
                            {item.degree}
                          </h3>
                          <p className="text-sm text-primary">{item.field}</p>
                        </div>
                      </div>

                      <p className="text-muted-foreground text-sm mb-2">
                        {item.institution}
                      </p>
                      
                      {item.university && (
                        <p className="text-muted-foreground/70 text-xs mb-3">
                          {item.university}
                        </p>
                      )}

                      <div className="flex items-center justify-between">
                        <span className="text-xs px-2 py-1 rounded-md bg-secondary text-muted-foreground">
                          {item.year}
                        </span>
                        {item.status ? (
                          <span className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary font-medium">
                            {item.status}
                          </span>
                        ) : (
                          <span className="text-sm font-semibold text-primary">
                            {item.score}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alternate layout */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
