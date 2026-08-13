import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import stylexioImage from "@/assets/stylexio.jpg";
import newsImage from "@/assets/news.jpg";
import agenticImage from "@/assets/agentic.jpg";
import belloImage from "@/assets/bello.jpg";
import aiinfoxImage from "@/assets/aiinfoxtech.png";
import maniyamImage from "@/assets/maniyam.png";
import mockintoImage from "@/assets/mockinto.png";

const projects = [
  {
    title: "FashionCraft (Stylexio)",
    description: "E-commerce clothing platform with responsive UI, product listings, and category management for an optimised shopping experience.",
    tags: ["Angular", "TypeScript", "Tailwind CSS"],
    image: stylexioImage,
    github: "",
    live: "https://stylexio.in/",
  },
  {
    title: "AgenticMoney (UK)",
    description: "Financial guidance web app focused on clean UI, responsive dashboards, and user-friendly data presentation for a UK-based client.",
    tags: ["React.js", "Bootstrap", "Node.js"],
    image: agenticImage,
    github: "",
    live: "https://agenticmoney.co.uk/",
  },
  {
    title: "Mockinto",
    description: "AI-powered mock interview platform with intuitive interview-flow UI/UX, real-time feedback dashboards, and candidate progress tracking.",
    tags: ["Angular", "TypeScript", "Figma"],
    image: mockintoImage,
    github: "",
    live: "https://mockinto.com",
  },
  {
    title: "Maniyam",
    description: "Enterprise HRMS & CRMS platform — contributed UI design improvements and usability enhancements for HR and CRM modules.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    image: maniyamImage,
    github: "",
    live: "https://maniyam.com",
  },
  {
    title: "AIInfoxTech",
    description: "Training & education website with integrated n8n lead-capture automation, improving conversion workflows for the organisation.",
    tags: ["React.js", "n8n", "Automation"],
    image: aiinfoxImage,
    github: "",
    live: "https://aiinfoxtech.com",
  },
  {
    title: "Bellorosso & PielCuero",
    description: "Designed and customised two Shopify stores with premium branding, conversion-focused layouts, and optimised product/checkout pages.",
    tags: ["Shopify", "Liquid", "CSS"],
    image: belloImage,
    github: "",
    live: "https://bellorosso.com/",
  },
  {
    title: "DesiMuchatlu",
    description: "News publishing website with SEO plugin configuration and automated content workflows for consistent publishing cadence.",
    tags: ["WordPress", "Python", "SEO"],
    image: newsImage,
    github: "",
    live: "https://desimuchatlu.com/",
  },
];

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-16 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className={`text-4xl md:text-5xl font-bold mb-3 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Work</span>
          </h2>
          <p className={`text-muted-foreground text-lg max-w-2xl mx-auto ${isVisible ? "animate-fade-in-up animate-delay-100" : "opacity-0"}`}>
            A showcase of my recent projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <a
              key={project.title}
              href={project.live || "#"}
              target={project.live ? "_blank" : undefined}
              rel="noopener noreferrer"
              className={`group block bg-background rounded-2xl overflow-hidden border border-border/60 hover:border-primary/40 transition-all duration-300 hover:shadow-[0_8px_30px_hsl(var(--primary)/0.12)] ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image with gradient overlay */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

                {/* Floating link button — shown on hover */}
                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.github && project.github !== "#" && (
                    <span className="p-2 bg-background/80 backdrop-blur-sm rounded-full border border-border/50 text-foreground hover:text-primary">
                      <Github size={16} />
                    </span>
                  )}
                  <span className="p-2 bg-primary/90 text-white rounded-full shadow-md">
                    <ExternalLink size={16} />
                  </span>
                </div>
              </div>

              {/* Info — always visible */}
              <div className="p-5 pt-3">
                <h3 className="text-lg font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-primary/10 text-primary/80 text-xs font-medium rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
