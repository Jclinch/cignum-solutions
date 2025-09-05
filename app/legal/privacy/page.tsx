// import type { Metadata } from "next";
// import Image from "next/image";

// export const metadata: Metadata = {
//   title: "Privacy Policy | Cignum Solutions",
//   description:
//     "Read Cignum Solutions' Privacy Policy covering data collection, processing, and user rights.",
// };

// export default function PrivacyPolicyPage() {
//   return (
//     <div className="space-y-10">
//       <h1 className="text-4xl font-extrabold text-cyan-400">Privacy Policy </h1>

//       {/* 🔹 Text + Image Layout */}
//       <div className="flex flex-col md:flex-row items-center gap-10">
//         {/* Image Section */}
//         <div className="flex-1">
//           <Image
//             src="/images/policy.jpg"
//             alt="Privacy Policy"
//             width={600}
//             height={400}
//             className="rounded-lg shadow-lg border border-white/10 object-cover w-full"
//           />
//         </div>

//         {/* Text Section */}
//         <div className="flex-1 space-y-4">
//           <p className="text-neutral-300">
//             At Cignum Solutions, we value your privacy and are committed to
//             protecting your personal data. This Privacy Policy explains how we
//             collect, use, and safeguard information when you interact with our
//             services across Nigeria and the UK.
//           </p>
//           <p className="text-neutral-400">
//             Key topics include: data we collect, legal basis for processing,
//             international transfers, third-party service providers, and your
//             rights to access, rectify, or delete your data.
//           </p>
//         </div>

//         {/* PDF Download Button */}
//         <a
//           href="/legal-pdfs/privacy-policy.pdf"
//           download
//           className="inline-block px-6 py-3 bg-cyan-400 text-black font-semibold rounded-lg hover:bg-cyan-500 transition"
//         >
//           Download PDF
//         </a>
//       </div>
//     </div>
//   );
// }




import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Privacy Policy | Cignum Solutions",
  description:
    "Read Cignum Solutions' Privacy Policy covering data collection, processing, and user rights.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="space-y-10">
      <h1 className="text-4xl font-extrabold text-cyan-400">
        Privacy Policy
      </h1>

      {/* 🔹 Text + Image Layout */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Image Section */}
        <div className="flex-1">
          <Image
            src="/images/policy.jpg"
            alt="Privacy Policy"
            width={600}
            height={600}
            className="rounded-lg shadow-lg border border-white/10 object-cover w-full"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 space-y-4">
           <p className="text-neutral-300">
             At Cignum Solutions, we value your privacy and are committed to
             protecting your personal data. This Privacy Policy explains how we
             collect, use, and safeguard information when you interact with our
             services across Nigeria and the UK.
           </p>
           <p className="text-neutral-400">
             Key topics include: data we collect, legal basis for processing,
             international transfers, third-party service providers, and your
             rights to access, rectify, or delete your data.
           </p>

{/* PDF Download Button */}
          <a
            href="/legal-pdfs/privacy-policy.pdf"
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
