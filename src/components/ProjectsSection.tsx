import { useRef, useEffect } from "react";
import { ExternalLink, Github, Link } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "Obays Agency Website",
      description:
        "A modern, animated agency website showcasing creative design and smooth user interactions with GSAP animations. Features smooth scroll effects, interactive UI elements, and responsive design.",
      techStack: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "GSAP"],
      liveLink: "https://vishalkumar2501.github.io/Obys-Agency/",
      githubLink: "https://github.com/vishalkumar2501/Obys-Agency",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    },
    {
      title: "Employee Management System",
      description:
        "A complete employee management application with CRUD operations, state management using Context API, and local storage persistence. Clean dashboard UI with modern design.",
      techStack: ["ReactJS", "JavaScript", "Context API", "Local Storage"],
      liveLink: null,
      githubLink: "https://github.com/vishalkumar2501",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        ".projects-title",
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

      // Project cards animation
      const cards = projectsRef.current?.querySelectorAll(".project-card");
      if (cards) {
        cards.forEach((card, index) => {
          gsap.fromTo(
            card,
            { opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 30 },
            {
              opacity: 1,
              x: 0,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
              },
            }
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20 relative">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="projects-title mb-12">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">🔗</span>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                Dev Work Showcase
              </h2>
            </div>
            <p className="text-muted-foreground font-mono text-sm">
              A glimpse into my best web projects—clean, functional, and modern.
            </p>
            <div className="w-full h-px bg-gradient-to-r from-border via-border/50 to-transparent mt-4" />
          </div>

          {/* Projects List */}
          <div ref={projectsRef} className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-card group rounded-xl border border-border bg-card/30 backdrop-blur-sm overflow-hidden hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Project Image */}
                  <div className="md:w-2/5 relative overflow-hidden">
                    <div className="aspect-video md:aspect-auto md:h-full">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/80 md:bg-gradient-to-r md:from-transparent md:to-card" />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                    {/* Title with link icons */}
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-xl md:text-2xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-md hover:bg-primary/10 transition-colors"
                            aria-label="GitHub Repository"
                          >
                            <Github className="w-4 h-4 text-muted-foreground hover:text-primary" />
                          </a>
                        )}
                        {project.liveLink && (
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-md hover:bg-primary/10 transition-colors"
                            aria-label="Live Preview"
                          >
                            <Link className="w-4 h-4 text-muted-foreground hover:text-primary" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech, tIndex) => (
                        <span
                          key={tIndex}
                          className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-mono">
                      {project.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all hover:scale-105"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Preview
                        </a>
                      )}
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card text-foreground text-sm font-medium hover:border-primary/50 transition-all hover:scale-105"
                        >
                          <Github className="w-4 h-4" />
                          View Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
