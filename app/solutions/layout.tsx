"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

const navItems = [
  { label: "Embedded Finance (BaaS)", path: "/solutions/embedded-finance" },
  { label: "Treasury & Liquidity Management", path: "/solutions/treasury" },
  { label: "Bulk Disbursements (B2B/B2C)", path: "/solutions/disbursements" },
  { label: "Compliance, KYC/KYB & Risk", path: "/solutions/compliance" },
];

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#050812] text-white">
      {/* 🔹 Futuristic Hero Banner */}
<section className="relative py-20 px-6 md:px-16 lg:px-32 overflow-hidden">
  {/* 🔹 Background Image with Gradient Overlay */}
  <div className="absolute inset-0">
    <Image
      src="/hero2.avif"
      alt="Futuristic finance background"
      width={1920}
      height={1080}
      className="w-full h-full object-cover"
    />
    {/* 🔹 Gradient Overlay: transparent top → dark bottom */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050812]/60 to-[#050812]" />
  </div>

  {/* 🔹 Content */}
  <div className="relative z-10 text-center max-w-4xl mx-auto space-y-4">
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-5xl md:text-7xl font-extrabold tracking-wide uppercase"
      style={{
        fontFamily: "'Share Tech Mono', monospace", // Futuristic font
      }}
    >
      <span className="text-cyan-400 drop-shadow-[0_0_25px_rgba(0,255,255,0.8)] animate-pulse">
        Our Solutions
      </span>
    </motion.h1>
    <p className="text-neutral-200 text-lg md:text-xl font-light tracking-wide">
      Powerful infrastructure for payments, treasury, compliance, and embedded finance — built for scale.
    </p>
  </div>
</section>


      {/* 🔹 Solutions Nav + Content */}
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-12 gap-12">
        {/* Sidebar Nav (desktop) — Futuristic Glass + Neon */}
        <aside className="hidden md:block w-56 shrink-0">
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
