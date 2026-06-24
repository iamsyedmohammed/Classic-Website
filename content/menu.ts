import { MenuItem } from '@/types';

export const menuItems: MenuItem[] = [
  // Biryanis
  {
    id: 'chicken-dum-biryani',
    name: 'Classic Chicken Dum Biryani',
    description: '',
    price: 15.99,
    image: '/images/menu/chicken-dum-biryani-manchester-nh.webp',
    category: 'biryanis',
    spiceLevel: 'medium',
    popular: true,
    vegetarian: false,
    dietary: ['Halal', 'Gluten-Free']
  },
  {
    id: 'goat-dum-biryani',
    name: 'Hyderabadi Goat Dum Biryani',
    description: '',
    price: 18.99,
    image: '/images/menu/goat-biryani-manchester-nh.webp',
    category: 'biryanis',
    spiceLevel: 'hot',
    popular: true,
    vegetarian: false,
    dietary: ['Halal', 'Gluten-Free']
  },
  {
    id: 'vegetable-dum-biryani',
    name: 'Royal Vegetable Dum Biryani',
    description: '',
    price: 13.99,
    image: '/images/menu/vegetable-biryani-manchester-nh.webp',
    category: 'biryanis',
    spiceLevel: 'medium',
    popular: false,
    vegetarian: true,
    dietary: ['Vegetarian', 'Gluten-Free']
  },
  {
    id: 'egg-biryani',
    name: 'Spiced Egg Biryani',
    description: '',
    price: 12.99,
    image: '/images/menu/egg-biryani-manchester-nh.webp',
    category: 'biryanis',
    spiceLevel: 'medium',
    popular: false,
    vegetarian: false,
    dietary: ['Halal', 'Gluten-Free']
  },

  // Appetizers
  {
    id: 'chicken-65',
    name: 'Hyderabadi Chicken 65',
    description: '',
    price: 11.99,
    image: '/images/menu/chicken-65-manchester-nh.webp',
    category: 'appetizers',
    spiceLevel: 'hot',
    popular: true,
    vegetarian: false,
    dietary: ['Halal']
  },
  {
    id: 'paneer-65',
    name: 'Crispy Paneer 65',
    description: '',
    price: 10.99,
    image: '/images/menu/paneer-65-manchester-nh.webp',
    category: 'appetizers',
    spiceLevel: 'medium',
    popular: true,
    vegetarian: true,
    dietary: ['Vegetarian']
  },
  {
    id: 'samosa-chat',
    name: 'Delhi Samosa Chat',
    description: '',
    price: 7.99,
    image: '/images/menu/samosa-chat-manchester-nh.webp',
    category: 'appetizers',
    spiceLevel: 'mild',
    popular: false,
    vegetarian: true,
    dietary: ['Vegetarian']
  },

  // Kababs
  {
    id: 'tandoori-chicken',
    name: 'Classic Tandoori Chicken',
    description: '',
    price: 14.99,
    image: '/images/menu/tandoori-chicken-manchester-nh.webp',
    category: 'kababs',
    spiceLevel: 'medium',
    popular: true,
    vegetarian: false,
    dietary: ['Halal', 'Gluten-Free']
  },
  {
    id: 'chicken-tikka-kabab',
    name: 'Succulent Chicken Tikka Kabab',
    description: '',
    price: 13.99,
    image: '/images/menu/chicken-tikka-kabab-manchester-nh.webp',
    category: 'kababs',
    spiceLevel: 'medium',
    popular: false,
    vegetarian: false,
    dietary: ['Halal', 'Gluten-Free']
  },
  {
    id: 'mixed-grill',
    name: 'Royal Mixed Grill Platter',
    description: '',
    price: 21.99,
    image: '/images/menu/mixed-grill-manchester-nh.webp',
    category: 'kababs',
    spiceLevel: 'medium',
    popular: true,
    vegetarian: false,
    dietary: ['Halal', 'Gluten-Free']
  },

  // Curries
  {
    id: 'butter-chicken',
    name: 'Rich Butter Chicken',
    description: '',
    price: 15.99,
    image: '/images/menu/butter-chicken-manchester-nh.webp',
    category: 'curries',
    spiceLevel: 'mild',
    popular: true,
    vegetarian: false,
    dietary: ['Halal', 'Gluten-Free']
  },
  {
    id: 'chicken-tikka-masala',
    name: 'Classic Chicken Tikka Masala',
    description: '',
    price: 15.99,
    image: '/images/menu/chicken-tikka-masala-manchester-nh.webp',
    category: 'curries',
    spiceLevel: 'medium',
    popular: false,
    vegetarian: false,
    dietary: ['Halal', 'Gluten-Free']
  },
  {
    id: 'kadai-paneer',
    name: 'Kadai Paneer Masala',
    description: '',
    price: 14.99,
    image: '/images/menu/kadai-paneer-manchester-nh.webp',
    category: 'curries',
    spiceLevel: 'medium',
    popular: false,
    vegetarian: true,
    dietary: ['Vegetarian', 'Gluten-Free']
  },

  // Indo-Chinese
  {
    id: 'chilli-chicken',
    name: 'Tangy Chilli Chicken',
    description: '',
    price: 13.99,
    image: '/images/menu/chilli-chicken-manchester-nh.webp',
    category: 'indo-chinese',
    spiceLevel: 'hot',
    popular: false,
    vegetarian: false,
    dietary: ['Halal']
  },
  {
    id: 'veg-manchurian',
    name: 'Vegetable Manchurian',
    description: '',
    price: 12.99,
    image: '/images/menu/veg-manchurian-manchester-nh.webp',
    category: 'indo-chinese',
    spiceLevel: 'medium',
    popular: false,
    vegetarian: true,
    dietary: ['Vegetarian']
  },

  // Desserts
  {
    id: 'double-ka-meetha',
    name: 'Royal Double Ka Meetha',
    description: '',
    price: 6.99,
    image: '/images/menu/double-ka-meetha-manchester-nh.webp',
    category: 'desserts',
    spiceLevel: 'none',
    popular: true,
    vegetarian: true,
    dietary: ['Vegetarian']
  },
  {
    id: 'gulab-jamun',
    name: 'Gulab Jamun with Rabri',
    description: '',
    price: 5.99,
    image: '/images/menu/gulab-jamun-manchester-nh.webp',
    category: 'desserts',
    spiceLevel: 'none',
    popular: false,
    vegetarian: true,
    dietary: ['Vegetarian']
  },
  {
    id: 'qurbani-ka-meetha',
    name: 'Hyderabadi Qubani Ka Meetha',
    description: '',
    price: 7.99,
    image: '/images/menu/qubani-ka-meetha-manchester-nh.webp',
    category: 'desserts',
    spiceLevel: 'none',
    popular: true,
    vegetarian: true,
    dietary: ['Vegetarian', 'Gluten-Free']
  }
];
