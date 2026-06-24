export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'biryanis' | 'appetizers' | 'kababs' | 'curries' | 'indo-chinese' | 'desserts';
  spiceLevel?: 'mild' | 'medium' | 'hot' | 'none';
  popular: boolean;
  vegetarian: boolean;
  dietary?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  review: string;
  image?: string;
  source: 'Google Reviews' | 'Yelp' | 'TripAdvisor' | 'Facebook';
  date?: string;
}

export interface WhyChooseUsItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
}

export interface FeaturedVideo {
  id: string;
  title?: string;
  description?: string;
  youtubeId: string;
}

export interface CateringPackage {
  id: string;
  name: string;
  price?: string;
  description: string;
  items: string[];
}

export interface CateringOccasion {
  id: string;
  title: string;
  description: string;
  image: string;
  suitableFor: string[];
}

export interface GalleryItem {
  id: string;
  image: string;
  category: 'food' | 'interior' | 'events' | 'desserts' | 'catering';
  alt: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'catering' | 'menu' | 'delivery';
}
