// //app\contact\contactClientPage.tsx
// "use client";
// import { motion } from "framer-motion";
// import { FaEnvelope, FaHandshake, FaHeadset } from "react-icons/fa";

// export default function ContactClientPage() {
//   return (
//     <section className="px-6 md:px-16 lg:px-24 py-16">
//       {/* Contact Channels */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16 text-center">
//         <div className="flex flex-col items-center space-y-4">
//           <FaEnvelope className="text-cyan-400 text-5xl" />
//           <h3 className="text-xl font-semibold text-white">Sales</h3>
//           <p className="text-neutral-300">demo@cignumsolutions.net</p>
//         </div>
//         <div className="flex flex-col items-center space-y-4">
//           <FaHeadset className="text-cyan-400 text-5xl" />
//           <h3 className="text-xl font-semibold text-white">Support</h3>
//           <p className="text-neutral-300">support@cignumsolutions.net</p>
//         </div>
//         <div className="flex flex-col items-center space-y-4">
//           <FaHandshake className="text-cyan-400 text-5xl" />
//           <h3 className="text-xl font-semibold text-white">Partnerships</h3>
//           <p className="text-neutral-300">partners@cignumsolutions.net</p>
//         </div>
//       </div>

//       {/* Contact Form */}
//       <form className="bg-[#1E2A39] p-10 rounded-lg shadow-xl space-y-6 max-w-3xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <input
//             type="text"
//             placeholder="Name"
//             className="w-full px-4 py-3 rounded-md bg-[#0d1525] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
//           />
//           <input
//             type="text"
//             placeholder="Company"
//             className="w-full px-4 py-3 rounded-md bg-[#0d1525] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
//           />
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full px-4 py-3 rounded-md bg-[#0d1525] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
//           />
//           <input
//             type="text"
//             placeholder="Use Case"
//             className="w-full px-4 py-3 rounded-md bg-[#0d1525] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
//           />
//         </div>
//         <input
//           type="text"
//           placeholder="Volume"
//           className="w-full px-4 py-3 rounded-md bg-[#0d1525] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
//         />
//         <textarea
//           placeholder="Message"
//           rows={5}
//           className="w-full px-4 py-3 rounded-md bg-[#0d1525] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
//         ></textarea>

//         {/* CTA */}
//         <button
//           type="submit"
//           className="w-full md:w-auto px-8 py-3 text-lg bg-cyan-400 text-black rounded-lg shadow-lg hover:bg-cyan-500 transition"
//         >
//           Talk to Sales
//         </button>
//       </form>
//     </section>
//   );
// }



















"use client";

import { motion } from "framer-motion"; // ✅ use client-safe import
import { FaEnvelope, FaHandshake, FaHeadset } from "react-icons/fa";

export default function ContactClientPage() {
  return (
    <section className="px-6 md:px-16 lg:px-24 py-16">
      {/* Contact Channels */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center space-y-4"
        >
          <FaEnvelope className="text-cyan-400 text-5xl" />
          <h3 className="text-xl font-semibold text-white">Sales</h3>
          <p className="text-neutral-300">demo@cignumsolutions.net</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center space-y-4"
        >
          <FaHeadset className="text-cyan-400 text-5xl" />
          <h3 className="text-xl font-semibold text-white">Support</h3>
          <p className="text-neutral-300">support@cignumsolutions.net</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-center space-y-4"
        >
          <FaHandshake className="text-cyan-400 text-5xl" />
          <h3 className="text-xl font-semibold text-white">Partnerships</h3>
          <p className="text-neutral-300">partners@cignumsolutions.net</p>
        </motion.div>
      </div>

      {/* Contact Form */}
       <form className="bg-[#1E2A39] p-10 rounded-lg shadow-xl space-y-6 max-w-3xl mx-auto">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-3 rounded-md bg-[#0d1525] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <input
            type="text"
            placeholder="Company"
            className="w-full px-4 py-3 rounded-md bg-[#0d1525] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-md bg-[#0d1525] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <input
            type="text"
            placeholder="Use Case"
            className="w-full px-4 py-3 rounded-md bg-[#0d1525] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>
        <input
          type="text"
          placeholder="Volume"
          className="w-full px-4 py-3 rounded-md bg-[#0d1525] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
        <textarea
          placeholder="Message"
          rows={5}
          className="w-full px-4 py-3 rounded-md bg-[#0d1525] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        ></textarea>

        {/* CTA */}
        <button
          type="submit"
          className="w-full md:w-auto px-8 py-3 text-lg bg-cyan-400 text-black rounded-lg shadow-lg hover:bg-cyan-500 transition"
        >
          Talk to Sales
        </button>
      </form>
    </section>
  );
}