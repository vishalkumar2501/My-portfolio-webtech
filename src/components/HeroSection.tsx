import { useEffect, useState, useRef } from "react";
import profilePhoto from "@/assets/profile-photo.png";
import { Download, Mail, Github, Linkedin, ExternalLink, User, MapPin, FileText, Clock } from "lucide-react";
import gsap from "gsap";

const HeroSection = () => {
  const [currentTime, setCurrentTime] = useState("");
  const heroRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Resume links
  const resumeViewLink = "https://drive.google.com/file/d/1dK0C7xDflMAF49j1LDa0lrsvIJ32DD4D/view?usp=drive_link";
  const resumeDownloadLink = "https://drive.google.com/uc?export=download&id=1dK0C7xDflMAF49j1LDa0lrsvIJ32DD4D";

  // AWS Certificate verification
  const awsVerificationLink = "https://aws.amazon.com/verification";

  // Social links
  const socialLinks = [
    { icon: Github, href: "https://github.com/vishalkumar2501", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/vishal-kumar2501kvs/", label: "LinkedIn" },
    { 
      icon: () => (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
        </svg>
      ), 
      href: "https://leetcode.com/u/vishalkumar25015/", 
      label: "LeetCode" 
    },
    { 
      icon: () => (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ), 
      href: "https://x.com/vishalkumar2501", 
      label: "X (Twitter)" 
    },
    { 
      icon: () => (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ), 
      href: "https://instagram.com/vishalkumar2501kvs", 
      label: "Instagram" 
    },
  ];

  // Update IST time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const istTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
      setCurrentTime(istTime.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Photo animation
      gsap.fromTo(
        photoRef.current,
        { opacity: 0, scale: 0.8, x: -50 },
        { opacity: 1, scale: 1, x: 0, duration: 1, ease: "power3.out", delay: 0.2 }
      );

      // Content animation
      gsap.fromTo(
        contentRef.current?.children || [],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out", delay: 0.4 }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px]" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      {/* Top bar - Open for Work & Local Time */}
      <div className="absolute top-24 left-0 right-0 px-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          {/* Open for Work Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border">
            <span className="w-2.5 h-2.5 rounded-full bg-[hsl(var(--status-available))] animate-pulse" />
            <span className="text-sm text-foreground font-medium">Open for Work</span>
          </div>

          {/* Local Time */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Local Time (IST)</span>
            <span className="text-sm text-foreground font-mono font-medium">{currentTime}</span>
          </div>
        </div>
      </div>

      <div className="container relative z-10 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Profile Photo */}
          <div ref={photoRef} className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-primary/30 blur-2xl animate-pulse" />
              <div className="relative p-1 rounded-2xl bg-gradient-to-br from-primary/50 to-primary/20">
                <img
                  src={profilePhoto}
                  alt="Vishal Kumar"
                  className="w-72 h-80 md:w-80 md:h-96 rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div ref={contentRef} className="text-left space-y-6">
            {/* Greeting */}
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-2xl">👋</span>
              <span className="font-mono text-sm tracking-wider">Hello I Am</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
              <span className="text-foreground">Vishal</span>{" "}
              <span className="text-gradient">Kumar</span>
            </h1>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed max-w-xl font-mono text-sm">
              Experienced full-stack web developer from Ghaziabad, with a passion for building 
              complex, unique, and user-friendly applications using React, Java, and modern 
              web technologies, and a proven track record of delivering robust, scalable solutions.
            </p>

            {/* AWS Badge */}
            <a
              href={awsVerificationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 hover:bg-primary/20 transition-all group"
            >
              <span className="text-primary text-sm font-medium">
                ☁️ AWS Certified Cloud Practitioner (CLF-C02)
              </span>
              <ExternalLink className="w-4 h-4 text-primary/70 group-hover:text-primary transition-colors" />
            </a>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary-foreground text-primary font-medium transition-all hover:scale-105 hover:opacity-90"
              >
                <Mail className="w-5 h-5" />
                CONTACT ME
              </a>
              <a
                href={resumeDownloadLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-card border border-border text-foreground font-medium transition-all hover:border-primary/50 hover:bg-card/80"
              >
                <Download className="w-5 h-5" />
                DOWNLOAD RESUME
              </a>
            </div>

            {/* Social Links - Horizontal */}
            <div className="flex items-center gap-4 pt-4">
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
                    aria-label={link.label}
                  >
                    {typeof IconComponent === 'function' && !IconComponent.prototype ? (
                      <IconComponent />
                    ) : (
                      <IconComponent className="w-5 h-5" />
                    )}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Dotted line separator */}
      <div className="absolute bottom-20 left-0 right-0 px-4">
        <div className="max-w-6xl mx-auto border-t border-dashed border-border/50" />
      </div>
    </section>
  );
};

export default HeroSection;
