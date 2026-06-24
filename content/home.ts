import { WhyChooseUsItem, FeaturedVideo } from '@/types';

export const heroContent = {
  title: 'Experience the Royal Taste of Hyderabad',
  subtitle: 'Authentic Dum Biryanis, Flavorful Kababs, Rich Curries and Exceptional Catering Crafted with Passion.',
  primaryCTA: {
    text: 'Order Online',
    link: 'https://ordering-platform.example.com/classic-biryani-manchester' // Placeholder URL for external orders
  },
  secondaryCTA: {
    text: 'Explore Menu',
    link: '/menu'
  },
  backgroundImage: '/images/hero/hyderabadi-biryani-banner.webp'
};

export const aboutPreviewContent = {
  title: 'A Tradition of Flavor, Crafted with Passion',
  subtitle: 'The Royal Taste of Hyderabad',
  description: 'Classic Biryani Kabab & Curry brings the authentic flavors of Hyderabad to Manchester, New Hampshire. Inspired by generations of culinary tradition, we serve aromatic dum biryanis, succulent kababs, rich curries, and unforgettable catering experiences.',
  features: [
    { title: 'Authentic Hyderabadi Heritage', desc: 'Crafted following original Nizami royal recipes.' },
    { title: 'Passion for Quality', desc: 'Hand-selected spices ground daily for unmatched freshness.' },
    { title: '100% Halal Commitment', desc: 'All meats are sourced from certified Halal providers and prepared with integrity.' }
  ],
  image: '/images/about/charminar.png'
};

export const whyChooseUsItems: WhyChooseUsItem[] = [
  {
    id: 'authentic-recipes',
    iconName: 'ChefHat',
    title: 'Authentic Recipes',
    description: ''
  },
  {
    id: 'halal',
    iconName: 'ShieldCheck',
    title: '100 % Halal',
    description: ''
  },
  {
    id: 'fresh-ingredients',
    iconName: 'Sprout',
    title: 'Fresh Ingredients',
    description: ''
  },
  {
    id: 'catering-experts',
    iconName: 'Utensils',
    title: 'Catering Experts',
    description: ''
  }
];

export const featuredVideos: FeaturedVideo[] = [
  {
    id: 'cooking-art',
    youtubeId: 'MViYP2G8ULk'
  },
  {
    id: 'royal-heritage',
    youtubeId: 'FdZdW7SPa7U'
  }
];
