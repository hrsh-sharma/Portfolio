import { useEffect, useRef, useState } from "react";
import { Mail, Phone, Send, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Required';
        break;
      case 'email':
        if (!value.trim()) return 'Required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) return 'Invalid email';
        break;
      case 'message':
        if (!value.trim()) return 'Required';
        break;
    }
    return '';
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
     <section id="contact" ref={sectionRef} className="py-16 bg-card/30 border-t border-border/50">
        <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-10">
              <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
                Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Talk</span>
              </h2>
              <p className={`text-muted-foreground text-base ${isVisible ? "animate-fade-in-up animate-delay-100" : "opacity-0"}`}>
                I'm currently available for new opportunities.
              </p>
            </div>

            <div className={`grid md:grid-cols-5 gap-8 bg-background p-6 md:p-8 rounded-2xl border border-border/50 shadow-xl ${isVisible ? "animate-scale-in" : "opacity-0"}`} style={{ animationDelay: '200ms' }}>
                
                {/* Left side: Contact Info */}
                <div className="md:col-span-2 space-y-6">
                    <div>
                        <h3 className="text-xl font-bold text-foreground mb-1.5">Get in touch</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">Drop me a message and I'll get back to you as soon as possible.</p>
                    </div>

                    <div className="space-y-4">
                        <a href="mailto:hs6860504@gmail.com" className="flex items-center gap-3.5 group">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                <Mail size={18} />
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground mb-0.5">Email</p>
                                <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">hs6860504@gmail.com</p>
                            </div>
                        </a>
                        
                        <a href="tel:9625363401" className="flex items-center gap-3.5 group">
                            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                                <Phone size={18} />
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground mb-0.5">Phone</p>
                                <p className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">+91 96253 63401</p>
                            </div>
                        </a>
                    </div>

                    <div className="pt-6 border-t border-border/50">
                        <p className="text-xs text-muted-foreground mb-3 font-medium uppercase tracking-wider">Socials</p>
                        <div className="flex gap-3">
                            <a href="https://github.com/hrsh-sharma" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-muted hover:bg-primary/20 hover:text-primary transition-colors">
                                <Github size={18} />
                            </a>
                            <a href="https://www.linkedin.com/in/harsh-sharma-282746274" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-muted hover:bg-accent/20 hover:text-accent transition-colors">
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right side: Form */}
                <div className="md:col-span-3">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-foreground ml-1">Name</label>
                                <Input
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="John Doe"
                                    className={`bg-muted/50 border-0 focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-0 h-12 rounded-xl ${errors.name ? 'ring-1 ring-destructive' : ''}`}
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-foreground ml-1">Email</label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="john@example.com"
                                    className={`bg-muted/50 border-0 focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-0 h-12 rounded-xl ${errors.email ? 'ring-1 ring-destructive' : ''}`}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-foreground ml-1">Message</label>
                            <Textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                placeholder="How can I help you?"
                                rows={6}
                                className={`bg-muted/50 border-0 resize-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-0 rounded-xl ${errors.message ? 'ring-1 ring-destructive' : ''}`}
                            />
                        </div>

                        <Button
                            type="submit"
                            size="lg"
                            className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-lg shadow-primary/25 rounded-xl h-12 text-base font-medium transition-all hover:scale-[1.02]"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="w-5 h-5 mr-3 border-2 border-current border-t-transparent rounded-full animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    Send Message
                                    <Send className="w-5 h-5 ml-2" />
                                </>
                            )}
                        </Button>
                    </form>
                </div>
            </div>
        </div>
     </section>
  )
}

export default ContactSection;
