import { motion } from 'framer-motion';
import { ExternalLink, Trophy } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
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
    type: "Full Stack Development • FinTech • AI"
  },
  {
    title: "AI Health Chatbot",
    role: "Team Member",
    status: "SIH 2025",
    description: "Intelligent healthcare assistant built for SIH 2025, providing users with basic medical information, symptom guidance, health tips, and 24/7 natural-language support, while encouraging consultation with healthcare professionals.",
    features: [
      "Google Gemini API integration",
      "Natural language healthcare conversations",
      "Secure patient data handling"
    ],
    tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Firebase"],
    live: "#",
    github: "#",
    type: "Smart India Hackathon 2025 • AI • Healthcare"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative bg-[#0A0A0A]">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
            Featured <span className="text-[var(--color-primary-red)]">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-[var(--color-primary-red)]"></div>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#111111] border border-gray-800 rounded-2xl overflow-hidden hover:border-[var(--color-primary-red)] transition-all duration-500 group relative"
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-red)]/0 via-[var(--color-primary-red)]/5 to-[var(--color-primary-red)]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

              <div className="p-8 md:p-12 flex flex-col lg:flex-row gap-8 lg:gap-16 relative z-10">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <span className="text-[var(--color-primary-red)] text-sm font-mono tracking-wider">{project.type}</span>
                    <span className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full flex items-center gap-1 border border-gray-700">
                      {project.role === 'Project Lead' && <Trophy size={12} className="text-yellow-500" />}
                      {project.role}
                    </span>
                    <span className="px-3 py-1 bg-[var(--color-primary-red)]/10 text-[var(--color-primary-red)] text-xs rounded-full border border-[var(--color-primary-red)]/30">
                      Status: {project.status}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-6 text-white">{project.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    <ul className="list-none space-y-2">
                      {project.features.map((feature, fIndex) => (
                        <li key={fIndex} className="text-gray-400 flex items-start gap-2">
                          <span className="text-[var(--color-primary-red)] mt-1">▹</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t, tIndex) => (
                      <span key={tIndex} className="text-sm text-gray-300 bg-gray-900 px-3 py-1 rounded border border-gray-800">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.live !== '#' && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-[var(--color-primary-red)] text-white rounded hover:bg-[var(--color-primary-red-hover)] hover:shadow-[0_0_15px_rgba(225,6,0,0.4)] transition-all font-medium"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    )}
                    {project.github !== '#' && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-transparent border border-gray-600 text-white rounded hover:border-white transition-all font-medium"
                      >
                        <FaGithub size={18} />
                        Source Code
                      </a>
                    )}
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
