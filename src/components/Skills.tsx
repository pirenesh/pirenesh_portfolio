import { motion } from 'framer-motion';

const skillsData = [
  {
    category: "Languages",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "HTML5", "CSS3", "SQL"]
  },
  {
    category: "Frontend",
    skills: ["React.js", "Vite", "Tailwind CSS", "Bootstrap", "HTML", "CSS", "Capacitor"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "FastAPI (Python)"]
  },
  {
    category: "Databases",
    skills: ["MySQL", "MongoDB", "Firebase", "PostgreSQL"]
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "Docker", "VS Code", "Figma", "Antigravity", "Vercel", "Render", "Canva"]
  },
  {
    category: "Soft Skills",
    skills: ["Team Leadership", "Problem Solving"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative bg-gradient-to-b from-[#0A0A0A] to-[#111111]">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
            Technical <span className="text-[var(--color-primary-red)]">Arsenal</span>
          </h2>
          <div className="w-20 h-1 bg-[var(--color-primary-red)] mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillsData.map((group, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-[#0A0A0A] border border-gray-800 rounded-xl p-8 hover:border-[var(--color-primary-red)] transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-primary-red)]/5 rounded-full blur-3xl group-hover:bg-[var(--color-primary-red)]/20 transition-all"></div>
              
              <h3 className="text-2xl font-bold mb-6 text-white border-b border-gray-800 pb-2 inline-block">
                {group.category}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, sIndex) => (
                  <span
                    key={sIndex}
                    className="px-4 py-2 bg-[#1A1A1A] text-gray-300 text-sm rounded border border-gray-800 group-hover:border-gray-700 hover:!border-[var(--color-primary-red)] hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
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
