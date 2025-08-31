// //app\pricing\pricingClientPage.tsx
// "use client";

// import { FaRocket, FaChartLine, FaBuilding } from "react-icons/fa";
// import Link from "next/link";

// export default function PricingClientPage() {
//   return (
//     <section className="px-6 md:px-16 lg:px-24 py-16">
//       {/* Intro Section */}
//       <header className="text-center mb-16">
//         <h2 className="text-4xl font-extrabold text-white">
//           Flexible Plans Built for You
//         </h2>
//         <p className="text-lg text-neutral-200 mt-4 max-w-3xl mx-auto">
//           From sandbox testing to enterprise-scale solutions, our pricing grows with your business.
//         </p>
//       </header>

//       {/* Pricing Plans */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
//         {/* Build (Startup) */}
//         <article className="bg-[#1E2A39] p-10 rounded-lg shadow-xl flex flex-col items-center text-center space-y-6">
//           <FaRocket className="text-cyan-400 text-7xl" aria-label="Build Plan Icon" />
//           <h3 className="text-2xl font-semibold text-white">Build (Startup)</h3>
//           <p className="text-neutral-300 text-lg">
//             Free sandbox, access to core APIs, and community-driven support for early builders.
//           </p>
//         </article>

//         {/* Grow */}
//         <article className="bg-[#1E2A39] p-10 rounded-lg shadow-xl flex flex-col items-center text-center space-y-6">
//           <FaChartLine className="text-cyan-400 text-7xl" aria-label="Grow Plan Icon" />
//           <h3 className="text-2xl font-semibold text-white">Grow</h3>
//           <p className="text-neutral-300 text-lg">
//             Per-transaction + monthly fees, premium support, and advanced reporting capabilities.
//           </p>
//         </article>

//         {/* Scale (Custom) */}
//         <article className="bg-[#1E2A39] p-10 rounded-lg shadow-xl flex flex-col items-center text-center space-y-6">
//           <FaBuilding className="text-cyan-400 text-7xl" aria-label="Scale Plan Icon" />
//           <h3 className="text-2xl font-semibold text-white">Scale (Custom)</h3>
//           <p className="text-neutral-300 text-lg">
//             Custom SLAs, private data residency, volume discounts, and dedicated success managers.
//           </p>
//         </article>
//       </div>

//       {/* Notes Section */}
//       <div className="mt-16 text-center max-w-3xl mx-auto">
//         <p className="text-neutral-300 text-lg">
//           ✅ Transparent pricing on FX, compliance screening, and premium modules.
//         </p>
//       </div>

//       {/* Final CTA */}
//       <footer className="text-center mt-20">
//         <Link
//           href="/contact"
//           className="px-10 py-4 text-2xl bg-cyan-400 text-black rounded-lg shadow-lg hover:bg-cyan-500 transition"
//         >
//           Get a Custom Quote
//         </Link>
//       </footer>
//     </section>
//   );
// }




//--------------------

"use client";

import { FaRocket, FaChartLine, FaBuilding } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function PricingClientPage() {
  // ✅ Inject JSON-LD structured data for SEO
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Cignum Solutions Pricing Plans",
      description:
        "Flexible pricing plans from Cignum Solutions: Build, Grow, and Scale.",
      brand: { "@type": "Organization", name: "Cignum Solutions" },
      offers: [
        {
          "@type": "Offer",
          name: "Build (Startup)",
          price: "0",
          priceCurrency: "USD",
          description:
            "Free sandbox, access to core APIs, and community support for early builders.",
        },
        {
          "@type": "Offer",
          name: "Grow",
          price: "Variable",
          priceCurrency: "USD",
          description:
            "Per-transaction + monthly fees, premium support, and advanced reporting.",
        },
        {
          "@type": "Offer",
          name: "Scale (Custom)",
          price: "Custom",
          priceCurrency: "USD",
          description:
            "Custom SLAs, private data residency, volume discounts, and dedicated success managers.",
        },
      ],
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section className="px-6 md:px-16 lg:px-24 py-16">
      {/* Intro Section */}
      <header className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-white"
        >
          Flexible Plans Built for You
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-neutral-200 mt-4 max-w-3xl mx-auto"
        >
          From sandbox testing to enterprise-scale solutions, our pricing grows
          with your business.
        </motion.p>
      </header>

      {/* Pricing Plans */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Build (Startup) */}
        <motion.article
          whileHover={{ scale: 1.05 }}
          className="bg-[#1E2A39] p-10 rounded-lg shadow-xl flex flex-col items-center text-center space-y-6"
        >
          <FaRocket className="text-cyan-400 text-7xl" />
          <h3 className="text-2xl font-semibold text-white">Build (Startup)</h3>
          <p className="text-neutral-300 text-lg">
            Free sandbox, access to core APIs, and community-driven support for
            early builders.
          </p>
        </motion.article>

        {/* Grow */}
        <motion.article
          whileHover={{ scale: 1.05 }}
          className="bg-[#1E2A39] p-10 rounded-lg shadow-xl flex flex-col items-center text-center space-y-6"
        >
          <FaChartLine className="text-cyan-400 text-7xl" />
          <h3 className="text-2xl font-semibold text-white">Grow</h3>
          <p className="text-neutral-300 text-lg">
            Per-transaction + monthly fees, premium support, and advanced
            reporting capabilities.
          </p>
        </motion.article>

        {/* Scale (Custom) */}
        <motion.article
          whileHover={{ scale: 1.05 }}
          className="bg-[#1E2A39] p-10 rounded-lg shadow-xl flex flex-col items-center text-center space-y-6"
        >
          <FaBuilding className="text-cyan-400 text-7xl" />
          <h3 className="text-2xl font-semibold text-white">Scale (Custom)</h3>
          <p className="text-neutral-300 text-lg">
            Custom SLAs, private data residency, volume discounts, and dedicated
            success managers.
          </p>
        </motion.article>
      </div>

      {/* Notes Section */}
      <div className="mt-16 text-center max-w-3xl mx-auto">
        <p className="text-neutral-300 text-lg">
          ✅ Transparent pricing on FX, compliance screening, and premium
          modules.
        </p>
      </div>

      {/* Final CTA */}
      <footer className="text-center mt-20">
        <Link
          href="/contact"
          className="px-10 py-4 text-2xl bg-cyan-400 text-black rounded-lg shadow-lg hover:bg-cyan-500 transition"
        >
          Get a Custom Quote
        </Link>
      </footer>
    </section>
  );
}
