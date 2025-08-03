"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { Tooltip } from "react-tooltip";
// import { FaUserCheck, FaWallet, FaExchangeAlt, FaMoneyBillWave, FaArrowRight, FaShieldAlt } from "react-icons/fa";
import Image from "next/image";

const fiatSteps = [
  {
    title: "Partner Onboarding",
    description: "Quick KYC, sandbox access, and branded toolkit delivered within days.",
    tip: "We verify business identity & compliance.",
    image: "/images/steps/onboarding.jpg",
  },
  {
    title: "Wallet Creation",
    description: "Multi-currency wallets for holding & converting fiat.",
    tip: "Supports NGN, USD, EUR, etc.",
    image: "/images/steps/wallet.jpg",
  },
  {
    title: "Funding",
    description: "Partners fund wallets via bank deposits.",
    tip: "NIBSS, RTGS, SWIFT supported.",
    image: "/images/steps/funding.jpg",
  },
  {
    title: "Conversion",
    description: "FX conversion via CBN-licensed IMTO channels.",
    tip: "Live rates + spreads available.",
    image: "/images/steps/conversion.jpg",
  },
  {
    title: "Disbursement",
    description: "Payouts to vendors, payroll, or beneficiaries.",
    tip: "Connects to merchant rails or banks.",
    image: "/images/steps/disbursement.jpg",
  },
];

const cryptoSteps = [
  {
    title: "VAS Onboarding",
    description: "Register via regulated VAS entity in Nigeria or FinCEN in the US.",
    tip: "We check FinCEN, OFAC compliance.",
    image: "/images/steps/onboarding.jpg",
  },
  {
    title: "Wallet Generation",
    description: "Auto-generated custodial and non-custodial wallets.",
    tip: "Supports BTC, ETH, USDT, etc.",
    image: "/images/steps/wallet.jpg",
  },
  {
    title: "Crypto Funding",
    description: "Fund with stable-coins or native crypto assets.",
    tip: "TRC20, ERC20, and native chains supported.",
    image: "/images/steps/funding.jpg",
  },
  {
    title: "Conversion",
    description: "Instant conversion to fiat at best rates.",
    tip: "Uses CEX/OTC integrations.",
    image: "/images/steps/conversion.jpg",
  },
  {
    title: "Fiat Payout",
    description: "Disburse to bank accounts, cards, or mobile money.",
    tip: "Same-day payouts available.",
    image: "/images/steps/disbursement.jpg",
  },
];

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState<"fiat" | "crypto">("fiat");
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const steps = activeTab === "fiat" ? fiatSteps : cryptoSteps;
  const currentStep = steps[activeStepIndex];

  return (
    <section className="py-20 px-4 md:px-10 lg:px-20 bg-midnight text-white relative z-10">
      {/* 🔹 Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">How It Works</h2>
        <p className="text-muted max-w-2xl mx-auto">
          Choose your path: Fiat Remittance or Crypto On-Ramp. Cignum handles the heavy lifting.
        </p>
      </div>

      {/* 🔹 Tab Selector */}
      <div className="flex justify-center mb-8 bg-midnight2 rounded-full max-w-fit mx-auto p-2 border border-white/10">
        <button
          onClick={() => {
            setActiveTab("fiat");
            setActiveStepIndex(0);
          }}
          className={`px-6 py-2 rounded-full transition font-medium ${
            activeTab === "fiat"
              ? "bg-yellow-400 text-black shadow-sm"
              : "text-muted hover:text-white"
          }`}
        >
          Fiat Remittance
        </button>
        <button
          onClick={() => {
            setActiveTab("crypto");
            setActiveStepIndex(0);
          }}
          className={`px-6 py-2 rounded-full transition font-medium ${
            activeTab === "crypto"
              ? "bg-yellow-400 text-black shadow-sm"
              : "text-muted hover:text-white"
          }`}
        >
          Crypto On-Ramp
        </button>
      </div>

      {/* 🔹 Step Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {steps.map((step, i) => (
          <button
            key={i}
            onClick={() => setActiveStepIndex(i)}
            className={`px-4 py-2 text-sm rounded-lg border transition duration-200 ${
              i === activeStepIndex
                ? "bg-yellow-400 text-black border-yellow-400 shadow"
                : "text-muted border-white/10 hover:border-white/30 hover:text-white"
            }`}
          >
            {step.title}
          </button>
        ))}
      </div>

      {/* 🔹 Animated Step Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStepIndex}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-midnight2 rounded-xl border border-white/10 p-6 flex flex-col md:flex-row items-center gap-8 shadow-md"
        >
          <Image
            src={currentStep.image}
            alt={currentStep.title}
            width={240}
            height={240}
            className="w-[240px] h-auto object-contain"
          />
          <div className="text-left">
            <h3 className="text-2xl font-bold mb-2">{currentStep.title}</h3>
            <p className="text-muted mb-2">{currentStep.description}</p>
            <span className="text-sm text-yellow-400">{currentStep.tip}</span>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* 🔹 Compliance Flow Section */}
      <div className="mt-24 border-t border-white/10 pt-12 text-center">
<div className="border border-[#1B254B] bg-[#121E36] p-4 rounded-lg">
        <h3 className="text-2xl font-bold mb-4">Compliance Flow</h3>
        <p className="text-muted mb-8">
          See how KYC, monitoring, and audit trail flows connect to each step.
        </p>
        <div className="w-full max-w-4xl mx-auto bg-midnight2 rounded-xl border border-white/10 p-8">
          <Image
            src="/images/compliance.jpg"
            alt="Compliance Flow"
            width={800}
            height={600}
            className="mx-auto w-full max-w-3xl opacity-80"
          />
        </div>
      </div>
      </div>
    </section>
  );
}
