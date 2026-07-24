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
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
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
        scrolled ? 'py-4 backdrop-blur-md bg-[#0A0A0A]/80 border-b border-gray-800' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="#home"
          className="text-2xl font-heading font-bold text-white relative group"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-[var(--color-primary-red)]">P</span>R
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--color-primary-red)] transition-all group-hover:w-full"></span>
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
                  className={`text-sm font-medium transition-colors hover:text-[var(--color-primary-red)] ${
                    activeSection === link.name.toLowerCase() ? 'text-[var(--color-primary-red)]' : 'text-gray-300'
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
              className="p-2 rounded-full hover:bg-gray-800 transition-colors text-gray-300 hover:text-white"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a
              href="/Pirenesh_Ragule_S_Resume.pdf"
              download
              className="flex items-center space-x-2 px-5 py-2 rounded border border-[var(--color-primary-red)] text-[var(--color-primary-red)] hover:bg-[var(--color-primary-red)] hover:text-white transition-all text-sm font-medium hover:shadow-[0_0_15px_rgba(225,6,0,0.5)]"
            >
              <span>Resume</span>
              <Download size={16} />
            </a>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={toggleTheme} className="text-gray-300">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white hover:text-[var(--color-primary-red)] transition-colors"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0A0A0A] border-b border-gray-800"
          >
            <ul className="flex flex-col px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block text-lg font-medium hover:text-[var(--color-primary-red)] ${
                      activeSection === link.name.toLowerCase() ? 'text-[var(--color-primary-red)]' : 'text-gray-300'
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
                  className="flex items-center justify-center space-x-2 w-full px-5 py-3 mt-4 rounded bg-[var(--color-primary-red)] text-white font-medium"
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
