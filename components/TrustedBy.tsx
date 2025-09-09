import React from "react";
import Image from "next/image";

const TrustedBy: React.FC = () => {
  const logos = [
    "/logos/binance.svg",
    "/logos/moniepoint.svg",
    "/logos/wise.svg",
    "/logos/paystack.svg",
    "/logos/coinbase.svg",
    "/logos/remitly.svg",
    "/logos/interswitch.svg",
  ];

  return (
    <section className="py-12 bg-gray-900/50 text-white mt-8">
      {/* Logos Section */}
      <div className="w-full flex flex-col items-center justify-center mt-8">
        <h4 className="text-center text-4xl font-bold mb-14 bg-gradient-to-r from-yellow-400 via-cyan-400 to-purple-500 text-transparent bg-clip-text">
          Trusted by:
        </h4>

        <div className="relative overflow-hidden w-full max-w-5xl">
          {/* Fade edges (optional) */}
          {/* <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-black to-transparent z-10" />
    <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-black to-transparent z-10" /> */}

          {/* Infinite Scroll Track */}
          <div className="marquee-track">
            {[...logos, ...logos].map((logo, i) => (
              <Image
                key={i}
                src={logo}
                alt={`Client ${i}`}
                width={150}
                height={40}
                className="h-10 w-auto mx-6 grayscale hover:grayscale-0 transition duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
