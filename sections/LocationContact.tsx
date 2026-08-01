'use client';

import React from 'react';
import { motion as m } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import ContactInfoCard from '@/components/ContactInfoCard';

export default function LocationContact() {
  return (
    <section className="py-16 md:py-24 bg-primary-black relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-islamic-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <SectionHeading
          title="Visit the Palace of Taste"
          subtitle="Experience authentic Hyderabadi cuisine in Manchester, New Hampshire"
        />

        <div className="flex flex-col gap-10">
          {/* Info Details */}
          <m.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
          >
            <ContactInfoCard
              iconName="MapPin"
              title="Location"
              description="484 South Main Street, Manchester, NH 03102"
              href="https://maps.app.goo.gl/iQD5heWAsnbmjP8Z8"
            />

            <ContactInfoCard
              iconName="Phone"
              title="Phone Number"
              description="+1 603-206-5203"
              href="tel:+16032065203"
            />

            <ContactInfoCard
              iconName="Clock"
              title="Dine-In Hours"
              description="Mon, Wed - Sun: 12 PM - 12 AM | Tue: Closed"
            />

            <ContactInfoCard
              iconName="Mail"
              title="Email Us"
              description="classicbkc@gmail.com"
              href="mailto:classicbkc@gmail.com"
            />

          </m.div>

          {/* Map Column */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full h-[280px] md:h-[450px] rounded-3xl overflow-hidden border border-royal-gold/15 shadow-gold-glow relative bg-secondary-black"
          >
            <iframe
              title="Classic Biryani Kabab & Curry Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2921.3323043254924!2d-71.48190542386088!3d42.97561847116499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e2499659b6d303%3A0x46ebf88b653995d2!2sClassic%20Biryani%20Kabab%20%26%20Curry!5e0!3m2!1sen!2sin!4v1781709720409!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </m.div>
        </div>
      </div>
    </section>
  );
}
