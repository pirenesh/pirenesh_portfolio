import { motion, useScroll, useSpring } from 'framer-motion';
import { Briefcase, GraduationCap, ArrowRightCircle } from 'lucide-react';
import { useRef } from 'react';

export const experiences = [
  {
    role: "Web Development Intern",
    company: "System Tron",
    startDate: "08 June 2026",
    endDate: "05 July 2026",
    description: "Developed four full web applications during the internship, gaining intensive hands-on experience in full-stack development, modern frameworks, and responsive design principles."
  }
];

const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20
  });

  return (
    <section id="experience" className="py-32 relative z-10" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Experience Timeline */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-16 flex items-center gap-4"
            >
              <div className="p-3 bg-[var(--color-accent-primary)]/10 rounded-xl border border-[var(--color-accent-primary)]/30">
                <Briefcase className="w-8 h-8 text-[var(--color-accent-primary)]" />
              </div>
              <h2 className="font-heading font-[700] tracking-[-0.02em] text-[34px] md:text-[40px] lg:text-[48px] mb-4">
                Experience
              </h2>
            </motion.div>

            <div className="relative ml-6 pl-10 pb-8">
              {/* Background Line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-border-primary/50" />
              {/* Animated Draw Line */}
              <motion.div 
                className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] origin-top shadow-[0_0_10px_rgba(96,165,250,0.8)]"
                style={{ scaleY: lineHeight }}
              />

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative group"
              >
                {/* Glowing Node */}
                <div className="absolute -left-[45px] top-1.5 w-4 h-4 rounded-full bg-bg-primary border-[3px] border-border-primary group-hover:border-[var(--color-accent-primary)] group-hover:shadow-[0_0_15px_rgba(96,165,250,0.8)] transition-all duration-300 z-10"></div>
                
                <h3 className="font-heading font-[600] text-[24px] text-text-primary mb-1 group-hover:text-[var(--color-accent-glow)] transition-colors">Web Development Intern</h3>
                <h4 className="font-body font-[500] text-[17px] text-[var(--color-accent-primary)] mb-2 flex items-center gap-2">
                  System Tron
                </h4>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-bg-secondary border border-border-primary rounded-full font-body font-[500] text-[13px] text-text-secondary mb-6 uppercase tracking-[0.05em]" style={{ fontVariantCaps: 'small-caps' }}>
                  <span>08 June 2026</span>
                  <ArrowRightCircle size={12} className="text-[var(--color-accent-primary)]" />
                  <span>05 July 2026</span>
                </div>
                
                <div className="bg-bg-secondary/40 backdrop-blur-md p-8 rounded-2xl border border-border-primary/50 shadow-lg group-hover:border-[var(--color-accent-primary)]/40 transition-all duration-300 group-hover:bg-bg-secondary/60">
                  <p className="font-body font-[400] text-[17px] leading-[1.8] text-text-secondary">
                    Developed four full web applications during the internship, gaining intensive hands-on experience in full-stack development, modern frameworks, and responsive design principles.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Education Timeline */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-16 flex items-center gap-4"
            >
              <div className="p-3 bg-[var(--color-accent-secondary)]/10 rounded-xl border border-[var(--color-accent-secondary)]/30">
                <GraduationCap className="w-8 h-8 text-[var(--color-accent-secondary)]" />
              </div>
              <h2 className="font-heading font-[700] tracking-[-0.02em] text-[34px] md:text-[40px] lg:text-[48px] mb-4">
                Education
              </h2>
            </motion.div>

            <div className="relative ml-6 pl-10 pb-8">
              {/* Background Line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-border-primary/50" />
              {/* Animated Draw Line */}
              <motion.div 
                className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-accent-secondary)] to-[var(--color-accent-primary)] origin-top shadow-[0_0_10px_rgba(56,189,248,0.8)]"
                style={{ scaleY: lineHeight }}
              />

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative group"
              >
                {/* Glowing Node */}
                <div className="absolute -left-[45px] top-1.5 w-4 h-4 rounded-full bg-bg-primary border-[3px] border-border-primary group-hover:border-[var(--color-accent-secondary)] group-hover:shadow-[0_0_15px_rgba(56,189,248,0.8)] transition-all duration-300 z-10"></div>
                
                <h3 className="font-heading font-[600] text-[24px] text-text-primary mb-1 group-hover:text-[var(--color-accent-glow)] transition-colors">B.E. Computer Science & Engineering</h3>
                <h4 className="font-body font-[500] text-[17px] text-text-secondary mb-2">Velammal Institute of Technology</h4>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-bg-secondary border border-border-primary rounded-full font-body font-[500] text-[13px] text-text-secondary mb-6 uppercase tracking-[0.05em]" style={{ fontVariantCaps: 'small-caps' }}>
                  <span>2024</span>
                  <ArrowRightCircle size={12} className="text-[var(--color-accent-secondary)]" />
                  <span>2028 (Expected)</span>
                </div>
                
                <div className="bg-bg-secondary/40 backdrop-blur-md p-8 rounded-2xl border border-border-primary/50 shadow-lg group-hover:border-[var(--color-accent-secondary)]/40 transition-all duration-300 flex items-center justify-between group-hover:bg-bg-secondary/60">
                  <div>
                    <span className="font-body font-[500] text-[13px] text-text-secondary block mb-1 uppercase tracking-[0.05em]" style={{ fontVariantCaps: 'small-caps' }}>Current Status</span>
                    <span className="font-body font-[400] text-[17px] text-text-primary">Pursuing 3rd Year</span>
                  </div>
                  <div className="text-right">
                    <span className="font-body font-[500] text-[13px] text-text-secondary block mb-1 uppercase tracking-[0.05em]" style={{ fontVariantCaps: 'small-caps' }}>CGPA</span>
                    <span className="font-heading font-[800] text-[36px] text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] drop-shadow-[0_0_10px_rgba(56,189,248,0.3)]">
                      8.71
                    </span>
                  </div>
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
