// components/SolutionsGrid.tsx
'use client';

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Cpu, ShieldCheck, TrendingUp, Globe } from "lucide-react";

type Solution = {
  title: string;
  description: string;
  iconKey: string;
};

const iconsMap: Record<string, JSX.Element> = {
  cpu: <Cpu className="w-6 h-6 text-[var(--color-primary)]" />,
  shield: <ShieldCheck className="w-6 h-6 text-[var(--color-primary)]" />,
  growth: <TrendingUp className="w-6 h-6 text-[var(--color-primary)]" />,
  globe: <Globe className="w-6 h-6 text-[var(--color-primary)]" />,
};

interface SolutionsGridProps {
  heading: string;
  subheading: string;
  solutions: Solution[];
}

export default function SolutionsGrid({
  heading,
  subheading,
  solutions,
}: SolutionsGridProps) {
  return (
    <section className="py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-[var(--color-primary)] drop-shadow">{heading}</h2>
        <p className="text-[var(--color-muted)] mt-2">{subheading}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {solutions.map((solution, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card className="p-4 bg-[var(--color-card-bg)] border border-[var(--color-border)] shadow-lg">
              <CardContent className="flex flex-col items-start gap-4">
                {iconsMap[solution.iconKey]}
                <h3 className="text-xl font-semibold text-[var(--color-primary)]">{solution.title}</h3>
                <p className="text-[var(--color-muted)] text-sm">
                  {solution.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
