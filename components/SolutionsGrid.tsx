// // components/SolutionsGrid.tsx
// 'use client';

// import { Card, CardContent } from "@/components/ui/card";
// import { motion } from "framer-motion";
// import { Cpu, ShieldCheck, TrendingUp, Globe } from "lucide-react";

// type Solution = {
//   title: string;
//   description: string;
//   iconKey: string;
// };

// const iconsMap: Record<string, JSX.Element> = {
//   cpu: <Cpu className="w-6 h-6 text-[var(--color-primary)]" />,
//   shield: <ShieldCheck className="w-6 h-6 text-[var(--color-primary)]" />,
//   growth: <TrendingUp className="w-6 h-6 text-[var(--color-primary)]" />,
//   globe: <Globe className="w-6 h-6 text-[var(--color-primary)]" />,
// };

// interface SolutionsGridProps {
//   heading: string;
//   subheading: string;
//   solutions: Solution[];
// }

// export default function SolutionsGrid({
//   heading,
//   subheading,
//   solutions,
// }: SolutionsGridProps) {
//   return (
//     <section className="py-12">
//       <div className="text-center mb-10">
//         <h2 className="text-3xl font-bold text-[var(--color-primary)] drop-shadow">{heading}</h2>
//         <p className="text-[var(--color-muted)] mt-2">{subheading}</p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {solutions.map((solution, idx) => (
//           <motion.div
//             key={idx}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <Card className="p-4 bg-[var(--color-card-bg)] border border-[var(--color-border)] shadow-lg">
//               <CardContent className="flex flex-col items-start gap-4">
//                 {iconsMap[solution.iconKey]}
//                 <h3 className="text-xl font-semibold text-[var(--color-primary)]">{solution.title}</h3>
//                 <p className="text-[var(--color-muted)] text-sm">
//                   {solution.description}
//                 </p>
//               </CardContent>
//             </Card>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }



"use client";

import { motion } from "framer-motion";
import { FaMoneyBillWave, FaBitcoin, FaExchangeAlt } from "react-icons/fa";

const solutions = [
  {
    icon: <FaMoneyBillWave className="text-yellow text-3xl" />,
    title: "Global Remittance",
    description:
      "Licensed IMTO infrastructure to power diaspora flows, FX settlement, and KYC-compliant disbursements.",
  },
  {
    icon: <FaBitcoin className="text-yellow text-3xl" />,
    title: "Crypto On-Ramp",
    description:
      "NGN ↔ USD virtual wallets with regulatory clarity, OTC desk support, and seamless crypto integration.",
  },
  {
    icon: <FaExchangeAlt className="text-yellow text-3xl" />,
    title: "Merchant & Treasury Rails",
    description:
      "Smart APIs and merchant accounts with reconciliation, virtual accounts, and automated treasury ops.",
  },
];

export default function SolutionsGrid() {
  return (
    <section className="py-20 px-4 md:px-10 lg:px-20 bg-transparent">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">Our Solutions</h2>
        <p className="text-muted max-w-2xl mx-auto">
          From cross-border payments to merchant liquidity — we help businesses move money seamlessly across borders.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {solutions.map((sol, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.04 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
            className="bg-midnight2 bg-opacity-80 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/10 hover:border-yellow transition"
          >
            <div className="mb-4">{sol.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">{sol.title}</h3>
            <p className="text-muted text-sm">{sol.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
