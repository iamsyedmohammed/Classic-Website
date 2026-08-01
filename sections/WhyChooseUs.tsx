'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { whyChooseUsItems } from '@/content/home';
import WhyChooseUsCard from '@/components/WhyChooseUsCard';
import SectionHeading from '@/components/SectionHeading';
import { Star, Trophy, Calendar } from 'lucide-react';

const MasjidIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M6 18c0-3.5 2.5-6 6-6s6 2.5 6 6" />
    <path d="M10 18v-3c0-1.1.9-2 2-2s2 .9 2 2v3" />
    <path d="M12 12V9" />
    <path d="M11.5 7.5a1.5 1.5 0 1 1 1 1" />
    <path d="M3 18V8.5L4.5 7v11" />
    <path d="M4 7h1V5.5L4.5 4.5 4 5.5V7" />
    <path d="M21 18V8.5L19.5 7v11" />
    <path d="M20 7h-1V5.5l.5-1 1 .5V7" />
    <path d="M2 18h20" />
  </svg>
);

function AnimatedCounter({ value, duration = 2 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const startTime = performance.now();

    const updateCount = (now: number) => {
      const progress = Math.min((now - startTime) / (duration * 1000), 1);
      const easedProgress = progress * (2 - progress); // easeOutQuad
      setCount(Math.floor(easedProgress * (end - start) + start));

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const }
    }
  };

  const stats = [
    {
      icon: Star,
      value: 750,
      suffix: '+',
      label: 'Google Reviews'
    },
    {
      icon: Trophy,
      value: 5,
      suffix: '+',
      label: 'Years of Excellence'
    },
    {
      icon: MasjidIcon,
      value: 100,
      suffix: '%',
      label: 'Halal Certified'
    },
    {
      icon: Calendar,
      value: 6,
      suffix: '',
      label: 'Days a Week Open'
    }
  ];

  return (
    <section className="py-10 md:py-12 bg-primary-black relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-islamic-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <SectionHeading
          title="Why Manchester Prefers Us"
          subtitle="Delivering excellence in every dish"
        />

        {/* Stats Row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-0"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-6 bg-secondary-black/40 backdrop-blur-md border border-royal-gold/15 rounded-3xl text-center shadow-gold-glow flex flex-col items-center justify-center"
              >
                <div className="mb-4 text-royal-gold flex items-center justify-center w-12 h-12 rounded-full bg-primary-black border border-royal-gold/10">
                  <Icon className="w-6 h-6 stroke-[1.5]" />
                </div>
                <div className="font-playfair text-3xl md:text-4xl font-extrabold text-royal-gold mb-1">
                  <AnimatedCounter value={stat.value} />
                  {stat.suffix}
                </div>
                <div className="font-plus-jakarta text-xs md:text-sm font-semibold tracking-wide text-zinc-300 uppercase">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Localized SEO Highlights Row */}
        <div className="mt-12 flex flex-wrap justify-center gap-4 text-xs font-bold tracking-wide text-royal-gold/90 uppercase font-plus-jakarta">
          <span className="px-4 py-2.5 rounded-full bg-secondary-black/40 border border-royal-gold/15 shadow-gold-glow">Best Biryani in Manchester</span>
          <span className="px-4 py-2.5 rounded-full bg-secondary-black/40 border border-royal-gold/15 shadow-gold-glow">Authentic Hyderabadi Recipes</span>
          <span className="px-4 py-2.5 rounded-full bg-secondary-black/40 border border-royal-gold/15 shadow-gold-glow">Certified Halal</span>
          <span className="px-4 py-2.5 rounded-full bg-secondary-black/40 border border-royal-gold/15 shadow-gold-glow">Fresh Ingredients</span>
          <span className="px-4 py-2.5 rounded-full bg-secondary-black/40 border border-royal-gold/15 shadow-gold-glow">Indian Catering Experts</span>
        </div>
      </div>
    </section>
  );
}
