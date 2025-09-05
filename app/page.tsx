import { FeatureHighlights } from "@/components/FeatureHighlights";
import { FinalCTA } from "@/components/FinalCTA";
import { Hero } from "@/components/Hero";
// import HowItWorks from "@/components/HowItWorks";
// import Industries from "@/components/Industries";
import { ProofStats } from "@/components/ProofStats";
// import SolutionsGrid from "@/components/SolutionsGrid";
import TrustedBy from "@/components/TrustedBy";
import { UseCaseCarousel } from "@/components/UseCaseCarousel";
import { ValuePillars } from "@/components/ValuePillars";
// import WhyChooseUs from "@/components/WhyChooseUs";
import React from "react";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#000000]">
      {/* 🔹 Background Image (no zoom/skew) */}
      <div
        className="absolute inset-0 z-0 bg-top bg-no-repeat bg-contain bg-black"
        style={{ backgroundImage: 'url("/images/home.png")' }}
      />

      {/* 🔹 Animated black-blue gradient overlay */}
      <div className="absolute inset-0 z-10 animate-gradient-fade bg-gradient-to-b from-black/[.8] via-blue-950/[.2] to-black/[.6] transition-all duration-1000 ease-in-out" />

      {/* 🔹 Main Content */}
      <div className="relative z-20">
        <Hero />
        <TrustedBy />
        <ValuePillars />
        <FeatureHighlights />
        <ProofStats />
        <UseCaseCarousel />
        <FinalCTA />
        {/* <SolutionsGrid /> */}
        {/* <WhyChooseUs /> */}
        {/* <HowItWorks /> */}
        {/* <Industries /> */}
      </div>
    </div>
  );
}
