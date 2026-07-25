import { useMemo, useState, useEffect, useRef } from "react";
import { portfolioConfig } from "../config/portfolio.config";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { ISourceOptions, Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { motion, AnimatePresence } from "framer-motion";

const ProfileOrbit = () => {
  const [init, setInit] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const [windowWidth, setWindowWidth] = useState(1200);

  const hoveredRef = useRef<string | null>(null);
  useEffect(() => {
    hoveredRef.current = hoveredIcon;
  }, [hoveredIcon]);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));

    const checkScreenSize = () => {
      setWindowWidth(window.innerWidth);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  const particleOptions: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },
      fpsLimit: 60,
      particles: {
        color: { value: ["#60A5FA", "#7DD3FC", "#FFFFFF"] },
        move: { direction: "none", enable: true, random: true, speed: 0.1, straight: false },
        number: { density: { enable: true, area: 400 }, value: 20 },
        opacity: { value: { min: 0.1, max: 0.3 } },
        shape: { type: "circle" },
        size: { value: { min: 0.5, max: 1.5 } },
      },
      detectRetina: true,
    }),
    [],
  );

  const radii = isMobile
    ? portfolioConfig.orbit.radii.mobile
    : isTablet
    ? portfolioConfig.orbit.radii.tablet
    : portfolioConfig.orbit.radii.desktop;

  const icons = useMemo(() => {
    if (isMobile) return portfolioConfig.orbit.icons.filter(i => i.essential);
    return portfolioConfig.orbit.icons;
  }, [isMobile]);

  const tracks = [0, 1, 2, 3].map(trackId => ({
    id: trackId,
    config: portfolioConfig.orbit.tracks[trackId],
    icons: icons.filter(i => i.track === trackId)
  }));

  const iconRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    let frameId: number;
    let lastTime = performance.now();
    
    const progress: { [key: string]: number } = {};
    icons.forEach(icon => {
      progress[icon.id] = 0;
    });

    const animate = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      tracks.forEach(track => {
        const { rx, ry } = radii;
        const angleRad = (track.config.angle * Math.PI) / 180;
        const speed = track.config.speed;
        
        track.icons.forEach((icon, index) => {
          if (hoveredRef.current !== icon.id) {
            const step = (delta / speed) * (Math.PI * 2);
            progress[icon.id] += track.config.reverse ? -step : step;
          }

          const t = progress[icon.id];
          const phase = (index / track.icons.length) * Math.PI * 2;
          const currentT = t + phase;

          const x = rx * Math.cos(currentT);
          const y = ry * Math.sin(currentT);

          const rotatedX = x * Math.cos(angleRad) - y * Math.sin(angleRad);
          const rotatedY = x * Math.sin(angleRad) + y * Math.cos(angleRad);

          const el = iconRefs.current[icon.id];
          if (el) {
            el.style.transform = `translate(-50%, -50%) translate(${rotatedX}px, ${rotatedY}px)`;
          }
        });
      });

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [icons, tracks, radii]);

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] pointer-events-none flex items-center justify-center z-0">
      
      {/* Tiny Blue Particles Background */}
      <div 
        className="absolute inset-20 rounded-full overflow-hidden" 
        style={{ 
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)", 
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)" 
        }}
      >
        {init && <Particles id="orbit-background-particles" options={particleOptions} className="w-full h-full" />}
      </div>

      {/* SVG Orbital Rings */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
        {tracks.map((track) => (
          <ellipse
            key={`track-${track.id}`}
            cx="500"
            cy="500"
            rx={radii.rx}
            ry={radii.ry}
            fill="none"
            stroke="var(--color-accent-primary)"
            strokeWidth="1"
            transform={`rotate(${track.config.angle} 500 500)`}
            className="opacity-50"
            strokeDasharray="4 8"
          />
        ))}
        {/* Animated energy strokes */}
        {tracks.map((track) => (
          <motion.ellipse
            key={`track-anim-${track.id}`}
            cx="500"
            cy="500"
            rx={radii.rx}
            ry={radii.ry}
            fill="none"
            stroke="var(--color-accent-glow)"
            strokeWidth="1.5"
            transform={`rotate(${track.config.angle} 500 500)`}
            pathLength="100"
            strokeDasharray="5 95"
            className="opacity-80"
            animate={{ strokeDashoffset: track.config.reverse ? [100, 0] : [0, 100] }}
            transition={{ repeat: Infinity, duration: track.config.speed / 1000, ease: "linear" }}
          />
        ))}
      </svg>

      {/* Atomic Icons */}
      <div className="absolute inset-0 pointer-events-auto">
        {icons.map((item) => (
          <div
            key={item.id}
            ref={(el) => {
              if (el) iconRefs.current[item.id] = el;
            }}
            className="absolute top-1/2 left-1/2 flex items-center justify-center cursor-pointer group z-50 transition-transform duration-300 ease-out"
            onMouseEnter={() => setHoveredIcon(item.id)}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center bg-bg-secondary/40 backdrop-blur-md border border-[var(--color-accent-primary)]/40 shadow-[0_0_15px_rgba(96,165,250,0.1)] transition-all duration-300 relative ${hoveredIcon === item.id ? 'scale-[1.15] shadow-[0_0_20px_rgba(125,211,252,0.6)] border-[var(--color-accent-glow)] bg-bg-secondary/80' : ''}`}
            >
              <item.icon className={`w-5 h-5 transition-colors ${hoveredIcon === item.id ? 'text-[var(--color-accent-glow)]' : 'text-text-primary'}`} />
            </div>
            
            <AnimatePresence>
              {hoveredIcon === item.id && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.9 }}
                  className="absolute top-full mt-2 px-3 py-1.5 bg-bg-secondary/90 backdrop-blur-md border border-[var(--color-accent-primary)]/40 rounded-lg text-xs font-semibold whitespace-nowrap z-50 text-text-primary shadow-xl pointer-events-none"
                >
                  {item.label}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default ProfileOrbit;
