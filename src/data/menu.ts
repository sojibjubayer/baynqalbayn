// src/data/menu.ts

import {
  CakeSlice,
  Coffee,
  CupSoda,
  Flame,
  Sandwich,
  Utensils,
} from "lucide-react";

export type MenuCategory =
  | "all"
  | "coffee"
  | "drinks"
  | "breakfast"
  | "main-course"
  | "desserts";

export type MenuItem = {
  id: number;
  name: string;
  category: Exclude<MenuCategory, "all">;
  price: string;
  description: string;
  image: string;
  tag: string;
};

export const menuCategories = [
  {
    label: "All",
    value: "all",
    icon: Utensils,
  },
  {
    label: "Coffee",
    value: "coffee",
    icon: Coffee,
  },
  {
    label: "Drinks",
    value: "drinks",
    icon: CupSoda,
  },
  {
    label: "Breakfast",
    value: "breakfast",
    icon: Sandwich,
  },
  {
    label: "Main Course",
    value: "main-course",
    icon: Flame,
  },
  {
    label: "Desserts",
    value: "desserts",
    icon: CakeSlice,
  },
] as const;

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Signature Arabic Coffee",
    category: "coffee",
    price: "18 QAR",
    description:
      "Rich traditional coffee served with a warm aromatic profile and premium presentation.",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=900&auto=format&fit=crop",
    tag: "Signature",
  },
  {
    id: 2,
    name: "Spanish Latte",
    category: "coffee",
    price: "22 QAR",
    description:
      "Smooth espresso with creamy milk and a sweet balanced flavor, served hot or iced.",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=900&auto=format&fit=crop",
    tag: "Best Seller",
  },
  {
    id: 3,
    name: "Cappuccino",
    category: "coffee",
    price: "19 QAR",
    description:
      "Classic espresso-based coffee with steamed milk and soft foam, perfect for any time.",
    image:
      "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=900&auto=format&fit=crop",
    tag: "Classic",
  },
  {
    id: 4,
    name: "Iced Caramel Macchiato",
    category: "coffee",
    price: "24 QAR",
    description:
      "Chilled espresso with milk, caramel flavor, and a smooth refreshing finish.",
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=900&auto=format&fit=crop",
    tag: "Iced Favorite",
  },
  {
    id: 5,
    name: "Fresh Orange Juice",
    category: "drinks",
    price: "20 QAR",
    description:
      "Freshly squeezed orange juice, refreshing and perfect for any time of the day.",
    image:
      "https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=900&auto=format&fit=crop",
    tag: "Fresh",
  },
  {
    id: 6,
    name: "Mint Lemonade",
    category: "drinks",
    price: "21 QAR",
    description:
      "A cool and refreshing blend of lemon and mint, served chilled with ice.",
    image:
      "https://images.unsplash.com/photo-1621263764928-df1444c5e859?q=80&w=900&auto=format&fit=crop",
    tag: "Refreshing",
  },
  {
    id: 7,
    name: "Mixed Berry Mocktail",
    category: "drinks",
    price: "26 QAR",
    description:
      "A colorful berry drink with a fruity taste, served chilled for a refreshing cafe moment.",
    image:
      "https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=900&auto=format&fit=crop",
    tag: "Mocktail",
  },
  {
    id: 8,
    name: "Classic Breakfast Plate",
    category: "breakfast",
    price: "42 QAR",
    description:
      "A satisfying breakfast selection with fresh bread, eggs, cheese, and cafe sides.",
    image:
      "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=900&auto=format&fit=crop",
    tag: "Morning Special",
  },
  {
    id: 9,
    name: "Croissant Sandwich",
    category: "breakfast",
    price: "28 QAR",
    description:
      "Buttery croissant filled with fresh ingredients, perfect with coffee or tea.",
    image:
      "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=900&auto=format&fit=crop",
    tag: "Cafe Favorite",
  },
  {
    id: 10,
    name: "Avocado Toast",
    category: "breakfast",
    price: "34 QAR",
    description:
      "Toasted bread topped with creamy avocado, herbs, and a fresh breakfast-style finish.",
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=900&auto=format&fit=crop",
    tag: "Light Bite",
  },
  {
    id: 11,
    name: "Grilled Chicken Platter",
    category: "main-course",
    price: "55 QAR",
    description:
      "Juicy grilled chicken served with sides, sauce, and a premium dining presentation.",
    image:
      "https://images.unsplash.com/photo-1532550907401-a500c9a57435?q=80&w=900&auto=format&fit=crop",
    tag: "Chef Choice",
  },
  {
    id: 12,
    name: "Creamy Alfredo Pasta",
    category: "main-course",
    price: "49 QAR",
    description:
      "Creamy pasta cooked with rich sauce, herbs, and a comforting restaurant flavor.",
    image:
      "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?q=80&w=900&auto=format&fit=crop",
    tag: "Popular",
  },
  {
    id: 13,
    name: "Classic Beef Burger",
    category: "main-course",
    price: "46 QAR",
    description:
      "Juicy beef burger with fresh toppings, soft bun, and classic cafe-style serving.",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=900&auto=format&fit=crop",
    tag: "Burger",
  },
  {
    id: 14,
    name: "Chocolate Cake",
    category: "desserts",
    price: "26 QAR",
    description:
      "Soft chocolate cake with a rich texture, ideal with coffee or after dinner.",
    image:
      "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=900&auto=format&fit=crop",
    tag: "Sweet",
  },
  {
    id: 15,
    name: "Classic Cheesecake",
    category: "desserts",
    price: "29 QAR",
    description:
      "Creamy cheesecake with a smooth finish and elegant cafe-style presentation.",
    image:
      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=900&auto=format&fit=crop",
    tag: "Dessert Pick",
  },
  {
    id: 16,
    name: "Lotus Dessert Cup",
    category: "desserts",
    price: "27 QAR",
    description:
      "A creamy dessert cup with biscuit flavor, smooth layers, and a cafe-style finish.",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=900&auto=format&fit=crop",
    tag: "Special",
  },
];

export const featuredMenuItems = menuItems.filter((item) =>
  ["Spanish Latte", "Grilled Chicken Platter", "Chocolate Cake"].includes(
    item.name
  )
);