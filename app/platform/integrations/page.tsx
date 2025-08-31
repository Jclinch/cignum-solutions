"use client";

import { FaBuilding, FaMoneyBillWave, FaMobileAlt, FaExchangeAlt } from "react-icons/fa";

export default function IntegrationsPage() {
  return (
    <div className="bg-[#050812] text-white px-4 md:px-10 lg:px-20 py-16">
      <section>
        <h1 className="text-4xl font-extrabold text-white uppercase">
          Bank-grade connections—without the bank headaches
        </h1>
        <p className="text-lg text-neutral-200 mt-4">
          Pre-built connectors to Nigerian banks (e.g., Providus), plus UK/EU partners, payment networks, and mobile money providers.
        </p>
      </section>

      {/* Features */}
      <section className="mt-12 space-y-6">
        <h2 className="text-2xl text-cyan-400">Highlights</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
  <div className="flex flex-col items-center text-center">
    <FaBuilding className="text-cyan-400 text-4xl md:text-6xl mb-4" />
    <h3 className="text-lg md:text-xl font-semibold text-white">
      Bank Account Verification
    </h3>
  </div>
  <div className="flex flex-col items-center text-center">
    <FaMoneyBillWave className="text-cyan-400 text-4xl md:text-6xl mb-4" />
    <h3 className="text-lg md:text-xl font-semibold text-white">Faster Payments</h3>
  </div>
  <div className="flex flex-col items-center text-center">
    <FaExchangeAlt className="text-cyan-400 text-4xl md:text-6xl mb-4" />
    <h3 className="text-lg md:text-xl font-semibold text-white">
      Settlement & Ledger Sync
    </h3>
  </div>
  <div className="flex flex-col items-center text-center">
    <FaMobileAlt className="text-cyan-400 text-4xl md:text-6xl mb-4" />
    <h3 className="text-lg md:text-xl font-semibold text-white">
      Mobile Money Integrations
    </h3>
  </div>
</div>

      </section>

      <section className="mt-12">
        <button className="px-6 py-3 text-lg bg-cyan-400 text-black rounded-md hover:bg-cyan-500 transition">
          Learn More About Integrations
        </button>
      </section>
    </div>
  );
}
