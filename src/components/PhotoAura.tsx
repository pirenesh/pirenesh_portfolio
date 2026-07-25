import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { ISourceOptions, Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

const PhotoAura = () => {
  const [init, setInit] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: {
        color: { value: "transparent" },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: { enable: true, mode: "bubble" },
        },
        modes: {
          bubble: {
            distance: 100,
            duration: 2,
            size: 6,
            opacity: 1,
            color: "#7DD3FC",
          },
        },
      },
      particles: {
        color: { value: ["#60A5FA", "#38BDF8", "#7DD3FC"] },
        links: {
          color: "#60A5FA",
          distance: 60,
          enable: true,
          opacity: theme === 'dark' ? 0.6 : 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "bounce" },
          random: true,
          speed: 1.5,
          straight: false,
        },
        number: {
          density: { enable: true, area: 250 },
          value: 50,
        },
        opacity: { value: theme === 'dark' ? 0.8 : 0.5 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
      },
      detectRetina: true,
    }),
    [theme],
  );

  return (
    <div className="absolute -inset-6 z-0 group">
      {/* Soft Cyan Breathing Glow */}
      <motion.div
        className="absolute inset-4 rounded-full bg-[var(--color-accent-glow)] blur-[35px]"
        animate={{
          scale: [1, 1.15, 1],
          opacity: theme === 'dark' ? [0.15, 0.35, 0.15] : [0.1, 0.2, 0.1],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut",
        }}
      />
      
      {/* Animated Ice Blue Gradient Ring */}
      <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] opacity-20 group-hover:opacity-40 animate-[spin_8s_linear_infinite] blur-md transition-opacity duration-700" />
      <div className="absolute inset-4 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      {/* Particles Aura */}
      {init && (
        <Particles
          id="photo-aura-particles"
          options={options}
          className="absolute inset-0 z-10 pointer-events-auto rounded-full overflow-hidden border border-[var(--color-accent-primary)]/20"
        />
      )}
    </div>
  );
};

export default PhotoAura;
