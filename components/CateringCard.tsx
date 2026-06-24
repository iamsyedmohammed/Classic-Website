'use client';

import React from 'react';
import Image from 'next/image';
import { CateringOccasion } from '@/types';
import { Check } from 'lucide-react';
import Link from 'next/link';

interface CateringCardProps {
  occasion: CateringOccasion;
}

export default function CateringCard({ occasion }: CateringCardProps) {
  return (
    <div className="group flex flex-col md:flex-row gap-8 p-6 md:p-8 bg-secondary-black border border-royal-gold/10 hover:border-royal-gold/30 rounded-3xl transition-all duration-300 shadow-gold-glow hover:shadow-[0_0_35px_rgba(212,175,55,0.2)]">
      {/* Image with Nizami Arch Shape */}
      <div className="relative w-full md:w-2/5 aspect-[4/3] md:aspect-square rounded-2xl overflow-hidden bg-primary-black self-center">
        {occasion.image ? (
          <Image
            src={occasion.image}
            alt={occasion.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            unoptimized
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary-black to-primary-black">
            <span className="font-playfair text-royal-gold text-lg">Catering</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-black/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-between py-2">
        <div>
          <h3 className="font-playfair text-2xl font-bold tracking-wide text-royal-gold mb-3 group-hover:text-light-gold transition-colors duration-300">
            {occasion.title}
          </h3>
          <p className="font-plus-jakarta text-base text-zinc-300 leading-relaxed mb-6">
            {occasion.description}
          </p>

          {/* Suitable For Checklist */}
          <div className="mb-6">
            <h4 className="font-playfair text-sm font-semibold uppercase tracking-wider text-ivory/90 mb-3">
              Perfect For:
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {occasion.suitableFor.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-base text-zinc-200">
                  <span className="p-0.5 rounded-full bg-royal-gold/15 text-royal-gold">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div>
          <Link
            href="/catering#inquiry-form"
            className="inline-flex items-center justify-center font-plus-jakarta text-xs font-semibold uppercase tracking-wider py-3 px-6 rounded-full bg-royal-gold text-primary-black hover:bg-light-gold transition-all duration-300 hover:scale-[1.03] shadow-gold-glow"
          >
            Request Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
