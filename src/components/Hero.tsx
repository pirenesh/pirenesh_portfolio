import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ProfileOrbit from './ProfileOrbit';

const Hero = () => {
  // 3D Tilt Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const rotateX = useTransform(y, [-200, 200], [15, -15]);
  const rotateY = useTransform(x, [-200, 200], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };
  
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12"
    >
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8 max-w-7xl">
        
        {/* Left: Text Content */}
        <motion.div 
          className="w-full lg:w-[65%] text-left order-2 lg:order-1 pt-12 lg:pt-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-bg-secondary/40 backdrop-blur-md border border-[var(--color-accent-primary)]/30 rounded-full px-4 py-1.5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--color-accent-primary)] animate-pulse" />
            <span className="text-sm font-medium text-text-secondary font-body">Open to new opportunities</span>
          </motion.div>

          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.05, delayChildren: 0.1 }
              }
            }}
            className="font-heading font-[800] tracking-[-0.04em] leading-none mb-4 text-[42px] sm:text-[52px] lg:text-[64px] xl:text-[72px] flex flex-wrap"
          >
            {"Pirenesh Ragule S".split("").map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className={char === " " ? "w-3 sm:w-4 lg:w-5" : "text-transparent bg-clip-text bg-gradient-to-r from-white to-[var(--color-accent-primary)] filter drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="font-heading font-[700] text-[32px] text-[var(--color-accent-primary)] mb-6"
          >
            Full Stack Developer & AI Enthusiast
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="font-body font-[400] text-[18px] leading-[1.8] text-text-secondary mb-10 max-w-[650px]"
          >
            Focused on creating high-performance applications with beautiful, modern interfaces. I enjoy solving real-world problems through clean and user-centric technology.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a href="#projects">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group px-8 py-3.5 bg-text-primary text-bg-primary rounded-full font-body font-[600] text-[16px] tracking-[0.02em] overflow-hidden transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(96,165,250,0.5)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center group-hover:text-white transition-colors">
                  View Projects <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </a>
            
            <a href="/Pirenesh_Ragule_S_Resume.pdf" download target="_blank" rel="noopener noreferrer">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 bg-bg-secondary/40 backdrop-blur-md border border-border-primary hover:border-[var(--color-accent-primary)]/50 rounded-full font-body font-[600] text-[16px] tracking-[0.02em] flex items-center text-text-primary transition-all hover:bg-bg-secondary/80"
              >
                <Download className="mr-2 w-5 h-5" /> Resume
              </motion.button>
            </a>
          </motion.div>

          <div className="flex items-center gap-6 mt-12 text-text-secondary">
            <a href="https://github.com/Pirenesh" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent-primary)] transition-colors hover:scale-110 transform duration-200">
              <FaGithub className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/pirenesh-ragule-s-91a50a391" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent-primary)] transition-colors hover:scale-110 transform duration-200">
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a href="mailto:pirenesh2026@gmail.com" className="hover:text-[var(--color-accent-primary)] transition-colors hover:scale-110 transform duration-200">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        {/* Right: Atomic Profile Animation */}
        <motion.div 
          className="w-full lg:w-[35%] flex justify-center lg:justify-end order-1 lg:order-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ perspective: 1000 }}
        >
          <motion.div
            className="relative w-[200px] h-[200px] md:w-[240px] md:h-[240px] lg:w-[300px] lg:h-[300px] group cursor-pointer mt-10 lg:mt-0"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            animate={{ y: [0, -10, 0] }}
            transition={{ y: { repeat: Infinity, duration: 5, ease: "easeInOut" } }}
          >
            {/* Orbiting Tech Icons & Backgrounds */}
            <ProfileOrbit />
            
            {/* Profile Frame with 2px Ice Blue Border & Soft Glow */}
            <div className="absolute inset-0 rounded-full overflow-hidden bg-bg-secondary border-[2px] border-[var(--color-accent-primary)] shadow-[0_0_30px_rgba(96,165,250,0.5)] z-20">
              {/* Note: Increment the ?v= parameter if the photo file is replaced to bypass browser cache */}
              <img
                src="/assets/pirenesh_photo_latest.png?v=1"
                alt="Pirenesh Ragule S"
                className="w-full h-full object-cover object-center transition-all duration-500"
                style={{ imageRendering: "high-quality" as any }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=Pirenesh+Ragule+S&background=030712&color=60A5FA&size=420";
                }}
              />
            </div>
          </motion.div>
        </motion.div>
        
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-10 hidden md:flex"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-[var(--color-accent-primary)] to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
