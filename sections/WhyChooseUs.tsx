'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { whyChooseUsItems } from '@/content/home';
import WhyChooseUsCard from '@/components/WhyChooseUsCard';
import SectionHeading from '@/components/SectionHeading';

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

  return (
    <section className="py-24 bg-primary-black relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-islamic-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <SectionHeading
          title="Why Manchester Prefers Us"
          subtitle="Delivering excellence in every dish"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {whyChooseUsItems.map((item) => (
            <motion.div key={item.id} variants={itemVariants} className="h-full">
              <WhyChooseUsCard
                iconName={item.iconName}
                title={item.title}
                description={item.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
