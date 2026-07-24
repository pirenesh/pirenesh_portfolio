import { motion } from 'framer-motion';
import { Award, CheckCircle2, Star } from 'lucide-react';

const certificates = [
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
    <section id="certificates" className="py-24 relative bg-[#0A0A0A]">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Certificates */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
            Licenses & <span className="text-[var(--color-primary-red)]">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-[var(--color-primary-red)] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#111111] border border-gray-800 rounded-xl p-6 hover:border-[var(--color-primary-red)] transition-all group flex flex-col h-full"
            >
              <Award className="w-10 h-10 text-[var(--color-primary-red)] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
              <p className="text-gray-400 mb-1">{cert.issuer}</p>
              <p className="text-xs text-gray-500 mb-4 font-mono">{cert.id} • {cert.date}</p>
              
              <div className="mt-auto pt-6 border-t border-gray-800 flex justify-between items-center">
                {cert.link !== '#' ? (
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary-red)] text-sm font-semibold hover:underline flex items-center gap-1">
                    Verify Credential <CheckCircle2 size={14} />
                  </a>
                ) : (
                  <span className="text-gray-500 text-sm font-semibold flex items-center gap-1">
                    Internship Completed <CheckCircle2 size={14} />
                  </span>
                )}
                <a href={cert.image} target="_blank" rel="noopener noreferrer" className="text-white text-sm hover:text-[var(--color-primary-red)] transition-colors">
                  View File
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <Star className="w-8 h-8 text-yellow-500 fill-yellow-500/20" />
            <h2 className="text-3xl md:text-4xl font-bold font-heading">
              Key Achievements
            </h2>
          </div>
          <div className="w-20 h-1 bg-yellow-500"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#111111] p-6 rounded-lg border-l-4 border-[var(--color-primary-red)] shadow-lg hover:shadow-[0_0_20px_rgba(225,6,0,0.15)] transition-all"
            >
              <p className="text-gray-300 leading-relaxed text-lg">{achievement}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certificates;
