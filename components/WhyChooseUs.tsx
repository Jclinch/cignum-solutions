// components/WhyChooseUs.tsx (React + TailwindCSS)

"use client";

import { CheckCircle, ShieldCheck, Rocket, Cpu } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-purple-600" />,
    title: "Trusted Security",
    desc: "We prioritize your data with enterprise-grade encryption and secure cloud infrastructure.",
  },

  
  {
    icon: <Rocket className="w-8 h-8 text-purple-600" />,
    title: "Scalable Architecture",
    desc: "Built to scale with you. Our infrastructure handles growth without performance compromise.",
  },
  {
    icon: <Cpu className="w-8 h-8 text-purple-600" />,
    title: "Advanced Tech Stack",
    desc: "We leverage modern technologies like AI, microservices, and edge computing to deliver seamless solutions.",
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-purple-600" />,
    title: "Client-Centric Approach",
    desc: "We partner with you to solve real business challenges, not just deliver code.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-100 py-16 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Why Choose Cignum Solutions?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          With a blend of cutting-edge technology, industry expertise, and client-first strategy,
          we provide digital solutions that scale and succeed.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
