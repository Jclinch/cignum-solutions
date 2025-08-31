"use client";

import { FaGlobe, FaBuilding } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutClient() {
  return (
    <section className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-4xl font-bold text-white">About Cignum Solutions</h2>
        <p className="text-neutral-300 mt-4 text-lg max-w-3xl mx-auto">
          Cignum Solutions is a payments and treasury infrastructure provider
          operating across Nigeria and the UK. We help businesses collect, hold,
          convert, and disburse funds securely — while maintaining full compliance
          visibility.
        </p>
      </motion.div>

      {/* Offices & Banking Partners */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
        <div className="bg-[#1E2A39] p-8 rounded-lg shadow-lg">
          <FaBuilding className="text-cyan-400 text-6xl mx-auto" />
          <h3 className="text-2xl font-semibold mt-4">Offices</h3>
          <p className="text-neutral-300 mt-2">
            Lagos, Nigeria • London, United Kingdom
          </p>
        </div>
        <div className="bg-[#1E2A39] p-8 rounded-lg shadow-lg">
          <FaGlobe className="text-cyan-400 text-6xl mx-auto" />
          <h3 className="text-2xl font-semibold mt-4">Banking Partners</h3>
          <p className="text-neutral-300 mt-2">Providus (NG) and key UK banks</p>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <Link
          href="/contact"
          className="px-8 py-3 text-xl bg-cyan-400 text-black rounded-lg shadow-lg hover:bg-cyan-500 transition"
        >
          Partner with Us
        </Link>
      </div>
    </section>
  );
}
