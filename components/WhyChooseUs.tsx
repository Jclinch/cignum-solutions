'use client';

import { motion } from "framer-motion";

const features = [
  {
    image: "/illustrations/compliance.jpg",
    title: "Licensed & Compliant",
    description: "Regulated under CBN, FinCEN, and VAS to ensure trusted global operations.",
  },
  {
    image: "/illustrations/infrastructure.jpg",
    title: "Enterprise-Grade Infrastructure",
    description: "Built to scale with secure APIs, cloud-native services, and compliance hooks.",
  },
  {
    image: "/illustrations/global.jpg",
    title: "Global Presence",
    description: "Operations and partnerships across Nigeria, UK, USA, and key diaspora markets.",
  },
  {
    image: "/illustrations/onboarding.jpg",
    title: "Fast Onboarding",
    description: "Get started in days with white-labeled toolkits and sandbox support.",
  },
  {
    image: "/illustrations/partner.jpg",
    title: "Partner-Centric",
    description: "Built for fintechs, merchants, and exchanges. We grow with our partners.",
  },
];

const logos = [
  "/logos/binance.svg",
  "/logos/moniepoint.svg",
  "/logos/wise.svg",
  "/logos/paystack.svg",
  "/logos/coinbase.svg",
  "/logos/remitly.svg",
  "/logos/interswitch.svg",
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-4 md:px-10 lg:px-20 bg-transparent relative z-10">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">Why Choose Cignum?</h2>
        <p className="text-muted max-w-2xl mx-auto">
          Trusted by global operators and tailored for borderless financial growth.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ delay: i * 0.15 }}
            className="bg-midnight2 bg-opacity-90 p-6 rounded-xl shadow-md border border-white/10 hover:shadow-lg transition"
          >
            <div className="mb-4 flex justify-center">
              <img
                src={feature.image}
                alt={feature.title}
                className="h-60 w-auto object-contain"
              />
            </div>

            <div className="text-center">
              <h3 className="text-xl text-white font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted text-sm">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Logos Section */}
<div className="w-full flex flex-col items-center justify-center mt-8">
  <h4 className="text-lg font-medium text-white mb-4 text-center">
    Trusted by:
  </h4>

  <div className="relative overflow-hidden w-full max-w-5xl">
    {/* Fade edges (optional) */}
    {/* <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-black to-transparent z-10" />
    <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-black to-transparent z-10" /> */}

    {/* Infinite Scroll Track */}
    <div className="marquee-track">
      {[...logos, ...logos].map((logo, i) => (
        <img
          key={i}
          src={logo}
          alt={`Client ${i}`}
          className="h-10 w-auto mx-6 grayscale hover:grayscale-0 transition duration-300"
        />
      ))}
   </div>

  </div>
</div>
    </section>
  );
}
