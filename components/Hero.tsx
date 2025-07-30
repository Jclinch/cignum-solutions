'use client';

import React from 'react';
import { motion } from 'framer-motion';

function cn(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(' ');
}

type HeroProps = {
  title: string;
  subtitle: string;
  ctaPrimary: {
    label: string;
    onClick: () => void;
  };
  ctaSecondary?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  className = '',
}) => {
  return (
    <section
      className={cn(
        "relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--color-bg)] via-[var(--color-secondary)] to-[var(--color-bg)] text-[var(--color-text)] px-6 text-center",
        className
      )}
    >
      <motion.div
        className="max-w-4xl"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h1 className="text-4xl md:text-6xl font-bold mb-4 text-[var(--color-primary)] drop-shadow-lg" variants={fadeInUp}>
          {title}
        </motion.h1>
        <motion.p className="text-lg md:text-xl text-[var(--color-muted)] mb-8" variants={fadeInUp}>
          {subtitle}
        </motion.p>
        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={fadeInUp}>
          <button
            onClick={ctaPrimary.onClick}
            className="bg-[var(--color-primary)] text-[var(--color-secondary)] px-6 py-3 rounded-lg font-semibold hover:bg-[var(--color-accent)] transition shadow-lg"
          >
            {ctaPrimary.label}
          </button>
          {ctaSecondary && (
            <button
              onClick={ctaSecondary.onClick}
              className="border border-[var(--color-primary)] text-[var(--color-primary)] px-6 py-3 rounded-lg hover:bg-[var(--color-primary)] hover:text-[var(--color-secondary)] transition"
            >
              {ctaSecondary.label}
            </button>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
