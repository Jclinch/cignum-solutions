"use client";

import { FaBook, FaFileAlt, FaBalanceScale, FaSyncAlt, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ResourcesClientPage() {
  return (
    <section className="px-6 md:px-16 lg:px-24 py-16">
      {/* Intro Section */}
      <header className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-white"
        >
          Explore Our Knowledge Hub
        </motion.h2>
        <p className="text-lg text-neutral-200 mt-4 max-w-3xl mx-auto">
          Learn from guides, dive into case studies, explore compliance
          frameworks, and stay updated with product news.
        </p>
      </header>

      {/* Resource Types */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Technical Guides */}
        <motion.article
          whileHover={{ scale: 1.05 }}
          className="bg-[#1E2A39] p-10 rounded-lg shadow-xl flex flex-col items-center text-center space-y-6"
        >
          <FaBook className="text-cyan-400 text-7xl" />
          <h3 className="text-2xl font-semibold text-white">Technical Guides</h3>
          <p className="text-neutral-300 text-lg">
            Hands-on tutorials like “Designing a Disbursement Pipeline”.
          </p>
        </motion.article>

        {/* Case Studies */}
        <motion.article
          whileHover={{ scale: 1.05 }}
          className="bg-[#1E2A39] p-10 rounded-lg shadow-xl flex flex-col items-center text-center space-y-6"
        >
          <FaFileAlt className="text-cyan-400 text-7xl" />
          <h3 className="text-2xl font-semibold text-white">Case Studies</h3>
          <p className="text-neutral-300 text-lg">
            Real-world use cases: marketplace payouts, NGO distributions.
          </p>
        </motion.article>

        {/* Compliance Playbooks */}
        <motion.article
          whileHover={{ scale: 1.05 }}
          className="bg-[#1E2A39] p-10 rounded-lg shadow-xl flex flex-col items-center text-center space-y-6"
        >
          <FaBalanceScale className="text-cyan-400 text-7xl" />
          <h3 className="text-2xl font-semibold text-white">
            Compliance Playbooks
          </h3>
          <p className="text-neutral-300 text-lg">
            KYC/KYB frameworks, sanctions screening, AML guides.
          </p>
        </motion.article>

        {/* Product Updates */}
        <motion.article
          whileHover={{ scale: 1.05 }}
          className="bg-[#1E2A39] p-10 rounded-lg shadow-xl flex flex-col items-center text-center space-y-6"
        >
          <FaSyncAlt className="text-cyan-400 text-7xl" />
          <h3 className="text-2xl font-semibold text-white">Product Updates</h3>
          <p className="text-neutral-300 text-lg">
            Latest features, improvements, and platform announcements.
          </p>
        </motion.article>
      </div>

      {/* Lead Magnet */}
      <div className="mt-20 text-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="inline-flex flex-col items-center bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-black px-10 py-8 rounded-xl shadow-lg"
        >
          <FaDownload className="text-5xl mb-4" />
          <h3 className="text-2xl font-bold">The Embedded Treasury Playbook</h3>
          <p className="text-sm mt-2 text-neutral-900">
            Download our free guide on embedded treasury to accelerate your
            build.
          </p>
          <Link
            href="/resources/embedded-treasury-playbook.pdf"
            target="_blank"
            className="mt-4 px-6 py-3 bg-black text-cyan-400 rounded-lg font-semibold hover:bg-neutral-900 transition"
          >
            Download PDF
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
