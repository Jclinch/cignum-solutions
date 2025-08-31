"use client";

import { FaCode, FaPaperclip, FaLink, FaTools } from "react-icons/fa";

export default function ApisPage() {
  return (
    <div className="bg-[#050812] text-white px-4 md:px-10 lg:px-20 py-16">
      <section>
        <h1 className="text-4xl font-extrabold text-white uppercase">
          Developer-first by Design
        </h1>
        <p className="text-lg text-neutral-200 mt-4">
          Easy-to-use REST/JSON APIs with versioning, SDKs, sandboxes, webhook retries, and example applications.
        </p>
      </section>

      {/* Endpoints and Dev Essentials with Big Icons */}
      <section className="mt-12 space-y-12">
        <h2 className="text-2xl text-cyan-400">Endpoints</h2>
       <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
  <div className="flex flex-col items-center text-center">
    <FaCode className="text-cyan-400 text-4xl md:text-6xl mb-4" />
    <h3 className="text-xs md:text-sm font-semibold text-white">
      POST /v1/virtual-accounts
    </h3>
  </div>
  <div className="flex flex-col items-center text-center">
    <FaPaperclip className="text-cyan-400 text-4xl md:text-6xl mb-4" />
    <h3 className="text-xs md:text-sm font-semibold text-white">
      POST /v1/payouts/bulk
    </h3>
  </div>
  <div className="flex flex-col items-center text-center">
    <FaLink className="text-cyan-400 text-4xl md:text-6xl mb-4" />
    <h3 className="text-xs md:text-sm font-semibold text-white">
      GET /v1/balances
    </h3>
  </div>
  <div className="flex flex-col items-center text-center">
    <FaTools className="text-cyan-400 text-4xl md:text-6xl mb-4" />
    <h3 className="text-xs md:text-sm font-semibold text-white">
      POST /v1/kyc/verify
    </h3>
  </div>
</div>


        <h2 className="text-2xl text-cyan-400 mt-12">Dev Essentials</h2>
        <ul className="space-y-3 text-neutral-200">
          <li className="flex items-center gap-3">
            <FaTools className="text-cyan-400 text-4xl" />
            <span>API keys & scopes</span>
          </li>
          <li className="flex items-center gap-3">
            <FaLink className="text-cyan-400 text-4xl" />
            <span>Idempotency, pagination</span>
          </li>
          <li className="flex items-center gap-3">
            <FaPaperclip className="text-cyan-400 text-4xl" />
            <span>OpenAPI spec</span>
          </li>
          <li className="flex items-center gap-3">
            <FaCode className="text-cyan-400 text-4xl" />
            <span>Test data & simulators</span>
          </li>
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
