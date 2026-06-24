'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { galleryItems } from '@/content/gallery';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function GalleryPreview() {
  // Show 4 preview items on home page
  const previewItems = galleryItems.slice(0, 4);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, rotate: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const }
    }
  };

  // Polaroid title mappings
  const getCaption = (id: string) => {
    const captions: Record<string, string> = {
      'gal-1': 'Chicken Dum Biryani',
      'gal-2': 'Tandoori Platter',
      'gal-3': 'Crispy Chicken 65',
      'gal-4': 'Luxury Interior',
      'gal-5': 'Nizami Seating',
      'gal-6': 'Royal Buffet Setup',
      'gal-7': 'Wedding Catering',
      'gal-8': 'Double Ka Meetha',
      'gal-9': 'Qubani Ka Meetha'
    };
    return captions[id] || 'Classic Flavor';
  };

  // Alternating tilt angles for Polaroid cards
  const rotations = [
    'sm:rotate-[-3deg]',
    'sm:rotate-[2deg]',
    'sm:rotate-[-1.5deg]',
    'sm:rotate-[3deg]',
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-primary-black via-deep-maroon/20 to-primary-black relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-islamic-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Customized Header following mockup */}
        <div className="mb-16 flex flex-col items-center text-center">
          {/* Outline Pill Badge */}
          <span className="mb-6 inline-block font-plus-jakarta text-xs font-semibold tracking-widest text-cream uppercase border border-cream/35 px-4 py-1.5 rounded-full bg-deep-maroon/20 backdrop-blur-sm">
            A Feast for the Eyes
          </span>
          
          {/* Main heading - forced to one line on larger screens */}
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-ivory leading-tight">
            Taste the vibes through our gallery
          </h2>
          
          {/* Description Subtitle */}
          <p className="mt-4 font-plus-jakarta text-sm md:text-base text-zinc-300 max-w-xl">
            Discover our signature dishes, catering events, and warm hospitality
          </p>

          {/* Royal Gold Divider */}
          <div className="mt-6 flex items-center gap-3 justify-center">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-royal-gold/60" />
            <div className="w-1.5 h-1.5 rotate-45 bg-royal-gold" />
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-royal-gold/60" />
          </div>
        </div>

        {/* Polaroid Showcase Grid (4 columns on large screens) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16"
        >
          {previewItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className={`group flex flex-col bg-cream p-4 pb-8 rounded-2xl border border-royal-gold/15 shadow-gold-glow cursor-pointer transition-all duration-300 hover:scale-105 hover:rotate-0 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(201,166,70,0.15)] ${rotations[index % rotations.length]}`}
            >
              {/* Image Frame */}
              <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-primary-black mb-4">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    unoptimized
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary-black to-primary-black" />
                )}
              </div>

              {/* Hand-written Polaroid Caption Style - set explicitly to pure black */}
              <h3 className="font-heading text-lg md:text-xl font-bold tracking-wide !text-black text-center mt-2 font-accent italic">
                {getCaption(item.id)}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        {/* View Gallery Page CTA */}
        <div className="flex justify-center">
          <Link
            href="/gallery"
            className="btn-royal-slide group gap-2 hover:scale-[1.02] transition-transform duration-300"
          >
            <span>View Full Photo Gallery</span>
            <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}

