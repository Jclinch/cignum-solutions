"use client";

import { FaUniversity, FaHandshake, FaGlobe, FaExchangeAlt } from "react-icons/fa";

export default function PartnersPage() {
  return (
    <section className="space-y-12">
      <h2 className="text-4xl font-bold text-white text-center">Our Partners</h2>
      <p className="text-neutral-300 text-lg text-center max-w-3xl mx-auto">
        We work closely with financial institutions and service providers to
        deliver robust payments and treasury solutions.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <div className="bg-[#1E2A39] p-8 rounded-lg shadow-lg">
          <FaUniversity className="text-cyan-400 text-6xl mx-auto" />
          <h3 className="mt-4 text-xl font-semibold">Banks</h3>
        </div>
        <div className="bg-[#1E2A39] p-8 rounded-lg shadow-lg">
          <FaExchangeAlt className="text-cyan-400 text-6xl mx-auto" />
          <h3 className="mt-4 text-xl font-semibold">IMTOs</h3>
        </div>
        <div className="bg-[#1E2A39] p-8 rounded-lg shadow-lg">
          <FaHandshake className="text-cyan-400 text-6xl mx-auto" />
          <h3 className="mt-4 text-xl font-semibold">PSPs</h3>
        </div>
        <div className="bg-[#1E2A39] p-8 rounded-lg shadow-lg">
          <FaGlobe className="text-cyan-400 text-6xl mx-auto" />
          <h3 className="mt-4 text-xl font-semibold">FX & KYC Vendors</h3>
        </div>
      </div>
    </section>
  );
}
