    import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Update active section based on scroll position
            const sections = navLinks.map(link => link.href.substring(1));
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    const handleNavClick = (href: string) => {
        setIsMobileMenuOpen(false);
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
                isScrolled
                    ? "bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-primary/5"
                    : "bg-transparent"
            }`}
        >
            {/* Gradient overlay for visual depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent-foreground/5 pointer-events-none opacity-0 transition-opacity duration-500" 
                 style={{ opacity: isScrolled ? 1 : 0 }} 
            />
            
            <div className="container mx-auto px-6 lg:px-8 relative">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo with enhanced styling */}
                    <a
                        href="#home"
                        onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="group relative text-2xl md:text-3xl font-display font-bold tracking-tight"
                    >
                        <span className="relative z-10 bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent group-hover:from-primary group-hover:via-accent-foreground group-hover:to-primary transition-all duration-500">
                            Harsh
                        </span>
                        <span className="text-primary/60 group-hover:text-primary transition-colors duration-300">.</span>
                        {/* Animated underline on hover */}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent-foreground group-hover:w-full transition-all duration-500 ease-out" />
                    </a>

                    {/* Desktop Navigation with enhanced styling */}
                    <nav className="hidden md:flex items-center gap-1 lg:gap-2">
                        {navLinks.map((link, index) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(link.href);
                                }}
                                className={`group relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                                    activeSection === link.href.substring(1)
                                        ? "text-primary"
                                        : "text-foreground/70 hover:text-foreground"
                                }`}
                                style={{ 
                                    animationDelay: `${index * 50}ms` 
                                }}
                            >
                                <span className="relative z-10">{link.name}</span>
                                
                                {/* Active indicator with gradient */}
                                {activeSection === link.href.substring(1) && (
                                    <span className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/15 to-accent-foreground/10 rounded-lg blur-sm" />
                                )}
                                
                                {/* Hover effect */}
                                <span className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent-foreground/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                
                                {/* Bottom border indicator */}
                                <span 
                                    className={`absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary via-accent-foreground to-primary rounded-full transition-all duration-300 ${
                                        activeSection === link.href.substring(1)
                                            ? "w-3/4 opacity-100"
                                            : "w-0 opacity-0 group-hover:w-1/2 group-hover:opacity-50"
                                    }`}
                                />
                            </a>
                        ))}
                    </nav>

                    {/* CTA Button - Desktop with enhanced styling */}
                    <div className="hidden md:block">
                        <Button
                            className="group relative gap-2 px-6 py-2.5 font-medium text-sm bg-gradient-to-r from-primary via-primary to-accent-foreground hover:from-primary/90 hover:via-primary/90 hover:to-accent-foreground/90 text-white border-0 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden"
                            onClick={() => {
                                // Add your CV download logic here
                                console.log("Download CV clicked");
                            }}
                        >
                            {/* Shine effect on hover */}
                            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                            
                            <Download size={16} className="relative z-10 group-hover:translate-y-[-2px] transition-transform duration-300" />
                            <span className="relative z-10">Download CV</span>
                        </Button>
                    </div>

                    {/* Mobile Menu Button with enhanced styling */}
                    <button
                        className="md:hidden p-2.5 rounded-lg text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all duration-300 active:scale-95"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <div className="relative w-6 h-6">
                            <Menu 
                                size={24} 
                                className={`absolute inset-0 transition-all duration-300 ${
                                    isMobileMenuOpen ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
                                }`}
                            />
                            <X 
                                size={24} 
                                className={`absolute inset-0 transition-all duration-300 ${
                                    isMobileMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"
                                }`}
                            />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation with enhanced styling and animations */}
            <div
                className={`md:hidden fixed inset-0 top-16 bg-background/98 backdrop-blur-2xl transition-all duration-500 ease-out overflow-hidden ${
                    isMobileMenuOpen
                        ? "opacity-100 visible"
                        : "opacity-0 invisible pointer-events-none"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
            >
                {/* Animated background overlay */}
                <div 
                    className={`absolute inset-0 bg-gradient-to-br from-primary/10 via-background/95 to-accent-foreground/10 transition-all duration-700 ${
                        isMobileMenuOpen ? "scale-100 opacity-100" : "scale-110 opacity-0"
                    }`}
                />
                
                {/* Animated menu content */}
                <nav 
                    className={`container mx-auto px-6 py-8 flex flex-col gap-3 relative h-full overflow-y-auto ${
                        isMobileMenuOpen ? "animate-slide-in-down" : ""
                    }`}
                    onClick={(e) => e.stopPropagation()}
                >
                    {navLinks.map((link, index) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavClick(link.href);
                            }}
                            className={`group relative px-6 py-4 text-lg font-medium transition-all duration-500 rounded-xl overflow-hidden ${
                                activeSection === link.href.substring(1)
                                    ? "text-primary bg-primary/15 scale-105"
                                    : "text-foreground/80 hover:text-foreground hover:bg-primary/10"
                            } ${
                                isMobileMenuOpen 
                                    ? "opacity-100 translate-x-0" 
                                    : "opacity-0 translate-x-[-100%]"
                            }`}
                            style={{
                                transitionDelay: `${index * 100}ms`,
                            }}
                        >
                            {/* Animated background gradient */}
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent-foreground/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            {/* Animated left border */}
                            <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent-foreground to-primary rounded-r-full transition-all duration-500 ${
                                activeSection === link.href.substring(1)
                                    ? "opacity-100 scale-y-100"
                                    : "opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100"
                            }`} />
                            
                            <span className="relative z-10 flex items-center gap-3">
                                {/* Animated icon indicator */}
                                <span className={`w-2 h-2 rounded-full bg-primary transition-all duration-500 ${
                                    activeSection === link.href.substring(1)
                                        ? "opacity-100 scale-100 animate-pulse"
                                        : "opacity-0 scale-0 group-hover:opacity-50 group-hover:scale-100"
                                }`} />
                                
                                <span className="flex-1">{link.name}</span>
                                
                                {/* Arrow indicator */}
                                <span className={`text-primary transition-all duration-500 ${
                                    activeSection === link.href.substring(1)
                                        ? "opacity-100 translate-x-0"
                                        : "opacity-0 -translate-x-2 group-hover:opacity-50 group-hover:translate-x-0"
                                }`}>
                                    →
                                </span>
                            </span>
                            
                            {/* Shine effect on hover */}
                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                        </a>
                    ))}
                    
                    {/* Download CV Button with animation */}
                    <Button
                        className={`gap-2 mt-6 py-6 text-base font-semibold bg-gradient-to-r from-primary via-primary to-accent-foreground hover:from-primary/90 hover:via-primary/90 hover:to-accent-foreground/90 text-white border-0 shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-500 hover:scale-105 active:scale-95 overflow-hidden ${
                            isMobileMenuOpen 
                                ? "opacity-100 translate-y-0" 
                                : "opacity-0 translate-y-4"
                        }`}
                        style={{
                            transitionDelay: `${navLinks.length * 100}ms`,
                        }}
                        onClick={() => {
                            setIsMobileMenuOpen(false);
                            console.log("Download CV clicked");
                        }}
                    >
                        {/* Shine effect */}
                        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                        
                        <Download size={18} className="relative z-10 group-hover:translate-y-[-2px] transition-transform duration-300" />
                        <span className="relative z-10">Download CV</span>
                    </Button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
