import {
  SiReact,
  SiTypescript,
  SiPython,
  SiFastapi,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiDocker,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
} from "react-icons/si";
import type { IconType } from "react-icons";

export type OrbitTrack = 0 | 1 | 2 | 3;

export interface TechIcon {
  id: string;
  label: string;
  icon: IconType;
  track: OrbitTrack; // 0, 1, 2, or 3
  essential: boolean;
}

export const portfolioConfig = {
  theme: {
    background: "#030712",
    secondary: "#111827",
    primaryAccent: "#60A5FA",
    secondaryAccent: "#38BDF8",
    glow: "#7DD3FC",
    text: "#FFFFFF",
  },
  orbit: {
    // 4 orbital paths: 0°, 45°, 90°, 135°
    tracks: [
      { angle: 0, speed: 40000, reverse: false },
      { angle: 45, speed: 28000, reverse: true },
      { angle: 90, speed: 28000, reverse: false },
      { angle: 135, speed: 18000, reverse: true },
    ],
    radii: {
      desktop: { rx: 230, ry: 75 },
      tablet: { rx: 180, ry: 60 },
      mobile: { rx: 150, ry: 50 },
    },
    icons: [
      { id: "react", label: "React", icon: SiReact, track: 0, essential: true },
      { id: "github", label: "GitHub", icon: SiGithub, track: 0, essential: true },
      
      { id: "typescript", label: "TypeScript", icon: SiTypescript, track: 1, essential: false },
      { id: "nodejs", label: "Node.js", icon: SiNodedotjs, track: 1, essential: false },
      { id: "docker", label: "Docker", icon: SiDocker, track: 1, essential: true },
      
      { id: "python", label: "Python", icon: SiPython, track: 2, essential: true },
      { id: "fastapi", label: "FastAPI", icon: SiFastapi, track: 2, essential: true },
      { id: "mongodb", label: "MongoDB", icon: SiMongodb, track: 2, essential: false },
      
      { id: "git", label: "Git", icon: SiGit, track: 3, essential: true },
      { id: "postgresql", label: "PostgreSQL", icon: SiPostgresql, track: 3, essential: false },
      { id: "firebase", label: "Firebase", icon: SiFirebase, track: 3, essential: false },
    ] as TechIcon[],
  }
};
