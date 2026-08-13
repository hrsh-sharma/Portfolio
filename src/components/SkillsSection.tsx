import { useEffect, useRef, useState, ComponentType } from "react";
import { 
  Code2, 
  Palette, 
  Settings,
  Zap,
  FileCode,
  Layers,
  Sparkles,
  Server,
  CreditCard,
  PenTool,
  GitBranch,
  CheckCircle2,
  Bot,
  ShoppingCart,
  DollarSign,
  Cpu
} from "lucide-react";

interface Skill {
  name: string;
  icon: ComponentType<{ className?: string }>;
  category: string;
  color: string;
  specialty?: string;
}

const skills: Skill[] = [
  // Frontend
  { name: "HTML5", icon: FileCode, category: "Frontend", color: "from-orange-400 to-red-400" },
  { name: "CSS3", icon: Layers, category: "Frontend", color: "from-blue-400 to-indigo-400" },
  { name: "JavaScript (ES6+)", icon: Sparkles, category: "Frontend", color: "from-yellow-400 to-orange-400" },
  { name: "TypeScript", icon: Code2, category: "Frontend", color: "from-blue-500 to-blue-700" },
  { name: "React.js", icon: Zap, category: "Frontend", color: "from-cyan-400 to-blue-400" },
  { name: "Angular", icon: Code2, category: "Frontend", color: "from-red-500 to-pink-500" },
  { name: "Next.js", icon: Code2, category: "Frontend", color: "from-gray-400 to-gray-600" },
  { name: "Bootstrap", icon: Layers, category: "Frontend", color: "from-purple-500 to-indigo-500" },
  { name: "Tailwind CSS", icon: Layers, category: "Frontend", color: "from-teal-400 to-cyan-400" },
  
  // Backend / Tools
  { name: "C#", icon: Server, category: "Backend / Tools", color: "from-purple-500 to-violet-600" },
  { name: "Visual Studio", icon: Cpu, category: "Backend / Tools", color: "from-indigo-500 to-purple-500" },
  { name: "n8n", icon: Settings, category: "Backend / Tools", color: "from-orange-500 to-red-500" },
  
  // Payment Gateways
  { name: "Cashfree", icon: DollarSign, category: "Payment Gateways", color: "from-green-400 to-teal-500" },
  { name: "Stripe", icon: CreditCard, category: "Payment Gateways", color: "from-indigo-400 to-purple-400" },
  { name: "Razorpay", icon: CreditCard, category: "Payment Gateways", color: "from-blue-500 to-cyan-500" },

  // CMS & E-Commerce
  { name: "WordPress", icon: ShoppingCart, category: "CMS & E-Commerce", color: "from-blue-400 to-indigo-500" },
  { name: "Shopify", icon: ShoppingCart, category: "CMS & E-Commerce", color: "from-green-400 to-emerald-500" },
  { name: "Wix Studio", icon: Layers, category: "CMS & E-Commerce", color: "from-yellow-400 to-orange-400" },

  // Design Tools
  { name: "Figma", icon: PenTool, category: "Design Tools", color: "from-purple-400 to-pink-400" },
  { name: "Canva", icon: Palette, category: "Design Tools", color: "from-teal-400 to-cyan-400" },

  // AI Dev Tools
  { name: "Cursor", icon: Bot, category: "AI Dev Tools", color: "from-slate-400 to-gray-600" },
  { name: "ChatGPT", icon: Bot, category: "AI Dev Tools", color: "from-emerald-400 to-teal-500" },
  { name: "Grok AI", icon: Bot, category: "AI Dev Tools", color: "from-cyan-400 to-blue-500" },
  { name: "Antigravity", icon: Bot, category: "AI Dev Tools", color: "from-violet-500 to-purple-600" },

  // Collaboration
  { name: "Git", icon: GitBranch, category: "Collaboration", color: "from-orange-500 to-red-500" },
  { name: "GitHub", icon: GitBranch, category: "Collaboration", color: "from-gray-600 to-gray-800" },
  { name: "Jira", icon: CheckCircle2, category: "Collaboration", color: "from-blue-400 to-blue-600" },
];

const categories = [
  { name: "Frontend", icon: Code2, color: "from-blue-500/20 to-cyan-500/20" },
  { name: "Backend / Tools", icon: Server, color: "from-purple-500/20 to-violet-500/20" },
  { name: "Payment Gateways", icon: CreditCard, color: "from-green-500/20 to-teal-500/20" },
  { name: "CMS & E-Commerce", icon: ShoppingCart, color: "from-orange-500/20 to-amber-500/20" },
  { name: "Design Tools", icon: Palette, color: "from-purple-500/20 to-pink-500/20" },
  { name: "AI Dev Tools", icon: Bot, color: "from-cyan-500/20 to-blue-500/20" },
  { name: "Collaboration", icon: Settings, color: "from-gray-500/20 to-slate-500/20" },
];

const SkillsSection = () => {
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

  const getSkillsByCategory = (categoryName: string) => {
    return skills.filter(skill => skill.category === categoryName);
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-16 bg-background overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-foreground/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/3 via-accent-foreground/3 to-primary/3 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,hsl(var(--border)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className={`inline-block mb-3 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <Sparkles size={14} />
              Technical Expertise
            </span>
          </div>
          <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${isVisible ? "animate-fade-in-up animate-delay-100" : "opacity-0"}`}>
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className={`text-muted-foreground text-base max-w-xl mx-auto ${isVisible ? "animate-fade-in-up animate-delay-200" : "opacity-0"}`}>
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-8">
          {categories.map((category, categoryIndex) => {
            const categorySkills = getSkillsByCategory(category.name);
            
            return (
              <div
                key={category.name}
                className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${(categoryIndex + 1) * 150}ms` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} border border-border/50 backdrop-blur-sm`}>
                    <category.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    {category.name}
                  </h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-border via-border/50 to-transparent" />
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {categorySkills.map((skill, skillIndex) => {
                    const IconComponent = skill.icon;
                    
                    return (
                      <div
                        key={skill.name}
                        className="group relative flex flex-col items-center justify-center gap-3 p-5 rounded-2xl bg-card/80 border border-border/50 hover:border-primary/50 hover:bg-card transition-all duration-200 cursor-default h-32"
                        style={{ animationDelay: `${(categoryIndex * 200) + (skillIndex * 50)}ms` }}
                      >
                        {/* Icon */}
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${skill.color}`}>
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        {/* Name */}
                        <span className="text-sm font-semibold text-foreground/80 group-hover:text-primary text-center transition-colors duration-200">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Decorative Element */}
        <div className={`mt-10 text-center ${isVisible ? "animate-fade-in-up animate-delay-500" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card/50 border border-border/50 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground font-medium">
              Continuously learning and exploring new technologies
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
