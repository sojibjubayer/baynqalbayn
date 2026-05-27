"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { MessageCircle, Search } from "lucide-react";
import { menuCategories, menuItems, type MenuCategory } from "@/data/menu";

const whatsappNumber = "97471344413";

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return menuItems.filter((item) => {
      const categoryMatch =
        activeCategory === "all" || item.category === activeCategory;

      const searchMatch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.tag.toLowerCase().includes(query);

      return categoryMatch && searchMatch;
    });
  }, [activeCategory, searchTerm]);

  const createWhatsappLink = (itemName: string, price: string) => {
    const message = encodeURIComponent(
      `Hello Bayn Qalbayn, I would like to order:\n\nItem: ${itemName}\nPrice: ${price}\nQuantity: 1\n\nPickup or Delivery:\nCustomer Name:\nLocation:\nSpecial Note:`
    );

    return `https://wa.me/${whatsappNumber}?text=${message}`;
  };

  return (
    <section
      id="menu"
      className="relative w-full overflow-x-hidden bg-[#FFF8EC] px-4 py-14 sm:px-6 sm:py-20 lg:px-8 will-change-transform"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#C9A35B] sm:text-sm sm:tracking-[0.28em]">
            Our Menu
          </p>

          <h2 className="mt-4 font-serif text-3xl font-semibold uppercase leading-tight tracking-[0.04em] text-[#3A2418] sm:text-4xl lg:text-5xl">
            Taste the Signature Selection
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#5A3A28]/80 sm:text-base">
            Browse our cafe and restaurant favorites. Customers can view items,
            check prices, and order directly through WhatsApp with one click.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mx-auto mt-9 max-w-xl">
          <div className="flex w-full items-center gap-3 rounded-full border border-[#C9A35B]/25 bg-white px-4 py-3 shadow-sm sm:px-5 focus-within:border-[#C9A35B]/60">
            <Search size={18} className="shrink-0 text-[#8A7862]" />
            <input
              type="text"
              placeholder="Search coffee, desserts, pasta..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              className="min-w-0 flex-1 bg-transparent text-sm text-[#3A2418] outline-hidden placeholder:text-[#8A7862]/70 sm:text-base"
            />
          </div>
        </div>

        {/* Horizontal Category Scroll Fix */}
        <div className="mt-7 w-full overflow-x-auto pb-2 scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex w-max gap-2 px-1 sm:w-full sm:flex-wrap sm:justify-center sm:gap-3">
            {menuCategories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.value;

              return (
                <button
                  key={category.value}
                  type="button"
                  onClick={() => setActiveCategory(category.value)}
                  className={`inline-flex shrink-0 items-center justify-center gap-2 rounded-full border px-4 py-3 text-xs font-bold uppercase tracking-widest transition-all duration-200 ease-in-out transform-gpu sm:px-5 sm:text-sm ${
                    isActive
                      ? "border-[#3A2418] bg-[#3A2418] text-[#FFF8EC]"
                      : "border-[#C9A35B]/25 bg-white text-[#5A3A28] active:bg-[#FFF8EC]"
                  }`}
                >
                  <Icon size={16} className="shrink-0" />
                  <span className="whitespace-nowrap">{category.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Items Counter */}
        <p className="mt-5 text-center text-sm font-medium text-[#5A3A28]/70">
          Showing{" "}
          <span className="font-bold text-[#3A2418]">
            {filteredItems.length}
          </span>{" "}
          menu item{filteredItems.length === 1 ? "" : "s"}
        </p>

        {/* Stable Grid Layout */}
        <div className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 fallback-grid">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="w-full overflow-hidden rounded-4xl border border-[#C9A35B]/20 bg-white shadow-md transform-gpu backface-hidden"
            >
              {/* Image Container Aspect Ratio Lock */}
              <div className="relative aspect-4/3 w-full overflow-hidden bg-[#F7EFE3] sm:h-60 sm:aspect-auto">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  priority={true}
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transform-gpu"
                />

                <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-[#1F1A17]/70 to-transparent" />

                <div className="absolute left-4 top-4 max-w-[calc(100%-2rem)] rounded-full bg-[#FFF8EC] px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#5A3A28] shadow-sm">
                  <span className="line-clamp-1">{item.tag}</span>
                </div>

                <div className="absolute bottom-4 right-4 rounded-full bg-[#C9A35B] px-4 py-2 text-sm font-bold text-[#1F1A17] shadow-sm">
                  {item.price}
                </div>
              </div>

              {/* Card Content Section */}
              <div className="flex flex-col p-5 sm:p-6">
                <h3 className="font-serif text-xl font-semibold leading-tight text-[#3A2418] sm:text-2xl line-clamp-1">
                  {item.name}
                </h3>

                {/* Fixed min-height issues */}
                <p className="mt-3 text-sm leading-6 text-[#5A3A28]/75 line-clamp-3 sm:line-clamp-none">
                  {item.description}
                </p>

                <a
                  href={createWhatsappLink(item.name, item.price)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-green-600 px-5 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition-all transform-gpu hover:bg-green-700 active:scale-[0.98]"
                >
                  <MessageCircle size={18} className="shrink-0" />
                  <span>Order on WhatsApp</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="mx-auto mt-12 max-w-2xl rounded-4xl border border-[#C9A35B]/20 bg-white p-8 text-center shadow-sm sm:p-10">
            <h3 className="font-serif text-2xl font-semibold text-[#3A2418]">
              No menu item found
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#5A3A28]/75">
              Try searching with another item name or select a different
              category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setActiveCategory("all");
              }}
              className="mt-6 rounded-full bg-[#3A2418] px-6 py-3 text-sm font-bold uppercase tracking-widest text-[#FFF8EC] transition-all transform-gpu active:scale-[0.98]"
            >
              Reset Menu
            </button>
          </div>
        )}

        {/* Footer Quick Order */}
        <div className="mt-14 w-full overflow-hidden rounded-4xl bg-[#3A2418] p-6 shadow-md sm:p-8 lg:p-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#C9A35B] sm:tracking-[0.28em]">
                Quick Order
              </p>

              <h3 className="mt-3 font-serif text-2xl font-semibold leading-tight text-[#FFF8EC] sm:text-3xl">
                Want to order something special?
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#F7EFE3]/75 sm:text-base">
                Send us your preferred items on WhatsApp and our team will
                assist you with availability, preparation time, and order
                confirmation.
              </p>
            </div>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                "Hello Bayn Qalbayn, I would like to ask about today’s menu and place an order."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-green-600 px-6 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all transform-gpu hover:bg-green-700 active:scale-[0.98] sm:w-auto"
            >
              <MessageCircle size={18} className="shrink-0" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}