import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: true, zIndex: -1 },
          particles: {
            number: { value: 100},
            color: { value: "#ffffff" },
            size: { value: 3 },
            move: { enable: true, speed: 1, outModes: { default:"bounce"} },
            links: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            }
          },
          interactivity: {
            events: { onHover: { enable: true, mode: "grab" } },
            modes: { grab: { distance: 200, links: { opacity: 0.6 } } }
          },
          detectRetina: true,
          background: { color: { value: "transparent" } }
        }}
      />
    </>
  );
}
