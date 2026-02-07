import { useRef, useEffect } from "react";
import { Award, ExternalLink, CheckCircle, Download } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CertificationsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const awsCertLink = "https://aws.amazon.com/verification";

  const certifications = [
    {
      name: "AWS Certified Cloud Practitioner",
      code: "CLF-C02",
      issuer: "Amazon Web Services",
      date: "February 2026",
      validUntil: "February 2029",
      validationNumber: "8d6ccaa04bf042f3b776118d93af4df0",
      featured: true,
      verifyLink: awsCertLink,
    },
    {
      name: "Java Programming",
      issuer: "Oracle",
      description: "Core Java fundamentals and OOP concepts",
      icon: "☕",
    },
    {
      name: "DBMS & SQL",
      issuer: "Oracle",
      description: "Database management and SQL querying",
      icon: "🗄️",
    },
    {
      name: "Python Programming",
      issuer: "Infosys",
      description: "Python fundamentals and applications",
      icon: "🐍",
    },
    {
      name: "Red Hat Linux",
      issuer: "Red Hat",
      description: "Linux system administration basics",
      icon: "🐧",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cert-title",
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
        ".featured-cert",
        { opacity: 0, scale: 0.95, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".featured-cert",
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        ".cert-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".cert-grid",
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="certifications" ref={sectionRef} className="py-20 relative">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="cert-title text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              <span className="text-gradient">Certifications</span> & Credentials
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent mx-auto rounded-full" />
          </div>

          {/* Featured Certification - AWS */}
          <div className="featured-cert mb-12">
            <div className="card-glow p-8 rounded-2xl relative overflow-hidden border-primary/30">
              {/* Glow effect */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/20 blur-3xl" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                    ⭐ Featured Certification
                  </span>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-xl bg-[#232F3E] flex items-center justify-center flex-shrink-0">
                      <svg className="w-10 h-10" viewBox="0 0 256 256" fill="none">
                        <path d="M72.4 138.8C72.4 142.4 72.8 145.3 73.5 147.5C74.3 149.7 75.2 152.1 76.5 154.7C77 155.6 77.2 156.5 77.2 157.3C77.2 158.5 76.5 159.7 75 160.9L69.1 164.9C68.1 165.6 67.1 165.9 66.2 165.9C65 165.9 63.8 165.3 62.6 164.2C61.3 162.9 60.2 161.5 59.2 160C58.2 158.4 57.2 156.6 56.1 154.4C47.8 164.4 37.3 169.4 24.6 169.4C15.5 169.4 8.2 166.7 2.8 161.3C-2.6 155.9 -5.3 148.7 -5.3 139.7C-5.3 130.1 -2 122.4 5.7 116.6C13.4 110.8 23.8 107.9 37.1 107.9C41.1 107.9 45.2 108.2 49.5 108.7C53.8 109.2 58.2 110 62.9 111V102.4C62.9 94 61 88 57.3 84.4C53.5 80.8 47.3 79 38.6 79C34.5 79 30.3 79.5 25.9 80.6C21.5 81.7 17.2 83.1 13 84.9C10.8 85.9 9.2 86.5 8.1 86.8C7 87.1 6.2 87.2 5.5 87.2C3.5 87.2 2.5 85.6 2.5 82.3V77.1C2.5 74.7 2.8 72.9 3.5 71.9C4.2 70.9 5.4 69.9 7.2 68.9C11.3 66.8 16.2 65 21.9 63.6C27.6 62.1 33.7 61.4 40.2 61.4C54.5 61.4 65 64.8 71.6 71.6C78.1 78.4 81.4 88.4 81.4 101.6V138.8H72.4ZM29.4 152.8C33.3 152.8 37.3 152.1 41.5 150.6C45.7 149.1 49.5 146.5 52.8 143C54.8 140.7 56.3 138.1 57.1 135.2C58 132.3 58.5 128.8 58.5 124.7V119.4C55.1 118.7 51.4 118.2 47.6 117.8C43.8 117.4 40.1 117.2 36.4 117.2C27.8 117.2 21.5 118.8 17.3 122.2C13.1 125.6 11.1 130.4 11.1 136.7C11.1 142.6 12.6 147 15.8 149.9C18.9 152.9 23.4 152.8 29.4 152.8ZM127 166.6C124.4 166.6 122.6 166.2 121.4 165.2C120.2 164.3 119.2 162.4 118.3 159.7L88.1 72C87.2 69.2 86.7 67.3 86.7 66.2C86.7 64.2 87.7 63.1 89.7 63.1H100.3C103 63.1 104.9 63.5 106 64.5C107.2 65.4 108.1 67.3 109 70L130.5 147.4L150.4 70C151.2 67.2 152.1 65.4 153.3 64.5C154.5 63.6 156.4 63.1 159 63.1H167.8C170.5 63.1 172.4 63.5 173.5 64.5C174.7 65.5 175.7 67.3 176.4 70L196.5 148.2L218.6 70C219.5 67.2 220.5 65.4 221.6 64.5C222.8 63.6 224.7 63.1 227.3 63.1H237.4C239.4 63.1 240.5 64.1 240.5 66.2C240.5 67 240.4 67.8 240.2 68.7C240 69.6 239.7 70.8 239.1 72.3L208.1 159.8C207.2 162.6 206.2 164.4 205 165.3C203.8 166.2 201.9 166.7 199.4 166.7H190C187.3 166.7 185.4 166.3 184.2 165.3C183 164.3 182 162.5 181.3 159.8L161.8 85L142.4 159.7C141.6 162.5 140.6 164.3 139.4 165.2C138.2 166.1 136.3 166.6 133.6 166.6H127ZM288 169.5C282 169.5 276 168.8 270.2 167.5C264.4 166.2 259.8 164.6 256.6 162.8C254.6 161.7 253.2 160.5 252.7 159.4C252.1 158.3 251.9 157.1 251.9 155.9V150.5C251.9 147.2 253.1 145.6 255.4 145.6C256.3 145.6 257.2 145.7 258.1 146C259 146.3 260.3 146.8 261.8 147.5C266 149.4 270.5 150.9 275.4 152C280.4 153.1 285.2 153.6 290.2 153.6C298.1 153.6 304.2 152.2 308.4 149.5C312.6 146.8 314.8 142.8 314.8 137.6C314.8 134 313.7 131 311.5 128.6C309.3 126.2 305.1 124 299 121.9L280.2 115.8C271.1 112.8 264.4 108.4 260.2 102.6C256 96.9 253.9 90.4 253.9 83.4C253.9 77.7 255.1 72.7 257.5 68.4C259.9 64.1 263.1 60.5 267.1 57.6C271.1 54.6 275.7 52.4 281 50.8C286.3 49.2 292 48.5 298 48.5C301 48.5 304.1 48.7 307.1 49.1C310.2 49.5 313.1 50.1 315.9 50.7C318.6 51.4 321.2 52.1 323.6 53C326 53.9 327.9 54.8 329.3 55.7C331.1 56.8 332.4 58 333.2 59.2C334 60.4 334.4 62 334.4 64V69C334.4 72.3 333.2 74 330.9 74C329.7 74 327.8 73.4 325.2 72.1C317.1 68.4 308 66.5 297.9 66.5C290.7 66.5 285.1 67.7 281.3 70.1C277.5 72.5 275.6 76.2 275.6 81.3C275.6 84.9 276.8 88 279.2 90.4C281.6 92.8 286 95.2 292.5 97.3L310.8 103.3C319.8 106.2 326.3 110.4 330.3 115.8C334.3 121.2 336.2 127.4 336.2 134.3C336.2 140.2 335.1 145.5 332.8 150.1C330.5 154.8 327.3 158.8 323.2 162.1C319.1 165.5 314.2 168 308.5 169.7C302.5 171.6 296.1 169.5 288 169.5Z" fill="#FF9900"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-foreground">
                        AWS Certified Cloud Practitioner
                      </h3>
                      <p className="text-primary font-medium">{certifications[0].code}</p>
                      <p className="text-muted-foreground text-sm mt-1">
                        Issued: {certifications[0].date} • Valid until: {certifications[0].validUntil}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={awsCertLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all hover:scale-105"
                    >
                      <CheckCircle className="w-4 h-4" />
                      Verify Certificate
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other Certifications Grid */}
          <div className="cert-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.slice(1).map((cert, index) => (
              <div
                key={index}
                className="cert-card card-glow p-5 rounded-xl group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors text-xl">
                  {cert.icon}
                </div>
                <h3 className="font-display font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {cert.name}
                </h3>
                <p className="text-primary text-sm mb-2">{cert.issuer}</p>
                <p className="text-muted-foreground text-xs">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
