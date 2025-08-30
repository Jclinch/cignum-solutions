'use client';

import { motion } from 'framer-motion';

const stats = [
  { label: '99.9% Uptime', glow: 'from-green-400 to-emerald-600' },
  { label: 'Sub-second Webhooks', glow: 'from-yellow-400 to-orange-500' },
  { label: 'PCI DSS Aligned', glow: 'from-cyan-400 to-blue-500' },
  { label: 'SOC 2 (In Progress)', glow: 'from-purple-400 to-pink-500' },
  { label: 'Licensed NG/UK Partners', glow: 'from-teal-400 to-green-500' },
];

export const ProofStats = () => {
  return (
    <section className="relative py-20 bg-[#0a1124] text-white">
      <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className={`p-6 rounded-xl border border-white/10 shadow-lg bg-gradient-to-r ${s.glow} bg-opacity-10`}
          >
            <p className="font-bold text-lg">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
