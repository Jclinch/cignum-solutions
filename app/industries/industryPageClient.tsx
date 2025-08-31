"use client";

import {
  FaUniversity,
  FaUsers,
  FaExchangeAlt,
  FaHandHoldingHeart,
  FaIndustry,
} from "react-icons/fa";
import Link from "next/link";

export default function Industries() {
  return (
    <section className="px-6 md:px-16 lg:px-24 py-16">
      {/* Intro Section */}
      <header className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-white">
          Purpose-built for Your Model
        </h2>
        <p className="text-lg text-neutral-200 mt-4 max-w-3xl mx-auto">
          Whether you are in fintech, e-commerce, remittance, NGO, or enterprise—
          our platform is designed to scale with your business and streamline operations.
        </p>
      </header>

      {/* Industry Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-12">
        {/* Fintechs & Neobanks */}
        <article className="bg-[#1E2A39] p-4 md:p-8 rounded-lg shadow-xl flex flex-col items-center text-center space-y-6">
          <FaUniversity className="text-cyan-400 text-7xl" aria-label="Fintechs Icon" />
          <h3 className="text-sm md:text-2xl text-white font-semibold">
            Fintechs & Neobanks
          </h3>
          <p className="text-neutral-300 text-sm md:text-lg">
            Virtual accounts, wallets, automated KYC/KYB for compliance.
          </p>
        </article>

        {/* Marketplaces & Platforms */}
        <article className="bg-[#1E2A39] p-4 md:p-8 rounded-lg shadow-xl flex flex-col items-center text-center space-y-6">
          <FaUsers className="text-cyan-400 text-7xl" aria-label="Marketplaces Icon" />
          <h3 className="text-sm md:text-2xl text-white font-semibold">
            Marketplaces & Platforms
          </h3>
          <p className="text-neutral-300 text-sm md:text-lg">
            Split payouts, seller onboarding, and reconciliation at scale.
          </p>
        </article>

        {/* IMTO & Remittance */}
        <article className="bg-[#1E2A39] p-4 md:p-8 rounded-lg shadow-xl flex flex-col items-center text-center space-y-6">
          <FaExchangeAlt className="text-cyan-400 text-7xl" aria-label="Remittance Icon" />
          <h3 className="text-sm md:text-2xl text-white font-semibold">
            IMTO & Remittance
          </h3>
          <p className="text-neutral-300 text-sm md:text-lg">
            Cross-border payment rails, FX conversion, and compliance tools.
          </p>
        </article>

        {/* NGOs & Aid */}
        <article className="bg-[#1E2A39] p-4 md:p-8 rounded-lg shadow-xl flex flex-col items-center text-center space-y-6">
          <FaHandHoldingHeart className="text-cyan-400 text-7xl" aria-label="NGO Icon" />
          <h3 className="text-sm md:text-2xl text-white font-semibold">
            NGOs & Aid
          </h3>
          <p className="text-neutral-300 text-sm md:text-lg">
            Field disbursements, financial controls, and full auditability.
          </p>
        </article>

        {/* Enterprises */}
        <article className="bg-[#1E2A39] p-4 md:p-8 rounded-lg shadow-xl flex flex-col items-center text-center space-y-6">
          <FaIndustry className="text-cyan-400 text-7xl" aria-label="Enterprise Icon" />
          <h3 className="text-sm md:text-2xl text-white font-semibold">
            Enterprises
          </h3>
          <p className="text-neutral-300 text-sm md:text-lg">
            AP automation, mass payouts, and real-time financial tracking.
          </p>
        </article>
      </div>

      {/* Final CTA */}
      <footer className="text-center mt-20">
        <Link
          href="/explore"
          className="px-4 md:px-10 py-4 text-lg md:text-2xl bg-cyan-400 text-black rounded-lg shadow-lg hover:bg-cyan-500 transition"
        >
          Explore Your Use Case
        </Link>
      </footer>
    </section>
  );
}
