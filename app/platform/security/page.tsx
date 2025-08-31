"use client";

import { FaShieldAlt, FaLock, FaDatabase, FaCloud } from "react-icons/fa";

export default function SecurityPage() {
  return (
    <div className="bg-[#050812] text-white px-4 md:px-10 lg:px-20 py-16">
      <section>
        <h1 className="text-4xl font-extrabold text-white uppercase">
          Built for Critical Payments
        </h1>
        <p className="text-lg text-neutral-200 mt-4">
          Security, reliability, and compliance are core to our infrastructure,
          ensuring you can trust us with your critical payments.
        </p>
      </section>

      {/* Security Features */}
      <section className="mt-12 space-y-6">
        <h2 className="text-2xl text-cyan-400">Highlights</h2>
       
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <FaShieldAlt className="text-cyan-400 text-4xl md:text-6xl mb-4" />
            <h3 className="text-xl font-semibold text-white">99.9% Uptime</h3>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaLock className="text-cyan-400 text-4xl md:text-6xl mb-4" />
            <h3 className="text-xl font-semibold text-white">
              PCI DSS Aligned
            </h3>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaDatabase className="text-cyan-400 text-4xl md:text-6xl mb-4" />
            <h3 className="text-xl font-semibold text-white">
              Encryption in Transit & at Rest
            </h3>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaCloud className="text-cyan-400 text-4xl md:text-6xl mb-4" />
            <h3 className="text-xl font-semibold text-white">
              Monitoring & Disaster Recovery
            </h3>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <button className="px-6 py-3 text-lg bg-cyan-400 text-black rounded-md hover:bg-cyan-500 transition">
          Read Our Security Overview
        </button>
      </section>
    </div>
  );
}
