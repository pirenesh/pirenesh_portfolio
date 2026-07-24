import { ArrowUp, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] border-t border-gray-800 pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          
          <div className="text-center md:text-left">
            <a href="#home" className="text-3xl font-heading font-bold text-white mb-2 inline-block">
              <span className="text-[var(--color-primary-red)]">P</span>R
            </a>
            <p className="text-gray-400 max-w-sm text-sm">
              Crafting Scalable Web Experiences with Code & Creativity
            </p>
          </div>

          <div className="flex gap-4">
            <a href="https://linkedin.com/in/pireneshragules" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[var(--color-primary-red)] hover:shadow-[0_0_15px_rgba(225,6,0,0.5)] transition-all">
              <FaLinkedin size={18} />
            </a>
            <a href="https://github.com/pirenesh" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[var(--color-primary-red)] hover:shadow-[0_0_15px_rgba(225,6,0,0.5)] transition-all">
              <FaGithub size={18} />
            </a>
            <a href="mailto:pirenesh2026@gmail.com" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[var(--color-primary-red)] hover:shadow-[0_0_15px_rgba(225,6,0,0.5)] transition-all">
              <Mail size={18} />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-[var(--color-primary-red)] hover:border-[var(--color-primary-red)] transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>

        <div className="text-center border-t border-gray-900 pt-8">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Pirenesh Ragule S. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
