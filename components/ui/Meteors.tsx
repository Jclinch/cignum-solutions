"use client";

import React from "react";

type RocketsProps = {
  number?: number;
};

export const Rockets: React.FC<RocketsProps> = ({ number = 1 }) => {
  const rockets = new Array(number).fill(true);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {rockets.map((_, i) => {
        // Randomized speed and delay
        const duration = 25 + Math.random() * 6; // 8–14s
        const delay = Math.random() * 300;       // up to 10s delay

        return (
          <div
            key={i}
            className="absolute bottom-0"
            style={{
              left: `${Math.random() * 100}%`,
animation: `rocket-up ${duration}s linear ${delay}s infinite`,
              transform: `rotate(${Math.random() * 1 - 5}deg)` // slight NE angle
            }}
          >
             {/* 🔹 Head (bright, glowing) */}
          <span className="block w-[3px] h-[5px] rounded-full bg-white mx-auto shadow-[0_0_15px_rgba(255,255,255,0.9)]" />

          {/* 🔹 Tail (slim, fading downward) */}
          <span className="block w-[2px] h-[40px] bg-gradient-to-b from-white/70 via-white/40 to-transparent mx-auto" />
          </div>
        );
      })}
    </div>
  );
};
