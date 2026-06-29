import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/sections/Hero';
import SignatureDishes from '@/sections/SignatureDishes';
import AboutPreview from '@/sections/AboutPreview';
import WhyChooseUs from '@/sections/WhyChooseUs';
import FeaturedVideos from '@/sections/FeaturedVideos';
import CateringPreview from '@/sections/CateringPreview';
import TestimonialsSection from '@/sections/Testimonials';
import GalleryPreview from '@/sections/GalleryPreview';
import LocationContact from '@/sections/LocationContact';
import Footer from '@/components/Footer';
import SectionDivider from '@/components/SectionDivider';

export const metadata = {
  title: 'Classic Biryani Kabab & Curry | Halal Restaurant Manchester NH',
  description: 'Welcome to Classic Biryani Kabab & Curry. Proudly serving authentic Hyderabadi Dum Biryani, hand-made kababs, curries, and Indian cuisine in Manchester, New Hampshire. HMS Certified Zabiha Halal.',
  keywords: 'halal restaurant manchester nh, best biryani manchester nh, indian food new hampshire, tandoori kababs manchester, southern nh indian catering, hand-zabiha halal dining'
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SectionDivider />
        <SignatureDishes />
        <SectionDivider />
        <AboutPreview />
        <SectionDivider />
        <WhyChooseUs />
        <SectionDivider />
        <FeaturedVideos />
        <SectionDivider />
        <CateringPreview />
        <SectionDivider />
        <TestimonialsSection />
        <SectionDivider />
        <GalleryPreview />
        <SectionDivider />
        <LocationContact />
      </main>
      <Footer />
    </>
  );
}
