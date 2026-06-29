import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Royal Menu – Biryanis, Kababs, Curries & More',
  description:
    'Browse the full menu at The Classic Biryani in Manchester, NH. Authentic Hyderabadi Dum Biryani, HMS certified Hand Zabiha Halal goat, chicken, lamb biryanis, kababs, curries, Indo-Chinese, and traditional desserts.',
  keywords: [
    'indian restaurant menu manchester nh',
    'best biryani menu nh',
    'halal food menu manchester',
    'kababs and curries manchester',
    'chicken lollipop price',
    'goat biryani manchester nh',
    'the classic biryani menu',
    'hyderabadi dum biryani menu'
  ],
  openGraph: {
    title: 'The Classic Biryani Menu | Hyderabadi Dum Biryani, Kababs & Curries',
    description:
      'Explore our full menu of authentic Hyderabadi Dum Biryanis, kababs, curries, Indo-Chinese dishes, and traditional desserts. 100% Halal in Manchester, NH.',
    url: 'https://theclassicbiryani.com/menu',
    siteName: 'The Classic Biryani',
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630, alt: 'The Classic Biryani Menu' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Classic Biryani Menu | Hyderabadi Dum Biryani, Kababs & Curries',
    description: 'Authentic Halal Hyderabadi Dum Biryani, kababs, and curries in Manchester, NH.',
    images: ['/images/og-image.webp'],
  },
  alternates: { canonical: '/menu' },
};

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
