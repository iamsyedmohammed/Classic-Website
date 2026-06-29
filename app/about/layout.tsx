import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us – Our Story, Mission & Heritage',
  description:
    'Discover the story behind The Classic Biryani in Manchester, NH. Learn about our 100% Hand Zabiha Halal certification, traditional Dum Pukht cooking method, and Hyderabadi heritage since 2021.',
  keywords: [
    'about classic biryani manchester nh',
    'hyderabadi biryani manchester nh',
    'halal restaurant manchester nh',
    'indian food manchester nh',
    'traditional dum biryani',
    'the classic biryani about',
    'nizami cuisine manchester',
    'hand zabiha halal nh'
  ],
  openGraph: {
    title: 'About The Classic Biryani | Our Story & Hyderabadi Heritage',
    description:
      'Learn how The Classic Biryani brings authentic Hyderabadi Dum Biryani and 100% Hand Zabiha Halal cuisine to Manchester, NH since 2021.',
    url: 'https://theclassicbiryani.com/about',
    siteName: 'The Classic Biryani',
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630, alt: 'The Classic Biryani – About Us' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About The Classic Biryani | Our Story & Hyderabadi Heritage',
    description: 'Authentic Hyderabadi Dum Biryani and 100% Hand Zabiha Halal cuisine in Manchester, NH.',
    images: ['/images/og-image.webp'],
  },
  alternates: { canonical: '/about' },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
