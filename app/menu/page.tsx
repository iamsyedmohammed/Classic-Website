'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DishCard from '@/components/DishCard';
import { menuItems } from '@/content/menu';
import { Search, Info, ChevronDown, Check } from 'lucide-react';

interface DropdownOption {
  label: string;
  type: 'parent' | 'child';
  value: string;
  isHeader?: boolean;
  indent?: boolean;
}

const dropdownOptions: DropdownOption[] = [
  { label: 'All Categories', type: 'parent', value: 'all' },
  
  { label: 'Specials & Favorites', type: 'parent', value: 'specials', isHeader: true },
  { label: 'Chef Specials', type: 'child', value: 'chef-specials', indent: true },
  { label: 'Best Sellers', type: 'child', value: 'best-sellers', indent: true },
  
  { label: 'Starters & Soups', type: 'parent', value: 'starters', isHeader: true },
  { label: 'Chaat', type: 'child', value: 'chaat', indent: true },
  { label: 'Pakora', type: 'child', value: 'pakora', indent: true },
  { label: 'Soups', type: 'child', value: 'soups', indent: true },
  { label: 'Salads', type: 'child', value: 'salads', indent: true },
  { label: 'Tandoori Kebabs & Grill', type: 'child', value: 'tandoori-kebabs-grill', indent: true },
  { label: 'Vegetarian Appetizers', type: 'child', value: 'vegetarian-appetizers', indent: true },
  { label: 'Non-Veg Appetizers', type: 'child', value: 'non-veg-appetizers', indent: true },
  { label: 'Goat Appetizers', type: 'child', value: 'goat-appetizers', indent: true },
  { label: 'Lamb Appetizers', type: 'child', value: 'lamb-appetizers', indent: true },
  { label: 'Beef Appetizers', type: 'child', value: 'beef-appetizers', indent: true },
  { label: 'Fish Appetizers', type: 'child', value: 'fish-appetizers', indent: true },
  { label: 'Shrimp Appetizers', type: 'child', value: 'shrimp-appetizers', indent: true },
  
  { label: 'Main Courses', type: 'parent', value: 'main-courses', isHeader: true },
  { label: 'Hyderabad Dum Biryani', type: 'child', value: 'hyderabad-dum-biryani', indent: true },
  { label: 'Vegetarian Main Course (Curry)', type: 'child', value: 'vegetarian-main-course', indent: true },
  { label: 'Chicken Main Course (Curries)', type: 'child', value: 'chicken-main-course', indent: true },
  { label: 'Mutton Main Course (Goat, Lamb)', type: 'child', value: 'mutton-main-course', indent: true },
  { label: 'Fish Main Course (Curry)', type: 'child', value: 'fish-main-course', indent: true },
  { label: 'Shrimp Main Course (Curry)', type: 'child', value: 'shrimp-main-course', indent: true },
  { label: 'Beef Main Course', type: 'child', value: 'beef-main-course', indent: true },
  
  { label: 'Breads & Sides', type: 'parent', value: 'breads-sides', isHeader: true },
  { label: 'Naans, Breads & Roti', type: 'child', value: 'naans-breads-roti', indent: true },
  { label: 'Extra\'s Sides', type: 'child', value: 'extras-sides', indent: true },
  
  { label: 'Drinks & Desserts', type: 'parent', value: 'drinks-desserts', isHeader: true },
  { label: 'Beverages', type: 'child', value: 'beverages', indent: true },
  { label: 'Desserts', type: 'child', value: 'desserts', indent: true }
];

interface ChildCatDetails {
  label: string;
  parent: string;
  order: number;
}

const childCategories: Record<string, ChildCatDetails> = {
  'chef-specials': { label: "Chef Specials", parent: "specials", order: 1 },
  'best-sellers': { label: "Best Sellers", parent: "specials", order: 2 },
  'chaat': { label: "Chaat", parent: "starters", order: 3 },
  'pakora': { label: "Pakora", parent: "starters", order: 4 },
  'soups': { label: "Soups", parent: "starters", order: 5 },
  'salads': { label: "Salads", parent: "starters", order: 6 },
  'tandoori-kebabs-grill': { label: "Tandoori Kebabs & Grill", parent: "starters", order: 7 },
  'vegetarian-appetizers': { label: "Vegetarian Appetizers", parent: "starters", order: 8 },
  'non-veg-appetizers': { label: "Non-Veg Appetizers", parent: "starters", order: 9 },
  'goat-appetizers': { label: "Goat Appetizers", parent: "starters", order: 10 },
  'lamb-appetizers': { label: "Lamb Appetizers", parent: "starters", order: 11 },
  'beef-appetizers': { label: "Beef Appetizers", parent: "starters", order: 12 },
  'fish-appetizers': { label: "Fish Appetizers", parent: "starters", order: 13 },
  'shrimp-appetizers': { label: "Shrimp Appetizers", parent: "starters", order: 14 },
  'hyderabad-dum-biryani': { label: "Hyderabad Dum Biryani", parent: "main-courses", order: 15 },
  'vegetarian-main-course': { label: "Vegetarian Main Course (Curry)", parent: "main-courses", order: 16 },
  'chicken-main-course': { label: "Chicken Main Course (Curries)", parent: "main-courses", order: 17 },
  'mutton-main-course': { label: "Mutton Main Course (Goat, Lamb)", parent: "main-courses", order: 18 },
  'fish-main-course': { label: "Fish Main Course (Curry)", parent: "main-courses", order: 19 },
  'shrimp-main-course': { label: "Shrimp Main Course (Curry)", parent: "main-courses", order: 20 },
  'beef-main-course': { label: "Beef Main Course", parent: "main-courses", order: 21 },
  'naans-breads-roti': { label: "Naans, Breads & Roti", parent: "breads-sides", order: 22 },
  'extras-sides': { label: "Extra's Sides", parent: "breads-sides", order: 23 },
  'beverages': { label: "Beverages", parent: "drinks-desserts", order: 24 },
  'desserts': { label: "Desserts", parent: "drinks-desserts", order: 25 }
};

