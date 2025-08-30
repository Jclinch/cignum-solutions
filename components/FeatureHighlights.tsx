'use client';

import { motion } from 'framer-motion';
import {
  FaWallet,
  FaExchangeAlt,
  FaCreditCard,
  FaGlobe,
  FaFileInvoiceDollar,
  FaCode,
} from 'react-icons/fa';

const features = [
  {
    title: 'Virtual Accounts',
    description: 'NGN + multi-currency with instant issuance.',
    icon: <FaWallet className="text-yellow-400 text-3xl" />,
  },
  {
    title: 'Multi-Rail Payouts',
    description: 'Bank, wallet, and card connections in one API.',
    icon: <FaExchangeAlt className="text-cyan-400 text-3xl" />,
  },
  {
    title: 'Bulk Disbursements',
    description: 'Mass payouts with retries, receipts & webhooks.',
    icon: <FaCreditCard className="text-green-400 text-3xl" />,
  },
  {
    title: 'FX & Cross-Border',
    description: 'Seamless NGN ↔ Global corridors with compliance.',
    icon: <FaGlobe className="text-purple-400 text-3xl" />,
  },
  {
    title: 'Reconciliation & Reporting',
    description: 'Audit-ready data streams, alerts & dashboards.',
    icon: <FaFileInvoiceDollar className="text-pink-400 text-3xl" />,
  },
  {
    title: 'Developer-First APIs',
    description: 'Sandbox, SDKs, and webhooks-first design.',
    icon: <FaCode className="text-blue-400 text-3xl" />,
  },
];

export const FeatureHighlights = () => {
  return (
    <section className="relative py-20 bg-[#0a1124] text-white">
      <div className="absolute inset-0 -z-10 bg-grid-white/[0.03]" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-4xl font-bold mb-14 bg-gradient-to-r from-yellow-400 via-cyan-400 to-purple-500 text-transparent bg-clip-text"
        >
          Feature Highlights
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="group relative p-8 rounded-2xl border border-white/10 bg-[#0f172a]/70 backdrop-blur-md shadow-lg hover:shadow-[0_0_20px_rgba(255,215,0,0.4)] transition"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                {f.icon}
                <h3 className="font-bold text-lg text-yellow-300">{f.title}</h3>
                <p className="text-sm text-neutral-300">{f.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
