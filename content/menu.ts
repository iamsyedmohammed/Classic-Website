import { MenuItem } from '@/types';

export const menuItems: MenuItem[] = [
  {
    id: 'goat-saffron-dum-biryani',
    name: 'Goat Special Saffron Dum Biryani',
    description: 'Slow-cooked basmati rice with tender goat, infused with pure saffron and royal Nizami spices.',
    price: 19.99,
    image: '/images/menu/goat-biryani-manchester-nh.webp',
    category: 'biryanis',
    spiceLevel: 'hot',
    popular: true,
    vegetarian: false,
    dietary: ['Halal', 'Gluten-Free']
  },
  {
    id: 'lamb-biryani',
    name: 'Lamb Biryani',
    description: 'Aromatic basmati rice layered with succulent pieces of lamb, fried onions, and fresh mint.',
    price: 16.99,
    image: '/images/menu/lamb dun Biryani.jpg',
    category: 'biryanis',
    spiceLevel: 'medium',
    popular: true,
    vegetarian: false,
    dietary: ['Halal', 'Gluten-Free']
  },
  {
    id: 'chicken-dum-biryani',
    name: 'Chicken Dum Biryani',
    description: 'Fragrant long-grain basmati rice and marinated chicken cooked on slow dum process.',
    price: 16.99,
    image: '/images/menu/chicken-dum-biryani-manchester-nh.webp',
    category: 'biryanis',
    spiceLevel: 'medium',
    popular: true,
    vegetarian: false,
    dietary: ['Halal', 'Gluten-Free']
  },
  {
    id: 'butter-chicken-curry',
    name: 'Butter Chicken Curry',
    description: 'Tender tandoori chicken simmered in a smooth, creamy tomato and butter sauce.',
    price: 16.99,
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&auto=format&fit=crop&q=80',
    category: 'curries',
    spiceLevel: 'mild',
    popular: true,
    vegetarian: false,
    dietary: ['Halal', 'Gluten-Free']
  },
  {
    id: 'beef-saag',
    name: 'Beef Saag',
    description: 'Tender beef cubes cooked with fresh spinach, garlic, ginger, and aromatic spices.',
    price: 17.99,
    image: '/images/menu/beef-saag.jpg',
    category: 'curries',
    spiceLevel: 'medium',
    popular: true,
    vegetarian: false,
    dietary: ['Halal', 'Gluten-Free']
  },
  {
    id: 'ghee-roast-goat-fry',
    name: 'Ghee Roast Goat Fry',
    description: 'Juicy goat pieces dry-roasted in pure ghee with a rich blend of South Indian ground spices.',
    price: 18.99,
    image: '/images/menu/Ghee Roast Lamb Dry.jpeg',
    category: 'appetizers',
    spiceLevel: 'hot',
    popular: true,
    vegetarian: false,
    dietary: ['Halal']
  },
  {
    id: 'chicken-biryani-rice-only',
    name: 'Chicken Biryani Rice Only',
    description: 'Flavored and aromatic biryani rice cooked with chicken stock, served without meat pieces.',
    price: 10.99,
    image: '/images/menu/chicken-biryani-rice.jpg',
    category: 'biryanis',
    spiceLevel: 'medium',
    popular: true,
    vegetarian: false,
    dietary: ['Halal', 'Gluten-Free']
  },
  {
    id: 'chicken-lollipop',
    name: 'Chicken Lollipop',
    description: 'Crispy, drumette chicken wings marinated in Indo-Chinese spices and deep-fried.',
    price: 15.99,
    image: '/images/menu/Lollipop 6.jpeg',
    category: 'appetizers',
    spiceLevel: 'medium',
    popular: true,
    vegetarian: false,
    dietary: ['Halal']
  },
  {
    id: 'paneer-butter-masala',
    name: 'Paneer Butter Masala',
    description: 'Rich, creamy tomato gravy loaded with soft paneer cubes, butter, and cream.',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&auto=format&fit=crop&q=80',
    category: 'curries',
    spiceLevel: 'mild',
    popular: true,
    vegetarian: true,
    dietary: ['Vegetarian', 'Gluten-Free']
  }
];
