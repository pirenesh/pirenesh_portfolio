import { motion } from 'framer-motion';
import { ExternalLink, Trophy, Code2 } from 'lucide-react';

export const projects = [
  {
    title: "Finora — AI-Integrated Smart Finance",
    role: "Project Lead",
    status: "Completed",
    description: "A modern AI-powered personal finance management application that helps users track income and expenses, analyze spending patterns, set financial goals, and securely manage their finances through an intuitive dashboard.",
    features: [
      "AI financial assistant 'FinBot' (Gemini API)",
      "Secure Auth & Encrypted data",
      "Real-time market data (Stocks, Gold, Crypto)",
      "Monthly analytics & interactive charts",
    ],
    tech: ["React.js", "TypeScript", "Tailwind", "Node.js", "MongoDB", "FastAPI", "PostgreSQL"],
    live: "https://finora-six-ochre.vercel.app/",
    github: "https://github.com/pirenesh/finora",
    type: "FinTech • AI"
  },
  {
    title: "AI-Driven Public Health Chatbot",
    role: "Team Member",
    status: "SIH 2025 Finalist",
    description: "An AI-driven public health chatbot built for Smart India Hackathon 2025, designed specifically for rural India to bridge the last-mile health awareness gap. The chatbot delivers multilingual, accessible, preventive healthcare guidance rather than just treatment info — focusing on disease awareness, vaccination schedules, and preventive measures.",
    features: [
      "Multilingual support (English, Hindi, Odia — expandable to 20+ Indian languages via IndicNLP)",
      "Accessible via WhatsApp & SMS, so users without smartphones or internet access can benefit",
      "Vaccination reminder system based on date-of-birth-driven schedule logic",
      "Mock outbreak alert system (simulated government API integration)",
      "Designed for integration with NDHM and CoWIN/State Health databases"
    ],
    tech: ["Rasa AI", "HuggingFace", "IndicNLP", "Twilio", "FastAPI", "PostgreSQL", "AWS / GCP"],
    live: "#",
    github: "#",
    type: "MedTech / BioTech / HealthTech"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative z-10">
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-20"
        >
          <div className="inline-flex items-center space-x-2 bg-bg-secondary/40 backdrop-blur-md border border-border-primary rounded-full px-4 py-1.5 mb-6">
            <Code2 className="w-4 h-4 text-[var(--color-accent-primary)]" />
            <span className="text-sm font-medium text-text-secondary font-body">Selected Works</span>
          </div>
          <h2 className="font-heading font-[700] tracking-[-0.02em] text-[34px] md:text-[40px] lg:text-[48px] mb-6">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-glow)] filter drop-shadow-[0_0_10px_rgba(125,211,252,0.4)]">Projects</span>
          </h2>
        </motion.div>

        <div className="space-y-16 lg:space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative group rounded-3xl"
            >
              {/* Animated Gradient Border (visible on hover) */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--color-accent-primary)] via-[var(--color-accent-secondary)] to-[var(--color-accent-primary)] rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-sm group-hover:blur-md" />
              
              <div className="relative bg-bg-secondary/80 backdrop-blur-2xl border border-border-primary/50 group-hover:border-transparent rounded-3xl p-8 lg:p-12 overflow-hidden transition-all duration-500">
                
                {/* Abstract Premium Background for Card */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-accent-primary)]/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-[var(--color-accent-primary)]/10 transition-colors duration-700" />
                
                <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-20">
                  
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-6 flex-wrap">
                      <span className="text-[var(--color-accent-glow)] font-body font-[500] text-[12px] uppercase tracking-[0.05em] bg-[var(--color-accent-primary)]/10 px-3 py-1 rounded-full border border-[var(--color-accent-primary)]/20" style={{ fontVariantCaps: 'small-caps' }}>
                        {project.type}
                      </span>
                      <span className="px-3 py-1 bg-bg-primary/50 text-text-secondary font-body font-[500] text-[12px] uppercase tracking-[0.05em] rounded-full flex items-center gap-1.5 border border-border-primary/50" style={{ fontVariantCaps: 'small-caps' }}>
                        {project.role === 'Project Lead' && <Trophy size={12} className="text-yellow-500" />}
                        {project.role}
                      </span>
                      <span className="px-3 py-1 bg-bg-primary/50 text-text-secondary font-body font-[500] text-[12px] uppercase tracking-[0.05em] rounded-full border border-border-primary/50" style={{ fontVariantCaps: 'small-caps' }}>
                        {project.status}
                      </span>
                    </div>
                    
                    <h3 className="font-heading font-[600] text-[24px] mb-6 text-text-primary leading-tight group-hover:text-[var(--color-accent-glow)] transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="font-body font-[400] text-[17px] leading-[1.8] text-text-secondary mb-8 max-w-2xl">
                      {project.description}
                    </p>
                    
                    <div className="mb-10">
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {project.features.map((feature, fIndex) => (
                          <li key={fIndex} className="text-text-secondary font-body font-[400] text-[15px] flex items-start gap-2.5">
                            <span className="text-[var(--color-accent-primary)] mt-0.5">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-10">
                      {project.tech.map((t, tIndex) => (
                        <span key={tIndex} className="font-body font-[500] text-[13px] uppercase tracking-[0.05em] text-text-primary bg-bg-primary/60 px-4 py-1.5 rounded-full border border-border-primary group-hover:border-[var(--color-accent-primary)]/30 transition-colors" style={{ fontVariantCaps: 'small-caps' }}>
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto pt-6">
                      {project.live !== '#' && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="block w-full">
                          <motion.button 
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="relative group/btn flex items-center justify-center gap-2 w-full px-8 py-4 bg-text-primary text-bg-primary rounded-full font-body font-[600] text-[16px] tracking-[0.02em] overflow-hidden transition-all shadow-lg hover:shadow-[0_0_20px_rgba(96,165,250,0.5)]"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                            <span className="relative z-10 flex items-center group-hover/btn:text-white transition-colors">
                              <ExternalLink size={18} className="mr-2" /> Live Demo
                            </span>
                          </motion.button>
                        </a>
                      )}
                    </div>
                  </div>
                  
                  {/* Decorative Right Side - Interactive Tech Grid instead of Image */}
                  <div className="hidden lg:flex flex-1 items-center justify-center relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-border-primary)]/20 to-transparent rounded-2xl border border-border-primary/30" />
                    <div className="relative w-full h-full min-h-[300px] flex items-center justify-center p-8">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full opacity-50 group-hover:opacity-100 transition-opacity duration-700">
                         {project.tech.slice(0, 6).map((t, i) => (
                           <div key={i} className="aspect-square rounded-xl bg-bg-primary/80 border border-border-primary/50 flex items-center justify-center p-4 text-center font-mono text-[12px] font-semibold text-[var(--color-accent-primary)] group-hover:border-[var(--color-accent-primary)]/50 group-hover:shadow-[0_0_15px_rgba(96,165,250,0.2)] transition-all duration-500 hover:-translate-y-1">
                             {t}
                           </div>
                         ))}
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
