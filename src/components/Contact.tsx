import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Since there's no backend specified for the contact form, we'll just log it
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 relative bg-gradient-to-b from-[#0A0A0A] to-[#050505]">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
            Get In <span className="text-[var(--color-primary-red)]">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-[var(--color-primary-red)] mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-[#111111]/80 backdrop-blur-md p-8 rounded-2xl border border-gray-800 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
              <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <a href="mailto:pirenesh2026@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-[var(--color-primary-red)] transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center border border-gray-800 group-hover:border-[var(--color-primary-red)] transition-colors">
                    <Mail size={20} className="group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-mono mb-1">Email</p>
                    <p className="font-medium">pirenesh2026@gmail.com</p>
                  </div>
                </a>

                <a href="tel:+919488109189" className="flex items-center gap-4 text-gray-300 hover:text-[var(--color-primary-red)] transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center border border-gray-800 group-hover:border-[var(--color-primary-red)] transition-colors">
                    <Phone size={20} className="group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-mono mb-1">Phone</p>
                    <p className="font-medium">+91 94881 09189</p>
                  </div>
                </a>

                <a href="https://linkedin.com/in/pireneshragules" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-[var(--color-primary-red)] transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center border border-gray-800 group-hover:border-[var(--color-primary-red)] transition-colors">
                    <FaLinkedin size={20} className="group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-mono mb-1">LinkedIn</p>
                    <p className="font-medium">linkedin.com/in/pireneshragules</p>
                  </div>
                </a>

                <a href="https://github.com/pirenesh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-[var(--color-primary-red)] transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center border border-gray-800 group-hover:border-[var(--color-primary-red)] transition-colors">
                    <FaGithub size={20} className="group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-mono mb-1">GitHub</p>
                    <p className="font-medium">github.com/pirenesh</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="bg-[#111111]/80 backdrop-blur-md p-8 rounded-2xl border border-gray-800 shadow-[0_8px_32px_rgba(0,0,0,0.4)] flex flex-col gap-6">
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-[#0A0A0A] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary-red)] focus:ring-1 focus:ring-[var(--color-primary-red)] transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-[#0A0A0A] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary-red)] focus:ring-1 focus:ring-[var(--color-primary-red)] transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Your Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-[#0A0A0A] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary-red)] focus:ring-1 focus:ring-[var(--color-primary-red)] transition-all resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[var(--color-primary-red)] text-white font-semibold py-4 rounded-lg hover:bg-[var(--color-primary-red-hover)] hover:shadow-[0_0_20px_rgba(225,6,0,0.4)] transition-all flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
