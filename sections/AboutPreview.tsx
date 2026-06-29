'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { aboutPreviewContent } from '@/content/home';
import SectionHeading from '@/components/SectionHeading';
import Link from 'next/link';
import { ArrowRight, Award, Crown, Sparkles, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

export default function AboutPreview() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const }
    }
  };

  return (
    <section className="py-16 md:py-24 bg-secondary-black relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-islamic-pattern opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image — hidden on mobile, shown on lg+ */}
          <div className="lg:col-span-5 hidden lg:flex justify-center order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[320px] md:max-w-[400px] aspect-[3/4] nizami-arch-frame border-2 border-royal-gold/25 shadow-gold-glow overflow-hidden bg-primary-black"
            >
              {aboutPreviewContent.image ? (
                <Image
                  src={aboutPreviewContent.image}
                  alt="Classic Biryani Interior or Chef cooking Dum Biryani"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  unoptimized
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-b from-primary-black to-secondary-black text-center">
                  <Award size={48} className="text-royal-gold mb-4 stroke-[1.5]" />
                  <span className="font-playfair text-xl text-royal-gold font-bold">THE ROYAL NIZAMI TASTE</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-black/80 via-transparent to-transparent" />
            </motion.div>
          </div>

          {/* Right Column: Copywriting content */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              <motion.span
                variants={fadeUp}
                className="font-cormorant text-lg italic text-royal-gold tracking-widest uppercase mb-2 block"
              >
                {aboutPreviewContent.subtitle}
              </motion.span>

              <motion.h2
                variants={fadeUp}
                className="font-playfair text-3xl md:text-4xl font-bold tracking-wide text-ivory mb-6 leading-tight"
              >
                {aboutPreviewContent.title}
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="font-plus-jakarta text-base md:text-lg text-zinc-200 leading-relaxed mb-8"
              >
                {aboutPreviewContent.description}
              </motion.p>

              {/* Story Highlights */}
              <motion.div variants={fadeUp} className="flex flex-col gap-6 mb-8">
                {aboutPreviewContent.features.map((feature, idx) => {
                  const icons = [Crown, Sparkles, ShieldCheck];
                  const IconComponent = icons[idx] || Award;
                  
                  return (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full border border-royal-gold/20 bg-secondary-black text-royal-gold flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                        <IconComponent className="w-4 h-4 stroke-[1.8]" />
                      </div>
                      <div>
                        <h4 className="font-playfair text-base font-bold tracking-wider text-royal-gold uppercase mb-1">
                          {feature.title}
                        </h4>
                        <p className="font-plus-jakarta text-base text-zinc-300 leading-relaxed">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </motion.div>

              {/* View About CTA */}
              <motion.div variants={fadeUp}>
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 font-plus-jakarta text-xs font-bold uppercase tracking-wider py-4 px-8 rounded-full bg-royal-gold text-primary-black hover:bg-light-gold transition-all duration-300 hover:scale-[1.02] shadow-gold-glow"
                >
                  <span>Read Our Full Story</span>
                  <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
