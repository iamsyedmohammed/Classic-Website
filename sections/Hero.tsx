'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { heroContent } from '@/content/home';
import { ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' as const }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: 'easeOut' as const }
    }
  };

  // Profile images for the avatar stack (Unsplash high-quality dining profiles)
  const avatars = [
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80'
  ];

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-primary-black py-28 lg:py-0">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-islamic-pattern opacity-12 pointer-events-none" />

      {/* Ambient gold glow behind content */}
      <div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] rounded-full bg-royal-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-royal-gold/5 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left Column: Copy copywriting details from design (DelishDrop-like layout) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Tagline */}
            <motion.span
              variants={fadeUp}
              className="font-cormorant text-lg md:text-xl text-royal-gold tracking-widest uppercase mb-4"
            >
              {/* The Royal Taste of Hyderabad */}
            </motion.span>

            {/* Main Title with Hyderabad Highlighted */}
            <motion.h1
              variants={fadeUp}
              className="font-playfair text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold tracking-wide text-ivory mb-6 leading-tight max-w-2xl"
            >
              Experience the <br /> Royal Taste of <br />
              <span className="text-royal-gold bg-gradient-to-r from-royal-gold to-light-gold bg-clip-text text-transparent">Hyderabad</span>
            </motion.h1>

            {/* Subtext description */}
            <motion.p
              variants={fadeUp}
              className="font-plus-jakarta text-zinc-300 text-base md:text-lg max-w-xl mb-8 leading-relaxed"
            >
              {heroContent.subtitle}
            </motion.p>

            {/* Action buttons side-by-side */}
            <motion.div
              variants={fadeUp}
              className="flex flex-row gap-4 items-center w-full sm:w-auto"
            >
              <a
                href={heroContent.primaryCTA.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-plus-jakarta text-xs font-bold uppercase tracking-wider py-4 px-8 rounded-full bg-royal-gold text-primary-black hover:bg-light-gold hover:scale-[1.03] transition-all duration-300 shadow-gold-glow cursor-pointer"
              >
                <span>{heroContent.primaryCTA.text}</span>
                <ArrowRight size={14} />
              </a>

              <Link
                href={heroContent.secondaryCTA.link}
                className="btn-royal-slide hover:scale-[1.03] transition-transform duration-300 text-center"
              >
                {heroContent.secondaryCTA.text}
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: Visual showpiece elements copying DelishDrop's wavy layout */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            className="lg:col-span-5 relative w-full flex justify-center items-center py-8"
          >
            {/* Main Showpiece Image in circular shape without motion */}
            <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[420px] md:h-[420px] shadow-gold-glow border-2 border-royal-gold/20 rounded-full overflow-hidden bg-secondary-black">
              <img
                src="/images/menu/chicken-dum-biryani-manchester-nh.webp"
                alt="Authentic Hyderabadi Chicken Dum Biryani"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Testimonial Quote Tooltip (floating above-left) */}


            {/* Smaller Secondary Accent Image (floating bottom-right) */}
            {/* <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute -bottom-6 -right-2 md:-right-8 z-20 w-28 h-28 border border-royal-gold/25 shadow-gold-glow wavy-organic-shape overflow-hidden bg-secondary-black hidden sm:block"
            >
              <img
                src="/images/gallery/tandoori-platter-manchester-nh.webp"
                alt="Succulent Tandoori Platter"
                className="w-full h-full object-cover"
              />
            </motion.div> */}

            {/* Customer Avatar Stack (floating bottom-left) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute -bottom-10 left-0 md:-left-8 z-20 bg-secondary-black p-4 rounded-2xl hidden md:flex flex-col gap-2"
            >
              {/* Avatar stack */}
              <div className="flex -space-x-3 overflow-hidden">
                {avatars.map((url, i) => (
                  <img
                    key={i}
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-secondary-black object-cover"
                    src={url}
                    alt="Happy Guest Profile"
                  />
                ))}
              </div>
              <div>
                <p className="font-plus-jakarta text-xs font-bold text-ivory">1,500+ Happy Guests</p>
                <div className="flex items-center gap-1 mt-0.5">
                  <Star size={10} fill="currentColor" className="text-royal-gold stroke-none" />
                  <span className="font-plus-jakarta text-[10px] text-zinc-400 font-semibold">4.9 Star Rating</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Floating Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden lg:flex">
        <span className="font-plus-jakarta text-[10px] uppercase tracking-widest text-ivory/60">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-ivory/30 flex justify-center p-1">
          <motion.div
            animate={{
              y: [0, 12, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="w-1.5 h-1.5 rounded-full bg-royal-gold"
          />
        </div>
      </div> */}
    </section>
  );
}
