import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/20 blur-xl animate-float" />
      <div className="absolute bottom-40 right-20 w-32 h-32 rounded-full bg-accent-foreground/20 blur-xl animate-float animate-delay-300" />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-primary/30 blur-lg animate-float animate-delay-500" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="opacity-0 animate-fade-in-up">
          <p className="text-primary font-mono mb-4 text-lg">Hello, I'm</p>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 opacity-0 animate-fade-in-up animate-delay-100">
          <span className="gradient-text">Your Name</span>
        </h1>

        <div className="opacity-0 animate-fade-in-up animate-delay-200">
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Full Stack Developer & UI/UX Designer crafting beautiful digital experiences
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 opacity-0 animate-fade-in-up animate-delay-300">
          <Button
            size="lg"
            className="animate-pulse-glow"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get In Touch
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 opacity-0 animate-fade-in-up animate-delay-400">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300 hover-lift"
          >
            <Github size={28} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300 hover-lift"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="mailto:your@email.com"
            className="text-muted-foreground hover:text-primary transition-colors duration-300 hover-lift"
          >
            <Mail size={28} />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
          <ArrowDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
