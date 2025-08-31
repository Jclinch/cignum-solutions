import type { Metadata } from "next";
import Script from "next/script";
import AboutClient from "./aboutClient";

// 🔹 SEO Metadata
export const metadata: Metadata = {
  title: "About Us | Cignum Solutions",
  description:
    "Cignum Solutions is a payments and treasury infrastructure provider operating across Nigeria and the UK. Learn about our mission, offices, and trusted banking partners.",
  openGraph: {
    title: "About Us | Cignum Solutions",
    description:
      "We help businesses collect, hold, convert, and disburse funds securely—while maintaining full compliance visibility.",
    url: "https://cignumsolutions.tech/company/about",
    images: ["/hero2.avif"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Cignum Solutions",
    description:
      "Discover how Cignum Solutions builds secure, compliant payments and treasury infrastructure across NG & UK.",
    images: ["/hero2.avif"],
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Cignum Solutions",
    url: "https://cignumsolutions.tech",
    logo: "https://cignumsolutions.tech/logo.png",
    description:
      "Cignum Solutions is a payments and treasury infrastructure provider operating across Nigeria and the UK.",
    foundingDate: "2023",
    headquarters: [
      {
        "@type": "Place",
        name: "Lagos Office",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Lagos",
          addressCountry: "NG",
        },
      },
      {
        "@type": "Place",
        name: "London Office",
        address: {
          "@type": "PostalAddress",
          addressLocality: "London",
          addressCountry: "UK",
        },
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "Partnerships",
        email: "partnerships@cignumsolutions.tech",
      },
    ],
    sameAs: [
      "https://linkedin.com/company/cignumsolutions",
      "https://twitter.com/cignumsolutions",
    ],
    bankingPartner: [
      "Providus Bank (NG)",
      "UK Partner Banks",
    ],
  };

  return (
    <>
      {/* Inject JSON-LD for SEO */}
      <Script
        id="cignum-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutClient />
    </>
  );
}
