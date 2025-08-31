"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import React from "react";

const navItems = [
  { label: "Privacy Policy", path: "/legal/privacy" },
  { label: "Terms of Service", path: "/legal/terms-of-service" },
  { label: "Compliance & Licensing", path: "/legal/compliance" },
];

export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#050812] text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6 md:px-16 lg:px-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero2.avif"
            alt="Legal background"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050812]/70 to-[#050812]" />
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <h1
            className="text-5xl md:text-6xl font-extrabold tracking-wide uppercase"
            style={{ fontFamily: "'Share Tech Mono', monospace" }}
          >
            <span className="text-cyan-400 drop-shadow-[0_0_20px_rgba(0,255,255,0.7)] animate-pulse">
              Legal Center
            </span>
          </h1>
          <p className="mt-4 text-neutral-200 text-lg md:text-xl font-light">
            Access our policies, terms, and compliance commitments.
          </p>
        </div>
      </section>

      {/* Solutions Nav + Content */}
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-12 gap-12">
        {/* Sidebar Nav on the Right */}
        <aside className="hidden md:block w-56 shrink-0 order-last">
          <div className="sticky top-24 rounded-xl p-4 bg-white/5 backdrop-blur-md border border-cyan-400/20 shadow-[0_0_25px_rgba(0,255,255,0.15)]">
            <ul className="space-y-2">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      className={`block px-4 py-3 rounded-lg transition font-medium tracking-wide ${
                        isActive
                          ? "bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-black shadow-[0_0_15px_rgba(0,255,255,0.5)]"
                          : "bg-transparent text-neutral-300 hover:bg-white/10 hover:text-cyan-300"
                      }`}
                      style={{
                        fontFamily: "'Share Tech Mono', monospace",
                      }}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>

        {/* Top Nav (mobile) */}
        <div className="md:hidden flex overflow-x-auto gap-3 pb-2">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm transition ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-black font-semibold shadow-[0_0_15px_rgba(0,255,255,0.5)]"
                    : "bg-white/5 text-neutral-300 hover:bg-white/10 hover:text-cyan-300"
                }`}
                style={{
                  fontFamily: "'Share Tech Mono', monospace",
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Page Content (expanded) */}
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}



//------------

// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// // import { motion } from "framer-motion";
// import Image from "next/image";
// // import { ChevronDown } from "lucide-react";
// import { useState } from "react";

// const navItems = [
//   { label: "Privacy Policy", path: "/legal/privacy" },
//   { label: "Terms of Service", path: "/legal/terms-of-service" },
//   { label: "Compliance & Licensing", path: "/legal/compliance" },
// ];

// export default function PlatformLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const pathname = usePathname();
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

//   // Handle dropdown toggle
//   const toggleDropdown = (label: string) => {
//     setActiveDropdown((prev) => (prev === label ? null : label));
//   };

//   return (
//     <div className="min-h-screen bg-[#050812] text-white">
//       {/* Hero Section */}
//       <section className="relative py-20 px-6 md:px-16 lg:px-32 overflow-hidden">
//          <div className="absolute inset-0">
//            <Image
//             src="/hero2.avif"
//             alt="Legal background"
//             width={1920}
//             height={1080}
//             className="w-full h-full object-cover"
//             priority
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050812]/70 to-[#050812]" />
//         </div>
//         <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
//           <h1
//             className="text-5xl md:text-6xl font-extrabold tracking-wide uppercase"
//             style={{ fontFamily: "'Share Tech Mono', monospace" }}
//           >
//             <span className="text-cyan-400 drop-shadow-[0_0_20px_rgba(0,255,255,0.7)] animate-pulse">
//               Legal Center
//             </span>
//           </h1>
//           <p className="mt-4 text-neutral-200 text-lg md:text-xl font-light">
//             Access our policies, terms, and compliance commitments.
//           </p>
//         </div>
//       </section>

//       {/* Solutions Nav + Content */}
//       <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-12 gap-12">
//         {/* Sidebar Nav on the Right */}
//         <aside className="hidden md:block w-56 shrink-0 order-last">
//           <div className="sticky top-24 rounded-xl p-4 bg-white/5 backdrop-blur-md border border-cyan-400/20 shadow-[0_0_25px_rgba(0,255,255,0.15)]">
//             <ul className="space-y-2">
//               {navItems.map((item) => {
//                 const isActive = pathname === item.path;
//                 return (
//                   <li key={item.path}>
//                     <Link
//                       href={item.path}
//                       className={`block px-4 py-3 rounded-lg transition font-medium tracking-wide ${
//                         isActive
//                           ? "bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-black shadow-[0_0_15px_rgba(0,255,255,0.5)]"
//                           : "bg-transparent text-neutral-300 hover:bg-white/10 hover:text-cyan-300"
//                       }`}
//                       style={{
//                         fontFamily: "'Share Tech Mono', monospace",
//                       }}
//                     >
//                       {item.label}
//                     </Link>
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>
//         </aside>

//         {/* Top Nav (mobile) */}
//         <div className="md:hidden flex overflow-x-auto gap-3 pb-2">
//           {navItems.map((item) => {
//             const isActive = pathname === item.path;
//             return (
//               <Link
//                 key={item.path}
//                 href={item.path}
//                 className={`flex-shrink-0 px-4 py-2 rounded-full text-sm transition ${
//                   isActive
//                     ? "bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-black font-semibold shadow-[0_0_15px_rgba(0,255,255,0.5)]"
//                     : "bg-white/5 text-neutral-300 hover:bg-white/10 hover:text-cyan-300"
//                 }`}
//                 style={{
//                   fontFamily: "'Share Tech Mono', monospace",
//                 }}
//               >
//                 {item.label}
//               </Link>
//             );
//           })}
//         </div>

//         {/* Page Content (expanded) */}
//         <main className="flex-1">{children}</main>
//       </div>
//     </div>
//   );
// }
