'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Percent, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already seen the popup in this session
    const hasSeenPopup = sessionStorage.getItem('hasSeenTakeoutPromo');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2500); // Show popup after 2.5 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('hasSeenTakeoutPromo', 'true');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-md bg-secondary-black border border-royal-gold/30 rounded-3xl p-8 overflow-hidden shadow-2xl z-10 text-center"
          >
            {/* Top gold geometric pattern accents */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-royal-gold via-light-gold to-royal-gold" />
            
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-colors duration-200 focus:outline-none"
              aria-label="Close promotion dialog"
            >
              <X size={18} />
            </button>

            {/* Promo Icon */}
            <div className="mx-auto w-14 h-14 rounded-full bg-royal-gold/10 border border-royal-gold/20 flex items-center justify-center mb-6">
              <Percent className="text-royal-gold animate-pulse" size={24} />
            </div>

            {/* Title */}
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-ivory tracking-wide mb-3 leading-tight">
              10% Off <br />
              <span className="text-royal-gold bg-gradient-to-r from-royal-gold to-light-gold bg-clip-text text-transparent">
                On all Takeout Orders!
              </span>
            </h3>

            {/* Description */}
            <p className="font-body text-zinc-300 text-sm md:text-base leading-relaxed mb-6">
              Come visit us and get a discount on your take out orders!
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col gap-3">
              <Link
                href="/menu"
                onClick={handleClose}
                className="w-full inline-flex items-center justify-center gap-2 font-body text-xs font-bold uppercase tracking-wider py-3.5 px-6 rounded-full bg-royal-gold text-primary-black hover:bg-light-gold hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-royal-gold/10 cursor-pointer"
              >
                <span>View Menu & Order</span>
                <ArrowRight size={12} />
              </Link>
              
              <button
                onClick={handleClose}
                className="font-body text-xs font-medium text-zinc-400 hover:text-zinc-200 transition-colors duration-200 uppercase tracking-widest py-2"
              >
                No thanks
              </button>
            </div>

            {/* Exclusions Footer Disclaimer */}
            <p className="mt-6 text-[10px] text-zinc-500 font-body">
              *excludes buffet & catering
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
