// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Terms of Service | Cignum Solutions",
//   description:
//     "Read the Terms of Service governing the use of Cignum Solutions' payments and treasury infrastructure.",
// };

// export default function TermsPage() {
//   return (
//     <div className="space-y-6">
//       <h1 className="text-4xl font-extrabold text-cyan-400">Terms of Service</h1>
//       <p className="text-neutral-300">
//         By accessing or using Cignum Solutions&aspos; services, you agree to these
//         Terms of Service. They outline user responsibilities, permitted uses,
//         restrictions, and liability limitations across our payments and treasury
//         infrastructure.
//       </p>
//       <p className="text-neutral-400">
//         Topics include: account registration, compliance obligations, use of
//         APIs, service availability, fees, liability, and dispute resolution.
//       </p>

//       {/* PDF Download Button */}
//       <a
//         href="/legal-pdfs/terms-of-service.pdf"
//         download
//         className="inline-block px-6 py-3 bg-cyan-400 text-black font-semibold rounded-lg hover:bg-cyan-500 transition"
//       >
//         Download PDF
//       </a>
//     </div>
//   );
// }




import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Terms of Service | Cignum Solutions",
  description:
    "Read the Terms of Service governing the use of Cignum Solutions' payments and treasury infrastructure.",
};

export default function TermsPage() {
  return (
    <div className="space-y-10">
      <h1 className="text-4xl font-extrabold text-cyan-400">
        Terms of Service
      </h1>

      {/* 🔹 Text + Image Layout */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Image Section */}
        <div className="flex-1">
          <Image
            src="/images/terms.jpg"
            alt="Terms of Service"
            width={600}
            height={400}
            className="rounded-lg shadow-lg border border-white/10 object-cover w-full"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 space-y-4">
           <p className="text-neutral-300">
           By accessing or using Cignum Solutions&apos; services, you agree to these
           Terms of Service. They outline user responsibilities, permitted uses,
           restrictions, and liability limitations across our payments and treasury
           infrastructure.
         </p>
         <p className="text-neutral-400">
           Topics include: account registration, compliance obligations, use of
           APIs, service availability, fees, liability, and dispute resolution.
         </p>

{/* PDF Download Button */}
          <a
            href="/legal-pdfs/terms-of-service.pdf"
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
