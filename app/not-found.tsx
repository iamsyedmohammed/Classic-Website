import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Page Not Found | Classic Biryani Kabab & Curry',
  description: 'The requested page was not found. Return to Classic Biryani Kabab & Curry home page.',
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="h-[120px] bg-primary-black" />
      <main className="flex-1 bg-primary-black flex flex-col items-center justify-center py-20 px-6 text-center bg-islamic-pattern">
        
        {/* Stylized Charminar Outline */}
        <div className="opacity-40 mb-8">
          <svg width="150" height="110" viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="10" y1="85" x2="110" y2="85" stroke="#e2d77b" strokeWidth="2"/>
            <rect x="30" y="45" width="60" height="35" rx="2" stroke="#e2d77b" strokeWidth="1.5"/>
            <path d="M42 80V65C42 58 78 58 78 65V80" stroke="#e2d77b" strokeWidth="1.5"/>
            <line x1="30" y1="58" x2="90" y2="58" stroke="#e2d77b" strokeWidth="1"/>
            <rect x="25" y="15" width="6" height="65" stroke="#e2d77b" strokeWidth="1.5"/>
            <path d="M24 15H32L28 5L24 15Z" fill="#e2d77b"/>
            <rect x="89" y="15" width="6" height="65" stroke="#e2d77b" strokeWidth="1.5"/>
            <path d="M88 15H96L92 5L88 15Z" fill="#e2d77b"/>
          </svg>
        </div>

        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-royal-gold mb-4 uppercase tracking-wider">
          Lost in the Royal Palace
        </h1>
        
        <span className="font-cormorant text-xl italic text-ivory/60 mb-6 block">
          404 - Page Not Found
        </span>

        <p className="font-plus-jakarta text-sm text-ivory/70 max-w-md mx-auto leading-relaxed mb-8">
          The secret recipe or chamber you are looking for does not exist or has been relocated by the Nizam&apos;s guard. Let us guide you back to our main dining hall.
        </p>

        <Link
          href="/"
          className="font-plus-jakarta text-xs font-bold uppercase tracking-wider py-4 px-8 rounded-full bg-royal-gold text-primary-black hover:bg-light-gold transition-all duration-300 hover:scale-[1.02] shadow-gold-glow"
        >
          Return to Dining Hall
        </Link>
      </main>
      <Footer />
    </>
  );
}
