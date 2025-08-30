// 'use client';

// import Link from 'next/link';
// import { motion, Variants } from 'framer-motion';
// import { GridBeam } from './GridBeam';
// import { IconCloudDemo } from './IconCloud';

// // ✅ Typed container variants
// const containerVariants: Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//       delayChildren: 0.3,
//     },
//   },
// };

// // ✅ Typed item variants (using ease as tuple)
// const itemVariants: Variants = {
//   hidden: { y: 20, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.6,
//       ease: [0.6, -0.05, 0.01, 0.99] as [number, number, number, number],
//     },
//   },
// };

// export const Hero = () => {
//   return (
//     <section className="relative w-full h-full overflow-hidden">
//       {/* 🔹 Subtle Grid BG Overlay with Dark Mode Support */}
//       <div className="absolute inset-0 z-0 bg-grid-black/[0.06] dark:bg-grid-white/[0.04] pointer-events-none" />

//       {/* 🔹 Content Grid */}
//       <GridBeam className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full px-4 sm:px-10 lg:px-20 pt-24">
//         {/* 🔹 Left Side: Heading and Text */}
//         <motion.div
//           className="max-w-xl text-left space-y-6"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           <motion.h1
//             variants={itemVariants}
//             className="text-5xl md:text-7xl font-black leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300 drop-shadow-lg"
//           >
//             Borderless Financial Infrastructure
//           </motion.h1>

//           <motion.p
//             variants={itemVariants}
//             className="text-xl text-neutral-300 dark:text-neutral-400 leading-relaxed"
//           >
//             Cignum Solutions connects remittance, crypto, and merchant systems into one compliant global network.
//             Scalable APIs, FX rails, and virtual accounts—purpose-built for modern money movement.
//           </motion.p>

//        {/* 🔹 CTA Buttons */}
// <motion.div variants={itemVariants} className="flex flex-wrap gap-4 relative z-10">
//   {/* 🔹 Primary Button: Neon Fill Hover */}
//   <button
//     onClick={() => console.log("Demo requested")}
//     className="relative group inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-xl text-black bg-yellow-500 transition-all duration-300 ease-in-out overflow-hidden shadow-md hover:shadow-yellow/50 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2"
//   >
//     <span className="absolute inset-0 w-full h-full bg-yellow-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
//     <span className="relative z-10 flex items-center gap-2 text-white">
//       🚀 Request a Demo
//     </span>
//   </button>

//   {/* 🔹 Secondary Button: Transparent Neon Glow */}
//   <Link
//     href="/login"
//     className="relative group inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-yellow border border-yellow rounded-xl transition-all duration-300 ease-in-out overflow-hidden hover:bg-yellow/10 focus:outline-none focus:ring-2 focus:ring-yellow focus:ring-offset-2"
//   >
//     <span className="absolute inset-0 w-full h-full bg-yellow opacity-5 group-hover:opacity-10 transition-opacity duration-300 ease-in-out" />
//     <span className="relative z-10 flex items-center gap-2">
//       🔐 Member Login
//     </span>
//   </Link>
// </motion.div>


//         </motion.div>

//         {/* 🔹 Right Side: Parallax Icon Cloud */}
//         <div className="w-[320px] sm:w-[400px] h-[300px] sm:h-[400px] mt-10 md:mt-0 relative">
//           <IconCloudDemo />
//         </div>
//       </GridBeam>
//     </section>
//   );
// };




//-------------------------


'use client';

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { GridBeam } from './GridBeam';
import { IconCloudDemo } from './IconCloud';
import { FaRocket, FaBookOpen } from 'react-icons/fa'; // ✅ React Icons

// ✅ Container animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

// ✅ Item animation variants
const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99] as [number, number, number, number],
    },
  },
};

export const Hero = () => {
  return (
    <section className="relative w-full h-full overflow-hidden">
      {/* 🔹 Background grid overlay */}
      <div className="absolute inset-0 z-0 bg-grid-black/[0.06] dark:bg-grid-white/[0.04] pointer-events-none" />

      <GridBeam className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full px-4 sm:px-10 lg:px-20 pt-24">
        {/* 🔹 Left Side: Content */}
        <motion.div
          className="max-w-xl text-left space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* ✅ Updated H1 */}
          <motion.h1
            variants={itemVariants}
            className="text-[40px] md:text-[50px] font-black leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300 drop-shadow-lg"
          >
            Empower Global Money Movement <br /> Safely, Instantly, at Scale
          </motion.h1>

          {/* ✅ Updated Subhead */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-neutral-300 dark:text-neutral-400 leading-relaxed"
          >
            Cignum Solutions delivers embedded finance, liquidity orchestration, 
            and disbursement infrastructure—tailored for African and global businesses. 
            Issue virtual accounts, automate treasury workflows, execute payouts to 
            banks and mobile wallets, and stay compliant—all through one unified API.
          </motion.p>

          {/* ✅ CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 relative z-10"
          >
            {/* 🔹 Primary CTA: Get a Demo */}
            <Link
              href="/contact"
              className="relative group inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-xl text-white bg-yellow-500 hover:bg-yellow-500/50 transition-all duration-300 ease-in-out overflow-hidden shadow-md hover:shadow-yellow-500/50 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2"
            >
              <span className="relative z-10 flex items-center gap-2">
                <FaRocket className="text-white" /> Get a Demo
              </span>
            </Link>

            {/* 🔹 Secondary CTA: View API Docs */}
            <Link
              href="/docs"
              className="relative group inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-yellow-400 border border-yellow-400 rounded-xl transition-all duration-300 ease-in-out overflow-hidden hover:bg-yellow-500/50 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
            >
              <span className="relative z-10 flex items-center gap-2">
                <FaBookOpen className="text-yellow-400" /> View API Docs
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* 🔹 Right Side: Icon Cloud */}
        <div className="w-[320px] sm:w-[400px] h-[300px] sm:h-[400px] mt-10 md:mt-0 relative">
          <IconCloudDemo />
        </div>
      </GridBeam>
    </section>
  );
};
