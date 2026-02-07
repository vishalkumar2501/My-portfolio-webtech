import { useRef, useEffect } from "react";
import profilePhoto from "@/assets/profile-photo.png";
import { Code2, Cloud, Palette, Lightbulb } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const highlights = [
    {
      icon: Code2,
      title: "Frontend & Full Stack Development",
      description:
        "Building modern, scalable web applications using React, TypeScript, and Java",
    },
    {
      icon: Cloud,
      title: "Cloud Computing",
      description:
        "AWS Certified Cloud Practitioner with cloud fundamentals knowledge",
    },
    {
      icon: Palette,
      title: "UI/UX Engineering",
      description:
        "Designing clean, intuitive, and user-focused interfaces",
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description:
        "Strong analytical thinking with structured DSA approach",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: -50, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        contentRef.current?.children || [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".highlight-card",
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".highlights-grid",
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 relative">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div ref={imageRef} className="relative flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-2xl" />
                <img
                  src={profilePhoto}
                  alt="Vishal Kumar"
                  className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl object-cover border-2 border-primary/30"
                />
                <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-2xl" />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-2xl" />
              </div>
            </div>

            {/* Content */}
            <div ref={contentRef} className="space-y-5">
              <h3 className="text-2xl font-display font-semibold text-foreground">
                Software Engineer | Frontend-Focused | Cloud-Aware
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                I am a{" "}
                <span className="text-primary font-medium">
                  Software Engineer
                </span>{" "}
                focused on building clean, fast, and scalable web applications
                using modern frontend technologies.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                I work with{" "}
                <span className="text-primary font-medium">
                  React, TypeScript, and Java
                </span>{" "}
                and have a solid understanding of backend systems and cloud
                fundamentals.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                As an{" "}
                <span className="text-primary font-medium">
                  AWS Certified Cloud Practitioner
                </span>
                , I understand how applications are built, deployed, and scaled
                in cloud environments.
              </p>

              <blockquote className="border-l-4 border-primary pl-4 py-2 italic text-foreground/90">
                "Clean code, clear thinking, and continuous learning."
              </blockquote>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="card-glow p-4 rounded-xl">
                  <div className="text-2xl font-bold text-primary">2028</div>
                  <div className="text-sm text-muted-foreground">
                    Expected Graduation
                  </div>
                </div>
                <div className="card-glow p-4 rounded-xl">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">
                    Certifications
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="highlights-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="highlight-card card-glow p-6 rounded-xl text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-display font-semibold mb-2 text-foreground">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
