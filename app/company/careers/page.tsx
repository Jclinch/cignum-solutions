"use client";

import { FaLaptopCode, FaShieldAlt, FaHandshake, FaCogs } from "react-icons/fa";

export default function CareersPage() {
  return (
    <section className="space-y-12">
      <h2 className="text-4xl font-bold text-white text-center">Careers at Cignum Solutions</h2>
      <p className="text-neutral-300 text-lg text-center max-w-3xl mx-auto">
        Mission-driven and remote-friendly. Join us in Engineering, Compliance,
        Partnerships, and Operations.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <div className="bg-[#1E2A39] p-8 rounded-lg shadow-lg">
          <FaLaptopCode className="text-cyan-400 text-6xl mx-auto" />
          <h3 className="mt-4 text-xl font-semibold">Engineering</h3>
        </div>
        <div className="bg-[#1E2A39] p-8 rounded-lg shadow-lg">
          <FaShieldAlt className="text-cyan-400 text-6xl mx-auto" />
          <h3 className="mt-4 text-xl font-semibold">Compliance</h3>
        </div>
        <div className="bg-[#1E2A39] p-8 rounded-lg shadow-lg">
          <FaHandshake className="text-cyan-400 text-6xl mx-auto" />
          <h3 className="mt-4 text-xl font-semibold">Partnerships</h3>
        </div>
        <div className="bg-[#1E2A39] p-8 rounded-lg shadow-lg">
          <FaCogs className="text-cyan-400 text-6xl mx-auto" />
          <h3 className="mt-4 text-xl font-semibold">Operations</h3>
        </div>
      </div>
    </section>
  );
}
