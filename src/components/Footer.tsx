import { ArrowUp, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-bg-primary pt-20 pb-10 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-primary to-transparent opacity-50" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-16">
          
          <div className="text-center md:text-left">
            <a href="#home" className="font-heading font-[700] text-[28px] text-text-primary mb-3 inline-flex items-center gap-1 group">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] flex items-center justify-center text-bg-primary text-xl shadow-lg group-hover:shadow-[0_0_15px_rgba(96,165,250,0.5)] transition-all">P</span>
              <span className="tracking-tight group-hover:text-[var(--color-accent-primary)] transition-colors">irenesh</span>
            </a>
            <p className="font-body font-[400] text-[17px] leading-[1.8] text-text-secondary max-w-sm">
              Building intelligent digital systems with beautiful interfaces.
            </p>
          </div>

          <div className="flex gap-5">
            <a href="https://www.linkedin.com/in/pirenesh-ragule-s-91a50a391" target="_blank" rel="noopener noreferrer">
              <motion.div whileHover={{ scale: 1.1, y: -3 }} whileTap={{ scale: 0.95 }} className="w-12 h-12 rounded-2xl bg-bg-secondary/80 border border-border-primary/50 flex items-center justify-center text-text-secondary hover:text-[var(--color-accent-primary)] hover:border-[var(--color-accent-primary)] hover:shadow-[0_5px_20px_rgba(96,165,250,0.2)] transition-all backdrop-blur-sm">
                <FaLinkedin size={20} />
              </motion.div>
            </a>
            <a href="https://github.com/pirenesh" target="_blank" rel="noopener noreferrer">
              <motion.div whileHover={{ scale: 1.1, y: -3 }} whileTap={{ scale: 0.95 }} className="w-12 h-12 rounded-2xl bg-bg-secondary/80 border border-border-primary/50 flex items-center justify-center text-text-secondary hover:text-[var(--color-accent-primary)] hover:border-[var(--color-accent-primary)] hover:shadow-[0_5px_20px_rgba(96,165,250,0.2)] transition-all backdrop-blur-sm">
                <FaGithub size={20} />
              </motion.div>
            </a>
            <a href="mailto:pirenesh2026@gmail.com">
              <motion.div whileHover={{ scale: 1.1, y: -3 }} whileTap={{ scale: 0.95 }} className="w-12 h-12 rounded-2xl bg-bg-secondary/80 border border-border-primary/50 flex items-center justify-center text-text-secondary hover:text-[var(--color-accent-primary)] hover:border-[var(--color-accent-primary)] hover:shadow-[0_5px_20px_rgba(96,165,250,0.2)] transition-all backdrop-blur-sm">
                <Mail size={20} />
              </motion.div>
            </a>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="w-14 h-14 rounded-full bg-[var(--color-accent-primary)]/10 border border-[var(--color-accent-primary)]/30 flex items-center justify-center text-[var(--color-accent-primary)] hover:bg-[var(--color-accent-primary)] hover:text-white hover:shadow-[0_0_20px_rgba(96,165,250,0.4)] transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} />
          </motion.button>
        </div>

        <div className="text-center pt-8 border-t border-border-primary/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body font-[400] text-[15px] text-text-secondary">
            &copy; {new Date().getFullYear()} Pirenesh Ragule S. All rights reserved.
          </p>
          <p className="font-mono text-[12px] text-text-secondary uppercase tracking-[0.1em]">
            Designed & Built with <span className="text-[var(--color-accent-primary)]">Precision</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
