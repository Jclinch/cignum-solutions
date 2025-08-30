"use client";

import { motion } from "framer-motion";
import { FaUserShield, FaSearch, FaFileAlt } from "react-icons/fa";
import Link from "next/link";

export default function Compliance() {
  return (
    <section className="py-20 px-6 md:px-16 lg:px-32 bg-[#0d152c] text-white">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent"
        >
          Compliance as a workflow — not a roadblock
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-6 text-left mt-12">
          {[
            "KYC/KYB verification, sanctions/PEP screening",
            "Transaction monitoring with rule builder",
            "Case management (notes, escalations), audit trails",
            "Evidence capture and regulatory reporting (CSV, API, dashboards)",
            "Manual/automated queues, pluggable third-party data sources",
          ].map((feat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="flex items-start gap-3 bg-midnight2/80 p-4 rounded-lg border border-white/10"
            >
              <FaUserShield className="text-green-400 mt-1" />
              <span>{feat}</span>
            </motion.div>
          ))}
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-4 mt-8 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-600 transition"
        >
          See Compliance Flows
        </Link>
      </div>
    </section>
  );
}
