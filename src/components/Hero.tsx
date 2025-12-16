import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Github, Linkedin } from "lucide-react";
import Modal3D from "@/assets/3d-modal.png";

const Hero = () => {
    const handleViewWork = () => {
        const workSection = document.querySelector("#projects");
        workSection?.scrollIntoView({ behavior: "smooth" });
    };

    const handleContactMe = () => {
        const contactSection = document.querySelector("#contact");
        contactSection?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="home"
            className="relative flex items-center justify-center pt-24 pb-12 md:pt-28 md:pb-16 overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
                {/* Enhanced Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5" />
                <div className="absolute inset-0 bg-gradient-to-tl from-accent-foreground/5 via-transparent to-primary/10" />

                {/* Subtle Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.08)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.08)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50" />

                {/* Enhanced Floating Blur Elements */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-foreground/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
                <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-accent-foreground/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
            </div>

            <div className="container mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div className="space-y-4 md:space-y-5 animate-fade-in-up">
                        {/* Enhanced Role Label */}
                        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 via-primary/15 to-accent-foreground/10 border border-primary/20 backdrop-blur-sm mb-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shadow-lg shadow-primary/50" />
                            <span className="text-sm font-medium text-primary font-display">
                                UI/UX Designer & Frontend Engineer
                            </span>
                        </div>

                        {/* Enhanced Main Headline */}
                        <h1 
                            className="font-bogle font-bold uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight sm:leading-[50px] md:leading-[60px] lg:leading-[70px] tracking-tight sm:tracking-normal md:tracking-wide"
                            style={{
                                wordSpacing: 'clamp(4px, 2vw, 14px)',
                                letterSpacing: 'clamp(2px, 1vw, 6px)'
                            }}
                        >
                            DESIGNING
                            INTUITIVE<br className="hidden sm:block" />
                            <span className="bg-gradient-to-r from-primary via-primary to-accent-foreground bg-clip-text text-transparent">DIGITAL </span>
                            <span className="bg-gradient-to-r from-primary via-primary to-accent-foreground bg-clip-text text-transparent">EXPERIENCES </span>
                            FOR
                            MODERN
                            PRODUCTS.
                        </h1>

                        {/* Enhanced Supporting Description */}
                        <p className="text-base md:text-lg text-foreground/70 leading-relaxed max-w-xl font-sans mt-6">
                            I'm <span className="font-semibold text-foreground">Harsh</span>, a UI/UX Designer and Frontend Developer with experience
                            building scalable web products using React and Angular.
                        </p>

                        {/* Enhanced CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button
                                size="lg"
                                className="group gap-2 text-sm font-medium bg-gradient-to-r from-primary via-primary to-accent-foreground hover:from-primary/90 hover:via-primary/90 hover:to-accent-foreground/90 text-white border-0 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:scale-105 active:scale-95"
                                onClick={handleViewWork}
                            >
                                <span>View My Work</span>
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="gap-2 text-sm font-medium border-2 hover:bg-primary/5 hover:border-primary/50 transition-all duration-300 hover:scale-105 active:scale-95"
                                onClick={handleContactMe}
                            >
                                <Mail size={16} />
                                Contact Me
                            </Button>
                        </div>

                        {/* Enhanced Trust Indicators */}
                        <div className="flex flex-wrap gap-6 pt-4 border-t border-border/50 mt-6">
                            <div className="flex items-center gap-3 group cursor-default">
                                <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent-foreground rounded-full group-hover:scale-y-110 transition-transform duration-300" />
                                <span className="text-sm font-medium text-foreground/70 group-hover:text-foreground transition-colors duration-300">
                                    2 Years Experience
                                </span>
                            </div>
                            <div className="flex items-center gap-3 group cursor-default">
                                <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent-foreground rounded-full group-hover:scale-y-110 transition-transform duration-300" />
                                <span className="text-sm font-medium text-foreground/70 group-hover:text-foreground transition-colors duration-300">
                                    SaaS & E-commerce
                                </span>
                            </div>
                            <div className="flex items-center gap-3 group cursor-default">
                                <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent-foreground rounded-full group-hover:scale-y-110 transition-transform duration-300" />
                                <span className="text-sm font-medium text-foreground/70 group-hover:text-foreground transition-colors duration-300">
                                    AI & Fintech Products
                                </span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4 pt-4">
                            <a
                                href="https://github.com/hrsh-sharma"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 border border-primary/20 flex items-center justify-center text-foreground/70 hover:text-primary transition-all duration-300 hover:scale-110 hover:rotate-3"
                                aria-label="GitHub"
                            >
                                <Github size={18} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/harsh-sharma-282746274"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 border border-primary/20 flex items-center justify-center text-foreground/70 hover:text-primary transition-all duration-300 hover:scale-110 hover:rotate-3"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Right Visual - 3D Modal Image */}
                    <div className="relative flex items-center justify-center lg:justify-end">
                        <div className="relative w-full max-w-md lg:max-w-lg">
                            {/* Decorative gradient orbs */}
                            <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-br from-primary/30 to-accent-foreground/30 blur-3xl animate-float opacity-60" />
                            <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-gradient-to-tl from-accent-foreground/30 to-primary/30 blur-3xl animate-float opacity-60" style={{ animationDelay: '1.5s' }} />
                            
                            {/* 3D Modal Image - No box, shadow, or border */}
                            <div className="relative animate-fade-in-up animate-delay-200">
                                <img
                                    src={Modal3D}
                                    alt="3D Creative Work Illustration"
                                    className="w-full h-auto object-contain relative z-10 animate-float"
                                    style={{ animationDuration: '6s' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
