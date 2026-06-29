'use client';

import React, { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import DishCard from '@/components/DishCard';
import { menuItems } from '@/content/menu';
import { Search, Info } from 'lucide-react';

const categories = [
  { label: 'All Dishes', value: 'all' },
  { label: 'Biryanis', value: 'biryanis' },
  { label: 'Appetizers', value: 'appetizers' },
  { label: 'Kababs', value: 'kababs' },
  { label: 'Curries', value: 'curries' },
  { label: 'Indo-Chinese', value: 'indo-chinese' },
  { label: 'Desserts', value: 'desserts' }
];

export default function MenuPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [dietFilter, setDietFilter] = useState<'all' | 'veg' | 'non-veg' | 'popular'>('all');

  // Filter logic
  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      // Category match
      const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory;

      // Diet match
      let dietMatch = true;
      if (dietFilter === 'veg') {
        dietMatch = item.vegetarian;
      } else if (dietFilter === 'non-veg') {
        dietMatch = !item.vegetarian;
      } else if (dietFilter === 'popular') {
        dietMatch = item.popular;
      }

      // Search match (name or description)
      const query = searchQuery.toLowerCase().trim();
      const searchMatch =
        query === '' ||
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query);

      return categoryMatch && dietMatch && searchMatch;
    });
  }, [selectedCategory, dietFilter, searchQuery]);

  return (
    <>
      <Navbar />
      
      {/* Spacer to push content below sticky navbar */}
      <div className="h-[90px] lg:h-[100px] bg-primary-black" />

      <main className="flex-1 bg-primary-black min-h-screen">
        {/* Banner Section */}
        <section className="relative py-12 md:py-16 bg-secondary-black overflow-hidden bg-islamic-pattern">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.03)_0%,transparent_80%)] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 md:px-8 text-center relative z-10">
            <span className="font-cormorant text-lg italic text-royal-gold uppercase tracking-widest block mb-2">Taste of Royalty</span>
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-ivory">
              The Royal Menu
            </h1>
            <p className="font-plus-jakarta text-xs text-ivory/60 mt-3 max-w-lg mx-auto">
              Prepared daily using freshly ground traditional spice mixes and 100% Halal meats.
            </p>
          </div>
        </section>

        {/* Search, Filter controls, and Grid */}
        <section className="py-12 max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          
          {/* Controls Bar */}
          <div className="flex flex-col lg:flex-row gap-6 justify-between items-stretch lg:items-center mb-12 pb-6 border-b border-royal-gold/15">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-royal-gold/60 w-5 h-5" />
              <input
                type="text"
                placeholder="Search menu (e.g. Chicken Biryani, Butter Chicken...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-[50px] pl-12 pr-6 rounded-2xl bg-secondary-black border border-royal-gold/15 text-sm text-ivory placeholder-ivory/30 focus:outline-none focus:border-royal-gold transition-colors duration-300 shadow-gold-glow"
              />
            </div>

            {/* Diet Filters */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="font-plus-jakarta text-xs font-semibold uppercase tracking-wider text-ivory/60 mr-1">Filter:</span>
              <button
                onClick={() => setDietFilter('all')}
                className={`px-4 py-2 rounded-full font-plus-jakarta text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                  dietFilter === 'all'
                    ? 'bg-royal-gold text-primary-black font-semibold'
                    : 'border border-royal-gold/20 text-royal-gold hover:bg-royal-gold/10'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setDietFilter('veg')}
                className={`px-4 py-2 rounded-full font-plus-jakarta text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                  dietFilter === 'veg'
                    ? 'bg-emerald-600 text-ivory font-semibold'
                    : 'border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/10'
                }`}
              >
                Veg Only
              </button>
              <button
                onClick={() => setDietFilter('non-veg')}
                className={`px-4 py-2 rounded-full font-plus-jakarta text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                  dietFilter === 'non-veg'
                    ? 'bg-red-700 text-ivory font-semibold'
                    : 'border border-red-500/20 text-red-400 hover:bg-red-500/10'
                }`}
              >
                Non-Veg Only
              </button>
              <button
                onClick={() => setDietFilter('popular')}
                className={`px-4 py-2 rounded-full font-plus-jakarta text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                  dietFilter === 'popular'
                    ? 'bg-maroon text-royal-gold border border-royal-gold/30 font-semibold'
                    : 'border border-royal-gold/20 text-royal-gold hover:bg-royal-gold/10'
                }`}
              >
                Best Sellers
              </button>
            </div>
          </div>

          {/* Category Slider Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-4 mb-12 scrollbar-thin scrollbar-thumb-royal-gold scrollbar-track-transparent">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-6 py-3 rounded-full font-playfair text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat.value
                    ? 'bg-royal-gold text-primary-black shadow-gold-glow'
                    : 'bg-secondary-black border border-royal-gold/10 text-ivory/80 hover:border-royal-gold/40'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <div key={item.id}>
                  <DishCard item={item} />
                </div>
              ))}
            </div>
          ) : (
            /* Elegant empty-state */
            <div className="flex flex-col items-center justify-center py-20 text-center bg-secondary-black/40 border border-royal-gold/15 rounded-3xl p-8 shadow-gold-glow max-w-xl mx-auto">
              <Info size={48} className="text-royal-gold/60 mb-4 stroke-[1.5]" />
              <h3 className="font-playfair text-lg font-bold text-royal-gold mb-2">No Dishes Found</h3>
              <p className="font-plus-jakarta text-sm text-ivory/60 leading-relaxed max-w-sm">
                We couldn&apos;t find any items matching your selected filters or search queries. Try clearing the search bar or choosing another category.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setDietFilter('all');
                }}
                className="mt-6 font-plus-jakarta text-xs font-semibold uppercase tracking-wider py-3 px-6 rounded-full bg-royal-gold text-primary-black hover:bg-light-gold transition-colors duration-300"
              >
                Reset Filters
              </button>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}
