"use client";

import React, { useEffect, useState } from "react";

export const Rockets: React.FC = () => {
  const [launchKey, setLaunchKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLaunchKey((prev) => prev + 2); // 🔹 force remount rocket every 5s
    }, 5000); // 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* single rocket */}
      <div
        key={launchKey}
        className="absolute bottom-0"
        style={{
          left: `${Math.random() * 100}%`,
          animation: `rocket-up 6s linear 0s forwards`,
        }}
      >
        {/* 🔹 Head (bright, glowing) */}
        <span className="block w-[4px] h-[7px] rounded-full bg-white mx-auto shadow-[0_0_20px_rgba(255,255,255,1)]" />

        {/* 🔹 Tail (slim, fading downward) */}
        <span className="block w-[2px] h-[50px] bg-gradient-to-b from-white/70 via-white/30 to-transparent mx-auto" />
      </div>
    </div>
  );
};
