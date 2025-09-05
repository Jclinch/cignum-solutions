"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const careers = [
  {
    image: "/illustrations/infrastructure.jpg",
    title: "Engineering",
    description:
      "Help us build secure, scalable APIs and infrastructure powering financial ecosystems.",
  },
  {
    image: "/illustrations/compliance.jpg",
    title: "Compliance",
    description:
      "Work on regulatory monitoring, KYC/KYB processes, and ensure our operations stay audit-ready.",
  },
  {
    image: "/illustrations/partner.jpg",
    title: "Partnerships",
    description:
      "Drive collaborations with fintechs, IMTOs, banks, and PSPs to expand our global network.",
  },
  {
    image: "/illustrations/onboarding.jpg",
    title: "Operations",
    description:
      "Join our mission-driven team to streamline treasury, disbursement workflows, and partner success.",
  },
];

export default function CareersPage() {
  return (
    <section className="py-20 px-4 md:px-10 lg:px-20 bg-transparent relative z-10">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">
          Careers at Cignum Solutions
        </h2>
        <p className="text-neutral-300 text-lg max-w-3xl mx-auto">
          Mission-driven and remote-friendly. Join us in Engineering,
          Compliance, Partnerships, and Operations.
        </p>
      </div>

      {/* Career Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
        {careers.map((career, i) => (
          <motion.div
            key={i}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ delay: i * 0.15 }}
            className="bg-midnight2 bg-opacity-90 p-6 rounded-xl shadow-md border border-white/10 hover:shadow-lg transition"
          >
            <div className="mb-4 flex justify-center">
              <Image
                src={career.image}
                alt={career.title}
                width={240}
                height={160}
                className="h-60 w-auto object-contain rounded-lg"
              />
            </div>

            <div className="text-center">
              <h3 className="text-xl text-cyan-400 font-semibold mb-2">
                {career.title}
              </h3>
              <p className="text-neutral-300 text-sm">{career.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
