'use client';

import React from 'react';
import Image from 'next/image';
import { MenuItem } from '@/types';

interface DishCardProps {
  item: MenuItem;
  ctaText?: string;
  onCtaClick?: () => void;
}

export default function DishCard({ item, ctaText = 'Order Now', onCtaClick }: DishCardProps) {
  return (
    <div 
      onClick={onCtaClick}
      className="group relative flex flex-col bg-secondary-black/50 backdrop-blur-md border border-ivory/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-royal-gold/30 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] cursor-pointer h-full"
    >
      {/* Popular Badge */}
      {item.popular && (
        <span className="absolute top-3 left-3 z-10 bg-royal-gold text-primary-black text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-md">
          Popular
        </span>
      )}

      {/* Image Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-primary-black">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            unoptimized
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary-black to-primary-black">
            <span className="font-playfair text-royal-gold text-sm font-semibold uppercase tracking-wider">Classic Biryani</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-secondary-black/80 via-transparent to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 justify-between">
        <div className="space-y-1.5 mb-5">
          {/* Name */}
          <h3 className="font-plus-jakarta font-bold text-base text-ivory group-hover:text-royal-gold transition-colors duration-300 leading-snug">
            {item.name}
          </h3>
          
          {/* Price */}
          <div className="font-plus-jakarta font-bold text-royal-gold text-base">
            ${item.price.toFixed(2)}
          </div>
        </div>

        {/* Action Button: Styled like the screenshot but in Golden color and original font */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            if (onCtaClick) onCtaClick();
          }}
          className="relative inline-flex items-center justify-between pl-6 pr-2 py-2 w-fit rounded-full bg-royal-gold text-primary-black hover:bg-light-gold transition-all duration-300 hover:scale-[1.03] shadow-md shadow-royal-gold/10 cursor-pointer group/btn"
        >
          <span className="font-plus-jakarta text-xs font-bold uppercase tracking-wider mr-4">Order Now</span>
          <div className="w-8 h-8 rounded-full bg-primary-black flex items-center justify-center text-white transition-transform duration-300 group-hover/btn:translate-x-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 7h10v10"/>
              <path d="M7 17 17 7"/>
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}
