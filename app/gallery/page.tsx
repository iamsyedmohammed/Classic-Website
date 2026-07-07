'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';
import { galleryItems } from '@/content/gallery';
import Image from 'next/image';
import { Eye, X, ChevronLeft, ChevronRight } from 'lucide-react';

const categories = [
  { label: 'All Photos', value: 'all' },
  { label: 'Royal Food', value: 'food' },
  { label: 'Nizami Interior', value: 'interior' },
  { label: 'Catering Events', value: 'catering' },
  { label: 'Traditional Desserts', value: 'desserts' }
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter items
  const filteredItems = useMemo(() => {
    return galleryItems.filter((item) => activeCategory === 'all' || item.category === activeCategory);
  }, [activeCategory]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const navigateLightbox = useCallback((direction: 'next' | 'prev') => {
    if (lightboxIndex === null) return;
    const offset = direction === 'next' ? 1 : -1;
    const nextIndex = (lightboxIndex + offset + filteredItems.length) % filteredItems.length;
    setLightboxIndex(nextIndex);
  }, [lightboxIndex, filteredItems.length]);

  // Handle keyboard events for accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') navigateLightbox('next');
      if (e.key === 'ArrowLeft') navigateLightbox('prev');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, navigateLightbox]);

  return (
    <>
      <Navbar />
      
      {/* Spacer to push content below sticky navbar */}
      <div className="h-[80px] lg:h-[100px] bg-primary-black" />

      <main className="flex-1 bg-primary-black min-h-screen">
        {/* Banner Section */}
        <section className="relative py-12 md:py-16 bg-secondary-black overflow-hidden bg-islamic-pattern">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.03)_0%,transparent_80%)] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 md:px-8 text-center relative z-10">
            <span className="font-cormorant text-lg italic text-royal-gold uppercase tracking-widest block mb-2">
              A Feast for the Eyes
            </span>
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-ivory">
              Restaurant Gallery
            </h1>
            <p className="font-plus-jakarta text-xs text-ivory/60 mt-3 max-w-lg mx-auto">
              Savor a visual tour of our freshly prepared delicacies, traditional Nizami atmosphere, and catering setups.
            </p>
          </div>
        </section>

        {/* Filters and Masonry Grid */}
        <section className="py-16 max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          
          {/* Category tabs */}
          <div className="flex gap-2 overflow-x-auto pb-4 justify-start md:justify-center mb-12 scrollbar-thin scrollbar-thumb-royal-gold">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-6 py-3 rounded-full font-playfair text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.value
                    ? 'bg-royal-gold text-primary-black shadow-gold-glow'
                    : 'bg-secondary-black border border-royal-gold/10 text-ivory/80 hover:border-royal-gold/45'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Photos Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className="group relative aspect-square rounded-3xl overflow-hidden border border-royal-gold/15 bg-secondary-black shadow-gold-glow cursor-pointer"
                role="button"
                tabIndex={0}
                aria-label={`Open photo of ${item.alt}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openLightbox(index);
                  }
                }}
              >
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    unoptimized
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary-black to-primary-black" />
                )}
                {/* Overlay with Eye */}
                <div className="absolute inset-0 bg-primary-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-3 rounded-full bg-royal-gold text-primary-black transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye size={20} />
                  </div>
                </div>

                {/* Category tag */}
                <span className="absolute bottom-4 left-4 bg-primary-black/85 backdrop-blur-sm text-royal-gold border border-royal-gold/20 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  {item.category}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Link Section for Gallery Page */}
          <div className="mt-16 text-center max-w-2xl mx-auto p-8 rounded-3xl border border-royal-gold/15 bg-secondary-black/40 backdrop-blur-md shadow-gold-glow">
            <h3 className="font-playfair text-xl font-bold text-royal-gold mb-3">Craving These Nizami Flavors?</h3>
            <p className="font-plus-jakarta text-sm text-zinc-300 mb-6 leading-relaxed">
              Explore our full selection of hand zabiha halal biryanis and kebabs on the <Link href="/menu" className="text-royal-gold hover:underline font-bold">Menu Page</Link>, or inquire about custom packages on the <Link href="/catering" className="text-royal-gold hover:underline font-bold">Catering Page</Link> for your next celebration.
            </p>
          </div>
        </section>

        {/* Lightbox Modal */}
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 z-50 bg-primary-black/95 flex items-center justify-center p-4 md:p-10 select-none animate-fadeIn"
            role="dialog"
            aria-modal="true"
            aria-label="Image Lightbox"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-royal-gold p-2 border border-royal-gold/20 rounded-full hover:bg-royal-gold hover:text-primary-black transition-colors duration-300 outline-none"
              aria-label="Close Lightbox"
            >
              <X size={24} />
            </button>

            {/* Left Navigate */}
            <button
              onClick={() => navigateLightbox('prev')}
              className="absolute left-4 md:left-8 text-royal-gold p-3 border border-royal-gold/10 rounded-full hover:bg-royal-gold/10 transition-colors duration-300 outline-none"
              aria-label="Previous Image"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Image Wrapper */}
            <div className="relative w-full max-w-4xl max-h-[70vh] aspect-[4/3] md:aspect-auto flex flex-col items-center">
              <div className="relative w-full h-[60vh] rounded-2xl overflow-hidden border border-royal-gold/20">
                <Image
                  src={filteredItems[lightboxIndex].image}
                  alt={filteredItems[lightboxIndex].alt}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
              <p className="mt-6 text-center font-plus-jakarta text-sm text-ivory/80 max-w-xl px-4 select-text">
                {filteredItems[lightboxIndex].alt}
              </p>
            </div>

            {/* Right Navigate */}
            <button
              onClick={() => navigateLightbox('next')}
              className="absolute right-4 md:right-8 text-royal-gold p-3 border border-royal-gold/10 rounded-full hover:bg-royal-gold/10 transition-colors duration-300 outline-none"
              aria-label="Next Image"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
