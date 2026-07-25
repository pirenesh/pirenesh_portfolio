import { motion } from 'framer-motion';
import { Award, CheckCircle2, Star, ShieldCheck } from 'lucide-react';

export const certificates = [
  {
    title: "Web Development Internship",
    issuer: "System Tron",
    id: "ST/INP/12340",
    date: "08-June-2026 to 05-July-2026",
    image: "/assets/certificate_systemtron.png",
    link: "#"
  },
  {
    title: "AI Fundamentals: Foundations for Understanding AI",
    issuer: "IBM SkillsBuild",
    id: "Artificial Intelligence",
    date: "01 July 2026",
    image: "/assets/certificate_ibm_ai_fundamentals.pdf",
    link: "https://www.credly.com/go/qPXbPL6C"
  },
  {
    title: "Lifelong Professional Skills",
    issuer: "IBM SkillsBuild",
    id: "Professional & Employability",
    date: "01 July 2026",
    image: "/assets/certificate_ibm_lifelong_skills.pdf",
    link: "https://www.credly.com/go/UGELGLX5"
  }
];

const achievements = [
  "🥈 2nd Prize — Designing Competition, Sairam College of Engineering",
  "🇮🇳 Selected to build and present an AI Health Chatbot at Smart India Hackathon (SIH) 2025",
  "👨‍💻 Led development of Finora as Project Lead — coordinated design, development, and deployment end-to-end",
  "🎨 Proficient in Canva for premium design work and UI/UX conceptualization"
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-32 relative z-10">
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        
        {/* Certificates */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-bg-secondary/40 backdrop-blur-md border border-border-primary rounded-full px-4 py-1.5 mb-6">
            <ShieldCheck className="w-4 h-4 text-[var(--color-accent-primary)]" />
            <span className="text-sm font-medium text-text-secondary font-body">Verified Credentials</span>
          </div>
          <h2 className="font-heading font-[700] tracking-[-0.02em] text-[34px] md:text-[40px] lg:text-[48px] mb-4">
            Licenses & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-glow)] filter drop-shadow-[0_0_10px_rgba(125,211,252,0.4)]">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1, type: "spring" }}
              className="group relative h-full"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-br from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
              
              <div className="relative h-full bg-bg-secondary/80 backdrop-blur-xl border border-border-primary/50 rounded-2xl p-8 flex flex-col group-hover:border-transparent transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-[var(--color-accent-primary)]/10 flex items-center justify-center mb-6 group-hover:bg-[var(--color-accent-primary)]/20 transition-colors">
                  <Award className="w-8 h-8 text-[var(--color-accent-primary)]" />
                </div>
                
                <h3 className="font-heading font-[600] text-[24px] text-text-primary mb-3 leading-tight">{cert.title}</h3>
                <p className="font-body font-[400] text-[17px] text-[var(--color-accent-secondary)] mb-1">{cert.issuer}</p>
                <p className="font-mono text-[12px] text-text-secondary mb-8 bg-bg-primary/50 inline-block px-2 py-1 rounded border border-border-primary w-fit mt-2">
                  {cert.id} • {cert.date}
                </p>
                
                <div className="mt-auto pt-6 border-t border-border-primary/50 flex flex-wrap justify-between items-center gap-4">
                  {cert.link !== '#' ? (
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-accent-primary)]/10 text-[var(--color-accent-primary)] rounded-full font-body font-[600] text-[15px] hover:bg-[var(--color-accent-primary)] hover:text-white transition-all">
                      Verify Credential <CheckCircle2 size={16} />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-400 rounded-full font-body font-[600] text-[15px]">
                      Completed <CheckCircle2 size={16} />
                    </span>
                  )}
                  <a href={cert.image} target="_blank" rel="noopener noreferrer" className="text-text-secondary font-body font-[500] text-[15px] hover:text-[var(--color-accent-primary)] transition-colors">
                    View File
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 text-center md:text-left flex flex-col md:flex-row items-center gap-6"
        >
          <div className="w-16 h-16 rounded-2xl bg-yellow-500/10 flex items-center justify-center border border-yellow-500/20 shadow-[0_0_15px_rgba(234,179,8,0.2)]">
            <Star className="w-8 h-8 text-yellow-500 fill-yellow-500/50" />
          </div>
          <div>
            <h2 className="font-heading font-[700] tracking-[-0.02em] text-[34px] md:text-[40px] lg:text-[48px]">
              Key Achievements
            </h2>
            <p className="font-body font-[400] text-[17px] text-text-secondary mt-2">Milestones and recognitions.</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-bg-secondary/60 backdrop-blur-md p-6 lg:p-8 rounded-2xl border border-border-primary/50 hover:border-[var(--color-accent-primary)]/50 shadow-lg hover:shadow-[0_10px_30px_rgba(96,165,250,0.1)] transition-all group"
            >
              <p className="font-body font-[400] text-[17px] leading-[1.8] text-text-primary group-hover:text-white transition-colors">{achievement}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certificates;
