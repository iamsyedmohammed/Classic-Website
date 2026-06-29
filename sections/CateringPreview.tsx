'use client';

import React from 'react';
import { cateringIntro } from '@/content/catering';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function CateringPreview() {
  return (
    <section className="py-16 md:py-24 bg-secondary-black relative overflow-hidden bg-islamic-pattern">
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
              Celebrate Life&apos;s Special Moments with Royal Catering
            </h2>
            
            <p className="font-plus-jakarta text-zinc-300 text-sm md:text-base leading-relaxed select-text">
              We provide professional <strong>Indian catering in Manchester, NH</strong> and surrounding southern New Hampshire regions. Whether you need <strong>wedding catering</strong>, <strong>corporate catering</strong>, <strong>birthday catering</strong>, or <strong>Halal catering</strong>, we craft bespoke menus with authentic <strong>Hyderabadi catering</strong> packages and presentation setups.
            </p>
            
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

          {/* Right Column - Catering Images (7 Columns) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-md group">
                <Image
                  src="/images/catering/wedding-catering-manchester-nh.png"
                  alt="Wedding Catering Setup"
                  fill
                  sizes="(max-width: 1024px) 100vw, 35vw"
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
                  sizes="(max-width: 1024px) 100vw, 35vw"
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

