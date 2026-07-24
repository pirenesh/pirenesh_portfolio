import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Particle Background */}
      <ParticleBackground />

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-[var(--color-primary-red)] font-semibold tracking-wider uppercase mb-4 text-sm md:text-base">
              Full Stack Developer & UI/UX Designer
            </h2>
          </motion.div>
          
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Crafting Scalable <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              Web Experiences
            </span> <br />
            with Code & Creativity.
          </motion.h1>

          <motion.p
            className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto md:mx-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Hi, I'm <strong className="text-white">Pirenesh Ragule S</strong>. A passionate engineer focused on building premium, AI-powered solutions and seamless user interfaces.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-[var(--color-primary-red)] text-white font-semibold rounded hover:bg-[var(--color-primary-red-hover)] hover:shadow-[0_0_20px_rgba(225,6,0,0.4)] transition-all flex items-center gap-2 group w-full sm:w-auto justify-center"
            >
              View My Work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/Pirenesh_Ragule_S_Resume.pdf"
              download
              className="px-8 py-4 border border-gray-600 text-white font-semibold rounded hover:border-[var(--color-primary-red)] hover:text-[var(--color-primary-red)] transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              Download Resume
              <Download size={20} />
            </a>
          </motion.div>
        </div>

        {/* Image/Avatar */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]">
            {/* Glowing Rings */}
            <div className="absolute inset-0 rounded-full border border-[var(--color-primary-red)] animate-[spin_10s_linear_infinite] opacity-50" />
            <div className="absolute inset-4 rounded-full border-2 border-[var(--color-primary-red)] border-dashed animate-[spin_15s_linear_infinite_reverse] opacity-70" />
            
            {/* Hexagon Clip or Circle for Image */}
            <div className="absolute inset-8 rounded-full overflow-hidden bg-gray-900 border-4 border-gray-800 shadow-[0_0_30px_rgba(225,6,0,0.3)]">
              <img
                src="/assets/pirenesh_photo.jpg"
                alt="Pirenesh Ragule S"
                className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=Pirenesh+Ragule+S&background=0D0D0D&color=E10600&size=400";
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-10 hidden md:flex"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-[var(--color-primary-red)] to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
