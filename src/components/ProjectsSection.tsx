import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import stylexioImage from "@/assets/stylexio.jpg";
import newsImage from "@/assets/news.jpg";
import agenticImage from "@/assets/agentic.jpg";
import belloImage from "@/assets/bello.jpg";

const projects = [
  {
    title: "E-Commerce Clothing Website",
    description: "A modern and responsive e-commerce platform for fashion and clothing, featuring seamless shopping experience with product catalog, cart management, and secure checkout.",
    tags: ["Angular", "TypeScript"],
    image: stylexioImage,
    github: "",
    live: "https://stylexio.in/",
  },
  {
    title: "News Website",
    description: "A dynamic news portal with auto-generated posts powered by Python backend, featuring automated content creation, categorization, and real-time updates.",
    tags: ["WordPress", "Python"],
    image: newsImage,
    github: "",
    live: "https://desimuchatlu.com/",
  },
  {
    title: "Financial Guidance Tool",
    description: "An AI-powered financial guidance platform that provides personalized financial insights, smart tools, and expert guidance to help users build wealth confidently.",
    tags: ["React.js", "Bootstrap"],
    image: agenticImage,
    github: "",
    live: "https://agenticmoney.co.uk/",
  },
  {
    title: "E-Commerce Shoe Website",
    description: "A luxury e-commerce platform specializing in premium leather shoes, featuring elegant designs, seamless shopping experience, and secure checkout for footwear enthusiasts.",
    tags: ["Shopify"],
    image: belloImage,
    github: "",
    live: "https://bellorosso.com/",
  },
];

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 bg-card"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className={`text-muted-foreground text-lg max-w-2xl mx-auto ${isVisible ? "animate-fade-in-up animate-delay-100" : "opacity-0"}`}>
            A showcase of my recent work and side projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group bg-background rounded-xl overflow-hidden border border-border hover-lift ${
                isVisible ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay Buttons */}
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  {project.github && project.github !== "#" && (
                    <a
                      href={project.github}
                      className="p-2 bg-background/90 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.live && project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-background/90 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
