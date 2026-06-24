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
