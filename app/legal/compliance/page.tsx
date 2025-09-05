import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Compliance & Licensing | Cignum Solutions",
  description:
    "View Cignum Solutions' compliance disclosures, including IMTO relationships and MSB permissions.",
};

export default function CompliancePage() {
  return (
    <div className="space-y-10">
      <h1 className="text-4xl font-extrabold text-cyan-400">
        Compliance & Licensing
      </h1>

      {/* 🔹 Text + Image Layout */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Image Section */}
        <div className="flex-1">
          <Image
            src="/images/compliance.jpg"
            alt="Compliance and Licensing"
            width={600}
            height={400}
            className="rounded-lg shadow-lg border border-white/10 object-cover w-full"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 space-y-4">
          <p className="text-neutral-300">
            Cignum Solutions operates within strict compliance frameworks in
            both Nigeria and the UK. We work with licensed IMTOs and banking
            partners to ensure secure money movement and adherence to anti-money
            laundering (AML) and Know Your Customer (KYC/KYB) obligations.
          </p>
          <p className="text-neutral-400">
            Disclosures include: IMTO partnerships, Payment Service Provider
            (PSP) relationships, Money Service Business (MSB) permissions via
            partners, and adherence to applicable Central Bank of Nigeria and UK
            Financial Conduct Authority regulations.
          </p>

          {/* PDF Download Button */}
          <a
            href="/legal-pdfs/compliance.pdf"
            download
            className="inline-block px-6 py-3 bg-cyan-400 text-black font-semibold rounded-lg hover:bg-cyan-500 transition"
          >
            Download PDF
          </a>
        </div>
      </div>
    </div>
  );
}
