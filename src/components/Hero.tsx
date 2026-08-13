import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import cvFile from "@/assets/Harsh_Sharma_Resume.docx";

const roles = ["Frontend Developer", "Software Developer"];

const Hero = () => {
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            const currentRole = roles[currentRoleIndex];
            if (isDeleting) {
                setCurrentText(currentRole.substring(0, currentText.length - 1));
                if (currentText.length === 0) {
                    setIsDeleting(false);
                    setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
                }
            } else {
                setCurrentText(currentRole.substring(0, currentText.length + 1));
                if (currentText.length === currentRole.length) {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            }
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, currentRoleIndex]);

    const handleViewWork = () => {
        const workSection = document.querySelector("#projects");
        workSection?.scrollIntoView({ behavior: "smooth" });
    };

    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = cvFile;
        link.download = 'Harsh_Sharma_Resume.docx';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section
            id="home"
            className="relative flex items-center justify-center min-h-[90vh] pt-24 pb-24 overflow-hidden bg-background"
        >
            {/* Dark Mode Subtle Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/15 via-background to-background opacity-80" />
                <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-accent/15 via-background to-background opacity-80" />
                {/* Subtle grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-50" />
                
                {/* Floating Particles */}
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/40 rounded-full shadow-[0_0_10px_hsl(var(--primary))] animate-float" />
                <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-accent/40 rounded-full shadow-[0_0_15px_hsl(var(--accent))] animate-float" style={{ animationDelay: '1s' }} />
                <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 bg-primary/30 rounded-full shadow-[0_0_12px_hsl(var(--primary))] animate-float" style={{ animationDelay: '2s' }} />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
                    
                    <div className="animate-fade-in-up">
                        <span className="text-primary font-mono tracking-wider uppercase text-sm md:text-base mb-4 block">
                            {"<Welcome to my portfolio />"}
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold font-display text-foreground tracking-tight mb-4">
                            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Harsh Sharma</span>
                        </h1>
                        <div className="h-12 md:h-16 flex items-center justify-center">
                            <h2 className="text-2xl md:text-4xl font-semibold text-muted-foreground flex items-center">
                                I am a <span className="ml-2 text-foreground border-r-2 border-primary pr-1 animate-[blink-caret_0.75s_step-end_infinite]">{currentText}</span>
                            </h2>
                        </div>
                    </div>

                    <p className="text-base md:text-lg text-muted-foreground max-w-2xl animate-fade-in-up animate-delay-200">
                        I'm a Frontend Developer & Software Developer with nearly 3 years of hands-on experience building responsive web applications across e-commerce, SaaS, and enterprise platforms.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up animate-delay-300">
                        <Button
                            size="lg"
                            className="group gap-2 text-base h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground transition-all shadow-[0_0_20px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)]"
                            onClick={handleViewWork}
                        >
                            View Projects
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="group gap-2 text-base h-12 px-8 border-border hover:bg-white/5 transition-all text-foreground"
                            onClick={handleDownloadCV}
                        >
                            <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
                            Download CV
                        </Button>
                    </div>

                    <div className="flex items-center gap-5 pt-8 animate-fade-in-up animate-delay-400">
                        <a href="https://github.com/hrsh-sharma" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all hover:scale-110">
                            <Github size={22} />
                        </a>
                        <a href="https://www.linkedin.com/in/harsh-sharma-282746274" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 text-muted-foreground hover:text-accent hover:border-accent/50 hover:bg-accent/10 transition-all hover:scale-110">
                            <Linkedin size={22} />
                        </a>
                    </div>

                </div>
            </div>
            
            {/* Scroll Indicator */}
            <div className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 animate-fade-in-up animate-delay-500">
                <div className="w-[26px] h-[40px] rounded-full border-2 border-muted-foreground/30 flex justify-center p-1.5">
                    <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
