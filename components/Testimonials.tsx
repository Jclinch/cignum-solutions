// components/Testimonials.tsx
"use client";

const testimonials = [
  {
    name: "Adebola, Fintech CEO",
    feedback:
      "Cignum’s platform helped us scale payments across Africa seamlessly. Compliance and settlement was spot on.",
  },
  {
    name: "Chioma, IMTO Manager",
    feedback:
      "Their onboarding process is smooth and the wallet infrastructure made FX conversion effortless.",
  },
  {
    name: "James, Crypto Exchange CTO",
    feedback:
      "Cignum's API integration allowed us to offer NGN ramps without any headaches.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 px-4 sm:px-8 bg-[var(--color-bg)] text-[var(--color-muted)]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)] mb-10 drop-shadow">
          What Our Partners Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-[var(--color-card)] p-6 border rounded-xl shadow hover:shadow-xl"
            >
              <p className="italic text-sm mb-4">“{item.feedback}”</p>
              <h4 className="font-semibold text-[var(--color-primary)]">{item.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
