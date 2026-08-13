import { useEffect, useRef, useState } from "react";
import { Briefcase, MapPin, Calendar, ChevronDown } from "lucide-react";

interface Experience {
  company: string;
  companyUrl?: string;
  role: string;
  location: string;
  dates: string;
  duration: string;
  type: string;
  accent: string;
  bullets: string[];
}

const experiences: Experience[] = [
  {
    company: "Zetsons",
    role: "Software Developer",
    location: "Dubai, UAE",
    dates: "Jul 2026 – Present",
    duration: "2 months",
    type: "Full-time · On-site",
    accent: "from-blue-500 to-cyan-400",
    bullets: [
      "Integrating payment gateways — Cashfree, Stripe, and Razorpay — into live web applications for secure, seamless transactions.",
      "Building and maintaining scalable software solutions using C# and Visual Studio in a fast-paced international environment.",
      "Delivering performant, user-friendly interfaces across diverse client projects.",
      "Collaborating with cross-functional teams on product planning, sprint delivery, and code reviews.",
    ],
  },
  {
    company: "AIInfox",
    companyUrl: "https://aiinfoxtech.com",
    role: "Web Designer",
    location: "Mohali, Punjab",
    dates: "Oct 2024 – Jun 2026",
    duration: "1 yr 9 months",
    type: "Full-time · On-site",
    accent: "from-violet-500 to-purple-400",
    bullets: [
      "Designed and delivered responsive dashboards and web apps using React.js and Angular, improving user engagement across multiple product lines.",
      "Created wireframes, high-fidelity mockups, and interactive prototypes in Figma, cutting design-to-dev handoff time.",
      "Leveraged AI tools (Cursor, ChatGPT) to accelerate UI cycles and keep the design system consistent.",
      "Managed version control with Git and sprint tasks in Jira within an agile team.",
    ],
  },
  {
    company: "Techshiv",
    role: "Web Designer",
    location: "Zirakpur, Punjab",
    dates: "Feb 2024 – Sep 2024",
    duration: "8 months",
    type: "Full-time · On-site",
    accent: "from-orange-500 to-amber-400",
    bullets: [
      "Built and deployed responsive websites using WordPress and modern frontend technologies for diverse client requirements.",
      "Collaborated with cross-functional teams to deliver projects on schedule via Git and Jira.",
    ],
  },
];

const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number>(0);
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
    <section
      id="experience"
      ref={sectionRef}
      className="py-16 bg-background relative overflow-hidden"
    >
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Experience</span>
          </h2>
          <p className={`text-muted-foreground text-base ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "100ms" }}>
            My professional journey so far
          </p>
        </div>

        {/* Accordion-style cards */}
        <div className="space-y-4">
          {experiences.map((exp, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-primary/40 bg-card shadow-[0_0_30px_hsl(var(--primary)/0.1)]"
                    : "border-border/50 bg-card/50 hover:border-primary/20"
                } ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Card Header — always visible, clickable */}
                <button
                  className="w-full text-left p-5 flex items-start justify-between gap-4 group"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-4 flex-1 min-w-0">
                    {/* Accent dot / icon */}
                    <div className={`mt-1 shrink-0 w-9 h-9 rounded-xl bg-gradient-to-br ${exp.accent} flex items-center justify-center shadow-lg`}>
                      <Briefcase size={16} className="text-white" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                        <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full bg-gradient-to-r ${exp.accent} text-white`}>
                          {exp.duration}
                        </span>
                      </div>
                      <p className={`text-base font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r ${exp.accent}`}>
                        {exp.company}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <MapPin size={13} />
                          {exp.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar size={13} />
                          {exp.dates}
                        </span>
                        <span className="hidden sm:inline px-2 py-0.5 rounded-full bg-muted text-xs font-medium">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Chevron */}
                  <ChevronDown
                    size={20}
                    className={`shrink-0 mt-2 text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : "group-hover:text-primary"}`}
                  />
                </button>

                {/* Expandable bullet points */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 pb-5 pl-[3.5rem]">
                    <div className="h-px bg-border/50 mb-4" />
                    <ul className="space-y-3">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${exp.accent} shrink-0`} />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary stats row */}
        <div
          className={`mt-10 grid grid-cols-3 gap-4 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "500ms" }}
        >
          {[
            { value: "3", label: "Companies" },
            { value: "2+", label: "Years Total" },
            { value: "India & UAE", label: "Locations" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center p-5 rounded-2xl bg-card/60 border border-border/40">
              <p className="text-2xl font-bold text-primary mb-1">{value}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
