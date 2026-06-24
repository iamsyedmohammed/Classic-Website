'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { featuredVideos } from '@/content/home';
import SectionHeading from '@/components/SectionHeading';

export default function FeaturedVideos() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const }
    }
  };

  return (
    <section className="py-16 md:py-24 bg-primary-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-islamic-pattern opacity-5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <SectionHeading
          title="Our Legacy in Motion"
          subtitle="Experience the craft of royal cooking"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {featuredVideos.map((video) => (
            <motion.div
              key={video.id}
              variants={itemVariants}
              className="flex flex-col h-full bg-secondary-black rounded-3xl border border-royal-gold/10 overflow-hidden shadow-gold-glow hover:border-royal-gold/30 transition-all duration-300"
            >
              {/* Aspect Ratio Container for Responsive Video */}
              <div className="relative aspect-video w-full bg-black overflow-hidden group">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
                  title={video.title || "Featured Video"}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>

              {/* Text details below the video */}
              {(video.title || video.description) && (
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  {video.title && (
                    <h3 className="font-playfair text-xl md:text-2xl font-bold tracking-wide text-ivory mb-3 hover:text-royal-gold transition-colors duration-300">
                      {video.title}
                    </h3>
                  )}
                  {video.description && (
                    <p className="font-plus-jakarta text-sm md:text-base text-zinc-400 leading-relaxed">
                      {video.description}
                    </p>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
