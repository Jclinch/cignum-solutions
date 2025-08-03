"use client";

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

export default function ParticlesBg() {
  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: false,
        background: {
          color: "transparent",
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
          },
        },
        particles: {
          number: { value: 50 },
          color: { value: "#ffd600" }, // matches theme yellow
          shape: { type: "circle" },
          opacity: { value: 0.6 },
          size: { value: 2 },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
            outMode: "out",
          },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 z-0"
    />
  );
}
