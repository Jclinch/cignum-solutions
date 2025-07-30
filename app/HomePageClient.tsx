"use client";
import Hero from '../components/Hero'
import CTA from '../components/CTA'
import SolutionsGrid from '@/components/SolutionsGrid';
import WhyChooseUs from '@/components/WhyChooseUs';

const solutions = [
  { title: "Infrastructure", description: "Scalable and secure server infrastructure.", iconKey: "cpu" },
  { title: "Compliance", description: "Stay ahead with up-to-date regulations.", iconKey: "shield" },
  { title: "Growth", description: "Tools to accelerate your business.", iconKey: "growth" },
  { title: "Global Reach", description: "Expand with our worldwide solutions.", iconKey: "globe" },
];

export default function HomePageClient() {
  const handleDemo = () => {/* open demo modal or route */}
  return (
    <main className="space-y-20">
      <Hero
        title="Simplifying Enterprise Connectivity"
        subtitle="Modern digital infrastructure and cloud integration for forward-thinking businesses"
        ctaPrimary={{ label: 'Get Started', onClick: () => console.log('Start') }}
        ctaSecondary={{ label: 'Learn More', onClick: () => console.log('Learn') }}
      />
      <SolutionsGrid
        heading="Our Solutions"
        subheading="Explore what we offer to help your business grow."
        solutions={solutions}
      />
      <CTA title="Ready to transform your payments?" action={handleDemo} />
      <WhyChooseUs />
    </main>
  );
}