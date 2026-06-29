import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms of Service | The Classic Biryani',
  description:
    'Read the terms of service governing dine-in, takeaway, online ordering, and catering event deposits at The Classic Biryani in Manchester, NH.',
  openGraph: {
    title: 'Terms of Service | The Classic Biryani',
    description: 'Terms of service for The Classic Biryani restaurant in Manchester, NH.',
    url: 'https://theclassicbiryani.com/terms',
    siteName: 'The Classic Biryani',
  },
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <div className="h-[90px] lg:h-[100px] bg-primary-black" />
      <main className="flex-1 bg-primary-black py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-8 bg-secondary-black border border-royal-gold/10 p-8 md:p-12 rounded-3xl shadow-gold-glow font-plus-jakarta text-sm text-ivory/80 leading-relaxed">
          <h1 className="font-playfair text-3xl font-bold text-royal-gold mb-6 border-b border-royal-gold/15 pb-4">
            Terms of Service
          </h1>
          <p className="mb-6">
            Effective Date: June 17, 2026
          </p>
          <p className="mb-6">
            Welcome to the website of Classic Biryani Kabab & Curry. By using this website, you agree to comply with and be bound by the following terms of use.
          </p>

          <h2 className="font-playfair text-lg font-bold text-royal-gold mt-8 mb-4">
            1. Dining and Ordering Policies
          </h2>
          <p className="mb-6">
            All prices listed on our website are in USD and are subject to change. Online order placements link out to verified third-party partners. We are not responsible for delivery delays or payment processing issues caused by external platforms.
          </p>

          <h2 className="font-playfair text-lg font-bold text-royal-gold mt-8 mb-4">
            2. Catering Reservations
          </h2>
          <p className="mb-4">
            Catering services are secured only when:
          </p>
          <ul className="list-disc list-inside flex flex-col gap-2 mb-6 ml-4">
            <li>The custom menu package and guest details are agreed upon in writing.</li>
            <li>A non-refundable deposit (typically 25% of the total amount) is received by the restaurant.</li>
          </ul>

          <h2 className="font-playfair text-lg font-bold text-royal-gold mt-8 mb-4">
            3. Intellectual Property
          </h2>
          <p className="mb-6">
            All elements on this site—including text, branding, graphics, icons, and page layouts—are properties of Classic Biryani Kabab & Curry and may not be copied, reproduced, or distributed without permission.
          </p>

          <h2 className="font-playfair text-lg font-bold text-royal-gold mt-8 mb-4">
            4. Limitation of Liability
          </h2>
          <p className="mb-6">
            In no event shall Classic Biryani Kabab & Curry be held liable for any damages arising out of the use or inability to use this website.
          </p>

          <h2 className="font-playfair text-lg font-bold text-royal-gold mt-8 mb-4">
            5. Modifications
          </h2>
          <p>
            We reserve the right to revise these terms at any time. Your continued use of the website following any changes signifies your agreement to the updated terms.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
