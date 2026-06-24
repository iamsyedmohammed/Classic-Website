import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({ title, subtitle, centered = true }: SectionHeadingProps) {
  return (
    <div className={`mb-12 flex flex-col ${centered ? 'items-center text-center' : 'items-start text-left'}`}>
      {subtitle && (
        <span className="mb-2 font-cormorant text-lg italic tracking-widest text-royal-gold uppercase">
          {subtitle}
        </span>
      )}
      <h2 className="font-playfair text-3xl md:text-4xl font-bold tracking-wide text-ivory">
        {title}
      </h2>
      
      {/* Royal Gold Divider */}
      <div className={`mt-4 flex items-center gap-3 ${centered ? 'justify-center' : 'justify-start'}`}>
        <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-royal-gold/60" />
        <div className="w-1.5 h-1.5 rotate-45 bg-royal-gold" />
        <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-royal-gold/60" />
      </div>
    </div>
  );
}
