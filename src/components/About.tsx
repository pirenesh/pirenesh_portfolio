import { motion, useScroll, useTransform, animate, useInView } from 'framer-motion';
import { Terminal, Code, Cpu, User } from 'lucide-react';
import { useRef, useEffect } from 'react';
import { projects } from './Projects';
import { experiences } from './Experience';
import { certificates } from './Certificates';

const CGPA = "8.71";

function Counter({ value, decimals = 0 }: { value: number | string, decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  useEffect(() => {
    if (isInView && ref.current) {
      const target = typeof value === 'string' ? parseFloat(value) : value;
      animate(0, target, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => {
          if (ref.current) {
            ref.current.textContent = latest.toFixed(decimals);
          }
        }
      });
    }
  }, [value, decimals, isInView]);

  return <span ref={ref}>0</span>;
}

const stats = [
  { label: "CGPA", value: CGPA, decimals: 2 },
  { label: "PROJECTS", value: projects.length, decimals: 0 },
  { label: "INTERNSHIPS", value: experiences.length, decimals: 0 },
  { label: "CERTIFICATIONS", value: certificates.length, decimals: 0 },
];

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Subtle parallax effect for the portrait
  const photoY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section id="about" className="py-32 relative z-10" ref={containerRef}>
      {/* Background Abstract Glows */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--color-accent-primary)]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--color-accent-secondary)]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12" /* Fixed spacing: changed mb-20 to mb-12 */
        >
          <div className="inline-flex items-center space-x-2 bg-bg-secondary/40 backdrop-blur-md border border-border-primary rounded-full px-4 py-1.5 mb-6">
            <User className="w-4 h-4 text-[var(--color-accent-primary)]" />
            <span className="text-sm font-medium text-text-secondary font-body">Biography</span>
          </div>
          <h2 className="font-heading font-[700] tracking-[-0.02em] text-[34px] md:text-[40px] lg:text-[48px] mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-glow)] filter drop-shadow-[0_0_10px_rgba(125,211,252,0.4)]">Me</span>
          </h2>
        </motion.div>

        {/* Responsive Grid/Flex Layout for specific ordering */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Portrait Photo (Mobile: Order 1, Desktop: Top Right) */}
          <motion.div 
            className="w-full order-1 lg:order-none lg:col-start-2 lg:row-start-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ y: photoY }}
          >
            <div className="relative w-full max-w-sm mx-auto lg:max-w-none aspect-[4/5] lg:aspect-square rounded-[2rem] p-2 bg-gradient-to-br from-[var(--color-accent-primary)]/30 via-transparent to-transparent shadow-[0_0_30px_rgba(96,165,250,0.15)] group">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent-primary)]/20 to-transparent rounded-[2rem] blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-full h-full rounded-[1.5rem] overflow-hidden border border-border-primary/50 group-hover:border-[var(--color-accent-primary)]/50 transition-colors duration-500 relative bg-bg-secondary/50">
                 
                 {/* Ice Blue Overlay for integration */}
                 <div className="absolute inset-0 bg-[var(--color-accent-primary)]/10 mix-blend-overlay z-20 group-hover:bg-transparent transition-colors duration-500" />
                 
                 {/* Full-length portrait */}
                 {/* Note: Increment the ?v= parameter if the photo file is replaced to bypass browser cache */}
                 <img 
                   src="/assets/pirenesh_photo_latest.png?v=1" 
                   alt="Pirenesh Ragule S" 
                   className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                   style={{ imageRendering: 'high-quality' as any }}
                 />
                 
                 {/* Soft gradient fade at the bottom blending into dark background */}
                 <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#030712] via-[#030712]/80 to-transparent z-10 pointer-events-none" />
              </div>
            </div>
          </motion.div>

          {/* Bio Content (Mobile: Order 2, Desktop: Left Column spanning 2 rows) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col gap-8 order-2 lg:order-none lg:col-start-1 lg:row-start-1 h-full lg:sticky lg:top-32"
          >
            <div className="space-y-6 font-body font-[400] text-[17px] leading-[1.8] text-text-secondary">
              <p>
                Passionate Full Stack Developer and Computer Science Engineering student focused on building scalable web applications and AI-powered solutions. I enjoy solving real-world problems through clean, modern, and user-centric technology.
              </p>
              <p>
                Final-year-bound Computer Science undergraduate (3rd year) with hands-on experience building full-stack and AI-integrated web applications. Skilled in React.js, Node.js, and AI API integration, with a proven ability to lead projects end-to-end.
              </p>
            </div>
            
            <div className="inline-flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[var(--color-accent-primary)]/10 flex items-center justify-center border border-[var(--color-accent-primary)]/30">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent-primary)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--color-accent-primary)]"></span>
                </span>
              </div>
              <div>
                <p className="font-body font-[500] text-[13px] text-text-secondary uppercase tracking-[0.05em] mb-0.5" style={{ fontVariantCaps: 'small-caps' }}>Location</p>
                <p className="font-heading font-[600] text-[18px] text-text-primary">Sivagangai, Tamil Nadu, India</p>
              </div>
            </div>

            {/* Dynamic Stats Row */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 mt-4 border-t border-border-primary/30 w-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <div className="font-heading font-[800] text-[36px] lg:text-[42px] text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-glow)] mb-1 leading-none">
                    <Counter value={stat.value} decimals={stat.decimals} />
                  </div>
                  <div className="font-body font-[600] text-[12px] text-text-secondary uppercase tracking-[0.1em]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Skill Highlight Cards (Mobile: Order 3, Desktop: Bottom Full Width) */}
          <div className="flex flex-wrap justify-center gap-6 relative w-full order-3 lg:order-none lg:col-span-2 lg:row-start-2 mt-8 lg:mt-12">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group relative w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent-primary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-md" />
              <div className="relative h-full bg-bg-secondary/60 backdrop-blur-xl p-8 rounded-2xl border border-border-primary/50 group-hover:border-[var(--color-accent-primary)]/50 group-hover:shadow-[0_10px_30px_rgba(96,165,250,0.1)] transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-accent-primary)]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Terminal className="text-[var(--color-accent-primary)] w-6 h-6" />
                </div>
                <h3 className="font-heading font-[600] text-[24px] mb-3 text-text-primary group-hover:text-[var(--color-accent-glow)] transition-colors">Frontend</h3>
                <p className="font-body font-[400] text-[15px] leading-[1.8] text-text-secondary">Crafting intuitive, responsive, and highly animated user interfaces.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group relative w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent-primary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-md" />
              <div className="relative h-full bg-bg-secondary/60 backdrop-blur-xl p-8 rounded-2xl border border-border-primary/50 group-hover:border-[var(--color-accent-primary)]/50 group-hover:shadow-[0_10px_30px_rgba(96,165,250,0.1)] transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-accent-primary)]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Code className="text-[var(--color-accent-primary)] w-6 h-6" />
                </div>
                <h3 className="font-heading font-[600] text-[24px] mb-3 text-text-primary group-hover:text-[var(--color-accent-glow)] transition-colors">Backend</h3>
                <p className="font-body font-[400] text-[15px] leading-[1.8] text-text-secondary">Building robust APIs, databases, and scalable server architectures.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="group relative w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent-secondary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-md" />
              <div className="relative h-full bg-bg-secondary/60 backdrop-blur-xl p-8 rounded-2xl border border-border-primary/50 group-hover:border-[var(--color-accent-secondary)]/50 group-hover:shadow-[0_10px_30px_rgba(56,189,248,0.1)] transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-accent-secondary)]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Cpu className="text-[var(--color-accent-secondary)] w-6 h-6" />
                </div>
                <h3 className="font-heading font-[600] text-[24px] mb-3 text-text-primary group-hover:text-[var(--color-accent-glow)] transition-colors">AI Integration</h3>
                <p className="font-body font-[400] text-[15px] leading-[1.8] text-text-secondary">Leveraging models like Google Gemini to create intelligent, automated, and forward-thinking applications.</p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
