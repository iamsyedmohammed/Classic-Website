import React from 'react';
import { testimonials } from '@/content/testimonials';
import { cateringFAQs } from '@/content/catering';

export default function JsonLd() {
  const restaurantSchema = {
    '@context': 'https://schema.org',
    '@type': ['Restaurant', 'LocalBusiness'],
    '@id': 'https://classicbiryaninh.com/#restaurant',
    'name': 'Classic Biryani Kabab & Curry',
    'image': 'https://classicbiryaninh.com/images/og-image.webp',
    'priceRange': '$$',
    'telephone': '(603) 555-0199',
    'url': 'https://classicbiryaninh.com',
    'hasMenu': 'https://classicbiryaninh.com/menu',
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
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        'opens': '11:00',
        'closes': '22:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Friday', 'Saturday'],
        'opens': '11:00',
        'closes': '23:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': 'Sunday',
        'opens': '12:00',
        'closes': '21:30'
      }
    ],
    'sameAs': [
      'https://www.facebook.com/Classicbkc/',
      'https://www.instagram.com/classicbkc/'
    ]
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://classicbiryaninh.com/#organization',
    'name': 'Classic Biryani Kabab & Curry',
    'url': 'https://classicbiryaninh.com',
    'logo': 'https://classicbiryaninh.com/images/logo.png',
    'sameAs': [
      'https://www.facebook.com/Classicbkc/',
      'https://www.instagram.com/classicbkc/'
    ]
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
        'item': 'https://classicbiryaninh.com'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Menu',
        'item': 'https://classicbiryaninh.com/menu'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': 'Catering',
        'item': 'https://classicbiryaninh.com/catering'
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
