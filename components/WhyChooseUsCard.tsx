'use client';

import React from 'react';
import * as Icons from 'lucide-react';

interface WhyChooseUsCardProps {
  iconName: string;
  title: string;
  description: string;
}

export default function WhyChooseUsCard({ iconName, title, description }: WhyChooseUsCardProps) {
  // Dynamically resolve icon from lucide-react
  const IconComponent = (Icons as any)[iconName] || Icons.HelpCircle;

  return (
    <div className="group flex flex-col items-center text-center p-8 bg-secondary-black rounded-3xl border border-royal-gold/10 hover:border-royal-gold/40 transition-all duration-300 shadow-gold-glow hover:-translate-y-1 h-full">
      {/* Gold Icon Frame */}
      <div className="mb-6 p-4 rounded-full border border-royal-gold/20 bg-primary-black text-royal-gold group-hover:bg-royal-gold group-hover:text-primary-black transition-colors duration-300">
        <IconComponent className="w-8 h-8 stroke-[1.5]" />
      </div>

      <h3 className="mb-3 font-playfair text-xl font-bold tracking-wide text-ivory group-hover:text-royal-gold transition-colors duration-300">
        {title}
      </h3>

      {description && (
        <p className="font-plus-jakarta text-base text-zinc-300 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
