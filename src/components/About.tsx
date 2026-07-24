import { motion } from 'framer-motion';
import { Terminal, Code, Cpu } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative bg-[#0A0A0A]">
      {/* Background Circuit/Noise Texture placeholder */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#E10600 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
            About <span className="text-[var(--color-primary-red)]">Me</span>
          </h2>
          <div className="w-20 h-1 bg-[var(--color-primary-red)]"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Passionate Full Stack Developer and Computer Science Engineering student focused on building scalable web applications and AI-powered solutions. I enjoy solving real-world problems through clean, modern, and user-centric technology.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Final-year-bound Computer Science undergraduate (3rd year) with hands-on experience building full-stack and AI-integrated web applications. Skilled in React.js, Node.js, and AI API integration, with a proven ability to lead projects end-to-end.
            </p>
            
            <div className="flex items-center gap-4 text-[var(--color-primary-red)] mt-8">
              <span className="font-mono text-sm tracking-wider uppercase border border-[var(--color-primary-red)] px-4 py-2 rounded bg-[var(--color-primary-red)]/10">Location: Sivagangai, Tamil Nadu, India</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-[#111111] p-6 rounded-lg border border-gray-800 hover:border-[var(--color-primary-red)] transition-colors group"
            >
              <Terminal className="text-[var(--color-primary-red)] mb-4 w-10 h-10 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2 text-white">Frontend</h3>
              <p className="text-gray-400 text-sm">Crafting intuitive, responsive, and highly animated user interfaces.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-[#111111] p-6 rounded-lg border border-gray-800 hover:border-[var(--color-primary-red)] transition-colors group"
            >
              <Code className="text-[var(--color-primary-red)] mb-4 w-10 h-10 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2 text-white">Backend</h3>
              <p className="text-gray-400 text-sm">Building robust APIs, databases, and scalable server architectures.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-[#111111] p-6 rounded-lg border border-gray-800 hover:border-[var(--color-primary-red)] transition-colors group sm:col-span-2"
            >
              <Cpu className="text-[var(--color-primary-red)] mb-4 w-10 h-10 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2 text-white">AI Integration</h3>
              <p className="text-gray-400 text-sm">Leveraging models like Google Gemini to create intelligent, automated, and forward-thinking applications.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
