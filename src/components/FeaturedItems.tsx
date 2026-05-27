// src/components/FeaturedItems.tsx

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Coffee, Flame, MessageCircle, Sparkles } from "lucide-react";

const whatsappNumber = "97471344413";

const featuredItems = [
  {
    name: "Signature Spanish Latte",
    type: "Best Seller",
    price: "22 QAR",
    description:
      "A smooth cafe favorite with rich espresso, creamy milk, and a balanced sweet finish.",
    image:"/images/bayn-qalbayn/menu/signature-spanish-latte.webp",
  },
  {
    name: "Grilled Chicken Platter",
    type: "Chef Choice",
    price: "55 QAR",
    description:
      "Freshly grilled chicken served with flavorful sides and a premium restaurant presentation.",
    image:"/images/bayn-qalbayn/menu/grilled-chicken-platter.webp",

  },
  {
    name: "Classic Chocolate Cake",
    type: "Dessert Pick",
    price: "26 QAR",
    description:
      "Soft, rich, and indulgent chocolate cake, perfect with coffee or after a meal.",
    image:"/images/bayn-qalbayn/menu/chocolate-cake.webp",

  },
];

function createWhatsappLink(itemName: string, price: string) {
  const message = encodeURIComponent(
    `Hello Bayn Qalbayn, I would like to order:\n\nItem: ${itemName}\nPrice: ${price}\nQuantity: 1\n\nPickup or Delivery:\nLocation:`
  );

  return `https://wa.me/${whatsappNumber}?text=${message}`;
}

export default function FeaturedItems() {
  return (
    <section className="relative w-full overflow-x-hidden bg-[#F7EFE3] px-4 py-20 sm:px-6 lg:px-8 isolation-auto">
      {/* Background accents fixed container spill */}
      <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#C9A35B]/15 blur-3xl transform-gpu" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#3A2418]/10 blur-3xl transform-gpu" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Top heading */}
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C9A35B]/35 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#5A3A28] shadow-sm">
              <Sparkles size={15} className="text-[#C9A35B] shrink-0" />
              Featured Selection
            </div>

            <h2 className="mt-5 font-serif text-3xl font-semibold uppercase leading-tight tracking-[0.08em] text-[#3A2418] sm:text-4xl lg:text-5xl">
              Customer Favorites
            </h2>
          </div>

          <div className="lg:max-w-2xl">
            <p className="text-sm leading-7 text-[#5A3A28]/80 sm:text-base">
              Highlight the most popular food, drinks, and desserts to help
              customers choose quickly and increase orders for signature items.
            </p>

            <div className="mt-5">
              <Link
                href="#menu"
                className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-[#3A2418]"
              >
                Explore Full Menu
                <ArrowRight
                  size={17}
                  className="transition transform-gpu group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Stable Mobile-First Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredItems.map((item, index) => (
            <article
              key={item.name}
              className={`group flex flex-col overflow-hidden rounded-4xl border border-[#C9A35B]/20 bg-white shadow-xl shadow-[#3A2418]/5 transition-all duration-300 ease-in-out transform-gpu backface-hidden ${
                index === 1 ? "lg:-mt-6" : ""
              }`}
            >
              {/* Image Container Aspect-Ratio Hack for Mobile Engines */}
              <div className="relative aspect-4/3 w-full overflow-hidden sm:h-80 lg:h-96 sm:aspect-auto">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-700 transform-gpu group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-linear-to-t from-[#1F1A17]/90 via-[#1F1A17]/30 to-transparent" />

                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-[#FFF8EC]/95 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#5A3A28] shadow-md">
                  {index === 0 ? (
                    <Coffee size={15} className="text-[#C9A35B] shrink-0" />
                  ) : index === 1 ? (
                    <Flame size={15} className="text-[#C9A35B] shrink-0" />
                  ) : (
                    <Sparkles size={15} className="text-[#C9A35B] shrink-0" />
                  )}
                  {item.type}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10">
                  <div className="mb-4 inline-flex rounded-full bg-[#C9A35B] px-4 py-2 text-sm font-bold text-[#1F1A17] shadow-md">
                    {item.price}
                  </div>

                  <h3 className="font-serif text-2xl font-semibold text-[#FFF8EC] sm:text-3xl line-clamp-2">
                    {item.name}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#F7EFE3]/80 line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Action Button Section Container */}
              <div className="mt-auto p-5 sm:p-6 bg-white">
                <a
                  href={createWhatsappLink(item.name, item.price)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#3A2418] px-5 py-3.5 text-sm font-bold uppercase tracking-[0.14em] text-[#FFF8EC] shadow-lg shadow-[#3A2418]/15 transition-all transform-gpu hover:bg-[#5A3A28] active:scale-[0.98]"
                >
                  <MessageCircle size={18} className="shrink-0" />
                  Order on WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom premium note */}
        <div className="mt-14 rounded-4xl border border-[#C9A35B]/25 bg-[#FFF8EC] p-6 text-center shadow-lg shadow-[#3A2418]/5 sm:p-8">
          <p className="mx-auto max-w-3xl text-sm leading-7 text-[#5A3A28]/80 sm:text-base">
            These featured items can be updated anytime to promote daily
            specials, seasonal offers, signature coffee, desserts, or high-demand
            restaurant dishes.
          </p>
        </div>
      </div>
    </section>
  );
}