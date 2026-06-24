'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';

import Image from 'next/image';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Menu', path: '/menu' },
  { label: 'Catering', path: '/catering' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Reviews', path: '/reviews' },
  { label: 'Contact', path: '/contact' }
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initially on load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 h-[80px] lg:h-[120px] flex items-center bg-primary-black border-b border-royal-gold/10"
      >
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center">
          {/* Logo / Brand Name */}
          <Link href="/" className="flex items-center select-none">
            <div className="relative w-20 h-20 sm:w-28 sm:h-28">
              <Image
                src="/images/logo.png"
                alt="Classic Biryani Logo"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`relative font-plus-jakarta text-sm tracking-wide transition-colors duration-300 py-2 ${
                    isActive ? 'text-royal-gold' : 'text-ivory/80 hover:text-royal-gold'
                  } group`}
                >
                  {link.label}
                  {/* Underline Animation */}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[1.5px] bg-royal-gold transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 ${
                      isActive ? 'scale-x-100' : ''
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a
              href="https://ordering-platform.example.com/classic-biryani-manchester"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-plus-jakarta text-xs font-semibold uppercase tracking-wider py-3 px-6 rounded-full bg-royal-gold text-primary-black hover:bg-light-gold transition-all duration-300 hover:scale-[1.03]"
            >
              <span>Order Online</span>
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-royal-gold p-2 outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 bg-primary-black/98 lg:hidden pt-[80px] transition-all duration-300 flex flex-col justify-between ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-6 items-center px-6 py-12">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`font-playfair text-xl tracking-widest transition-colors duration-300 ${
                  isActive ? 'text-royal-gold font-bold' : 'text-ivory/80 hover:text-royal-gold'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile CTA */}
        <div className="px-6 py-12 flex flex-col items-center border-t border-royal-gold/10">
          <a
            href="https://ordering-platform.example.com/classic-biryani-manchester"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="w-full text-center inline-flex items-center justify-center gap-2 font-plus-jakarta text-sm font-semibold uppercase tracking-wider py-4 rounded-full bg-royal-gold text-primary-black hover:bg-light-gold transition-all duration-300"
          >
            <span>Order Online</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </>
  );
}
