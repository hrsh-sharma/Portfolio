import { useEffect, useRef, useState } from "react";

const mainSkills = [
  "React.js", "Angular", "Next.js", "TypeScript", "JavaScript (ES6+)",
  "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Figma", "Canva",
  "Git", "GitHub", "Jira",
];

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-16 bg-card/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left — Bio */}
          <div className={`${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Me</span>
            </h2>
            <div className="space-y-4 text-[0.95rem] text-muted-foreground leading-relaxed">
              <p>
                I'm a <strong className="text-foreground font-semibold">Frontend & Software Developer</strong> who genuinely enjoys turning ideas into things people can actually use. Over the past couple of years I've shipped apps across e-commerce, SaaS, and enterprise — each one teaching me something new.
              </p>
              <p>
                I'm comfortable on both sides of the stack. On the frontend I work mainly in <strong className="text-foreground font-semibold">React.js, Angular, and Next.js</strong>; and when a project needs payment flows, I've wired up <strong className="text-foreground font-semibold">Cashfree, Stripe, and Razorpay</strong> without breaking a sweat.
              </p>
              <p>
                I've worked with clients in India and internationally, and I bring the same energy whether it's a quick freelance build or a long-running agile team — clean code, honest timelines, and designs that actually make sense to the people using them.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { value: "2+", label: "Years Exp", color: "text-primary" },
                { value: "30+", label: "Projects", color: "text-accent" },
                { value: "UAE", label: "Dubai Based", color: "text-primary" },
              ].map(({ value, label, color }) => (
                <div key={label} className="text-center p-3 rounded-xl bg-background/50 border border-border/40">
                  <p className={`text-2xl font-bold ${color} mb-0.5`}>{value}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Skill Tags */}
          <div className={`${isVisible ? "animate-slide-in-right" : "opacity-0"}`} style={{ animationDelay: "150ms" }}>
            <h3 className="text-xl font-semibold mb-4 text-foreground/90">Core Technologies</h3>
            <div className="flex flex-wrap gap-2.5">
              {mainSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3.5 py-2 bg-background border border-border/50 hover:border-primary/60 hover:text-primary hover:bg-primary/5 text-foreground/75 rounded-lg text-sm font-medium transition-all duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="mt-8 p-5 rounded-xl bg-gradient-to-br from-primary/8 to-accent/8 border border-primary/15 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <p className="text-foreground/90 font-medium relative z-10 text-base italic">
                "Writing code that humans can read and machines can execute."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
