// "use client";

// import Hero from '../components/Hero'
// import CTA from '../components/CTA'
// import SolutionsGrid from '@/components/SolutionsGrid';
// import WhyChooseUs from '@/components/WhyChooseUs';
// import HowItWorks from '@/components/HowItWorks';
// import IndustriesGrid from '@/components/IndustriesGrid';
// import Testimonials from '@/components/Testimonials';

// const solutions = [
//   { title: "Infrastructure", description: "Scalable and secure server infrastructure.", iconKey: "cpu" },
//   { title: "Compliance", description: "Stay ahead with up-to-date regulations.", iconKey: "shield" },
//   { title: "Growth", description: "Tools to accelerate your business.", iconKey: "growth" },
//   { title: "Global Reach", description: "Expand with our worldwide solutions.", iconKey: "globe" },
// ];

// export default function HomePageClient() {
//   const handleDemo = () => {
//     console.log("Demo requested");
//   };

//   return (
//     <div className="relative min-h-screen bg-cover bg-center bg-no-repeat bg-[url('/images/home.png')]">
//       {/* ✅ Slight overlay for text readability */}
//       <div className="absolute inset-0 bg-black bg-opacity-40 z-0" />

//       <div className="relative z-10 px-4 md:px-10 lg:px-20 space-y-20 pt-6 pb-10">
//       <Hero
//         // title="Simplifying Enterprise Connectivity"
//         // subtitle="Modern digital infrastructure and cloud integration for forward-thinking businesses"
//         // ctaPrimary={{ label: 'Get Started', onClick: () => console.log('Start') }}
//         // ctaSecondary={{ label: 'Learn More', onClick: () => console.log('Learn') }}
//       />

//       <SolutionsGrid
//         heading="Our Solutions"
//         subheading="Explore what we offer to help your business grow."
//         solutions={solutions}
//       />

//       <HowItWorks />
//       <IndustriesGrid />
//       <Testimonials />
//       <CTA title="Ready to transform your payments?" action={handleDemo} />
//       <WhyChooseUs />
//       </div>
//     </div>
//   );
// }
