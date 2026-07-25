import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun, Download } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll
      const sections = navLinks.map(link => link.name.toLowerCase());
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 backdrop-blur-md bg-bg-primary/80 border-b border-border-primary' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="#home"
          className="text-2xl font-heading font-bold text-text-primary relative group"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-[var(--color-accent-primary)]">P</span>R
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--color-accent-primary)] transition-all group-hover:w-full"></span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a
                  href={link.href}
                  className={`font-body font-[500] text-[15px] transition-colors hover:text-[var(--color-accent-primary)] ${
                    activeSection === link.name.toLowerCase() ? 'text-[var(--color-accent-primary)]' : 'text-text-secondary'
                  }`}
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>

          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-border-primary transition-colors text-text-secondary hover:text-text-primary"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a
              href="/Pirenesh_Ragule_S_Resume.pdf"
              download
              className="flex items-center space-x-2 px-5 py-2 rounded border border-[var(--color-accent-primary)] text-[var(--color-accent-primary)] hover:bg-[var(--color-accent-primary)] hover:text-text-primary transition-all font-body font-[500] text-[15px] hover:shadow-[0_0_15px_rgba(96,165,250,0.5)]"
            >
              <span>Resume</span>
              <Download size={16} />
            </a>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={toggleTheme} className="text-text-secondary">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-text-primary hover:text-[var(--color-accent-primary)] transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bg-primary border-b border-border-primary"
          >
            <ul className="flex flex-col px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block font-body font-[500] text-[18px] hover:text-[var(--color-accent-primary)] ${
                      activeSection === link.name.toLowerCase() ? 'text-[var(--color-accent-primary)]' : 'text-text-secondary'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/Pirenesh_Ragule_S_Resume.pdf"
                  download
                  className="flex items-center justify-center space-x-2 w-full px-5 py-3 mt-4 rounded bg-[var(--color-accent-primary)] text-white font-body font-[500] text-[15px]"
                >
                  <span>Download Resume</span>
                  <Download size={18} />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
