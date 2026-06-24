import React from 'react';

export default function SectionDivider() {
  return (
    <div className="w-full flex items-center justify-center py-4 bg-primary-black relative z-10 select-none pointer-events-none">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-8 flex items-center gap-6">
        {/* Left Fading Line */}
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-royal-gold/25" />
        
        {/* Business Themed Center Elements */}
        <div className="flex items-center gap-3 text-royal-gold/60">
          <div className="w-1.5 h-1.5 rotate-45 bg-royal-gold/40" />
          
          {/* Stylized Biryani Handi (Cooking Pot) */}
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-royal-gold"
          >
            {/* Lid knob */}
            <path d="M12 3v2" />
            {/* Lid */}
            <path d="M5 7h14c0-1.5-2.5-2-7-2S5 5.5 5 7z" fill="currentColor" fillOpacity="0.1" />
            {/* Handi Pot Body */}
            <path d="M4.5 9c0 3.5 1.5 7 7.5 7s7.5-3.5 7.5-7" />
            {/* Handi Neck */}
            <path d="M4 9h16" strokeWidth="2" />
            {/* Base stand */}
            <path d="M8 19h8" />
            <path d="M9 16v3" />
            <path d="M15 16v3" />
            {/* Steam curves */}
            <path d="M10 2c0 .5-.5.8-.5.8" strokeWidth="1" />
            <path d="M12 1.5c0 .5-.5.8-.5.8" strokeWidth="1" />
            <path d="M14 2c0 .5-.5.8-.5.8" strokeWidth="1" />
          </svg>
          
          <div className="w-1.5 h-1.5 rotate-45 bg-royal-gold/40" />
        </div>

        {/* Right Fading Line */}
        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-royal-gold/25" />
      </div>
    </div>
  );
}
