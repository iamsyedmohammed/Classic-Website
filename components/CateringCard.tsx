'use client';

import React from 'react';
import Image from 'next/image';
import { CateringOccasion } from '@/types';
import { Check } from 'lucide-react';
import Link from 'next/link';

interface CateringCardProps {
  occasion: CateringOccasion;
  index: number;
}

export default function CateringCard({ occasion, index }: CateringCardProps) {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`group flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 p-6 md:p-10 bg-secondary-black/40 backdrop-blur-md border border-royal-gold/15 hover:border-royal-gold/35 rounded-3xl transition-all duration-500 shadow-gold-glow hover:shadow-[0_0_40px_rgba(212,175,55,0.25)]`}>
      {/* Image Container */}
      <div className="relative w-full md:w-[45%] aspect-[4/3] md:aspect-[1.4/1] rounded-2xl overflow-hidden bg-primary-black self-center border border-royal-gold/10">
        {occasion.image ? (
          <Image
            src={occasion.image}
            alt={occasion.title}
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            unoptimized
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary-black to-primary-black">
            <span className="font-playfair text-royal-gold text-lg">Catering</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-black/65 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-between py-2 text-left">
        <div>
          <h3 className="font-playfair text-2xl md:text-3xl font-extrabold tracking-wide text-royal-gold mb-4 group-hover:text-light-gold transition-colors duration-300">
            {occasion.title}
          </h3>
          <p className="font-plus-jakarta text-base text-zinc-200 leading-relaxed mb-6 select-text">
            {occasion.description}
          </p>

          {/* Suitable For Checklist */}
          <div className="mb-6">
            <h4 className="font-playfair text-xs font-bold uppercase tracking-wider text-royal-gold/70 mb-3">
              Perfect For:
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {occasion.suitableFor.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-base text-zinc-200">
                  <span className="p-1 rounded-full bg-royal-gold/10 text-royal-gold shrink-0">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span className="font-plus-jakarta font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-4">
          <Link
            href="/catering#inquiry-form"
            className="inline-flex items-center justify-center font-plus-jakarta text-xs font-bold uppercase tracking-wider py-4 px-8 rounded-full bg-royal-gold text-primary-black hover:bg-light-gold transition-all duration-300 hover:scale-[1.02] shadow-gold-glow"
          >
            Request Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
