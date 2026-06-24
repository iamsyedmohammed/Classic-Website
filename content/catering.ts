import { CateringPackage, CateringOccasion, FAQItem } from '@/types';

export const cateringIntro = {
  title: 'Celebrate with the Spirit of Mehmaan Nawazi',
  description: 'From intimate family gatherings to grand wedding celebrations, our custom catering services bring the rich culinary heritage of Hyderabad straight to your special occasions. We handle setup, display, and service with royal standards.',
  ctaText: 'Request Catering Quote',
  phoneCTA: 'Call Catering Manager: (603) 555-0199' // Representative local NH phone
};

export const cateringOccasions: CateringOccasion[] = [
  {
    id: 'weddings',
    title: 'Weddings & Walimas',
    description: 'Provide your guests with a royal feast worthy of Nizam heritage. Elegant presentations, premium buffet setups, and live station options.',
    image: '/images/catering/wedding-catering-manchester-nh.png',
    suitableFor: ['Wedding receptions', 'Pre-wedding dinners', 'Walima ceremonies']
  },
  {
    id: 'nikah',
    title: 'Nikah Ceremonies',
    description: 'Celebrate your sacred vows with fully Halal, traditional food, styled beautifully and served with warmth and hospitality.',
    image: '/images/catering/nikah-catering-manchester-nh.png',
    suitableFor: ['Nikah ceremonies', 'Intimate family dinners', 'Engagement parties']
  },
  {
    id: 'corporate',
    title: 'Corporate Banquets',
    description: 'Impress clients and reward teams with a unique, flavor-packed dining experience. Seamless timing, hot delivery, and professional service.',
    image: '/images/catering/corporate-catering-manchester-nh.png',
    suitableFor: ['Office parties', 'Seminars', 'Client appreciation dinners']
  },
  {
    id: 'birthdays',
    title: 'Birthdays & Milestones',
    description: 'Joyful family milestones deserve extraordinary taste. Customizable menus featuring kid-friendly and spicy delicacies alike.',
    image: '/images/catering/birthday-catering-manchester-nh.webp',
    suitableFor: ['Birthday parties', 'Anniversaries', 'Graduation celebrations']
  },
  {
    id: 'eid',
    title: 'Eid & Community Gatherings',
    description: 'Celebrate blessed festive gatherings with our specialty Eid menus, featuring authentic Sheer Khurma and bulk Biryani trays.',
    image: '/images/catering/eid-catering-manchester-nh.webp',
    suitableFor: ['Eid-ul-Fitr', 'Eid-ul-Adha', 'Community banquets', 'Iftar gatherings']
  }
];

export const cateringPackages: CateringPackage[] = [
  {
    id: 'nizami-shahi-feast',
    name: 'Nizami Shahi Banquet',
    price: 'Starting at $25.99 / guest',
    description: 'The ultimate royal experience, highlighting our traditional Dum Biryanis and premium kababs.',
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
    name: 'Deccan Delight (Popular)',
    price: 'Starting at $19.99 / guest',
    description: 'Perfect for family get-togethers and casual celebrations. Flavorful, rich, and customizable.',
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
    name: 'Biryani Express Trays',
    price: 'Starting at $120 / large tray',
    description: 'Convenient drop-off catering trays. Fully packaged and hot, ready to feed hungry crowds.',
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
    question: 'What is the minimum guest count for full-service catering?',
    answer: 'Our full-service packages (with chaffing dishes and servers) require a minimum of 25 guests. For smaller groups under 20, we recommend our hot drop-off Biryani Express Trays.',
    category: 'catering'
  },
  {
    id: 'faq-3',
    question: 'How far in advance do we need to book?',
    answer: 'We request at least 7 days notice for standard gatherings. For weddings, Nikah ceremonies, or larger events over 150 guests, we suggest booking at least 3-4 weeks in advance to ensure date availability.',
    category: 'catering'
  },
  {
    id: 'faq-4',
    question: 'Can you customize the spice levels for catering events?',
    answer: 'Absolutely. We can adjust the heat level for each dish (Mild, Medium, Hot) to suit your guests\' preferences. We also offer distinct vegetarian, vegan, and gluten-free options.',
    category: 'catering'
  },
  {
    id: 'faq-5',
    question: 'Do you charge a delivery or setup fee in Manchester, NH?',
    answer: 'Delivery within Manchester is free for orders over $200. For surrounding areas in New Hampshire (Nashua, Concord, etc.), a small distance-based delivery and setup fee is applied.',
    category: 'catering'
  }
];
