import { Mail, Phone, MapPin, User, FileText } from "lucide-react";

const LeftSidePanel = () => {
  const contactItems = [
    {
      icon: User,
      value: "Vishal Kumar",
      href: "#about",
      type: "link",
    },
    {
      icon: FileText,
      value: "Resume",
      href: "https://drive.google.com/file/d/1dK0C7xDflMAF49j1LDa0lrsvIJ32DD4D/view?usp=drive_link",
      type: "external",
    },
    {
      icon: Mail,
      value: "vishalkumar25015@gmail.com",
      href: "mailto:vishalkumar25015@gmail.com",
      type: "mailto",
    },
    {
      icon: MapPin,
      value: "Ghaziabad, India",
      href: null,
      type: "text",
    },
  ];

  return (
    <div className="fixed left-0 top-0 bottom-0 w-16 md:w-20 hidden lg:flex flex-col items-center justify-center z-40">
      {/* Animated vertical line */}
      <div className="absolute left-8 md:left-10 top-0 bottom-0 w-px vertical-line" />
      
      {/* Contact items - vertical stacked */}
      <div className="relative flex flex-col items-center gap-4">
        {contactItems.map((item, index) => (
          <div key={index} className="group relative">
            {item.href ? (
              <a
                href={item.href}
                target={item.type === "external" ? "_blank" : undefined}
                rel={item.type === "external" ? "noopener noreferrer" : undefined}
                className="w-10 h-10 rounded-xl bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                aria-label={item.value}
              >
                <item.icon className="w-4 h-4" />
              </a>
            ) : (
              <div className="w-10 h-10 rounded-xl bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center text-muted-foreground">
                <item.icon className="w-4 h-4" />
              </div>
            )}
            
            {/* Tooltip */}
            <div className="absolute left-14 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-card border border-border text-sm text-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50">
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSidePanel;
