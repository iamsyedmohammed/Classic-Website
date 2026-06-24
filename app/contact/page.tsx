import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import ContactInfoCard from '@/components/ContactInfoCard';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact Us | Classic Biryani Kabab & Curry',
  description: 'Find address, phone number, hours, and direction details for Classic Biryani Kabab & Curry in Manchester, NH. Send us a message or call directly.',
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      
      {/* Spacer to push content below sticky navbar */}
      <div className="h-[120px] bg-primary-black" />

      <main className="flex-1 bg-primary-black">
        {/* Banner Section */}
        <section className="relative py-16 bg-secondary-black overflow-hidden bg-islamic-pattern">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.03)_0%,transparent_80%)] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 md:px-8 text-center relative z-10">
            <span className="font-cormorant text-lg italic text-royal-gold uppercase tracking-widest block mb-2">
              Visit Us
            </span>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold tracking-wide text-ivory">
              Contact & Directions
            </h1>
            <p className="font-plus-jakarta text-xs text-ivory/60 mt-3 max-w-lg mx-auto">
              We look forward to serving you. Find our location on South Main Street, Manchester or send us a message below.
            </p>
          </div>
        </section>

        {/* Contact info and Form */}
        <section className="py-20 max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column: Details & Map */}
            <div className="lg:col-span-6 flex flex-col gap-8">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ContactInfoCard
                  iconName="MapPin"
                  title="Address"
                  description="484 South Main Street, Manchester, NH 03102"
                  href="https://maps.app.goo.gl/iQD5heWAsnbmjP8Z8"
                />
                
                <ContactInfoCard
                  iconName="Phone"
                  title="Phone"
                  description="(603) 555-0199"
                  href="tel:6035550199"
                />
              </div>

              {/* Hours Card */}
              <ContactInfoCard
                iconName="Clock"
                title="Business Hours"
                description="Mon - Thu: 11:00 AM - 10:00 PM | Fri - Sat: 11:00 AM - 11:00 PM | Sun: 12:00 PM - 9:30 PM"
              />

              {/* Map Iframe */}
              <div className="h-[300px] rounded-3xl overflow-hidden border border-royal-gold/15 shadow-gold-glow bg-secondary-black relative">
                <iframe
                  title="Classic Biryani Contact Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2921.3323043254924!2d-71.48190542386088!3d42.97561847116499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e2499659b6d303%3A0x46ebf88b653995d2!2sClassic%20Biryani%20Kabab%20%26%20Curry!5e0!3m2!1sen!2sin!4v1781709720409!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Right Column: Message Form */}
            <div className="lg:col-span-6">
              <ContactForm />
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
