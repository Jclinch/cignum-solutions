"use client";

import { motion } from "framer-motion";
import { FaWallet } from "react-icons/fa";
import Link from "next/link";

export default function EmbeddedFinance() {
  return (
    <section className="py-20 px-6 md:px-16 lg:px-32 bg-[#0a1124] text-white">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Launch financial features — without becoming a bank
        </motion.h1>

        <p className="text-lg text-neutral-300">
          Provision virtual accounts, orchestrate payments, and manage multi-jurisdictional balances with unified KYC, reporting, and controls.
        </p>

        {/* Capabilities */}
        <div className="grid md:grid-cols-2 gap-6 text-left mt-12">
          {[
            "Named/pooled virtual accounts (virtual IBAN equivalents)",
            "Collections, split settlements, marketplace routing",
            "Wallets & sub-accounts with fine-grained permissions",
            "Account verification (name match), identity integration (e.g. BVN/ID)",
            "Real-time webhooks, event streams, and idempotent APIs",
          ].map((cap, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="flex items-start gap-3 bg-midnight2/80 p-4 rounded-lg border border-white/10"
            >
              <FaWallet className="text-yellow-400 mt-1" />
              <span>{cap}</span>
            </motion.div>
          ))}
        </div>

        {/* Outcomes */}
        <div className="mt-10 text-neutral-400 text-sm">
          Outcomes: <span className="text-white">Accelerate onboarding • Reduce operations cost • Clarity in compliance • Faster time-to-market</span>
        </div>

        {/* CTA */}
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-4 mt-8 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition"
        >
          Speak to an Expert
        </Link>
      </div>
    </section>
  );
}
