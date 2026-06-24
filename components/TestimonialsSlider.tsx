'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Testimonial } from '@/types';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface TestimonialsSliderProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSlider({ testimonials }: TestimonialsSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  // Autoplay
  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 py-8">
      {/* Background Quote Icon */}
      <div className="absolute top-0 left-4 text-royal-gold/10 pointer-events-none">
        <Quote size={120} className="fill-current" />
      </div>

      <div className="relative z-10 min-h-[300px] flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: 'easeInOut' as const }}
            className="w-full bg-secondary-black/40 backdrop-blur-md border border-royal-gold/15 p-8 md:p-12 rounded-3xl shadow-gold-glow flex flex-col items-center text-center"
          >
            {/* Stars */}
            <div className="flex gap-1 text-royal-gold mb-6">
              {Array.from({ length: currentTestimonial.rating }).map((_, idx) => (
                <Star key={idx} size={20} fill="currentColor" className="stroke-[1.5]" />
              ))}
            </div>

            {/* Review text */}
            <p className="font-cormorant text-xl md:text-2xl italic text-ivory/90 leading-relaxed mb-8 select-text">
              &ldquo;{currentTestimonial.review}&rdquo;
            </p>

            {/* User name & Source */}
            <div>
              <h4 className="font-playfair text-lg font-bold tracking-wide text-royal-gold">
                {currentTestimonial.name}
              </h4>
              <div className="flex items-center justify-center gap-2 mt-1">
                <span className="text-xs font-plus-jakarta text-ivory/50">
                  {currentTestimonial.date}
                </span>
                <span className="w-1 h-1 rounded-full bg-royal-gold/40" />
                <span className="text-xs font-plus-jakarta text-royal-gold font-medium uppercase tracking-wider">
                  {currentTestimonial.source}
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center items-center gap-6 mt-8">
        <button
          onClick={prevSlide}
          className="w-11 h-11 rounded-full border border-royal-gold/25 flex items-center justify-center text-royal-gold hover:bg-royal-gold hover:text-primary-black transition-colors duration-300 outline-none"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Indicators */}
        <div className="flex gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'bg-royal-gold w-6' : 'bg-royal-gold/30'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="w-11 h-11 rounded-full border border-royal-gold/25 flex items-center justify-center text-royal-gold hover:bg-royal-gold hover:text-primary-black transition-colors duration-300 outline-none"
          aria-label="Next testimonial"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
