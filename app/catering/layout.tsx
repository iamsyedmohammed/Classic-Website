import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Halal Indian Catering Services in Manchester, NH',
  description:
    'Book premium Hyderabadi catering packages for weddings, Walimas, Nikah ceremonies, corporate events, and birthday banquets across Manchester, New Hampshire. 100% certified Hand Zabiha Halal catering by The Classic Biryani.',
  keywords: [
    'halal catering manchester nh',
    'wedding catering new hampshire',
    'indian catering manchester',
    'nikah catering nh',
    'hyderabadi biryani catering',
    'corporate event food manchester',
    'the classic biryani catering',
    'muslim wedding catering nh',
    'eid catering manchester nh'
  ],
  openGraph: {
    title: 'Royal Catering Services | The Classic Biryani Manchester NH',
    description:
      'Professional Halal catering for weddings, Walimas, corporate events, and birthday parties in Manchester, NH. Authentic Hyderabadi menus and elegant buffet presentation.',
    url: 'https://theclassicbiryani.com/catering',
    siteName: 'The Classic Biryani',
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630, alt: 'The Classic Biryani Catering Services' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Royal Catering Services | The Classic Biryani Manchester NH',
    description: 'Halal Indian catering for weddings and events in Manchester, NH.',
    images: ['/images/og-image.webp'],
  },
  alternates: { canonical: '/catering' },
};

export default function CateringLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
