"use client";

import { motion, Variants } from "framer-motion";
import { FaNetworkWired, FaBalanceScale, FaShieldAlt } from "react-icons/fa";
import React from "react";

const pillars = [
  {
    id: 1,
    title: "One API, Infinite Rails",
    description:
      "Collections, payouts, FX, virtual accounts, reconciliation — all through a single unified API.",
    icon: <FaNetworkWired className="text-yellow-400 text-4xl" />,
  },
  {
    id: 2,
    title: "Treasury Automation",
    description:
      "Real-time balances, smart sweeps, automated rules, and instant alerts for total cash visibility.",
    icon: <FaBalanceScale className="text-cyan-400 text-4xl" />,
  },
  {
    id: 3,
    title: "Compliance Built In",
    description:
      "KYC/KYB, sanctions screening, AML monitoring, and case workflows designed into the core.",
    icon: <FaShieldAlt className="text-green-400 text-4xl" />,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number], // ✅ Fix
    },
  },
};

export const ValuePillars: React.FC = () => {
  return (
    <section className="relative w-full py-20 px-6 sm:px-12 lg:px-20 bg-[#0a1124] text-white">
      {/* Background tint */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_50%_-20%,rgba(255,214,0,0.08),transparent_60%)]" />

      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-4xl font-bold mb-14 bg-gradient-to-r from-yellow-400 via-cyan-400 to-purple-500 text-transparent bg-clip-text"
        >
          Three Value Pillars
        </motion.h2>

        {/* Wrapper so we can absolutely-position the SVG overlay */}
        <div className="relative">
          {/* Desktop SVG Circuit Overlay */}
          <svg
            className="pointer-events-none absolute inset-0 hidden md:block"
            width="100%"
            height="100%"
            viewBox="0 0 1200 420"
            preserveAspectRatio="none"
          >
            <defs>
              {/* Gradient for line stroke */}
              <linearGradient
                id="circuitGrad"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#FDE047" /> {/* yellow-400 */}
                <stop offset="50%" stopColor="#22D3EE" /> {/* cyan-400 */}
                <stop offset="100%" stopColor="#34D399" /> {/* green-400 */}
              </linearGradient>

              {/* Soft glow */}
              <filter
                id="softGlow"
                height="300%"
                width="300%"
                x="-100%"
                y="-100%"
              >
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Paths connecting three columns */}
            <motion.path
              d="M 220 210 C 360 80, 480 80, 600 210"
              stroke="url(#circuitGrad)"
              strokeWidth="2"
              fill="none"
              filter="url(#softGlow)"
              initial={{ pathLength: 0, opacity: 0.4 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
              style={{ strokeDasharray: "6 8" }}
            />
            <motion.path
              d="M 600 210 C 720 340, 840 340, 980 210"
              stroke="url(#circuitGrad)"
              strokeWidth="2"
              fill="none"
              filter="url(#softGlow)"
              initial={{ pathLength: 0, opacity: 0.4 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
              style={{ strokeDasharray: "6 8" }}
            />

            {/* Small pulsing nodes on curves */}
            <motion.circle
              cx="410"
              cy="135"
              r="4"
              fill="#FDE047"
              initial={{ scale: 0 }}
              whileInView={{ scale: [0, 1.2, 1], opacity: [0, 1, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.6 }}
              filter="url(#softGlow)"
            />
            <motion.circle
              cx="790"
              cy="285"
              r="4"
              fill="#34D399"
              initial={{ scale: 0 }}
              whileInView={{ scale: [0, 1.2, 1], opacity: [0, 1, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.8 }}
              filter="url(#softGlow)"
            />
          </svg>

          {/* Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid md:grid-cols-3 gap-8"
          >
            {pillars.map((pillar) => (
              <motion.div
                key={pillar.id}
                variants={itemVariants}
                className="relative group p-8 rounded-2xl bg-[#0f172a]/20 backdrop-blur-md border border-white/10 shadow-lg transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,215,0,0.45)]"
              >
                {/* Glow layer */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400 via-cyan-400 to-green-400 opacity-0 group-hover:opacity-15 blur-2xl transition duration-500" />
                <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                  {pillar.icon}
                  <h3 className="text-xl font-bold text-yellow-300">
                    {pillar.title}
                  </h3>
                  <p className="text-neutral-300 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile stacked connectors */}
          <div className="md:hidden mt-6 space-y-6">
            {[0, 1].map((i) => (
              <motion.div
                key={i}
                initial={{ width: 0, opacity: 0.7 }}
                whileInView={{ width: "100%", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 * i }}
                className="mx-auto h-[2px] w-full overflow-hidden"
              >
                <div className="relative h-[2px] w-full bg-gradient-to-r from-yellow-400 via-cyan-400 to-green-400">
                  <div className="absolute inset-0 [background:repeating-linear-gradient(90deg,transparent_0_8px,rgba(0,0,0,0.25)_8px_16px)] animate-[marquee_8s_linear_infinite]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scoped keyframes for mobile connectors */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 200px 0;
          }
        }
      `}</style>
    </section>
  );
};
