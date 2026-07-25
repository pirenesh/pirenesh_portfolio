import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { ISourceOptions, Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "../context/ThemeContext";

const PremiumBackground = () => {
  const [init, setInit] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particleOptions: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false, zIndex: 0 },
      background: { color: { value: "transparent" } },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
        },
        modes: {
          grab: { distance: 140, links: { opacity: 0.8, color: "#60A5FA" } },
        },
      },
      particles: {
        color: { value: ["#60A5FA", "#38BDF8", "#7DD3FC"] },
        links: {
          color: theme === 'dark' ? "#1E293B" : "#CBD5E1",
          distance: 150,
          enable: true,
          opacity: theme === 'dark' ? 0.6 : 0.4,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "out" },
          random: true,
          speed: 0.3, // slow moving
          straight: false,
        },
        number: {
          density: { enable: true, area: 1000 },
          value: 50, // sparse neural network
        },
        opacity: { value: theme === 'dark' ? 0.3 : 0.2 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 2 } },
      },
      detectRetina: true,
    }),
    [theme],
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {/* 1. Base Gradient Aurora */}
      <div className="absolute inset-0 opacity-40 dark:opacity-[0.15]"
           style={{
             background: `radial-gradient(circle at 15% 50%, rgba(96, 165, 250, 0.4), transparent 30%),
                          radial-gradient(circle at 85% 30%, rgba(56, 189, 248, 0.3), transparent 30%),
                          radial-gradient(circle at 50% 80%, rgba(125, 211, 252, 0.2), transparent 40%)`
           }}
      />
      
      {/* 2. Grid Lines overlay */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
           style={{
             backgroundImage: `linear-gradient(to right, var(--color-border-primary) 1px, transparent 1px),
                               linear-gradient(to bottom, var(--color-border-primary) 1px, transparent 1px)`,
             backgroundSize: '4rem 4rem',
             maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
             WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'
           }}
      />
      
      {/* 3. AI Neural Network / Particles */}
      <div className="absolute inset-0 pointer-events-auto">
        {init && (
          <Particles
            id="premium-background-particles"
            options={particleOptions}
            className="w-full h-full"
          />
        )}
      </div>

      {/* 4. Bottom Vignette to ground the content */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)] via-transparent to-transparent opacity-90 pointer-events-none" />
    </div>
  );
};

export default PremiumBackground;
