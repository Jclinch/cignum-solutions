// components/IndustriesGrid.tsx
"use client";

const industries = [
  "Licensed IMTOs",
  "Crypto OTC Desks & Exchanges",
  "Payroll & Gig Platforms",
  "Digital Merchants",
  "Fintech Startups",
  "Mobile Money Operators",
];

export default function IndustriesGrid() {
  return (
    <section className="py-16 px-4 sm:px-8 bg-[var(--color-card-bg)]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)] mb-8 drop-shadow">
          Industries We Serve
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {industries.map((industry, idx) => (
            <div
              key={idx}
              className="p-6 bg-[var(--color-bg)] text-[var(--color-muted)] rounded-2xl border border-[var(--color-border)] hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-[var(--color-primary)]">
                {industry}
              </h3>
              <p className="text-sm mt-2">
                We provide tailored solutions for {industry.toLowerCase()} to scale securely and efficiently.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
