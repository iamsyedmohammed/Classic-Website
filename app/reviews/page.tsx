import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import { testimonials } from '@/content/testimonials';
import { Star, MessageSquarePlus } from 'lucide-react';

export const metadata = {
  title: 'Customer Reviews | Classic Biryani Kabab & Curry',
  description: 'Read reviews from our guests in Manchester, NH. Discover why we are recognized as the top Indian restaurant for authentic Hyderabadi Dum Biryani.',
};

export default function ReviewsPage() {
  return (
    <>
      <Navbar />
      
      {/* Spacer to push content below sticky navbar */}
      <div className="h-[120px] bg-primary-black" />

      <main className="flex-1 bg-primary-black min-h-screen">
        {/* Banner Section */}
        <section className="relative py-16 bg-secondary-black overflow-hidden bg-islamic-pattern">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.03)_0%,transparent_80%)] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 md:px-8 text-center relative z-10">
            <span className="font-cormorant text-lg italic text-royal-gold uppercase tracking-widest block mb-2">
              Guest Feedback
            </span>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold tracking-wide text-ivory">
              Loved by Our Guests
            </h1>
            <p className="font-plus-jakarta text-xs text-ivory/60 mt-3 max-w-lg mx-auto">
              Read verified testimonials and Google reviews left by the amazing food loving community of Manchester, New Hampshire.
            </p>
          </div>
        </section>

        {/* Reviews List */}
        <section className="py-16 max-w-5xl mx-auto px-6 md:px-8 relative z-10">
          
          {/* Reviews Grid */}
          <div className="flex flex-col gap-8 mb-16">
            {testimonials.map((test) => (
              <div
                key={test.id}
                className="bg-secondary-black border border-royal-gold/10 hover:border-royal-gold/25 rounded-3xl p-6 md:p-8 shadow-gold-glow flex flex-col md:flex-row gap-6 transition-all duration-300"
              >
                {/* User Initials Placeholder */}
                <div className="w-14 h-14 rounded-full bg-royal-gold/15 text-royal-gold border border-royal-gold/30 flex items-center justify-center font-playfair font-bold text-lg shrink-0">
                  {test.name.split(' ').map((n) => n[0]).join('')}
                </div>

                {/* Review Details */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <h3 className="font-playfair font-bold text-lg text-ivory">
                      {test.name}
                    </h3>
                    
                    {/* Stars */}
                    <div className="flex gap-0.5 text-royal-gold">
                      {Array.from({ length: test.rating }).map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" className="stroke-[1.5]" />
                      ))}
                    </div>
                  </div>

                  <p className="font-plus-jakarta text-sm text-ivory/80 leading-relaxed mb-4 select-text">
                    &ldquo;{test.review}&rdquo;
                  </p>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-plus-jakarta text-ivory/50">
                      Posted on {test.source}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-royal-gold/40" />
                    <span className="text-xs font-plus-jakarta text-royal-gold/80 italic">
                      {test.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action to write review */}
          <div className="bg-secondary-black border border-royal-gold/15 rounded-3xl p-8 text-center flex flex-col items-center shadow-gold-glow">
            <div className="p-3 bg-royal-gold/10 text-royal-gold rounded-full mb-4">
              <MessageSquarePlus size={32} className="stroke-[1.5]" />
            </div>
            <h3 className="font-playfair text-xl font-bold text-royal-gold mb-2 uppercase tracking-wider">
              Share Your Royal Experience
            </h3>
            <p className="font-plus-jakarta text-sm text-ivory/70 leading-relaxed max-w-md mb-6">
              Have you dined at Classic Biryani or hired us for catering? Let us and the community know about your experience by leaving a review on Google!
            </p>
            <a
              href="https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID_HERE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-plus-jakarta text-xs font-bold uppercase tracking-wider py-4 px-8 rounded-full bg-royal-gold text-primary-black hover:bg-light-gold transition-all duration-300 hover:scale-[1.02] shadow-gold-glow cursor-pointer"
            >
              Write Review on Google
            </a>
          </div>

        </section>
      </main>

      <Footer />
    </>
  );
}
