import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import CateringCard from '@/components/CateringCard';
import FAQAccordion from '@/components/FAQAccordion';
import CateringForm from '@/components/CateringForm';
import { cateringIntro, cateringOccasions, cateringPackages, cateringFAQs } from '@/content/catering';
import { Phone, Users, Calendar, Award } from 'lucide-react';

export const metadata = {
  title: 'Indian Catering Services | Manchester NH',
  description: 'Elevate your weddings, Nikahs, birthdays, and corporate events with authentic Hyderabadi catering from Classic Biryani in Manchester, NH. Request a quote.',
};

export default function CateringPage() {
  return (
    <>
      <Navbar />
      
      {/* Spacer to push content below sticky navbar */}
      <div className="h-[120px] bg-primary-black" />

      <main className="flex-1 bg-primary-black">
        {/* Banner Section */}
        <section className="relative py-20 bg-secondary-black overflow-hidden bg-islamic-pattern">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.03)_0%,transparent_80%)] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 md:px-8 text-center relative z-10">
            <span className="font-cormorant text-lg italic text-royal-gold uppercase tracking-widest block mb-2">
              Mehmaan Nawazi
            </span>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold tracking-wide text-ivory">
              Royal Catering Services
            </h1>
            <p className="font-plus-jakarta text-base text-zinc-300 mt-3 max-w-xl mx-auto">
              Bringing Hyderabad&apos;s rich culinary heritage and premium banquet hospitality to your events across New Hampshire.
            </p>
          </div>
        </section>

        {/* Occasions / We Cater For */}
        <section className="py-20 max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <SectionHeading
            title="Occasions We Cater"
            subtitle="Perfect presentation for your special days"
          />

          <div className="flex flex-col gap-10">
            {cateringOccasions.map((occasion) => (
              <CateringCard key={occasion.id} occasion={occasion} />
            ))}
          </div>
        </section>

        {/* Popular Packages Section */}
        <section className="py-20 bg-secondary-black/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-islamic-pattern opacity-5 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
            <SectionHeading
              title="Curated Catering Packages"
              subtitle="Designed to suit different tastes and gatherings"
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
              {cateringPackages.map((pack) => (
                <div
                  key={pack.id}
                  className="flex flex-col bg-primary-black border border-royal-gold/15 rounded-3xl p-8 shadow-gold-glow hover:border-royal-gold/30 transition-all duration-300"
                >
                  <h3 className="font-playfair text-xl font-bold text-royal-gold mb-2">
                    {pack.name}
                  </h3>
                  <span className="font-plus-jakarta text-sm font-semibold text-zinc-400 uppercase tracking-widest mb-4">
                    {pack.price}
                  </span>
                  <p className="font-plus-jakarta text-base text-zinc-300 leading-relaxed mb-6 border-b border-royal-gold/10 pb-4">
                    {pack.description}
                  </p>

                  <ul className="flex-1 flex flex-col gap-3 font-plus-jakarta text-base text-zinc-200">
                    {pack.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rotate-45 bg-royal-gold shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Micro details banner */}
            <div className="max-w-4xl mx-auto p-8 md:p-10 rounded-3xl border border-royal-gold/20 bg-secondary-black/60 backdrop-blur-md shadow-gold-glow flex flex-col md:flex-row gap-8 justify-between items-center text-center md:text-left hover:border-royal-gold/40 transition-colors duration-300">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-5">
                <div className="p-3.5 bg-royal-gold/10 text-royal-gold rounded-full border border-royal-gold/25 shrink-0">
                  <Award size={36} className="stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="font-playfair text-xl font-bold text-royal-gold tracking-wide mb-2">
                    Custom Menu Adaptations
                  </h4>
                  <p className="font-plus-jakarta text-base text-zinc-200 leading-relaxed max-w-xl">
                    Don&apos;t see exactly what you want? We can customize any package or introduce custom dishes tailored to your guests&apos; requirements.
                  </p>
                </div>
              </div>
              <a
                href="tel:6035550199"
                className="shrink-0 font-plus-jakarta text-xs font-bold uppercase tracking-wider py-4 px-8 rounded-full bg-royal-gold text-primary-black hover:bg-light-gold transition-all duration-300 hover:scale-[1.02] shadow-gold-glow cursor-pointer"
              >
                Call to Discuss
              </a>
            </div>
          </div>
        </section>

        {/* Lead Capture Form & FAQ Grid */}
        <section id="inquiry-form" className="py-20 max-w-7xl mx-auto px-6 md:px-8 relative z-10 scroll-mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column: Form */}
            <div className="lg:col-span-7">
              <CateringForm />
            </div>

            {/* Right Column: FAQ info */}
            <div className="lg:col-span-5">
              <h2 className="font-playfair text-xl md:text-2xl font-bold tracking-wide text-royal-gold mb-4 uppercase">
                Catering FAQs
              </h2>
              <p className="font-plus-jakarta text-base text-zinc-300 mb-8 leading-relaxed">
                Everything you need to know about booking catering services with Classic Biryani. For urgent questions, call our coordinator directly.
              </p>

              <div className="flex flex-col">
                {cateringFAQs.map((faq) => (
                  <FAQAccordion key={faq.id} question={faq.question} answer={faq.answer} />
                ))}
              </div>

              {/* Direct manager card */}
              <div className="mt-12 p-6 rounded-3xl border border-royal-gold/10 bg-secondary-black flex items-start gap-4">
                <div className="p-3 rounded-full bg-royal-gold/10 text-royal-gold">
                  <Phone size={24} className="stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="font-playfair text-sm font-bold text-royal-gold uppercase">Direct Catering Hotline</h4>
                  <p className="font-plus-jakarta text-base text-zinc-300 mt-1 leading-relaxed">
                    Have questions about specific menu details, custom quotes, or checking date availability? Speak directly to our chef or catering manager.
                  </p>
                  <a href="tel:6035550199" className="inline-block mt-3 font-plus-jakarta text-sm font-bold text-royal-gold hover:underline">
                    (603) 555-0199
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
