'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { menuItems } from '@/content/menu';
import DishCard from '@/components/DishCard';
import SectionHeading from '@/components/SectionHeading';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function SignatureDishes() {
  // Select specific signature dishes or filter by popular
  const signatureDishes = menuItems.filter(item => item.popular).slice(0, 6);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const }
    }
  };

  return (
    <section className="py-24 bg-primary-black relative overflow-hidden">
      {/* Subtle Pattern Background */}
      <div className="absolute inset-0 bg-islamic-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <SectionHeading
          title="Our Signature Creations"
          subtitle="The Royal Dum cooking & grill specialties"
        />

        {/* Dishes Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {signatureDishes.map((dish) => (
            <motion.div key={dish.id} variants={itemVariants}>
              <DishCard item={dish} />
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <div className="flex justify-center">
          <Link
            href="/menu"
            className="btn-royal-slide group gap-2 hover:scale-[1.02] transition-transform duration-300"
          >
            <span>Explore Full Royal Menu</span>
            <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
