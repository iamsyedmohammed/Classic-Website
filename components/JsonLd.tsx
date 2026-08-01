import React from 'react';
import { testimonials } from '@/content/testimonials';
import { cateringFAQs } from '@/content/catering';

const SITE_URL = 'https://theclassicbiryani.com';
const FACEBOOK_URL = 'https://www.facebook.com/Classicbkc/';
const INSTAGRAM_URL = 'https://www.instagram.com/classicbkc/';
const RESTAURANT_NAME = 'Classic Biryani Kabab & Curry';

export default function JsonLd() {
  const restaurantSchema = {
    '@context': 'https://schema.org',
    '@type': ['Restaurant', 'LocalBusiness'],
    '@id': `${SITE_URL}/#restaurant`,
    'name': RESTAURANT_NAME,
    'alternateName': 'The Classic Biryani',
    'image': `${SITE_URL}/images/og-image.webp`,
    'logo': `${SITE_URL}/images/logo.png`,
    'priceRange': '$$',
    'telephone': '+1-603-206-5203',
    'email': 'classicbkc@gmail.com',
    'url': SITE_URL,
    'hasMenu': `${SITE_URL}/menu`,
    'servesCuisine': ['Indian', 'Hyderabadi', 'Pakistani', 'Halal'],
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '484 South Main Street',
      'addressLocality': 'Manchester',
      'addressRegion': 'NH',
      'postalCode': '03102',
      'addressCountry': 'US'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '42.9756146',
      'longitude': '-71.4793305'
    },
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        'opens': '12:00',
        'closes': '00:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': 'Tuesday',
        'opens': '00:00',
        'closes': '00:00'
      }
    ],
    'sameAs': [FACEBOOK_URL, INSTAGRAM_URL]
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    'name': RESTAURANT_NAME,
    'alternateName': 'The Classic Biryani',
    'url': SITE_URL,
    'logo': `${SITE_URL}/images/logo.png`,
    'sameAs': [FACEBOOK_URL, INSTAGRAM_URL]
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': cateringFAQs.map((faq) => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'Customer Reviews for Classic Biryani',
    'itemListElement': testimonials.map((test, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'item': {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': test.name
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': test.rating,
          'bestRating': '5'
        },
        'reviewBody': test.review,
        'publisher': {
          '@type': 'Organization',
          'name': test.source
        }
      }
    }))
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': SITE_URL
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Menu',
        'item': `${SITE_URL}/menu`
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': 'Catering',
        'item': `${SITE_URL}/catering`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
