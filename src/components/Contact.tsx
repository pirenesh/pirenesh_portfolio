import { motion } from 'framer-motion';
import { Mail, Phone, Send, MessageSquareText } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFocused, setIsFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-32 relative z-10 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-accent-primary)]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-bg-secondary/40 backdrop-blur-md border border-[var(--color-accent-primary)]/20 rounded-full px-4 py-1.5 mb-6">
            <MessageSquareText className="w-4 h-4 text-[var(--color-accent-primary)]" />
            <span className="text-sm font-medium text-text-secondary font-body">Let's Connect</span>
          </div>
          <h2 className="font-heading font-[700] tracking-[-0.02em] text-[34px] md:text-[40px] lg:text-[48px] mb-6">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-glow)] filter drop-shadow-[0_0_10px_rgba(125,211,252,0.4)]">Touch</span>
          </h2>
          <p className="font-body font-[400] text-[17px] leading-[1.8] text-text-secondary mt-4 max-w-2xl mx-auto">
            Have a question, a project idea, or just want to say hi? I'm always open to discussing new opportunities and creative ideas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <div className="bg-bg-secondary/60 backdrop-blur-2xl p-10 lg:p-12 rounded-3xl border border-border-primary/50 shadow-lg relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent-primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <h3 className="font-heading font-[600] text-[24px] text-text-primary mb-10 relative z-10">Contact Information</h3>
              
              <div className="space-y-8 relative z-10">
                <a href="mailto:pirenesh2026@gmail.com" className="flex items-center gap-6 text-text-secondary hover:text-[var(--color-accent-primary)] transition-colors group/link">
                  <div className="w-14 h-14 rounded-2xl bg-bg-primary/80 flex items-center justify-center border border-border-primary/50 group-hover/link:border-[var(--color-accent-primary)]/50 group-hover/link:shadow-[0_0_15px_rgba(96,165,250,0.3)] transition-all duration-300">
                    <Mail className="w-6 h-6 group-hover/link:text-[var(--color-accent-glow)] transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary font-mono mb-1 uppercase tracking-wider">Email</p>
                    <p className="font-body font-[400] text-[17px] text-text-primary group-hover/link:text-[var(--color-accent-primary)] transition-colors">pirenesh2026@gmail.com</p>
                  </div>
                </a>

                <a href="tel:+919488109189" className="flex items-center gap-6 text-text-secondary hover:text-[var(--color-accent-primary)] transition-colors group/link">
                  <div className="w-14 h-14 rounded-2xl bg-bg-primary/80 flex items-center justify-center border border-border-primary/50 group-hover/link:border-[var(--color-accent-primary)]/50 group-hover/link:shadow-[0_0_15px_rgba(96,165,250,0.3)] transition-all duration-300">
                    <Phone className="w-6 h-6 group-hover/link:text-[var(--color-accent-glow)] transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary font-mono mb-1 uppercase tracking-wider">Phone</p>
                    <p className="font-body font-[400] text-[17px] text-text-primary group-hover/link:text-[var(--color-accent-primary)] transition-colors">+91 94881 09189</p>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/pirenesh-ragule-s-91a50a391" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 text-text-secondary hover:text-[var(--color-accent-primary)] transition-colors group/link">
                  <div className="w-14 h-14 rounded-2xl bg-bg-primary/80 flex items-center justify-center border border-border-primary/50 group-hover/link:border-[var(--color-accent-primary)]/50 group-hover/link:shadow-[0_0_15px_rgba(96,165,250,0.3)] transition-all duration-300">
                    <FaLinkedin className="w-6 h-6 group-hover/link:text-[var(--color-accent-glow)] transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary font-mono mb-1 uppercase tracking-wider">LinkedIn</p>
                    <p className="font-body font-[400] text-[17px] text-text-primary group-hover/link:text-[var(--color-accent-primary)] transition-colors">/in/pireneshragules</p>
                  </div>
                </a>

                <a href="https://github.com/pirenesh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 text-text-secondary hover:text-[var(--color-accent-primary)] transition-colors group/link">
                  <div className="w-14 h-14 rounded-2xl bg-bg-primary/80 flex items-center justify-center border border-border-primary/50 group-hover/link:border-[var(--color-accent-primary)]/50 group-hover/link:shadow-[0_0_15px_rgba(96,165,250,0.3)] transition-all duration-300">
                    <FaGithub className="w-6 h-6 group-hover/link:text-[var(--color-accent-glow)] transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary font-mono mb-1 uppercase tracking-wider">GitHub</p>
                    <p className="font-body font-[400] text-[17px] text-text-primary group-hover/link:text-[var(--color-accent-primary)] transition-colors">github.com/pirenesh</p>
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
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <form onSubmit={handleSubmit} className="bg-bg-secondary/60 backdrop-blur-2xl p-10 lg:p-12 rounded-3xl border border-border-primary/50 shadow-lg flex flex-col gap-6 relative">
              
              <div className="relative group">
                <label htmlFor="name" className={`block font-body font-[500] text-[15px] transition-colors mb-2 ${isFocused === 'name' ? 'text-[var(--color-accent-primary)]' : 'text-text-secondary'}`}>Your Name</label>
                <div className={`absolute -inset-0.5 bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] rounded-xl blur opacity-0 transition-opacity duration-300 ${isFocused === 'name' ? 'opacity-30' : ''}`} />
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onFocus={() => setIsFocused('name')}
                  onBlur={() => setIsFocused(null)}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="relative w-full bg-bg-primary/80 border border-border-primary rounded-xl px-5 py-4 text-text-primary focus:outline-none focus:border-[var(--color-accent-primary)]/50 transition-all font-body font-[400] text-[17px] placeholder:text-text-secondary/50"
                  placeholder="John Doe"
                />
              </div>

              <div className="relative group">
                <label htmlFor="email" className={`block font-body font-[500] text-[15px] transition-colors mb-2 ${isFocused === 'email' ? 'text-[var(--color-accent-primary)]' : 'text-text-secondary'}`}>Your Email</label>
                <div className={`absolute -inset-0.5 bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] rounded-xl blur opacity-0 transition-opacity duration-300 ${isFocused === 'email' ? 'opacity-30' : ''}`} />
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onFocus={() => setIsFocused('email')}
                  onBlur={() => setIsFocused(null)}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="relative w-full bg-bg-primary/80 border border-border-primary rounded-xl px-5 py-4 text-text-primary focus:outline-none focus:border-[var(--color-accent-primary)]/50 transition-all font-body font-[400] text-[17px] placeholder:text-text-secondary/50"
                  placeholder="john@example.com"
                />
              </div>

              <div className="relative group">
                <label htmlFor="message" className={`block font-body font-[500] text-[15px] transition-colors mb-2 ${isFocused === 'message' ? 'text-[var(--color-accent-primary)]' : 'text-text-secondary'}`}>Your Message</label>
                <div className={`absolute -inset-0.5 bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] rounded-xl blur opacity-0 transition-opacity duration-300 ${isFocused === 'message' ? 'opacity-30' : ''}`} />
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onFocus={() => setIsFocused('message')}
                  onBlur={() => setIsFocused(null)}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="relative w-full bg-bg-primary/80 border border-border-primary rounded-xl px-5 py-4 text-text-primary focus:outline-none focus:border-[var(--color-accent-primary)]/50 transition-all resize-none font-body font-[400] text-[17px] placeholder:text-text-secondary/50"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="relative group/btn mt-4 w-full bg-text-primary text-bg-primary font-body font-[600] text-[16px] tracking-[0.02em] py-4 rounded-xl overflow-hidden transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(96,165,250,0.4)] flex items-center justify-center gap-2"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center group-hover/btn:text-white transition-colors">
                  Send Message
                  <Send className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </span>
              </motion.button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
