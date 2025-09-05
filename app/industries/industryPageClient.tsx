"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const industries = [
  {
    image: "/images/steps/wallet.jpg",
    title: "Fintechs & Neobanks",
    description:
      "Virtual accounts, wallets, and automated KYC/KYB for compliance and scale.",
  },
  {
    image: "/images/steps/onboarding.jpg",
    title: "Marketplaces & Platforms",
    description:
      "Split payouts, seller onboarding, and seamless reconciliation at scale.",
  },
  {
    image: "/images/steps/funding.jpg",
    title: "IMTO & Remittance",
    description:
      "Cross-border payment rails, FX conversion, and compliance monitoring.",
  },
  {
    image: "/images/steps/disbursement.jpg",
    title: "NGOs & Aid",
    description:
      "Field disbursements, financial controls, and full auditability across regions.",
  },
  {
    image: "/images/steps/conversion.jpg",
    title: "Enterprises",
    description:
      "AP automation, mass payouts, and real-time treasury tracking.",
  },
];

export default function Industries() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndustry = industries[activeIndex];

  return (
    <section className="py-20 px-4 md:px-10 lg:px-20 bg-[#050812] text-white relative z-10">
      {/* 🔹 Section Heading */}
      <header className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Industries We Serve</h2>
        <p className="text-neutral-300 max-w-2xl mx-auto">
          Purpose-built for your model: fintech, e-commerce, remittance, NGO, or
          enterprise. Our platform scales with your business and streamlines
          operations.
        </p>
      </header>

      {/* 🔹 Layout: Side Nav + Content */}
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-8">
        {/* Sidebar Nav (desktop) */}
        <aside className="hidden md:block w-64 shrink-0">
          <div className="sticky top-24 rounded-xl p-4 bg-white/5 backdrop-blur-md border border-cyan-400/20 shadow-[0_0_20px_rgba(0,255,255,0.15)]">
            <ul className="space-y-2">
              {industries.map((industry, i) => (
                <li key={i}>
                  <button
                    onClick={() => setActiveIndex(i)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition font-medium tracking-wide ${
                      activeIndex === i
                        ? "bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-black shadow-md"
                        : "bg-transparent text-neutral-300 hover:bg-white/10 hover:text-cyan-300"
                    }`}
                    style={{
                      fontFamily: "'Share Tech Mono', monospace",
                    }}
                  >
                    {industry.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Mobile horizontal scroll nav */}
        <div className="md:hidden flex overflow-x-auto gap-3 pb-2 -mx-2 px-2">
          {industries.map((industry, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm transition ${
                activeIndex === i
                  ? "bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-black font-semibold shadow-md"
                  : "bg-white/5 text-neutral-300 hover:bg-white/10 hover:text-cyan-300"
              }`}
              style={{
                fontFamily: "'Share Tech Mono', monospace",
              }}
            >
              {industry.title}
            </button>
          ))}
        </div>

        {/* Right Content */}
        <div className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="bg-[#0F172A] bg-opacity-90 p-6 rounded-xl border border-white/10 shadow-lg flex flex-col md:flex-row items-center gap-6"
            >
              <Image
                src={activeIndustry.image}
                alt={activeIndustry.title}
                width={320}
                height={200}
                className="w-full md:w-[300px] h-auto object-contain rounded-lg"
              />
              <div className="text-left">
                <h3 className="text-2xl font-semibold mb-2">
                  {activeIndustry.title}
                </h3>
                <p className="text-neutral-300">{activeIndustry.description}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* 🔹 Final CTA */}
      <footer className="text-center mt-16">
        <Link
          href="/explore"
          className="px-6 md:px-10 py-4 text-lg md:text-xl bg-cyan-400 text-black rounded-lg shadow-lg hover:bg-cyan-500 transition"
        >
          Explore Your Use Case
        </Link>
      </footer>
    </section>
  );
}
