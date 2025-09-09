"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "99.9% Uptime", glow: "from-green-400 to-emerald-600", span: "md:col-span-2 md:row-span-1" },
  { label: "Sub-second Webhooks", glow: "from-yellow-400 to-orange-500", span: "md:col-span-1 md:row-span-2" },
  { label: "PCI DSS Aligned", glow: "from-cyan-400 to-blue-500", span: "md:col-span-1 md:row-span-1" },
  { label: "SOC 2 (In Progress)", glow: "from-purple-400 to-pink-500", span: "md:col-span-1 md:row-span-1" },
  { label: "Licensed NG/UK Partners", glow: "from-teal-400 to-green-500", span: "md:col-span-3 md:row-span-1" },
];

export const ProofStats = () => {
  return (
    <section className="relative py-20 bg-[#0a1124] text-white">
      <div
        className="
          max-w-6xl mx-auto px-6 
          grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
          md:auto-rows-[180px] gap-6
        "
      >
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className={`flex items-center justify-center text-center p-6 rounded-xl border border-white/10 shadow-lg bg-gradient-to-br ${s.glow} ${s.span}`}
          >
            <p className="font-bold text-lg drop-shadow-md">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
