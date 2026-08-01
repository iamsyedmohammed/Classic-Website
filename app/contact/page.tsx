import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import ContactInfoCard from '@/components/ContactInfoCard';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact Us – Visit, Call & Reserve',
  description:
    'Visit The Classic Biryani at 484 South Main Street, Manchester, NH for authentic Hyderabadi Dum Biryani, Hand Zabiha Halal Indian cuisine, dine-in, takeout, delivery, and catering. Contact us today.',
  keywords: [
    'Classic Biryani Manchester NH',
    'The Classic Biryani Manchester',
    'Indian Restaurant Manchester NH',
    'Halal Restaurant Manchester NH',
    'Hyderabadi Dum Biryani Manchester',
    'Indian Food Manchester NH',
    'Contact Classic Biryani',
    'Indian Catering Manchester NH',
    'Takeout Delivery Manchester NH',
    'Takeout Manchester NH',
    'Delivery Manchester NH'
  ],
  openGraph: {
    title: 'Contact The Classic Biryani | Manchester, NH',
    description:
      'Find us at 484 South Main Street, Manchester, NH. Enjoy authentic Hyderabadi Dum Biryani, dine-in, takeout, delivery, and catering. Reach out to our team today.',
    url: 'https://theclassicbiryani.com/contact',
    siteName: 'The Classic Biryani',
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630, alt: 'The Classic Biryani – Contact' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact The Classic Biryani | Manchester, NH',
    description: 'Visit us at 484 South Main Street, Manchester, NH for authentic Halal Indian cuisine.',
    images: ['/images/og-image.webp'],
  },
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            name: "Classic Biryani Kabab & Curry",
            alternateName: "The Classic Biryani",
            image: "https://theclassicbiryani.com/images/og-image.webp",
            url: "https://theclassicbiryani.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "484 South Main Street",
              addressLocality: "Manchester",
              addressRegion: "NH",
              postalCode: "03102",
              addressCountry: "US"
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "42.9756146",
              longitude: "-71.4793305"
            },
            telephone: "+1-603-206-5203",
            email: "classicbkc@gmail.com",
            servesCuisine: ["Indian", "Hyderabadi", "Halal"],
            priceRange: "$$",
            acceptsReservations: true,
            sameAs: [
              "https://www.facebook.com/Classicbkc/",
              "https://www.instagram.com/classicbkc/"
            ]
          })
        }}
      />
      <Navbar />

      {/* Spacer to push content below sticky navbar */}
      <div className="h-[90px] lg:h-[100px] bg-primary-black" />

      <main className="flex-1 bg-primary-black">
        {/* Banner Section */}
        <section className="relative py-12 md:py-16 bg-secondary-black overflow-hidden bg-islamic-pattern">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.03)_0%,transparent_80%)] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 md:px-8 text-center relative z-10">
            <span className="font-cormorant text-lg italic text-royal-gold uppercase tracking-widest block mb-2">
              Visit Classic Biryani Kabab & Curry in Manchester, NH
            </span>
          <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-ivory">
              Get Directions, Contact Us &amp; Reserve Your Table</h1>
             <p className="font-plus-jakarta text-xs text-ivory/60 mt-3 max-w-3xl mx-auto">
               Visit Classic Biryani Kabab & Curry at 484 South Main Street, Manchester, NH, for authentic{' '}
               <Link href="/menu" className="text-royal-gold hover:underline font-semibold">
                 Hyderabadi Dum Biryani
               </Link>
               ,{' '}
               <Link href="/about" className="text-royal-gold hover:underline font-semibold">
                 Hand Zabiha Halal Indian cuisine
               </Link>
               , dine-in, takeout, delivery, and{' '}
               <Link href="/catering" className="text-royal-gold hover:underline font-semibold">
                 catering
               </Link>
               . Have a question? Our friendly team is here to help.
             </p>
          </div>
        </section>

        {/* Contact info and Form */}
        <section className="py-20 max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            {/* Left Column: Details */}
            <div className="lg:col-span-6 flex flex-col gap-8">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ContactInfoCard
                  iconName="MapPin"
                  title="Restaurant Address"
                  description="484 South Main Street, Manchester, NH 03102"
                  href="https://maps.app.goo.gl/iQD5heWAsnbmjP8Z8"
                />

                <ContactInfoCard
                  iconName="Phone"
                  title="Call Our Restaurant"
                  description="+1 603-206-5203"
                  href="tel:+16032065203"
                />

                <ContactInfoCard
                  iconName="Mail"
                  title="Email Us"
                  description="classicbkc@gmail.com"
                  href="mailto:classicbkc@gmail.com"
                />

                <ContactInfoCard
                  iconName="Clock"
                  title="Business Hours"
                  description="Mon, Wed - Sun: 12:00 PM - 12:00 AM | Tue: Closed"
                />
              </div>

              <p className="text-sm text-ivory/70 leading-relaxed">
                Open six days a week for dine-in, takeout, delivery, and catering throughout Manchester and nearby communities. We are closed on Tuesdays.
              </p>
            </div>

            {/* Right Column: Message Form */}
            <div className="lg:col-span-6">
              <ContactForm />
            </div>

          </div>
        </section>

        {/* Full Width Map Section */}
        <section className="pb-20 max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="h-[400px] rounded-3xl overflow-hidden border border-royal-gold/15 shadow-gold-glow bg-secondary-black relative">
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
        </section>
      </main>

      <Footer />
    </>
  );
}
