import Image from "next/image";
import type { Metadata } from "next";
import ContactClientPage from "./contactClientPage";

// 🔹 SEO Metadata
export const metadata: Metadata = {
  title: "Contact | Cignum Solutions",
  description:
    "Get in touch with Cignum Solutions. Sales, support, and partnership inquiries for payments and treasury infrastructure.",
  openGraph: {
    title: "Contact | Cignum Solutions",
    description:
      "Talk to sales, reach support, or explore partnerships with Cignum Solutions. Let’s move money better.",
    images: ["/hero2.avif"],
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#050812] text-white">
      {/* 🔹 Hero Section */}
      <header className="relative w-full h-[52vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/hero2.avif"
            alt="Contact Cignum Solutions background"
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
              Let’s Move Money Better
            </span>
          </h1>
          <p className="mt-6 text-neutral-200 text-lg md:text-xl font-light tracking-wide">
            Connect with our sales, support, or partnerships team today.
          </p>
        </div>
      </header>

      {/* 🔹 Main Content */}
      <main className="flex-1">
        <ContactClientPage />
      </main>
    </div>
  );
}
