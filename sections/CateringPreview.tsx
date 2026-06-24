'use client';

import React from 'react';
import { cateringIntro } from '@/content/catering';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function CateringPreview() {
  return (
    <section className="py-24 bg-secondary-black relative overflow-hidden bg-islamic-pattern">
      {/* Background Gold Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Text Content (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6 text-left">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full border border-royal-gold/30 text-royal-gold font-body text-xs font-semibold tracking-widest uppercase">
                Royal Catering
              </span>
            </div>
            
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-ivory leading-tight">
              Celebrate your moments! Royal catering setups designed for your special occasions
            </h2>
            
            <div className="pt-2">
              <Link
                href="/catering#inquiry-form"
                className="inline-flex items-center justify-center gap-2 font-body text-xs font-bold uppercase tracking-wider py-4 px-8 rounded-full bg-royal-gold text-primary-black hover:bg-light-gold transition-all duration-300 hover:scale-[1.02] shadow-gold-glow cursor-pointer"
              >
                <span>REQUEST CATERING QUOTE</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Right Column - Asymmetric Collage (7 Columns) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-4">
              {/* Left pane: Stack of 2 landscape images */}
              <div className="flex flex-col gap-4 justify-between">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-md group">
                  <Image
                    src="/images/catering/wedding-catering-manchester-nh.png"
                    alt="Wedding Catering Setup"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                </div>
                
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-md group">
                  <Image
                    src="/images/catering/corporate-catering-manchester-nh.png"
                    alt="Corporate Catering Banquet"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                </div>
              </div>

              {/* Right pane: 1 tall portrait image */}
              <div className="relative rounded-3xl overflow-hidden shadow-md group aspect-[3/4] md:aspect-auto md:h-full min-h-[300px]">
                <Image
                  src="/images/catering/birthday-catering-manchester-nh.webp"
                  alt="Royal Dining & Buffet Setup"
                  fill
                  sizes="(max-width: 1024px) 50vw, 35vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

