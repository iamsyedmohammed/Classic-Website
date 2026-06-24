import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import Link from 'next/link';
import { Award, ShieldCheck, Heart, ChefHat } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: 'About Us | Classic Biryani Kabab & Curry',
  description: 'Learn about the culinary heritage, Dum cooking method, and the 100% Halal commitment that defines Classic Biryani Kabab & Curry in Manchester, NH.',
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      
      {/* Spacer to push content below sticky navbar */}
      <div className="h-[120px] bg-primary-black" />

      <main className="flex-1 bg-primary-black">
        {/* Banner Section */}
        <section className="relative py-20 bg-secondary-black overflow-hidden bg-islamic-pattern">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.03)_0%,transparent_80%)] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 md:px-8 text-center relative z-10">
            <span className="font-cormorant text-lg italic text-royal-gold uppercase tracking-widest block mb-2">Our Journey</span>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold tracking-wide text-ivory">
              A Legacy of Royal Flavors
            </h1>
            <div className="mt-4 flex justify-center items-center gap-3">
              <div className="h-[1px] w-12 bg-royal-gold/45" />
              <div className="w-1.5 h-1.5 rotate-45 bg-royal-gold" />
              <div className="h-[1px] w-12 bg-royal-gold/45" />
            </div>
          </div>
        </section>

        {/* Detailed Story Grid */}
        <section className="py-20 max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left text column */}
            <div className="flex flex-col">
              <h2 className="font-playfair text-2xl md:text-3xl font-bold text-royal-gold mb-6 tracking-wide">
                The Royal Art of Dum Cooking
              </h2>
              <p className="font-plus-jakarta text-base md:text-lg text-zinc-200 leading-relaxed mb-6">
                At Classic Biryani Kabab & Curry, we practice the centuries-old method of <strong>&ldquo;Dum Pukht&rdquo;</strong> (slow oven cooking), a technique perfected in the royal kitchens of the Nawabs and Nizams of Hyderabad.
              </p>
              <p className="font-plus-jakarta text-base md:text-lg text-zinc-200 leading-relaxed mb-6">
                Meats are marinated overnight in a blend of hand-selected spices, fresh yogurt, mint, and cilantro, then layered with partially cooked, premium long-grain Basmati rice. The handi (cooking vessel) is sealed tightly with fresh wheat dough to trap all steam, allowing the ingredients to cook slowly in their own juices.
              </p>
              <p className="font-plus-jakarta text-base md:text-lg text-zinc-200 leading-relaxed">
                When the seal is broken, the aromatic burst of cardamom, saffron, and slow-steamed meats fills the room, promising an authentic experience that mass-cooking methods simply cannot replicate.
              </p>
            </div>
            
            {/* Right Image column */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-[480px] aspect-[4/3] rounded-3xl overflow-hidden border border-royal-gold/20 shadow-gold-glow">
                <Image
                  src="/images/about/dum-cooking-method.webp"
                  alt="Traditional Dum Cooking in clay pot"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>

          {/* Pillars of our Kitchen */}
          <div className="py-12 border-t border-b border-royal-gold/15">
            <h2 className="text-center font-playfair text-xl md:text-2xl font-bold tracking-wide text-royal-gold mb-12">
              Our Core Commitments
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              
              {/* Pillar 1 */}
              <div className="flex flex-col items-center text-center p-6 bg-secondary-black/50 border border-royal-gold/10 rounded-2xl">
                <div className="p-3 bg-royal-gold/10 text-royal-gold rounded-full mb-4">
                  <ShieldCheck size={28} className="stroke-[1.5]" />
                </div>
                <h3 className="font-playfair text-lg font-bold text-ivory mb-2">100% Halal Food</h3>
                <p className="font-plus-jakarta text-base text-zinc-300 leading-relaxed">
                  We guarantee that all meats served are certified Halal and handled under strict dietary guidelines to assure peace of mind and supreme quality.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="flex flex-col items-center text-center p-6 bg-secondary-black/50 border border-royal-gold/10 rounded-2xl">
                <div className="p-3 bg-royal-gold/10 text-royal-gold rounded-full mb-4">
                  <ChefHat size={28} className="stroke-[1.5]" />
                </div>
                <h3 className="font-playfair text-lg font-bold text-ivory mb-2">Traditional Spicing</h3>
                <p className="font-plus-jakarta text-base text-zinc-300 leading-relaxed">
                  We roast and grind our signature spice blends daily in-house, retaining maximum aroma and medicinal benefits of traditional Indian spices.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="flex flex-col items-center text-center p-6 bg-secondary-black/50 border border-royal-gold/10 rounded-2xl">
                <div className="p-3 bg-royal-gold/10 text-royal-gold rounded-full mb-4">
                  <Heart size={28} className="stroke-[1.5]" />
                </div>
                <h3 className="font-playfair text-lg font-bold text-ivory mb-2">Mehmaan Nawazi</h3>
                <p className="font-plus-jakarta text-base text-zinc-300 leading-relaxed">
                  We treat every guest as a royalty. Our services are crafted to extend warmth, hospitality, and create unforgettable family celebrations.
                </p>
              </div>
              
            </div>
          </div>
        </section>

        {/* CTA to Explore Menu */}
        <section className="py-20 bg-secondary-black/50 text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto px-6 relative z-10 flex flex-col items-center">
            <h2 className="font-playfair text-2xl md:text-3xl font-bold tracking-wide text-ivory mb-4">
              Ready to Feast Like a King?
            </h2>
            <p className="font-plus-jakarta text-base text-zinc-300 leading-relaxed mb-8 max-w-xl">
              From our famous Hydrabadi Dum Biryani to sizzling clay oven Kababs and rich, slow-simmered curries. Discover your next favorite dish.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/menu"
                className="font-plus-jakarta text-xs font-bold uppercase tracking-wider py-4 px-8 rounded-full bg-royal-gold text-primary-black hover:bg-light-gold transition-all duration-300 hover:scale-[1.02] shadow-gold-glow"
              >
                View Our Menu
              </Link>
              <Link
                href="/catering"
                className="font-plus-jakarta text-xs font-bold uppercase tracking-wider py-4 px-8 rounded-full border border-royal-gold text-royal-gold hover:bg-royal-gold/10 transition-all duration-300"
              >
                Catering Quote
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
