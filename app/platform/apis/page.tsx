"use client";

export default function ApisPage() {
  return (
    <div className="bg-[#050812] text-white px-4 md:px-10 lg:px-20 py-16">
      <section>
        <h1 className="text-4xl font-extrabold text-white uppercase">
          Developer-First by Design
        </h1>
        <p className="text-lg text-neutral-200 mt-4">
          Easy-to-use REST/JSON APIs with versioning, SDKs, sandboxes, webhook retries, and example applications.
        </p>
      </section>

      {/* API Endpoints */}
      <section className="mt-12 space-y-6">
        <h2 className="text-2xl text-cyan-400">API Endpoints</h2>
        <ul className="space-y-3">
          <li className="text-neutral-200">
            <span className="font-bold">POST</span> /v1/virtual-accounts
          </li>
          <li className="text-neutral-200">
            <span className="font-bold">POST</span> /v1/payouts/bulk
          </li>
          <li className="text-neutral-200">
            <span className="font-bold">GET</span> /v1/balances
          </li>
          <li className="text-neutral-200">
            <span className="font-bold">POST</span> /v1/kyc/verify
          </li>
          <li className="text-neutral-200">
            <span className="font-bold">GET</span> /v1/reports/reconciliation
          </li>
        </ul>
      </section>

      <section className="mt-12">
        <h3 className="text-xl text-white">Developer Essentials</h3>
        <ul className="text-neutral-200 list-disc pl-6">
          <li>API keys & scopes</li>
          <li>Idempotency</li>
          <li>Pagination</li>
          <li>OpenAPI spec</li>
          <li>Test data & simulators</li>
        </ul>
      </section>

      <section className="mt-12">
        <button className="px-6 py-3 text-lg bg-cyan-400 text-black rounded-md hover:bg-cyan-500 transition">
          Open the Docs
        </button>
      </section>
    </div>
  );
}
