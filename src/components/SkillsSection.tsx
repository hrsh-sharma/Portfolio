import { useEffect, useRef, useState, ComponentType } from "react";
import { 
  Code2, 
  Palette, 
  ShoppingBag, 
  Settings,
  Zap,
  FileCode,
  Layers,
  Sparkles,
  Globe,
  PenTool,
  Store,
  GitBranch,
  GitMerge,
  CheckCircle2
} from "lucide-react";

interface Skill {
  name: string;
  icon: ComponentType<{ className?: string }>;
  category: string;
  color: string;
}

const skills: Skill[] = [
  { name: "React", icon: Zap, category: "Frontend", color: "from-blue-400 to-cyan-400" },
  { name: "Angular", icon: Code2, category: "Frontend", color: "from-red-400 to-pink-400" },
  { name: "HTML", icon: FileCode, category: "Frontend", color: "from-orange-400 to-red-400" },
  { name: "CSS", icon: Layers, category: "Frontend", color: "from-blue-400 to-indigo-400" },
  { name: "JS", icon: Sparkles, category: "Frontend", color: "from-yellow-400 to-orange-400" },
  { name: "Figma", icon: PenTool, category: "Design", color: "from-purple-400 to-pink-400" },
  { name: "Canva", icon: Palette, category: "Design", color: "from-teal-400 to-cyan-400" },
  { name: "WordPress", icon: Globe, category: "CMS/E-commerce", color: "from-blue-500 to-indigo-500" },
  { name: "Shopify", icon: Store, category: "CMS/E-commerce", color: "from-green-400 to-emerald-400" },
  { name: "GitHub", icon: GitBranch, category: "Development Tools", color: "from-gray-600 to-gray-800" },
  { name: "Bitbucket", icon: GitMerge, category: "Development Tools", color: "from-blue-500 to-blue-700" },
  { name: "Jira", icon: CheckCircle2, category: "Development Tools", color: "from-blue-400 to-blue-600" },
];

const categories = [
  { name: "Frontend", icon: Code2, color: "from-blue-500/20 to-cyan-500/20" },
  { name: "Design", icon: Palette, color: "from-purple-500/20 to-pink-500/20" },
  { name: "CMS/E-commerce", icon: ShoppingBag, color: "from-green-500/20 to-emerald-500/20" },
  { name: "Development Tools", icon: Settings, color: "from-gray-500/20 to-slate-500/20" },
];

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
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
      className="relative py-24 bg-background overflow-hidden"
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
        <div className="text-center mb-20">
          <div className={`inline-block mb-4 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <Sparkles size={16} />
              Technical Expertise
            </span>
          </div>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${isVisible ? "animate-fade-in-up animate-delay-100" : "opacity-0"}`}>
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className={`text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed ${isVisible ? "animate-fade-in-up animate-delay-200" : "opacity-0"}`}>
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-12">
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
                    const isHovered = hoveredSkill === skill.name;
                    
                    return (
                      <div
                        key={skill.name}
                        className="group relative"
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        style={{ animationDelay: `${(categoryIndex * 200) + (skillIndex * 50)}ms` }}
                      >
                        {/* Skill Card */}
                        <div className={`
                          relative h-32 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50
                          p-5 flex flex-col items-center justify-center gap-3
                          transition-all duration-500 ease-out
                          ${isHovered 
                            ? 'scale-110 shadow-2xl border-primary/50 bg-gradient-to-br from-card to-card/80' 
                            : 'hover:scale-105 hover:shadow-lg hover:border-primary/30'
                          }
                          ${isVisible ? "animate-fade-in-up" : "opacity-0"}
                        `}>
                          {/* Gradient Background on Hover */}
                          <div className={`
                            absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.color} opacity-0
                            transition-opacity duration-500
                            ${isHovered ? 'opacity-10' : ''}
                          `} />

                          {/* Icon */}
                          <div className={`
                            relative z-10 p-3 rounded-xl bg-gradient-to-br ${skill.color}
                            transition-all duration-500
                            ${isHovered 
                              ? 'scale-110 rotate-6 shadow-lg' 
                              : 'group-hover:scale-105 group-hover:rotate-3'
                            }
                          `}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>

                          {/* Skill Name */}
                          <span className={`
                            relative z-10 text-sm font-semibold text-foreground text-center
                            transition-colors duration-300
                            ${isHovered ? 'text-primary' : ''}
                          `}>
                            {skill.name}
                          </span>

                          {/* Shine Effect */}
                          <div className={`
                            absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent
                            translate-x-[-100%] transition-transform duration-1000
                            ${isHovered ? 'translate-x-[100%]' : ''}
                          `} />
                        </div>

                        {/* Glow Effect */}
                        <div className={`
                          absolute -inset-1 rounded-2xl bg-gradient-to-br ${skill.color} opacity-0 blur-xl
                          transition-opacity duration-500 -z-10
                          ${isHovered ? 'opacity-30' : ''}
                        `} />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Decorative Element */}
        <div className={`mt-20 text-center ${isVisible ? "animate-fade-in-up animate-delay-500" : "opacity-0"}`}>
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
