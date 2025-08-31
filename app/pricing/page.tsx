// // use client"; removed because it is not allowed in server components
// //app\pricing\page.tsx
// import { motion } from "framer-motion";
// import Image from "next/image";
// import PricingClientPage from "./pricingClientPage";
// import type { Metadata } from "next";

// // 🔹 SEO Metadata
// export const metadata: Metadata = {
//   title: "Pricing | Moneytrust",
//   description:
//     "Simple and scalable pricing plans for fintechs, enterprises, and platforms. Choose from Build, Grow, or Scale with transparent fees and premium support.",
//   openGraph: {
//     title: "Pricing | Moneytrust",
//     description:
//       "Flexible pricing built for startups, growing businesses, and large enterprises. Transparent, scalable, and tailored to your needs.",
//     images: ["/hero2.avif"],
//   },
// };

// export default function PricingPage() {
//   return (
//     <div className="min-h-screen bg-[#050812] text-white">
//       {/* 🔹 Hero Section */}
//       <header className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
//         {/* Background */}
//         <div className="absolute inset-0">
//           <Image
//             src="/hero2.avif"
//             alt="Pricing background showing futuristic financial infrastructure"
//             width={1920}
//             height={1080}
//             className="w-full h-full object-cover"
//             priority
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050812]/70 to-[#050812]" />
//         </div>

//         {/* Hero Content */}
//         <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-5xl md:text-7xl font-extrabold tracking-wide uppercase"
//             style={{ fontFamily: "'Share Tech Mono', monospace" }}
//           >
//             <span className="text-cyan-400 drop-shadow-[0_0_25px_rgba(0,255,255,0.8)] animate-pulse">
//               Simple, Scalable Pricing
//             </span>
//           </motion.h1>
//           <p className="mt-6 text-neutral-200 text-lg md:text-xl font-light tracking-wide">
//             Choose the right plan for your business — from startups to enterprise scale.
//           </p>
//         </div>
//       </header>

//       {/* 🔹 Main Content */}
//       <main className="flex-1">
//         <PricingClientPage />
//       </main>
//     </div>
//   );
// }



// /----------------



import Image from "next/image";
import PricingClientPage from "./pricingClientPage";
import type { Metadata } from "next";

// ✅ SEO Metadata for Cignum Solutions
export const metadata: Metadata = {
  title: "Pricing | Cignum Solutions",
  description:
    "Simple and scalable pricing plans from Cignum Solutions. Choose from Build, Grow, or Scale with transparent fees and premium support.",
  openGraph: {
    title: "Pricing | Cignum Solutions",
    description:
      "Flexible pricing built for startups, growing businesses, and large enterprises. Transparent, scalable, and tailored to your needs.",
    images: ["/hero2.avif"],
  },
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#050812] text-white">
      {/* 🔹 Hero Section */}
      <header className="relative w-full h-[52vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/hero2.avif"
            alt="Pricing background showing futuristic financial infrastructure"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050812]/70 to-[#050812]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1
            className="text-5xl md:text-7xl font-extrabold tracking-wide uppercase"
            style={{ fontFamily: "'Share Tech Mono', monospace" }}
          >
            <span className="text-cyan-400 drop-shadow-[0_0_25px_rgba(0,255,255,0.8)] animate-pulse">
              Simple, Scalable Pricing
            </span>
          </h1>
          <p className="mt-6 text-neutral-200 text-lg md:text-xl font-light tracking-wide">
            Choose the right plan for your business — from startups to enterprise scale.
          </p>
        </div>
      </header>

      {/* 🔹 Main Content (Client Component) */}
      <main className="flex-1">
        <PricingClientPage />
      </main>
    </div>
  );
}
