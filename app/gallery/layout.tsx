import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Food Gallery – Biryanis, Interior & Catering Photos',
  description:
    'Browse our photo gallery of signature Hyderabadi Dum Biryanis, handcrafted Indian appetizers, premium Nizami interior seating, and catering events at The Classic Biryani in Manchester, NH.',
  keywords: [
    'indian restaurant photos manchester',
    'classic biryani gallery',
    'interior design classic biryani',
    'hyderabadi food photos',
    'the classic biryani gallery',
    'manchester nh halal restaurant photos'
  ],
  openGraph: {
    title: 'Food Gallery | The Classic Biryani Manchester NH',
    description:
      'View beautiful photos of our authentic Hyderabadi biryanis, kababs, curries, and Nizami restaurant interior at The Classic Biryani.',
    url: 'https://theclassicbiryani.com/gallery',
    siteName: 'The Classic Biryani',
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630, alt: 'The Classic Biryani Gallery' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Food Gallery | The Classic Biryani Manchester NH',
    description: 'See our authentic Hyderabadi biryanis and Nizami interior at The Classic Biryani.',
    images: ['/images/og-image.webp'],
  },
  alternates: { canonical: '/gallery' },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
