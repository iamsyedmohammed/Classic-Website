'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { heroContent } from '@/content/home';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Menu', path: '/menu' },
  { label: 'Catering', path: '/catering' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll and mark nav open when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('nav-open');
    } else {
      document.body.style.overflow = '';
      document.body.classList.remove('nav-open');
    }
    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('nav-open');
    };
  }, [isOpen]);

  // Close drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* ── Top Bar ── */}
      <nav
        style={{ backgroundColor: '#000000' }}
        className="fixed top-0 left-0 right-0 z-50 h-[90px] lg:h-[100px] flex items-center border-b border-white/5"
      >
        <div className="w-full max-w-7xl mx-auto px-5 md:px-8 flex justify-between items-center">

          {/* Logo */}
          <Link href="/" className="flex items-center select-none shrink-0" onClick={() => setIsOpen(false)}>
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24">
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
                  className={`relative font-plus-jakarta text-sm tracking-wide transition-colors duration-300 py-2 group ${isActive ? 'text-royal-gold' : 'text-ivory/80 hover:text-royal-gold'
                    }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[1.5px] bg-royal-gold transform transition-transform duration-300 origin-left ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
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

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full border border-royal-gold/30 text-royal-gold hover:bg-royal-gold/10 transition-colors duration-200"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={20} strokeWidth={2.5} /> : <Menu size={20} strokeWidth={2.5} />}
          </button>
        </div>
      </nav>

      {/* ── Mobile Drawer ── */}
      {/* Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      />

      {/* Slide-in panel from right */}
      <div
        style={{ backgroundColor: '#000000' }}
        className={`fixed top-0 right-0 z-50 h-full w-[75vw] max-w-[320px] lg:hidden flex flex-col shadow-2xl transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-end px-6 h-[90px] border-b border-royal-gold/15 shrink-0">

          <button
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center w-9 h-9 rounded-full border border-royal-gold/30 text-royal-gold hover:bg-royal-gold/10 transition-colors duration-200"
            aria-label="Close menu"
          >
            <X size={18} strokeWidth={2.5} />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-1">
          {navLinks.map((link, i) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between py-4 border-b border-white/5 font-plus-jakarta text-base font-medium tracking-wide transition-colors duration-200 ${isActive
                  ? 'text-royal-gold'
                  : 'text-ivory/70 hover:text-royal-gold'
                  }`}
                style={{ transitionDelay: isOpen ? `${i * 40}ms` : '0ms' }}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-royal-gold" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Order Online CTA */}
        <div className="px-6 pb-8 shrink-0">
          <a
            href={heroContent.primaryCTA.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full font-plus-jakarta text-xs font-bold uppercase tracking-wider py-4 px-6 rounded-full bg-royal-gold text-primary-black hover:bg-light-gold transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            <span>Order Online</span>
            <ArrowRight size={14} />
          </a>
        </div>

      </div>
    </>
  );
}
