"use client";

import { motion } from "framer-motion";
import { FaCreditCard } from "react-icons/fa";
import Link from "next/link";

export default function Disbursements() {
  return (
    <section className="py-20 px-6 md:px-16 lg:px-32 bg-[#0a1124] text-white">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
        >
          Pay thousands with a single request
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-6 text-left mt-12">
          {[
            "Single-file or API-driven mass payouts",
            "Bank, mobile money, and card rails",
            "Name validation, pre-checks, retries",
            "Real-time status, receipts, failure handling (webhooks)",
            "Reconciliation dashboard with drill-downs",
          ].map((feat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="flex items-start gap-3 bg-midnight2/80 p-4 rounded-lg border border-white/10"
            >
              <FaCreditCard className="text-orange-400 mt-1" />
              <span>{feat}</span>
            </motion.div>
          ))}
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-4 mt-8 bg-orange-500 text-black font-semibold rounded-lg hover:bg-orange-600 transition"
        >
          Try a Test Batch
        </Link>
      </div>
    </section>
  );
}
