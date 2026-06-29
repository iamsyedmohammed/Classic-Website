import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy | The Classic Biryani',
  description:
    'Understand how The Classic Biryani handles and protects your personal data from inquiry forms and cookies.',
  openGraph: {
    title: 'Privacy Policy | The Classic Biryani',
    description: 'How The Classic Biryani in Manchester, NH handles your personal data.',
    url: 'https://theclassicbiryani.com/privacy',
    siteName: 'The Classic Biryani',
  },
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <div className="h-[90px] lg:h-[100px] bg-primary-black" />
      <main className="flex-1 bg-primary-black py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-8 bg-secondary-black border border-royal-gold/10 p-8 md:p-12 rounded-3xl shadow-gold-glow font-plus-jakarta text-sm text-ivory/80 leading-relaxed">
          <h1 className="font-playfair text-3xl font-bold text-royal-gold mb-6 border-b border-royal-gold/15 pb-4">
            Privacy Policy
          </h1>
          <p className="mb-6">
            Effective Date: June 17, 2026
          </p>
          <p className="mb-6">
            At Classic Biryani Kabab & Curry, we respect your privacy and are committed to protecting any personal information you share with us. This policy details how we gather, utilize, and protect data when you visit our website or submit inquiries.
          </p>
          
          <h2 className="font-playfair text-lg font-bold text-royal-gold mt-8 mb-4">
            1. Information We Collect
          </h2>
          <p className="mb-4">
            We collect personal information that you provide directly to us when filling out our forms:
          </p>
          <ul className="list-disc list-inside flex flex-col gap-2 mb-6 ml-4">
            <li>Contact details such as name, email address, and phone number.</li>
            <li>Event details including event date, guest count, and catering menu preferences.</li>
            <li>Any custom messages or queries submitted via our contact forms.</li>
          </ul>

          <h2 className="font-playfair text-lg font-bold text-royal-gold mt-8 mb-4">
            2. How We Use Your Information
          </h2>
          <p className="mb-6">
            We use your information exclusively to respond to your catering or feedback requests, process online orders, and coordinate event arrangements. We do not sell or lease your personal details to third parties.
          </p>

          <h2 className="font-playfair text-lg font-bold text-royal-gold mt-8 mb-4">
            3. Cookies and Tracking
          </h2>
          <p className="mb-6">
            This site uses basic analytics tracking tools (such as Google Analytics) to monitor website performance and improve user experience. These tools collect anonymous traffic logs and do not access private customer details.
          </p>

          <h2 className="font-playfair text-lg font-bold text-royal-gold mt-8 mb-4">
            4. Security
          </h2>
          <p className="mb-6">
            We enforce standard industry security measures to guard your information against unauthorized access, loss, or alteration.
          </p>

          <h2 className="font-playfair text-lg font-bold text-royal-gold mt-8 mb-4">
            5. Contact Us
          </h2>
          <p>
            If you have questions about this policy, please reach out to us at:
            <br /><strong className="text-royal-gold">Classic Biryani Kabab & Curry</strong>
            <br />484 South Main Street, Manchester, NH 03102
            <br />Phone: (603) 555-0199
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
