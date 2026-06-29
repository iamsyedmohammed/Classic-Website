'use client';

import React from 'react';
import * as Icons from 'lucide-react';

interface ContactInfoCardProps {
  iconName: string;
  title?: string;
  description: string;
  href?: string;
}

export default function ContactInfoCard({ iconName, title, description, href }: ContactInfoCardProps) {
  const IconComponent = (Icons as any)[iconName] || Icons.HelpCircle;

  const cardContent = (
    <div className="flex flex-col items-center text-center gap-4">
      {/* Icon Wrapper */}
      <div className="w-12 h-12 rounded-full border border-royal-gold/20 bg-primary-black text-royal-gold flex items-center justify-center shrink-0">
        <IconComponent className="w-6 h-6 stroke-[1.5]" />
      </div>

      {/* Text Content */}
      <div className="flex flex-col items-center w-full">
        {title && (
          <h3 className="font-playfair text-lg font-bold tracking-wide text-royal-gold mb-1">
            {title}
          </h3>
        )}
        <p className="font-plus-jakarta text-base text-zinc-200 leading-relaxed hover:text-royal-gold transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  );

  return (
    <div className="p-6 bg-secondary-black rounded-3xl border border-royal-gold/10 hover:border-royal-gold/30 transition-all duration-300 shadow-gold-glow h-full">
      {href ? (
        <a
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="block h-full"
        >
          {cardContent}
        </a>
      ) : (
        cardContent
      )}
    </div>
  );
}
