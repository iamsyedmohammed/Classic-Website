'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import CateringCard from '@/components/CateringCard';
import FAQAccordion from '@/components/FAQAccordion';
import CateringForm from '@/components/CateringForm';
import { cateringOccasions, cateringPackages, cateringFAQs } from '@/content/catering';
import { Phone, Users, Calendar, Award, Star, Trophy, Check, ArrowRight, ShieldCheck, Soup, CookingPot } from 'lucide-react';
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

export default function CateringPage() {
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
              Mehmaan Nawazi
            </span>
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide text-ivory">
              Royal Catering Services
            </h1>
            <p className="font-plus-jakarta text-base md:text-lg text-zinc-300 mt-4 max-w-xl mx-auto leading-relaxed">
              Bringing{' '}
              <Link href="/menu" className="text-royal-gold hover:underline font-semibold">
                Hyderabad&apos;s rich culinary heritage
              </Link>{' '}
              and premium banquet hospitality to your events across New Hampshire.
            </p>
          </div>
        </section>

        {/* 2. Trust Statistics Bar */}
        <section className="py-12 bg-primary-black border-y border-royal-gold/15 relative">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center mb-8">
              <span className="font-plus-jakarta text-xs font-bold uppercase tracking-widest text-royal-gold/80 block">
                Trusted Catering Across Manchester
              </span>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Stat 1 */}
              <div className="flex flex-col items-center justify-center p-4 bg-secondary-black/20 rounded-2xl border border-royal-gold/5">
                <div className="flex items-center gap-2 mb-1">
                  <Star className="w-5 h-5 text-royal-gold fill-current" />
                  <span className="font-playfair text-2xl md:text-3xl font-extrabold text-royal-gold">
                    <AnimatedCounter value={750} />+
                  </span>
                </div>
                <span className="font-plus-jakarta text-xs font-semibold text-zinc-300 uppercase tracking-wider text-center">
                  Google Reviews
                </span>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col items-center justify-center p-4 bg-secondary-black/20 rounded-2xl border border-royal-gold/5">
                <div className="flex items-center gap-2 mb-1">
                  <Trophy className="w-5 h-5 text-royal-gold" />
                  <span className="font-playfair text-2xl md:text-3xl font-extrabold text-royal-gold">
                    <AnimatedCounter value={5} />+
                  </span>
                </div>
                <span className="font-plus-jakarta text-xs font-semibold text-zinc-300 uppercase tracking-wider text-center">
                  Years of Excellence
                </span>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col items-center justify-center p-4 bg-secondary-black/20 rounded-2xl border border-royal-gold/5">
                <div className="flex items-center gap-2 mb-1">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-royal-gold">
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
                  <span className="font-playfair text-2xl md:text-3xl font-extrabold text-royal-gold">
                    <AnimatedCounter value={100} />%
                  </span>
                </div>
                <span className="font-plus-jakarta text-xs font-semibold text-zinc-300 uppercase tracking-wider text-center">
                  Halal Cuisine
                </span>
              </div>

              {/* Stat 4 */}
              <div className="flex flex-col items-center justify-center p-4 bg-secondary-black/20 rounded-2xl border border-royal-gold/5">
                <div className="flex items-center gap-2 mb-1">
                  <Users className="w-5 h-5 text-royal-gold" />
                  <span className="font-playfair text-2xl md:text-3xl font-extrabold text-royal-gold">
                    <AnimatedCounter value={500} />+
                  </span>
                </div>
                <span className="font-plus-jakarta text-xs font-semibold text-zinc-300 uppercase tracking-wider text-center">
                  Events of Every Size
                </span>
              </div>

            </div>
          </div>
        </section>

        {/* 3. Why Choose Our Catering */}
        <section className="py-20 max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Intro */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <span className="font-cormorant text-lg italic text-royal-gold uppercase tracking-wider mb-2">
                Flawless Execution
              </span>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-ivory mb-6 tracking-wide leading-tight">
                Why Choose Classic Biryani Catering?
              </h2>
              <p className="font-plus-jakarta text-base md:text-lg text-zinc-300 leading-relaxed mb-6 select-text">
                From intimate family gatherings to grand wedding celebrations, we bring the{' '}
                <Link href="/menu" className="text-royal-gold hover:underline font-semibold">
                  authentic flavors of Hyderabad
                </Link>{' '}
                together with professional service and elegant presentation. Every event is planned with care to ensure your guests enjoy fresh, flavorful food delivered on time.
              </p>
              <div className="w-24 h-[1px] bg-royal-gold/40 my-2" />
              <p className="font-plus-jakarta text-sm text-zinc-400">
                Let us handle the culinary logistics while you focus on hosting your guests and creating beautiful memories.
              </p>
            </div>

            {/* Right Column: Expectations Checklist */}
            <div className="lg:col-span-7 bg-secondary-black/40 border border-royal-gold/15 p-8 md:p-10 rounded-3xl shadow-gold-glow">
              <h3 className="font-playfair text-xl font-bold text-royal-gold mb-6 border-b border-royal-gold/10 pb-4">
                What You Can Expect
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  'Freshly Prepared on the Day of Your Event',
                  'Authentic Hyderabadi Dum Biryani',
                  '100% Halal Ingredients',
                  'Professional Buffet Presentation',
                  'Flexible Menu Customization',
                  'Reliable Delivery & Setup',
                  'Vegetarian & Vegan Options',
                  'Friendly, Experienced Team'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-royal-gold/10 text-royal-gold flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} className="stroke-[3]" />
                    </div>
                    <span className="font-plus-jakarta text-sm md:text-base text-zinc-200 font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* 4. Occasions We Cater */}
        <section className="py-20 bg-secondary-black/25 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
            <SectionHeading
              title="Occasions We Cater"
              subtitle="Exceptional hospitality and presentation for your landmark celebrations"
            />

            <div className="flex flex-col gap-10">
              {cateringOccasions.map((occasion, idx) => (
                <CateringCard key={occasion.id} occasion={occasion} index={idx} />
              ))}
            </div>
          </div>
        </section>

        {/* 5. Catering Process (4 Steps) */}
        <section className="py-20 max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="font-cormorant text-lg italic text-royal-gold uppercase tracking-wider mb-2 block">
              Our Process
            </span>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold tracking-wide text-ivory">
              How Our Catering Works
            </h2>
            <div className="mt-4 flex justify-center items-center gap-3">
              <div className="h-[1px] w-12 bg-royal-gold/30" />
              <div className="w-1.5 h-1.5 rotate-45 bg-royal-gold/40" />
              <div className="h-[1px] w-12 bg-royal-gold/30" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {[
              {
                num: '1',
                title: 'Request a Quote',
                desc: 'Tell us about your event, guest count, and preferred menu.'
              },
              {
                num: '2',
                title: 'Customize Your Menu',
                desc: 'Choose from our catering packages or create a custom menu.'
              },
              {
                num: '3',
                title: 'We Prepare Fresh',
                desc: 'Our chefs cook every dish using premium ingredients and traditional recipes.'
              },
              {
                num: '4',
                title: 'Enjoy Your Event',
                desc: 'We\'ll deliver, set up, and ensure your guests enjoy a memorable dining experience.'
              }
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-6 bg-secondary-black/40 border border-royal-gold/10 hover:border-royal-gold/30 rounded-3xl transition-all duration-300 relative shadow-gold-glow">
                <div className="w-12 h-12 rounded-full bg-royal-gold text-primary-black font-playfair text-xl font-bold flex items-center justify-center mb-4 shadow-gold-glow">
                  {step.num}
                </div>
                <h3 className="font-playfair text-lg font-bold text-royal-gold mb-2">{step.title}</h3>
                <p className="font-plus-jakarta text-sm text-zinc-300 leading-relaxed select-text">{step.desc}</p>
                
                {idx < 3 && (
                  <div className="hidden md:block absolute top-12 -right-4 transform translate-x-1/2 z-20 text-royal-gold/40">
                    <ArrowRight size={20} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 6. Catering Packages */}
        <section className="py-20 bg-secondary-black/50 relative overflow-hidden border-t border-royal-gold/15">
          <div className="absolute inset-0 bg-islamic-pattern opacity-5 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
            <SectionHeading
              title="Curated Catering Packages"
              subtitle="Designed to suit different tastes and gatherings with premium Nizami food"
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
              {cateringPackages.map((pack) => (
                <div
                  key={pack.id}
                  className="flex flex-col bg-primary-black border border-royal-gold/15 rounded-3xl p-8 shadow-gold-glow hover:border-royal-gold/30 transition-all duration-300 hover:scale-[1.01]"
                >
                  <h3 className="font-playfair text-xl font-bold text-royal-gold mb-1">
                    {pack.name}
                  </h3>
                  <span className="font-plus-jakarta text-lg font-bold text-royal-gold tracking-wide block mb-4 border-b border-royal-gold/10 pb-2">
                    {pack.price}
                  </span>
                  <p className="font-plus-jakarta text-base text-zinc-300 leading-relaxed mb-6">
                    {pack.description}
                  </p>

                  <ul className="flex-1 flex flex-col gap-3 font-plus-jakarta text-base text-zinc-200">
                    {pack.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rotate-45 bg-royal-gold shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Custom adaptations banner */}
            <div className="max-w-4xl mx-auto p-8 md:p-10 rounded-3xl border border-royal-gold/20 bg-secondary-black/60 backdrop-blur-md shadow-gold-glow flex flex-col md:flex-row gap-8 justify-between items-center text-center md:text-left hover:border-royal-gold/40 transition-colors duration-300">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-5">
                <div className="p-3.5 bg-royal-gold/10 text-royal-gold rounded-full border border-royal-gold/25 shrink-0">
                  <Award size={36} className="stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="font-playfair text-xl font-bold text-royal-gold tracking-wide mb-2">
                    Custom Menu Adaptations
                  </h4>
                  <p className="font-plus-jakarta text-base text-zinc-200 leading-relaxed max-w-xl">
                    Don&apos;t see exactly what you want? We can customize any package or introduce custom dishes from our full <Link href="/menu" className="text-royal-gold hover:underline font-bold">restaurant menu</Link> tailored to your guests&apos; requirements.
                  </p>
                </div>
              </div>
              <a
                href="tel:6035550199"
                className="shrink-0 font-plus-jakarta text-xs font-bold uppercase tracking-wider py-4 px-8 rounded-full bg-royal-gold text-primary-black hover:bg-light-gold transition-all duration-300 hover:scale-[1.02] shadow-gold-glow cursor-pointer"
              >
                Call to Discuss
              </a>
            </div>

          </div>
        </section>

        {/* 7. Food Gallery Section */}
        <section className="py-20 max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <SectionHeading
            title="Our Signature Dishes"
            subtitle="The culinary stars that guests rave about"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Goat Special Saffron Dum Biryani',
                img: '/images/menu/goat-biryani-manchester-nh.webp'
              },
              {
                title: 'Chicken Dum Biryani',
                img: '/images/menu/chicken-dum-biryani-manchester-nh.webp'
              },
              {
                title: 'Lamb Biryani',
                img: '/images/menu/lamb dun Biryani.jpg'
              },
              {
                title: 'Ghee Roast Goat Fry',
                img: '/images/menu/Ghee Roast Lamb Dry.jpeg'
              },
              {
                title: 'Chicken Lollipop',
                img: '/images/menu/Lollipop 6.jpeg'
              },
              {
                title: 'Beef Saag',
                img: '/images/menu/beef-saag.jpg'
              }
            ].map((dish, idx) => (
              <div key={idx} className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-royal-gold/15 shadow-gold-glow">
                <Image
                  src={dish.img}
                  alt={dish.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-black/90 via-transparent to-transparent flex items-end p-4">
                  <span className="font-playfair text-lg font-bold text-royal-gold">
                    {dish.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* 9. Social Proof (Testimonials) */}
        <section className="py-20 max-w-5xl mx-auto px-6 md:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="font-cormorant text-lg italic text-royal-gold uppercase tracking-wider mb-2 block">
              Testimonials
            </span>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold tracking-wide text-ivory">
              What Our Catering Clients Say
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
                text: 'Classic Biryani catered our wedding, and every guest loved the food. The biryani was authentic, the setup looked beautiful, and the service was outstanding.',
                author: 'Wedding Event Host'
              },
              {
                text: 'Professional, punctual, and delicious. Highly recommended for corporate events.',
                author: 'Corporate Office Client'
              },
              {
                text: 'The best Halal catering in Manchester.',
                author: 'Community Banquet Organizer'
              }
            ].map((test, idx) => (
              <div key={idx} className="p-8 bg-secondary-black/40 border border-royal-gold/15 rounded-3xl shadow-gold-glow flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300">
                <div>
                  <div className="flex gap-1 text-royal-gold mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" className="stroke-[1.5]" />
                    ))}
                  </div>
                  <p className="font-cormorant text-lg italic text-zinc-100 leading-relaxed select-text">
                    &ldquo;{test.text}&rdquo;
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-royal-gold/10 font-plus-jakarta text-xs text-royal-gold/80 font-bold uppercase tracking-wider">
                  {test.author}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 10. Quote Form & FAQs Section */}
        <section id="inquiry-form" className="py-20 max-w-7xl mx-auto px-6 md:px-8 relative z-10 scroll-mt-28 border-t border-royal-gold/15">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column: Form */}
            <div className="lg:col-span-7">
              <CateringForm />
            </div>

            {/* Right Column: FAQs */}
            <div className="lg:col-span-5">
              <h2 className="font-playfair text-2xl font-bold tracking-wide text-royal-gold mb-4 uppercase">
                Catering FAQs
              </h2>
              <p className="font-plus-jakarta text-base text-zinc-300 mb-8 leading-relaxed">
                Everything you need to know about booking catering services with Classic Biryani. For custom requirements, call our coordinator.
              </p>

              <div className="flex flex-col">
                {cateringFAQs.map((faq) => (
                  <FAQAccordion key={faq.id} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* 11. Final CTA Section */}
        <section className="py-24 text-center relative overflow-hidden bg-gradient-to-b from-primary-black to-secondary-black border-t border-royal-gold/15">
          <div className="absolute inset-0 bg-islamic-pattern opacity-5 pointer-events-none" />
          <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
            
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-ivory mb-6 leading-tight">
              Let&apos;s Make Your Event Unforgettable
            </h2>
            
            <p className="font-plus-jakarta text-base md:text-lg text-zinc-300 leading-relaxed mb-10 max-w-3xl mx-auto select-text">
              Whether you&apos;re hosting a wedding, Walima, birthday, Eid gathering, or corporate event, our team is ready to create an authentic Hyderabadi dining experience your guests will remember.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center items-center">
              <a
                href="#inquiry-form"
                className="w-full sm:w-auto font-plus-jakarta text-xs font-bold uppercase tracking-wider py-4 px-8 rounded-full bg-royal-gold text-primary-black hover:bg-light-gold transition-all duration-300 hover:scale-[1.03] shadow-gold-glow text-center"
              >
                Request a Free Quote
              </a>
              
              <a
                href="tel:6035550199"
                className="w-full sm:w-auto font-plus-jakarta text-xs font-bold uppercase tracking-wider py-4 px-8 rounded-full border border-royal-gold text-royal-gold hover:bg-royal-gold/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone size={14} />
                <span>Call Us Today</span>
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