export default function MenuPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOption, setSelectedOption] = useState<DropdownOption>(dropdownOptions[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filter and group items by child category
  const groupedMenu = useMemo(() => {
    const groups: Record<string, typeof menuItems> = {};

    // Initialize groups depending on selected filter option
    Object.entries(childCategories)
      .sort((a, b) => a[1].order - b[1].order)
      .forEach(([key, details]) => {
        if (selectedOption.type === 'parent') {
          if (selectedOption.value === 'all' || details.parent === selectedOption.value) {
            groups[key] = [];
          }
        } else {
          if (key === selectedOption.value) {
            groups[key] = [];
          }
        }
      });

    menuItems.forEach((item) => {
      const details = childCategories[item.category];
      if (!details) return;

      // Group & parent filter match
      if (selectedOption.type === 'parent') {
        if (selectedOption.value !== 'all' && details.parent !== selectedOption.value) {
          return;
        }
      } else {
        if (item.category !== selectedOption.value) {
          return;
        }
      }

      // Search match
      const query = searchQuery.toLowerCase().trim();
      const searchMatch =
        query === '' ||
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query);

      if (searchMatch) {
        if (!groups[item.category]) {
          groups[item.category] = [];
        }
        groups[item.category].push(item);
      }
    });

    // Remove empty groups to keep UI clean
    return Object.fromEntries(
      Object.entries(groups).filter(([_, items]) => items.length > 0)
    );
  }, [selectedOption, searchQuery]);

  const hasItems = Object.keys(groupedMenu).length > 0;

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

        {/* Search and Dropdown Filter controls */}
        <section className="py-12 max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          
          {/* Controls Bar */}
          <div className="flex flex-col md:flex-row gap-6 justify-between items-stretch md:items-center mb-12 pb-6 border-b border-royal-gold/15">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-royal-gold/60 w-5 h-5" />
              <input
                type="text"
                placeholder="Search menu (e.g. Biryani, Curry, Naan...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-[50px] pl-12 pr-6 rounded-2xl bg-secondary-black border border-royal-gold/15 text-sm text-ivory placeholder-ivory/30 focus:outline-none focus:border-royal-gold transition-colors duration-300 shadow-gold-glow"
              />
            </div>

            {/* Premium Hierarchical Dropdown Category Selector */}
            <div className="relative min-w-[280px] md:max-w-sm w-full md:w-auto" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full h-[50px] px-6 rounded-2xl bg-secondary-black border border-royal-gold/15 text-sm text-ivory flex items-center justify-between hover:border-royal-gold/45 focus:outline-none transition-all duration-300 shadow-gold-glow cursor-pointer"
              >
                <span className="font-playfair font-bold text-royal-gold tracking-wide text-left truncate pr-2">
                  {selectedOption.label}
                </span>
                <ChevronDown className={`w-4 h-4 text-royal-gold/80 flex-shrink-0 transition-transform duration-300 ${isDropdownOpen ? 'transform rotate-180' : ''}`} />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-full max-h-[400px] overflow-y-auto rounded-2xl bg-secondary-black border border-royal-gold/15 shadow-2xl z-20 py-2 scrollbar-thin scrollbar-thumb-royal-gold scrollbar-track-transparent">
                  {dropdownOptions.map((opt, idx) => {
                    const isSelected = selectedOption.type === opt.type && selectedOption.value === opt.value;
                    return (
                      <button
                        key={`${opt.type}-${opt.value}-${idx}`}
                        onClick={() => {
                          setSelectedOption(opt);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full px-6 py-2.5 text-left text-sm font-playfair tracking-wide flex items-center justify-between hover:bg-royal-gold/5 transition-all duration-150 cursor-pointer ${
                          isSelected 
                            ? 'text-royal-gold bg-royal-gold/5 font-bold' 
                            : opt.isHeader 
                              ? 'text-royal-gold font-extrabold border-b border-royal-gold/5 mt-2 pb-1.5' 
                              : 'text-ivory/80 hover:text-royal-gold'
                        } ${opt.indent ? 'pl-10 text-xs italic font-medium' : ''}`}
                      >
                        <span>{opt.label}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-royal-gold flex-shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Grouped Menu List */}
          {hasItems ? (
            <div className="space-y-16">
              {Object.entries(groupedMenu).map(([catKey, items]) => {
                const catDetails = childCategories[catKey];
                return (
                  <div key={catKey} className="space-y-6 scroll-mt-24">
                    <div className="flex items-center gap-4 border-b border-royal-gold/10 pb-3">
                      <h2 className="font-playfair text-xl md:text-2xl font-bold tracking-wide text-royal-gold">
                        {catDetails?.label || catKey}
                      </h2>
                      <div className="h-[1px] flex-1 bg-royal-gold/10" />
                      <span className="font-plus-jakarta text-xs text-ivory/40 font-medium bg-secondary-black px-3 py-1 rounded-full border border-royal-gold/5">
                        {items.length} {items.length === 1 ? 'item' : 'items'}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {items.map((item) => (
                        <div key={item.id}>
                          <DishCard item={item} />
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
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
                  setSelectedOption(dropdownOptions[0]);
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
