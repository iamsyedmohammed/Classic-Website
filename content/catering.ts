import { CateringPackage, CateringOccasion, FAQItem } from '@/types';

export const cateringIntro = {
  title: 'Celebrate with the Spirit of Mehmaan Nawazi',
  description: 'From intimate family gatherings to grand wedding celebrations, our custom catering services bring the rich culinary heritage of Hyderabad straight to your special occasions. We handle setup, display, and service with royal standards.',
  ctaText: 'Request Catering Quote',
  phoneCTA: 'Call Catering Manager: +1 603-206-5203'
};

export const cateringOccasions: CateringOccasion[] = [
  {
    id: 'weddings',
    title: 'Weddings & Walimas',
    description: 'Celebrate your biggest day with authentic Hyderabadi cuisine, elegant presentation, and exceptional hospitality that your guests will remember.',
    image: '/images/catering/wedding-catering-manchester-nh.png',
    suitableFor: ['Wedding receptions', 'Pre-wedding dinners', 'Walima ceremonies']
  },
  {
    id: 'nikah',
    title: 'Nikah Ceremonies',
    description: 'Mark your sacred vows with fully Halal, traditional food, styled beautifully and served with warmth and hospitality.',
    image: '/images/catering/nikah-catering-manchester-nh.png',
    suitableFor: ['Nikah ceremonies', 'Intimate family dinners', 'Engagement parties']
  },
  {
    id: 'corporate',
    title: 'Corporate Banquets',
    description: 'Impress clients and reward teams with a unique, flavor-packed dining experience, seamless timing, and professional service.',
    image: '/images/catering/corporate-catering-manchester-nh.png',
    suitableFor: ['Office parties', 'Seminars', 'Client appreciation dinners']
  },
  {
    id: 'birthdays',
    title: 'Birthdays & Milestones',
    description: 'Make family milestones extraordinary with customizable menus featuring kid-friendly and spicy delicacies alike.',
    image: '/images/catering/birthday-catering-manchester-nh.webp',
    suitableFor: ['Birthday parties', 'Anniversaries', 'Graduation celebrations']
  },
  {
    id: 'eid',
    title: 'Eid & Community Gatherings',
    description: 'Share the blessings of festive gatherings with our specialty Eid menus, featuring authentic Sheer Khurma and bulk Biryani trays.',
    image: '/images/catering/eid-catering-manchester-nh.webp',
    suitableFor: ['Eid-ul-Fitr', 'Eid-ul-Adha', 'Community banquets', 'Iftar gatherings']
  }
];

export const cateringPackages: CateringPackage[] = [
  {
    id: 'nizami-shahi-feast',
    name: 'Nizami Shahi Banquet',
    price: 'Starting at $25.99 / Guest',
    description: 'Best for Weddings & Grand Celebrations. The ultimate royal experience, highlighting our traditional Dum Biryanis and premium kababs.',
    items: [
      'Welcome Drink: Mint Rose Cooler or Mango Lassi',
      'Choice of 2 Appetizers: Chicken 65, Veg Samosas or Paneer 65',
      'Choice of 1 Biryani: Classic Chicken Dum Biryani or Vegetable Dum Biryani',
      'Choice of 1 Gravy: Butter Chicken or Kadai Paneer',
      'Bread: Butter Naan or Garlic Naan',
      'Dessert: Double Ka Meetha or Gulab Jamun with Rabri',
      'Accompaniments: Raita, Salan, and Onion Salad'
    ]
  },
  {
    id: 'deccan-delight',
    name: 'Deccan Delight',
    price: 'Starting at $19.99 / Guest',
    description: 'Most Popular for Family Events. Perfect for family get-togethers and casual celebrations. Flavorful, rich, and customizable.',
    items: [
      'Choice of 1 Appetizer: Chicken 65 or Samosa Chat',
      'Choice of 1 Biryani: Chicken Dum Biryani or Veg Dum Biryani',
      'Choice of 1 Curry: Chicken Tikka Masala or Vegetable Korma',
      'Bread: Fresh Tandoori Naan',
      'Dessert: Gulab Jamun',
      'Accompaniments: Mirchi Ka Salan and Raita'
    ]
  },
  {
    id: 'biryani-express-trays',
    name: 'Biryani Express',
    price: 'Starting at $120 / Tray',
    description: 'Perfect for Office Lunches & Parties. Convenient drop-off catering trays. Fully packaged and hot, ready to feed hungry crowds.',
    items: [
      'Large Tray of Biryani (Serves 15-20 guests): Chicken or Goat (+ $30)',
      'Large Tray of Appetizer: Chicken 65 or Paneer 65',
      'Sides: Raita and Mirchi Ka Salan included',
      'Serving utensils and plates available upon request'
    ]
  }
];

export const cateringFAQs: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Is all your food 100% Halal?',
    answer: 'Yes, all our meats are strictly sourced from certified Halal suppliers, and our preparation processes maintain the highest standards of clean, traditional halal principles.',
    category: 'catering'
  },
  {
    id: 'faq-2',
    question: 'How much food do you recommend per guest?',
    answer: 'For individual portion packages, we calculate generous standard servings. For Express Trays, a single Large Tray of Biryani is designed to feed 15 to 20 guests depending on other sides ordered.',
    category: 'catering'
  },
  {
    id: 'faq-3',
    question: 'Do you provide serving staff?',
    answer: 'Yes, full-service catering is available with professional servers and setup coordinators for events with 50+ guests. Contact us for labor rates and staff availability.',
    category: 'catering'
  },
  {
    id: 'faq-4',
    question: 'Do you offer serving setup?',
    answer: 'Absolutely. We offer complete setup packages including elegant warming chafing dishes, display layouts, table decorations, and serving spoons to ensure a premium look.',
    category: 'catering'
  },
  {
    id: 'faq-5',
    question: 'Can you accommodate food allergies?',
    answer: 'Yes, we can prepare dishes that accommodate nut-free, gluten-free, dairy-free, vegetarian, and vegan dietary needs. Please notify us during the menu customization phase.',
    category: 'catering'
  },
  {
    id: 'faq-6',
    question: 'Are plates and utensils included?',
    answer: 'Plates, napkins, forks, knives, and serving utensils can be included in your catering order for a small per-guest charge, or added to your custom setup package.',
    category: 'catering'
  },
  {
    id: 'faq-7',
    question: 'Do you deliver outside Manchester?',
    answer: 'Yes, we deliver to surrounding areas in New Hampshire (including Nashua, Concord, Bedford, and Hooksett) with a distance-based delivery and setup charge.',
    category: 'catering'
  },
  {
    id: 'faq-8',
    question: 'What is the booking deposit & guest count change policy?',
    answer: 'A 50% deposit is required to secure your booking date. Final guest counts and menu changes must be confirmed at least 5 days prior to your event date.',
    category: 'catering'
  }
];
