'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import { Plus, Minus } from 'lucide-react';
import Link from 'next/link';

interface FAQ {
  question: string;
  answer: React.ReactNode;
}

const faqs: FAQ[] = [
  {
    question: "Is all your food Hand Zabiha Halal?",
    answer: "Yes, 100% of our meats are certified Hand Zabiha Halal. We strictly source from HMS-certified vendors to ensure absolute compliance and quality for our community."
  },
  {
    question: "Do you offer catering for weddings and private events?",
    answer: (
      <span>
        Absolutely! We specialize in premium Nizami wedding catering, corporate events, Nikah ceremonies, and family gatherings in Manchester and Southern NH. Learn more and inquire on our dedicated{" "}
        <Link href="/catering" className="text-royal-gold hover:underline font-bold">
          Catering Page
        </Link>
        .
      </span>
    )
  },
  {
    question: "Do you have vegetarian and gluten-free choices?",
    answer: (
      <span>
        Yes, we offer a large selection of vegetarian curries, appetizers, and sides. Most of our main curries and biryanis are also naturally gluten-free. Explore all options on our full{" "}
        <Link href="/menu" className="text-royal-gold hover:underline font-bold">
          Menu Page
        </Link>
        .
      </span>
    )
  },
  {
    question: "Do you offer takeout and delivery?",
    answer: "Yes, we provide both quick takeout and home delivery options. You can order online directly or call us to place your order."
  },
  {
    question: "What makes your Hyderabadi Dum Biryani authentic?",
    answer: "We cook our biryani using the traditional Dum Pukht process, sealing the pot with dough so the fragrant long-grain basmati rice and spiced meats slow-cook in their own steam and juices."
  }
];

export default function HomeFAQs() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-primary-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-islamic-pattern opacity-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Answers to common questions about our food, catering, and services"
        />

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIdx === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-royal-gold/15 bg-secondary-black/50 overflow-hidden transition-colors duration-300 hover:border-royal-gold/30"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-playfair font-bold text-base md:text-lg text-ivory hover:text-royal-gold transition-colors duration-200 focus:outline-none cursor-pointer"
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <Minus className="w-5 h-5 text-royal-gold flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-royal-gold flex-shrink-0" />
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-5 pt-1 font-plus-jakarta text-sm text-zinc-300 leading-relaxed border-t border-royal-gold/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
