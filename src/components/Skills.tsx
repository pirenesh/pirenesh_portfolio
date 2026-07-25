import { motion } from 'framer-motion';
import { Code, Monitor, Server, Database, Wrench, Brain, Lightbulb, Sparkles } from 'lucide-react';

const skillCategories = [
  {
    title: "PROGRAMMING LANGUAGES",
    icon: Code,
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "Python", "Java", "SQL"]
  },
  {
    title: "FRONTEND",
    icon: Monitor,
    skills: ["React", "Next.js", "Tailwind CSS", "Bootstrap", "Redux Toolkit", "Vite", "Framer Motion"]
  },
  {
    title: "BACKEND",
    icon: Server,
    skills: ["FastAPI", "Node.js", "Express.js", "REST API", "JWT", "Authentication"]
  },
  {
    title: "DATABASE",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "SQLite"]
  },
  {
    title: "TOOLS",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Postman", "Android Studio", "Vercel", "Docker"]
  },
  {
    title: "AI & ML",
    icon: Brain,
    skills: ["TensorFlow", "Scikit-Learn", "OpenCV", "Pandas", "NumPy", "XGBoost"]
  },
  {
    title: "CONCEPTS",
    icon: Lightbulb,
    skills: ["OOP", "Data Structures", "Algorithms", "Problem Solving", "Responsive Design", "Software Architecture"]
  },
  {
    title: "OTHER",
    icon: Sparkles,
    skills: ["Firebase", "REST APIs", "JSON", "Linux", "GitHub Actions", "API Integration"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 200, damping: 20 } 
  }
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative z-10 overflow-hidden bg-[#030712]">
      {/* Premium subtle background: particles, glowing dots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-2 h-2 rounded-full bg-[var(--color-accent-primary)]/40 blur-[2px] animate-pulse" />
        <div className="absolute top-[60%] right-[15%] w-3 h-3 rounded-full bg-[var(--color-accent-glow)]/30 blur-[3px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-[20%] left-[30%] w-1.5 h-1.5 rounded-full bg-[var(--color-accent-primary)]/50 blur-[1px] animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Subtle AI neural lines pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="neural-net" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M30 30 L60 0 M30 30 L0 0 M30 30 L60 60 M30 30 L0 60" stroke="white" strokeWidth="0.5" fill="none" />
              <circle cx="30" cy="30" r="2" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural-net)" />
        </svg>

        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-accent-primary)]/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center space-x-2 mb-4">
            <span className="font-body font-[500] text-[13px] text-text-secondary uppercase tracking-[0.1em]" style={{ fontVariantCaps: 'small-caps' }}>
              WHAT I KNOW
            </span>
          </div>
          <h2 className="font-heading font-[700] tracking-[-0.02em] text-[40px] md:text-[48px] lg:text-[56px] mb-4 text-text-primary">
            SKILLS
          </h2>
          
          {/* Animated Glowing Divider */}
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[var(--color-accent-primary)] to-transparent mx-auto rounded-full mb-6 opacity-70 shadow-[0_0_10px_rgba(125,211,252,0.5)]" />

          <p className="font-body font-[400] text-[17px] leading-[1.8] text-[#CBD5E1] max-w-2xl mx-auto">
            Technologies and tools I use to build scalable, modern and AI-powered applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants as any}
              whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
              className="group relative flex flex-col h-full bg-[#111827]/80 backdrop-blur-xl border border-[#334155] hover:border-[var(--color-accent-primary)]/60 rounded-[20px] p-6 transition-all duration-500 shadow-lg hover:shadow-[0_0_30px_rgba(125,211,252,0.15)]"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Soft reflection / inner glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent rounded-[20px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-bg-primary/50 border border-border-primary/50 flex items-center justify-center group-hover:border-[var(--color-accent-primary)]/50 group-hover:shadow-[0_0_15px_rgba(125,211,252,0.3)] transition-all duration-300">
                  <category.icon className="w-5 h-5 text-[#CBD5E1] group-hover:text-[var(--color-accent-glow)] transition-colors duration-300" />
                </div>
                <h3 className="font-heading font-[600] text-[18px] text-white uppercase tracking-wide">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2 relative z-10 mt-auto">
                {category.skills.map((skill, sIndex) => (
                  <motion.div
                    key={sIndex}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="font-body font-[500] text-[14px] text-[#CBD5E1] bg-[#111827]/50 backdrop-blur-md px-[18px] py-[10px] rounded-full border border-[#334155] hover:border-[var(--color-accent-glow)] hover:text-white transition-all duration-300 cursor-default hover:shadow-[0_0_15px_rgba(125,211,252,0.3)]"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
