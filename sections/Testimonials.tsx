'use client';

import React from 'react';
import { testimonials } from '@/content/testimonials';
import SectionHeading from '@/components/SectionHeading';
import { Star, Quote, MessageSquarePlus, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TestimonialsSection() {
  // Take the first three reviews to display next to each other
  const displayTestimonials = testimonials.slice(0, 3);

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
  };

  return (
    <section className="py-24 bg-primary-black relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-islamic-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <SectionHeading
          title="Loved by Our Guests"
          subtitle="Serving memorable experiences, one dish at a time"
        />

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
        >
          {displayTestimonials.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              className="bg-secondary-black/40 backdrop-blur-md border border-royal-gold/15 p-8 rounded-3xl shadow-gold-glow flex flex-col justify-between hover:border-royal-gold/35 hover:scale-[1.02] transition-all duration-300 relative group"
            >
              {/* Background Quote Icon */}
              <div className="absolute top-6 right-6 text-royal-gold/10 group-hover:text-royal-gold/20 transition-colors duration-300 pointer-events-none">
                <Quote size={40} className="fill-current" />
              </div>

              <div className="flex-1 flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 text-royal-gold mb-6">
                  {Array.from({ length: item.rating }).map((_, idx) => (
                    <Star key={idx} size={18} fill="currentColor" className="stroke-[1.5]" />
                  ))}
                </div>

                {/* Review text */}
                <p className="font-cormorant text-lg md:text-xl italic text-ivory/90 leading-relaxed mb-8 select-text flex-1">
                  &ldquo;{item.review}&rdquo;
                </p>
              </div>

              {/* User details */}
              <div className="pt-6 border-t border-royal-gold/10">
                <h4 className="font-playfair text-base font-bold tracking-wide text-royal-gold">
                  {item.name}
                </h4>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs font-plus-jakarta text-ivory/50">
                    {item.date}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-royal-gold/40" />
                  <span className="text-xs font-plus-jakarta text-royal-gold font-medium uppercase tracking-wider">
                    {item.source}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-16"
        >
          <a
            href="https://www.google.com/search?sxsrf=ANbL-n6RstMwmX-n3BbONo6P3hP2ZtLYQQ:1781709426307&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOT0YtTIA38XETXZCm6PgpKmQ8ZlpUaCw_ydUTnuZw8iOhxIeoHGFn_ldRpOiySqkwtFTARoyZQ0PzK0quwvGFihcIkx13Ze4EHbRvHNIPUTNnsGWDQ%3D%3D&q=Classic+Biryani+Kabab+%26+Curry+Reviews#lrd=0x89e2499659b6d303:0x46ebf88b653995d2,3,,,,"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-plus-jakarta text-xs font-bold uppercase tracking-wider py-4 px-8 rounded-full bg-royal-gold text-primary-black hover:bg-light-gold hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto shadow-gold-glow/20 flex items-center gap-2"
          >
            <span>Add a Review</span>
            <MessageSquarePlus size={16} className="stroke-[2]" />
          </a>
          <a
            href="https://www.google.com/maps/place/Classic+Biryani+Kabab+%26+Curry/@42.9756146,-149.5262055,3z/data=!4m12!1m2!2m1!1sClassic+Biryani+Kebab+and+Curry!3m8!1s0x89e2499659b6d303:0x46ebf88b653995d2!8m2!3d42.9756146!4d-71.4793305!9m1!1b1!15sCh9DbGFzc2ljIEJpcnlhbmkgS2ViYWIgYW5kIEN1cnJ5WiEiH2NsYXNzaWMgYmlyeWFuaSBrZWJhYiBhbmQgY3VycnmSARFpbmRpYW5fcmVzdGF1cmFudJoBJENoZERTVWhOTUc5blMwVlFabUl4WkZSZmFrcGhOVEpCUlJBQuABAPoBBAgAEEM!16s%2Fg%2F11q2qwrspc?entry=ttu&g_ep=EgoyMDI2MDYxMy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden inline-flex items-center justify-center font-plus-jakarta text-xs font-bold uppercase tracking-wider py-4 px-8 rounded-full border border-royal-gold/40 text-royal-gold hover:text-primary-black transition-colors duration-300 w-full sm:w-auto group"
          >
            {/* Sliding background */}
            <span className="absolute inset-0 w-full h-full bg-royal-gold -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out origin-left z-0" />
            
            {/* Content */}
            <span className="relative z-10 flex items-center gap-2">
              <span>View More Reviews</span>
              <ArrowUpRight size={16} className="stroke-[2]" />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

