// components/Industries.tsx
"use client";

import { motion } from "framer-motion";
import { FaBuilding, FaCoins, FaUsers, FaShoppingCart, FaMobileAlt } from "react-icons/fa";

const industries = [
  {
    icon: <FaBuilding className="text-yellow text-3xl" />,
    title: "Licensed IMTOs",
    pain: "Need seamless payout infrastructure with regulatory compliance.",
    solution: "CBN-licensed remittance rails with instant disbursement and KYC hooks.",
  },
  {
    icon: <FaCoins className="text-yellow text-3xl" />,
    title: "Crypto OTC Desks & Exchanges",
    pain: "Require NGN liquidity and compliant fiat off-ramps.",
    solution: "VAS + FinCEN-compliant wallet flow with NGN/USDT pairs and instant conversion.",
  },
  {
    icon: <FaUsers className="text-yellow text-3xl" />,
    title: "Payroll & Gig Platforms",
    pain: "Struggle with mass payouts and multi-currency conversion.",
    solution: "API-driven disbursement engine with custom FX + ledger per user.",
  },
  {
    icon: <FaShoppingCart className="text-yellow text-3xl" />,
    title: "Digital Merchants & Aggregators",
    pain: "Need real-time settlements and virtual merchant accounts.",
    solution: "Create virtual wallets per merchant with daily reconciliation and dashboard access.",
  },
  {
    icon: <FaMobileAlt className="text-yellow text-3xl" />,
    title: "Fintech Startups & Mobile Money Ops",
    pain: "Need flexible APIs to plug into FX and compliance rails.",
    solution: "White-labeled onboarding, compliance-as-a-service and sandbox flows.",
  },
];

export default function Industries() {
  return (
    <section className="py-20 px-4 md:px-10 lg:px-20 bg-midnight text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Industries We Serve</h2>
        <p className="text-muted max-w-2xl mx-auto">
          Cignum powers high-growth financial sectors with tailored APIs and compliant rails.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {industries.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
            className="bg-midnight2 p-6 rounded-xl border border-white/10 hover:shadow-lg transition"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-muted text-sm mb-2"><strong>Pain:</strong> {item.pain}</p>
            <p className="text-muted text-sm"><strong>Solution:</strong> {item.solution}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
