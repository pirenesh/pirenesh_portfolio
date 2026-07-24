import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative bg-gradient-to-t from-[#0A0A0A] to-[#111111]">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Experience Timeline */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-12 flex items-center gap-4"
            >
              <Briefcase className="w-8 h-8 text-[var(--color-primary-red)]" />
              <h2 className="text-3xl md:text-4xl font-bold font-heading">
                Experience
              </h2>
            </motion.div>

            <div className="relative border-l border-gray-800 ml-4 pl-8 pb-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                {/* Glowing Dot */}
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-[#0A0A0A] border-4 border-[var(--color-primary-red)] shadow-[0_0_10px_rgba(225,6,0,0.8)]"></div>
                
                <h3 className="text-2xl font-bold text-white mb-1">Web Development Intern</h3>
                <h4 className="text-lg text-[var(--color-primary-red)] mb-2 font-semibold">System Tron</h4>
                <p className="text-sm text-gray-400 mb-4 font-mono">08 June 2026 – 05 July 2026 (1 Month)</p>
                <p className="text-gray-300 leading-relaxed bg-[#111111] p-6 rounded-xl border border-gray-800 shadow-lg">
                  Developed four full web applications during the internship, gaining intensive hands-on experience in full-stack development, modern frameworks, and responsive design principles.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Education Timeline */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-12 flex items-center gap-4"
            >
              <GraduationCap className="w-8 h-8 text-[var(--color-primary-red)]" />
              <h2 className="text-3xl md:text-4xl font-bold font-heading">
                Education
              </h2>
            </motion.div>

            <div className="relative border-l border-gray-800 ml-4 pl-8 pb-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative"
              >
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-[#0A0A0A] border-4 border-gray-500"></div>
                
                <h3 className="text-2xl font-bold text-white mb-1">B.E. Computer Science and Engineering</h3>
                <h4 className="text-lg text-gray-300 mb-2 font-semibold">Velammal Institute of Technology</h4>
                <p className="text-sm text-gray-400 mb-4 font-mono">2024 – 2028 (Currently Pursuing 3rd Year)</p>
                
                <div className="bg-[#111111] p-6 rounded-xl border border-gray-800 shadow-lg inline-block">
                  <span className="text-gray-400">Current CGPA:</span>
                  <span className="text-3xl font-bold text-[var(--color-primary-red)] ml-4">8.71</span>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
