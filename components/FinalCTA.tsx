"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { Rockets } from "./ui/Meteors";

export const FinalCTA = () => {
  return (
    <section className="relative py-20 bg-[#0a1124] text-white text-center overflow-hidden">
      {/* 🔹 Single Rocket Launch */}
      <Rockets />

      {/* 🔹 Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-cyan-500/10 to-purple-500/10 blur-2xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl mx-auto px-6"
      >
        <h2 className="text-center text-4xl font-bold mb-14 bg-gradient-to-r from-yellow-400 via-cyan-400 to-purple-500 text-transparent bg-clip-text">
          Launch in weeks, not months
        </h2>
        <p className="mt-4 text-lg text-neutral-300">
          Get started with Cignum and move money globally with a single API.
        </p>

        {/* 🔹 Futuristic CTA Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8"
        >
          <Link
            href="/contact"
            className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl text-black bg-gradient-to-r from-yellow-400 via-cyan-400 to-purple-500 shadow-lg hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] transition-all overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-cyan-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center gap-2">
              <HiOutlineRocketLaunch className="w-6 h-6" />
              Get Started
            </span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};
