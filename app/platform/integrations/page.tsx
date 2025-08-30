"use client";

export default function IntegrationsPage() {
  return (
    <div className="bg-[#050812] text-white px-4 md:px-10 lg:px-20 py-16">
      <section>
        <h1 className="text-4xl font-extrabold text-white uppercase">
          Bank-Grade Connections—Without the Bank Headaches
        </h1>
        <p className="text-lg text-neutral-200 mt-4">
          Pre-built connectors to Nigerian banks (e.g., Providus), plus UK/EU partners, payment networks, and mobile money providers.
        </p>
      </section>

      {/* Features */}
      <section className="mt-12 space-y-6">
        <h2 className="text-2xl text-cyan-400">Highlights</h2>
        <ul className="space-y-3">
          <li className="text-neutral-200">
            <span className="font-bold">Bank account verification</span> (name match)
          </li>
          <li className="text-neutral-200">
            <span className="font-bold">Faster Payments / SEPA</span> (where applicable)
          </li>
          <li className="text-neutral-200">
            <span className="font-bold">Settlement & ledger sync</span> (API or file-based)
          </li>
          <li className="text-neutral-200">
            <span className="font-bold">Mobile money integrations</span> (depending on region)
          </li>
        </ul>
      </section>

      <section className="mt-12">
        <button className="px-6 py-3 text-lg bg-cyan-400 text-black rounded-md hover:bg-cyan-500 transition">
          Learn More About Integrations
        </button>
      </section>
    </div>
  );
}
