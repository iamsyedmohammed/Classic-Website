'use client';

import React, { useRef, useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Award, ShieldCheck, Heart, ChefHat, Check, MapPin, Calendar, Star, Trophy } from 'lucide-react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

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

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <>
      <Navbar />

      {/* Spacer to push content below sticky navbar */}
      <div className="h-[90px] lg:h-[100px] bg-primary-black" />

      <main className="flex-1 bg-primary-black overflow-hidden text-ivory">

        {/* 1. Hero Section */}
        <section className="relative py-16 sm:py-24 bg-secondary-black overflow-hidden bg-islamic-pattern">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.04)_0%,transparent_80%)] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 md:px-8 text-center relative z-10">
            <span className="font-cormorant text-lg italic text-royal-gold uppercase tracking-widest block mb-2">
              Our Journey
            </span>
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide text-ivory">
              About Our Authentic Hyderabadi Restaurant in Manchester, NH
            </h1>
            <div className="mt-6 flex justify-center items-center gap-3">
              <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-royal-gold/60" />
              <div className="w-1.5 h-1.5 rotate-45 bg-royal-gold" />
              <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-royal-gold/60" />
            </div>
          </div>
        </section>

        {/* 2. Our Story Section */}
        <section className="py-20 max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Story Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 flex flex-col justify-center"
            >
              <span className="font-cormorant text-lg italic text-royal-gold uppercase tracking-wider mb-2">
                Who We Are
              </span>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-ivory mb-6 tracking-wide leading-tight">
                Our Story
              </h2>
              <p className="font-plus-jakarta text-base md:text-lg text-zinc-200 leading-relaxed mb-6 select-text">
                Since 2021, Classic Biryani Kabab & Curry has brought the authentic flavors of Hyderabad to Manchester, New Hampshire. As a family-owned Hand Zabiha Halal Indian restaurant, we serve authentic Hyderabadi Dum Biryani, kababs, Indian curries, and tandoori dishes prepared with premium ingredients, freshly ground spices, and traditional Dum Pukht cooking. Whether you visit for dine-in, takeout, delivery, lunch buffet, or catering, our goal is simple—serve authentic Indian food that feels like home.
              </p>
            </motion.div>

            {/* Story Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="relative w-full max-w-[440px] aspect-[4/3] rounded-3xl overflow-hidden border border-royal-gold/20 shadow-gold-glow">
                <Image
                  src="/images/gallery/restaurant-interior-manchester-nh.webp"
                  alt="Classic Biryani Dining Room interior"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  unoptimized
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="py-20 bg-secondary-black/20 border-t border-royal-gold/15 relative overflow-hidden">
          <div className="absolute inset-0 bg-islamic-pattern opacity-5 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

              {/* Left Column: Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-5 flex justify-center"
              >
                <div className="relative w-full max-w-[440px] aspect-[4/3] rounded-3xl overflow-hidden border border-royal-gold/20 shadow-gold-glow">
                  <Image
                    src="/images/about/biryani-mission-focus.png"
                    alt="Authentic Hyderabadi Biryani with focused target lighting"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    unoptimized
                  />
                </div>
              </motion.div>

              {/* Right Column: Mission Text */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-7 flex flex-col justify-center text-left"
              >
                <span className="font-cormorant text-lg italic text-royal-gold uppercase tracking-wider mb-2">
                  Our Purpose
                </span>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-ivory mb-6 tracking-wide leading-tight">
                  Our Mission
                </h2>
                <p className="font-plus-jakarta text-base md:text-lg text-zinc-200 leading-relaxed select-text">
                  Our mission is to preserve Hyderabad&apos;s rich culinary heritage by preparing authentic Indian cuisine with traditional recipes, premium ingredients, and genuine hospitality while creating memorable dining experiences for every guest.
                </p>
              </motion.div>

            </div>
          </div>
        </section>

        {/* 3. By the Numbers (Stats) Section */}
        <section className="py-16 bg-secondary-black relative overflow-hidden">
          <div className="absolute inset-0 bg-islamic-pattern opacity-5 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">

            <div className="mb-12 text-center">
              <h2 className="font-playfair text-2xl md:text-3xl font-bold text-royal-gold uppercase tracking-wider">
                Why Guests Keep Coming Back
              </h2>
              <div className="mt-4 flex justify-center items-center gap-3">
                <div className="h-[1px] w-12 bg-royal-gold/30" />
                <div className="w-1.5 h-1.5 rotate-45 bg-royal-gold/40" />
                <div className="h-[1px] w-12 bg-royal-gold/30" />
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Stat 1 */}
              <div className="p-6 bg-primary-black border border-royal-gold/15 rounded-3xl text-center shadow-gold-glow flex flex-col items-center justify-center">
                <div className="mb-4 text-royal-gold flex items-center justify-center w-12 h-12 rounded-full bg-secondary-black border border-royal-gold/10">
                  <Star className="w-6 h-6 stroke-[1.5] fill-current" />
                </div>
                <div className="font-playfair text-3xl md:text-4xl font-extrabold text-royal-gold mb-1">
                  <AnimatedCounter value={750} />+
                </div>
                <div className="font-plus-jakarta text-xs md:text-sm font-semibold tracking-wide text-zinc-300 uppercase">
                  Google Reviews
                </div>
              </div>

              {/* Stat 2 */}
              <div className="p-6 bg-primary-black border border-royal-gold/15 rounded-3xl text-center shadow-gold-glow flex flex-col items-center justify-center">
                <div className="mb-4 text-royal-gold flex items-center justify-center w-12 h-12 rounded-full bg-secondary-black border border-royal-gold/10">
                  {/* Inline Masjid Icon */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
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
                </div>
                <div className="font-playfair text-3xl md:text-4xl font-extrabold text-royal-gold mb-1">
                  <AnimatedCounter value={100} />%
                </div>
                <div className="font-plus-jakarta text-xs md:text-sm font-semibold tracking-wide text-zinc-300 uppercase">
                  Halal Certified
                </div>
              </div>

              {/* Stat 3 */}
              <div className="p-6 bg-primary-black border border-royal-gold/15 rounded-3xl text-center shadow-gold-glow flex flex-col items-center justify-center">
                <div className="mb-4 text-royal-gold flex items-center justify-center w-12 h-12 rounded-full bg-secondary-black border border-royal-gold/10">
                  <Trophy className="w-6 h-6 stroke-[1.5]" />
                </div>
                <div className="font-playfair text-3xl md:text-4xl font-extrabold text-royal-gold mb-1">
                  <AnimatedCounter value={5} />+
                </div>
                <div className="font-plus-jakarta text-xs md:text-sm font-semibold tracking-wide text-zinc-300 uppercase">
                  Years Serving Manchester
                </div>
              </div>

              {/* Stat 4 */}
              <div className="p-6 bg-primary-black border border-royal-gold/15 rounded-3xl text-center shadow-gold-glow flex flex-col items-center justify-center">
                <div className="mb-4 text-royal-gold flex items-center justify-center w-12 h-12 rounded-full bg-secondary-black border border-royal-gold/10">
                  <ChefHat className="w-6 h-6 stroke-[1.5]" />
                </div>
                <div className="font-playfair text-3xl md:text-4xl font-extrabold text-royal-gold mb-1">
                  <AnimatedCounter value={100} />%
                </div>
                <div className="font-plus-jakarta text-xs md:text-sm font-semibold tracking-wide text-zinc-300 uppercase">
                  Authentic Recipes
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 4. The Authentic Dum Experience Section */}
        <section className="py-20 max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center order-2 lg:order-1"
            >
              <div className="relative w-full max-w-[480px] aspect-[4/3] rounded-3xl overflow-hidden border border-royal-gold/20 shadow-gold-glow">
                <Image
                  src="/images/about/dum-cooking-method.webp"
                  alt="Sealed handi pot on Dum cooking process"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </motion.div>

            {/* Text Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col order-1 lg:order-2"
            >
              <span className="font-cormorant text-lg italic text-royal-gold uppercase tracking-wider mb-2">
                Our Cooking Craft
              </span>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-ivory mb-6 tracking-wide leading-tight">
                The Authentic Hyderabadi Dum Biryani Experience
              </h2>
              <p className="font-plus-jakarta text-base md:text-lg text-zinc-200 leading-relaxed select-text">
                Our Hyderabadi Dum Biryani is prepared using the traditional Dum Pukht technique, with premium meats, fragrant basmati rice, fresh herbs, and hand-ground spices slow-cooked in a sealed handi to deliver rich aromas, tender meat, and authentic royal flavors.
              </p>
            </motion.div>

          </div>
        </section>

        {/* 5. What Makes Us Different Section */}
        <section className="py-20 bg-secondary-black/30 relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="font-cormorant text-lg italic text-royal-gold uppercase tracking-wider mb-2 block">
                Pure Dedication
              </span>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-ivory mb-6 tracking-wide">
                What Sets Us Apart
              </h2>
              <p className="font-plus-jakarta text-base md:text-lg text-zinc-200 leading-relaxed max-w-5xl mx-auto select-text">
                Unlike many restaurants that prepare biryani in large batches, every handi at Classic Biryani Kabab & Curry is crafted using the traditional Dum method, allowing the flavors to develop naturally. Combined with premium ingredients, certified Halal meats, and genuine hospitality, we deliver an authentic Hyderabadi dining experience in every serving.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 6. Our Core Commitments Section */}
        <section className="py-20 max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="font-cormorant text-lg italic text-royal-gold uppercase tracking-wider mb-2 block">
              Our Pillars of Craft
            </span>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold tracking-wide text-ivory">
              Our Core Commitments
            </h2>
            <div className="mt-4 flex justify-center items-center gap-3">
              <div className="h-[1px] w-12 bg-royal-gold/30" />
              <div className="w-1.5 h-1.5 rotate-45 bg-royal-gold/45" />
              <div className="h-[1px] w-12 bg-royal-gold/30" />
            </div>
          </div>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 }
              }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: ShieldCheck,
                title: '100% Halal Quality',

              },
              {
                icon: ChefHat,
                title: 'Freshly Ground Spices',

              },
              {
                icon: Heart,
                title: 'True Indian Hospitality',

              }
            ].map((commit, idx) => {
              const Icon = commit.icon;
              return (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
                  }}
                  className="group relative flex flex-col items-center text-center p-8 bg-secondary-black/40 backdrop-blur-md border border-royal-gold/10 hover:border-royal-gold/35 rounded-3xl transition-all duration-500 hover:-translate-y-2 shadow-gold-glow overflow-hidden"
                >
                  {/* Subtle Background Glow on Hover */}
                  <div className="absolute -inset-y-12 -inset-x-12 bg-gradient-to-r from-royal-gold/0 via-royal-gold/3 to-royal-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  {/* Corner Accent Brackets */}
                  <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-royal-gold/20 group-hover:border-royal-gold/50 transition-colors duration-300" />
                  <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-royal-gold/20 group-hover:border-royal-gold/50 transition-colors duration-300" />
                  <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-royal-gold/20 group-hover:border-royal-gold/50 transition-colors duration-300" />
                  <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-royal-gold/20 group-hover:border-royal-gold/50 transition-colors duration-300" />

                  <div className="p-4 bg-royal-gold/10 text-royal-gold rounded-full mb-6 group-hover:bg-royal-gold/25 group-hover:scale-110 transition-all duration-300 border border-royal-gold/10 shadow-gold-glow">
                    <Icon size={28} className="stroke-[1.5]" />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-ivory mb-0 tracking-wide">
                    {commit.title}
                  </h3>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* 7. Why People Choose You Section */}
        <section className="py-20 bg-secondary-black/20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

              {/* Text / Badge Block */}
              <div className="lg:col-span-5 flex flex-col justify-center text-left">
                <span className="font-cormorant text-lg italic text-royal-gold uppercase tracking-wider mb-2">
                  Best Choice
                </span>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-ivory mb-6 tracking-wide leading-tight">
                  Why Choose Classic Biryani?
                </h2>
                <div className="w-20 h-1 bg-royal-gold rounded-full mb-6" />
                <p className="font-plus-jakarta text-sm text-zinc-400 leading-relaxed">
                  We are dedicated to providing the community of Manchester, NH with the ultimate culinary standards in Indian and Nizami cuisine.
                </p>
              </div>

              {/* Checklist Block */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  'Authentic Hyderabadi Dum Biryani',
                  'Premium Long-Grain Basmati Rice',
                  'Fresh Ingredients Every Day',
                  'Family-Friendly Dining',
                  'Catering for Weddings & Events',
                  'Convenient Takeout & Delivery'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-secondary-black/40 border border-royal-gold/10 hover:border-royal-gold/30 rounded-2xl transition-all duration-300">
                    <div className="w-6 h-6 rounded-full bg-royal-gold/15 text-royal-gold flex items-center justify-center shrink-0">
                      <Check size={14} className="stroke-[2.5]" />
                    </div>
                    <span className="font-plus-jakarta text-sm md:text-base font-medium text-zinc-200">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* 8. Our Journey (Timeline) Section */}
        <section className="py-20 max-w-4xl mx-auto px-6 md:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="font-cormorant text-lg italic text-royal-gold uppercase tracking-wider mb-2 block">
              Timeline
            </span>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold tracking-wide text-ivory">
              Our Journey
            </h2>
            <div className="mt-4 flex justify-center items-center gap-3">
              <div className="h-[1px] w-12 bg-royal-gold/30" />
              <div className="w-1.5 h-1.5 rotate-45 bg-royal-gold/40" />
              <div className="h-[1px] w-12 bg-royal-gold/30" />
            </div>
          </div>

          <div className="flex flex-col gap-6 relative before:absolute before:left-6 sm:before:left-1/2 before:top-2 before:bottom-2 before:w-[2px] before:bg-royal-gold/20">
            {/* Event 1 */}
            <div className="flex flex-col sm:flex-row items-start sm:justify-between relative">
              <div className="absolute left-6 sm:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-royal-gold border-4 border-primary-black z-10 mt-1.5" />
              <div className="pl-12 sm:pl-0 sm:w-[45%] flex flex-col items-start sm:items-end sm:text-right">
                <span className="font-playfair text-2xl font-black text-royal-gold mb-1">2021</span>
                <h4 className="font-playfair text-lg font-bold text-ivory mb-2 flex items-center gap-2 sm:justify-end">
                  <MapPin size={18} className="text-royal-gold shrink-0" />
                  <span>Opened in Manchester, NH</span>
                </h4>
                <p className="font-plus-jakarta text-sm text-zinc-300 leading-relaxed">
                  Established our presence on South Main Street, bringing original dum methods to local food lovers.
                </p>
              </div>
              <div className="hidden sm:block sm:w-[45%]" />
            </div>

            {/* Event 2 */}
            <div className="flex flex-col sm:flex-row items-start sm:justify-between relative">
              <div className="absolute left-6 sm:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-royal-gold border-4 border-primary-black z-10 mt-1.5" />
              <div className="hidden sm:block sm:w-[45%]" />
              <div className="pl-12 sm:pl-12 sm:w-[45%] flex flex-col items-start text-left">
                <span className="font-playfair text-2xl font-black text-royal-gold mb-1">2023</span>
                <h4 className="font-playfair text-lg font-bold text-ivory mb-2 flex items-center gap-2">
                  <Star size={18} className="text-royal-gold shrink-0 fill-current" />
                  <span>Halal Quality Recognition</span>
                </h4>
                <p className="font-plus-jakarta text-sm text-zinc-300 leading-relaxed">
                  Became widely recognized as one of the area&apos;s top-rated authentic Halal Indian restaurants.
                </p>
              </div>
            </div>

            {/* Event 3 */}
            <div className="flex flex-col sm:flex-row items-start sm:justify-between relative">
              <div className="absolute left-6 sm:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-royal-gold border-4 border-primary-black z-10 mt-1.5" />
              <div className="pl-12 sm:pl-0 sm:w-[45%] flex flex-col items-start sm:items-end sm:text-right">
                <span className="font-playfair text-2xl font-black text-royal-gold mb-1">2026</span>
                <h4 className="font-playfair text-lg font-bold text-ivory mb-2 flex items-center gap-2 sm:justify-end">
                  <Award size={18} className="text-royal-gold shrink-0" />
                  <span>Expanding Our Reach</span>
                </h4>
                <p className="font-plus-jakarta text-sm text-zinc-300 leading-relaxed">
                  Reached over 750+ Google Reviews with an growing community of loyal guests and event organizers.
                </p>
              </div>
              <div className="hidden sm:block sm:w-[45%]" />
            </div>
          </div>
        </section>

        {/* 9. Customer Reviews Section */}
        <section className="py-20 bg-secondary-black/40 relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-6 md:px-8 relative z-10">
            <div className="text-center mb-16">
              <span className="font-cormorant text-lg italic text-royal-gold uppercase tracking-wider mb-2 block">
                Loved by the Manchester Community
              </span>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold tracking-wide text-ivory">
                What Guests Say
              </h2>
              <div className="mt-4 flex justify-center items-center gap-3">
                <div className="h-[1px] w-12 bg-royal-gold/30" />
                <div className="w-1.5 h-1.5 rotate-45 bg-royal-gold/40" />
                <div className="h-[1px] w-12 bg-royal-gold/30" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  stars: 5,
                  text: 'The closest biryani to what we had in Hyderabad.',
                  author: 'Verified Google Reviewer'
                },
                {
                  stars: 5,
                  text: 'The goat biryani is incredible. Amazing service.',
                  author: 'Local Manchester Guest'
                },
                {
                  stars: 5,
                  text: 'Our catering order for 100 guests was perfect.',
                  author: 'Corporate Event Client'
                }
              ].map((rev, idx) => (
                <div key={idx} className="p-8 bg-primary-black border border-royal-gold/15 rounded-3xl shadow-gold-glow flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300">
                  <div>
                    {/* Golden Stars */}
                    <div className="flex gap-1 text-royal-gold mb-4">
                      {Array.from({ length: rev.stars }).map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" className="stroke-[1.5]" />
                      ))}
                    </div>
                    <p className="font-cormorant text-lg md:text-xl italic text-ivory/95 leading-relaxed select-text">
                      &ldquo;{rev.text}&rdquo;
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-royal-gold/10 font-plus-jakarta text-xs text-royal-gold/80 font-bold uppercase tracking-wider">
                    {rev.author}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. Final CTA Section */}
        <section className="py-24 text-center relative overflow-hidden bg-gradient-to-b from-primary-black to-secondary-black">
          <div className="absolute inset-0 bg-islamic-pattern opacity-5 pointer-events-none" />
          <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col items-center">

            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-ivory mb-6 leading-tight">
              Experience Authentic Hyderabadi Flavors
            </h2>

            <p className="font-plus-jakarta text-base md:text-lg text-zinc-300 leading-relaxed mb-10 max-w-5xl mx-auto select-text">
              Whether you&apos;re craving our famous Dum Biryani, planning a family dinner, or organizing a special event, we&apos;re ready to serve you with authentic flavors and warm hospitality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
              <Link
                href="/menu"
                className="font-plus-jakarta text-xs font-bold uppercase tracking-wider py-4 px-8 rounded-full bg-royal-gold text-primary-black hover:bg-light-gold transition-all duration-300 hover:scale-[1.03] shadow-gold-glow text-center"
              >
                Explore Our Menu
              </Link>

              <Link
                href="/catering"
                className="font-plus-jakarta text-xs font-bold uppercase tracking-wider py-4 px-8 rounded-full border border-royal-gold text-royal-gold hover:bg-royal-gold/10 transition-all duration-300 text-center"
              >
                Request Catering
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
