"use client";

export default function SecurityPage() {
  return (
    <div className="bg-[#050812] text-white px-4 md:px-10 lg:px-20 py-16">
      <section>
        <h1 className="text-4xl font-extrabold text-white uppercase">
          Built for Critical Payments
        </h1>
        <p className="text-lg text-neutral-200 mt-4">
          Security, reliability, and compliance are core to our infrastructure, ensuring you can trust us with your critical payments.
        </p>
      </section>

      {/* Security Features */}
      <section className="mt-12 space-y-6">
        <h2 className="text-2xl text-cyan-400">Highlights</h2>
        <ul className="space-y-3">
          <li className="text-neutral-200">
            <span className="font-bold">99.9% uptime</span>, active-active architecture
          </li>
          <li className="text-neutral-200">
            <span className="font-bold">PCI DSS aligned</span>; SOC 2 (in progress)
          </li>
          <li className="text-neutral-200">
            <span className="font-bold">Encryption</span> in transit and at rest
          </li>
          <li className="text-neutral-200">
            <span className="font-bold">Role-based access (RBAC)</span>, audit logs
          </li>
          <li className="text-neutral-200">
            <span className="font-bold">Monitoring</span>, incident response, disaster recovery
          </li>
        </ul>
      </section>

      <section className="mt-12">
        <button className="px-6 py-3 text-lg bg-cyan-400 text-black rounded-md hover:bg-cyan-500 transition">
          Read Our Security Overview
        </button>
      </section>
    </div>
  );
}
