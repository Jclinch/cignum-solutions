'use client';

import { motion } from 'framer-motion';

const cases = [
  'Marketplace seller payouts',
  'Salary & vendor disbursements',
  'IMTO remittances',
  'NGO field payments',
  'Gig economy wallets',
];

export const UseCaseCarousel = () => {
  return (
    <section className="relative py-20 bg-[#0a1124] text-white overflow-hidden">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: ['0%', '-100%'] }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
        className="flex gap-8 whitespace-nowrap"
      >
        {[...cases, ...cases].map((c, i) => (
          <div
            key={i}
            className="px-6 py-4 rounded-xl border border-white/10 bg-[#0f172a]/80 backdrop-blur-md shadow-md hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] transition text-sm font-medium"
          >
            {c}
          </div>
        ))}
      </motion.div>
    </section>
  );
};
