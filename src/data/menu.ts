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
    image:"/images/bayn-qalbayn/menu/signature-arabic-coffee.webp",
    tag: "Signature",
  },
  {
    id: 2,
    name: "Spanish Latte",
    category: "coffee",
    price: "22 QAR",
    description:
      "Smooth espresso with creamy milk and a sweet balanced flavor, served hot or iced.",
    image:"/images/bayn-qalbayn/menu/spanish-latte.webp",
    tag: "Best Seller",
  },
  {
    id: 3,
    name: "Cappuccino",
    category: "coffee",
    price: "19 QAR",
    description:
      "Classic espresso-based coffee with steamed milk and soft foam, perfect for any time.",
    image:"/images/bayn-qalbayn/menu/cappuccino.webp",

    tag: "Classic",
  },
  {
    id: 4,
    name: "Iced Caramel Macchiato",
    category: "coffee",
    price: "24 QAR",
    description:
      "Chilled espresso with milk, caramel flavor, and a smooth refreshing finish.",
    image:"/images/bayn-qalbayn/menu/iced-caramel-macchiato.webp",

    tag: "Iced Favorite",
  },
  {
    id: 5,
    name: "Fresh Orange Juice",
    category: "drinks",
    price: "20 QAR",
    description:
      "Freshly squeezed orange juice, refreshing and perfect for any time of the day.",
    image:"/images/bayn-qalbayn/menu/fresh-orange-juice.webp",

    tag: "Fresh",
  },
  {
    id: 6,
    name: "Mint Lemonade",
    category: "drinks",
    price: "21 QAR",
    description:
      "A cool and refreshing blend of lemon and mint, served chilled with ice.",
    image:"/images/bayn-qalbayn/menu/mint-lemonade.webp",

    tag: "Refreshing",
  },
  {
    id: 7,
    name: "Mixed Berry Mocktail",
    category: "drinks", 
    price: "26 QAR",
    description:
      "A colorful berry drink with a fruity taste, served chilled for a refreshing cafe moment.",
    image:"/images/bayn-qalbayn/menu/mixed-berry-mocktail.webp",

    tag: "Mocktail",
  },
  {
    id: 8,
    name: "Classic Breakfast Plate", 
    category: "breakfast",
    price: "42 QAR",
    description:
      "A satisfying breakfast selection with fresh bread, eggs, cheese, and cafe sides.",
    image:"/images/bayn-qalbayn/menu/classic-breakfast-plate.webp",
    tag: "Morning Special",
  },
  {
    id: 9,
    name: "Croissant Sandwich",
    category: "breakfast",
    price: "28 QAR",
    description:
      "Buttery croissant filled with fresh ingredients, perfect with coffee or tea.", 
    image:"/images/bayn-qalbayn/menu/croissand-sandwich.webp",
    tag: "Cafe Favorite",
  },
  {
    id: 10,
    name: "Avocado Toast",
    category: "breakfast",
    price: "34 QAR",
    description:
      "Toasted bread topped with creamy avocado, herbs, and a fresh breakfast-style finish.", 
    image:"/images/bayn-qalbayn/menu/avocado-toast.webp",
    tag: "Light Bite",
  },
  {
    id: 11,
    name: "Grilled Chicken Platter",
    category: "main-course",
    price: "55 QAR",
    description:
      "Juicy grilled chicken served with sides, sauce, and a premium dining presentation.", 
    image:"/images/bayn-qalbayn/menu/grilled-chicken-platter.webp",
    tag: "Chef Choice",
  },
  {
    id: 12,
    name: "Creamy Alfredo Pasta",
    category: "main-course",
    price: "49 QAR",
    description:
      "Creamy pasta cooked with rich sauce, herbs, and a comforting restaurant flavor.", 
    image:"/images/bayn-qalbayn/menu/creamy-alfredo-pasta.webp",
    tag: "Popular",
  },
  {
    id: 13,
    name: "Classic Beef Burger",
    category: "main-course",
    price: "46 QAR",
    description:
      "Juicy beef burger with fresh toppings, soft bun, and classic cafe-style serving.",
    image:"/images/bayn-qalbayn/menu/classic-beef-burger.webp",
    tag: "Burger",
  },
  {
    id: 14,
    name: "Chocolate Cake",
    category: "desserts",
    price: "26 QAR",
    description:
      "Soft chocolate cake with a rich texture, ideal with coffee or after dinner.",
    image:"/images/bayn-qalbayn/menu/chocolate-cake.webp",
    tag: "Sweet",
  },
  {
    id: 15,
    name: "Classic Cheesecake",
    category: "desserts",
    price: "29 QAR",
    description:
      "Creamy cheesecake with a smooth finish and elegant cafe-style presentation.",
    image:"/images/bayn-qalbayn/menu/classic-cheesecake.webp",

    tag: "Dessert Pick",
  },
  {
    id: 16,
    name: "Lotus Dessert Cup",
    category: "desserts",
    price: "27 QAR",
    description:
      "A creamy dessert cup with biscuit flavor, smooth layers, and a cafe-style finish.",
    image:"/images/bayn-qalbayn/menu/lotus-desert-cup.webp",
    tag: "Special",
  },
];

export const featuredMenuItems = menuItems.filter((item) =>
  ["Spanish Latte", "Grilled Chicken Platter", "Chocolate Cake"].includes(
    item.name
  )
);