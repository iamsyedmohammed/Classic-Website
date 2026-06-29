import { WhyChooseUsItem, FeaturedVideo } from '@/types';

export const heroContent = {
  title: 'Experience the Royal Taste of Hyderabad',
  subtitle: 'Experience the Royal Taste of Hyderabad with authentic Hyderabadi Dum Biryani, flavorful Indian Kababs, rich curries, and 100% Halal Indian cuisine in Manchester, NH.',
  primaryCTA: {
    text: 'Order Online',
    link: 'https://ordering-platform.example.com/classic-biryani-manchester'
  },
  secondaryCTA: {
    text: 'Explore Menu',
    link: '/menu'
  },
  backgroundImage: '/images/hero/hyderabadi-biryani-banner.webp'
};

export const aboutPreviewContent = {
  title: 'Authentic Hyderabadi Cuisine | Classic Biryani Manchester NH',
  subtitle: 'The Royal Taste of Hyderabad',
  description: 'Classic Biryani Kabab & Curry brings the authentic flavors of Hyderabad to Manchester, New Hampshire. Inspired by generations of culinary tradition, we prepare every meal with traditional Dum cooking methods. As a family-friendly Indian restaurant on South Main Street Manchester, we are dedicated to serving Halal Indian food crafted from fresh ground spices, premium ingredients, and genuine hospitality.',
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
