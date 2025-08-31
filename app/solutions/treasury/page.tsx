"use client";

import { motion } from "framer-motion";
import { FaChartLine } from "react-icons/fa";
import Link from "next/link";

export default function Treasury() {
  return (
    <section className="py-20 px-6 md:px-16 lg:px-32 bg-[#0d152c] text-white">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
        >
          See, move, and optimize cash in real-time
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-6 text-left mt-12">
          {[
            "Cross-institution balance visibility + consolidation",
            "Rules-based intra-day sweeps and funding",
            "Multi-currency wallets + FX quotes",
            "Interest/yield tracking and accruals",
            "Alerts, dual approvals, audit logs, SOC-friendly exports",
          ].map((feat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="flex items-start gap-3 bg-midnight2/80 p-4 rounded-lg border border-white/10"
            >
              <FaChartLine className="text-cyan-400 mt-1" />
              <span>{feat}</span>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-neutral-400 text-sm">
          Outcomes: <span className="text-white">Reduce idle cash • Optimize working capital • Automate reconciliation • Reduce failures</span>
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-4 mt-8 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-600 transition"
        >
          Book a Treasury Demo
        </Link>
      </div>
    </section>
  );
}
