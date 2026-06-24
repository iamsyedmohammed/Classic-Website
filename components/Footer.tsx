'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-primary-black border-t border-royal-gold/15 pt-16 pb-8 overflow-hidden bg-islamic-pattern">
      <div className="max-w-[90rem] mx-auto px-8 md:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Info */}
          <div className="flex flex-col gap-4">
            {/* <Link href="/" className="flex items-center select-none">
              <div className="relative w-32 h-32">
                <Image
                  src="/images/logo.png"
                  alt="Classic Biryani Logo"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </Link> */}
            <p className="font-plus-jakarta text-base text-zinc-300 leading-relaxed mt-2">
              Bringing the authentic flavor of Hyderabadi Nizami heritage to Manchester, New Hampshire. Prepared with care, passion, and 100% Halal ingredients.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 mt-2">
              <a
                href="https://www.facebook.com/Classicbkc/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-royal-gold/20 flex items-center justify-center text-royal-gold hover:bg-royal-gold hover:text-primary-black transition-colors duration-300"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/classicbkc/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-royal-gold/20 flex items-center justify-center text-royal-gold hover:bg-royal-gold hover:text-primary-black transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-lg font-bold tracking-wide text-royal-gold mb-6">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3 font-plus-jakarta text-base">
              <li>
                <Link href="/" className="text-zinc-200 hover:text-royal-gold transition-colors duration-300">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-zinc-200 hover:text-royal-gold transition-colors duration-300">About Us</Link>
              </li>
              <li>
                <Link href="/menu" className="text-zinc-200 hover:text-royal-gold transition-colors duration-300">Menu</Link>
              </li>
              <li>
                <Link href="/catering" className="text-zinc-200 hover:text-royal-gold transition-colors duration-300">Catering Services</Link>
              </li>
              {/* <li>
                <Link href="/gallery" className="text-zinc-200 hover:text-royal-gold transition-colors duration-300">Food Gallery</Link>
              </li> */}
              {/* <li>
                <Link href="/reviews" className="text-zinc-200 hover:text-royal-gold transition-colors duration-300">Reviews</Link>
              </li> */}
              <li>
                <Link href="/contact" className="text-zinc-200 hover:text-royal-gold transition-colors duration-300">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="font-playfair text-lg font-bold tracking-wide text-royal-gold mb-6 flex items-center gap-2">
              <Clock size={18} className="stroke-[1.5]" />
              <span>Hours</span>
            </h3>
            <ul className="flex flex-col gap-3 font-plus-jakarta text-base text-zinc-300">
              <li className="flex justify-between border-b border-royal-gold/10 pb-2">
                <span>Mon - Thu</span>
                <span className="text-zinc-100">11:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-royal-gold/10 pb-2">
                <span>Fri - Sat</span>
                <span className="text-zinc-100 font-semibold text-royal-gold">11:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-royal-gold/10 pb-2">
                <span>Sunday</span>
                <span className="text-zinc-100">12:00 PM - 9:30 PM</span>
              </li>
              <li className="text-sm text-royal-gold/80 italic mt-2">
                * Serving lunch buffet daily from 11:30 AM to 3:00 PM
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-playfair text-lg font-bold tracking-wide text-royal-gold mb-6">
              Get In Touch
            </h3>
            <ul className="flex flex-col gap-4 font-plus-jakarta text-base text-zinc-300">
              <li className="flex gap-3">
                <MapPin size={22} className="text-royal-gold shrink-0 mt-0.5" />
                <a
                  href="https://maps.app.goo.gl/iQD5heWAsnbmjP8Z8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-royal-gold transition-colors duration-300"
                >
                  484 South Main Street,<br />
                  Manchester, NH 03102
                </a>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="text-royal-gold shrink-0 mt-0.5" />
                <a href="tel:6035550199" className="hover:text-royal-gold transition-colors duration-300">
                  (603) 555-0199
                </a>
              </li>
              <li className="mt-4 flex flex-col items-center gap-2">
                <div className="relative w-full h-32 bg-white/95 p-3 rounded-2xl flex items-center justify-center shadow-gold-glow border border-royal-gold/20 overflow-hidden">
                  <Image
                    src="/images/hms-logo.png"
                    alt="HMS Certified Hand Zabiha Halal"
                    fill
                    className="object-contain p-2"
                    unoptimized
                  />
                </div>
                <span className="text-[10px] font-bold text-royal-gold/90 uppercase tracking-widest text-center mt-1">
                  HMS Certified Hand Zabiha
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Charminar SVG line art and Copyright */}
        <div className="border-t border-royal-gold/15 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-plus-jakarta text-sm text-zinc-400">
            &copy; {new Date().getFullYear()} Classic Biryani Kabab & Curry. All Rights Reserved. | <Link href="/privacy" className="hover:text-royal-gold">Privacy</Link> | <Link href="/terms" className="hover:text-royal-gold">Terms</Link>
          </p>

          {/* Custom Stylized Charminar Outline */}
          <div className="opacity-20 hover:opacity-45 transition-opacity duration-500" title="The Royal Icon of Hyderabad">
            <svg width="120" height="90" viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Base floor */}
              <line x1="10" y1="85" x2="110" y2="85" stroke="#e2d77b" strokeWidth="2" />
              <line x1="15" y1="80" x2="105" y2="80" stroke="#e2d77b" strokeWidth="1" />

              {/* Main square building */}
              <rect x="30" y="45" width="60" height="35" rx="2" stroke="#e2d77b" strokeWidth="1.5" />

              {/* Arches */}
              <path d="M42 80V65C42 58 78 58 78 65V80" stroke="#e2d77b" strokeWidth="1.5" />
              <path d="M34 80V73C34 70 42 70 42 73V80" stroke="#e2d77b" strokeWidth="1" />
              <path d="M78 80V73C78 70 86 70 86 73V80" stroke="#e2d77b" strokeWidth="1" />

              {/* Decorative horizontal bands */}
              <line x1="30" y1="58" x2="90" y2="58" stroke="#e2d77b" strokeWidth="1" />
              <line x1="30" y1="48" x2="90" y2="48" stroke="#e2d77b" strokeWidth="1" />

              {/* Minarets */}
              {/* Left outer */}
              <rect x="25" y="15" width="6" height="65" stroke="#e2d77b" strokeWidth="1.5" />
              <path d="M24 15H32L28 5L24 15Z" fill="#e2d77b" />
              <circle cx="28" cy="35" r="2.5" stroke="#e2d77b" fill="none" />
              <circle cx="28" cy="55" r="2.5" stroke="#e2d77b" fill="none" />

              {/* Right outer */}
              <rect x="89" y="15" width="6" height="65" stroke="#e2d77b" strokeWidth="1.5" />
              <path d="M88 15H96L92 5L88 15Z" fill="#e2d77b" />
              <circle cx="92" cy="35" r="2.5" stroke="#e2d77b" fill="none" />
              <circle cx="92" cy="55" r="2.5" stroke="#e2d77b" fill="none" />

              {/* Left inner minaret tower projections */}
              <line x1="45" y1="45" x2="45" y2="35" stroke="#e2d77b" strokeWidth="1" />
              <circle cx="45" cy="33" r="1.5" fill="#e2d77b" />

              {/* Right inner minaret tower projections */}
              <line x1="75" y1="45" x2="75" y2="35" stroke="#e2d77b" strokeWidth="1" />
              <circle cx="75" cy="33" r="1.5" fill="#e2d77b" />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
}
