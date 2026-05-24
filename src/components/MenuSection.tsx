

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
    return menuItems.filter((item) => {
      const categoryMatch =
        activeCategory === "all" || item.category === activeCategory;

      const searchMatch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tag.toLowerCase().includes(searchTerm.toLowerCase());

      return categoryMatch && searchMatch;
    });
  }, [activeCategory, searchTerm]);

  const createWhatsappLink = (itemName: string, price: string) => {
    const message = encodeURIComponent(
      `Hello Bayn Qalbayn, I would like to order:

Item: ${itemName}
Price: ${price}
Quantity: 1

Pickup or Delivery:
Customer Name:
Location:
Special Note:`
    );

    return `https://wa.me/${whatsappNumber}?text=${message}`;
  };

  return (
    <section
      id="menu"
      className="relative overflow-hidden bg-[#FFF8EC] px-4 py-20 sm:px-6 lg:px-8"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-30 top-20 h-72 w-72 rounded-full bg-[#C9A35B]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 -right-30 h-72 w-72 rounded-full bg-[#8A7862]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#C9A35B] sm:text-sm">
            Our Menu
          </p>

          <h2 className="mt-4 font-serif text-3xl font-semibold uppercase tracking-[0.08em] text-[#3A2418] sm:text-4xl lg:text-5xl">
            Taste the Signature Selection
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#5A3A28]/80 sm:text-base">
            Browse our cafe and restaurant favorites. Customers can view items,
            check prices, and order directly through WhatsApp with one click.
          </p>
        </div>

        {/* Search Box */}
        <div className="mx-auto mt-10 max-w-xl">
          <div className="flex items-center gap-3 rounded-full border border-[#C9A35B]/25 bg-white px-5 py-3 shadow-sm">
            <Search size={19} className="shrink-0 text-[#8A7862]" />
            <input
              type="text"
              placeholder="Search coffee, desserts, pasta..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              className="w-full bg-transparent text-sm text-[#3A2418] outline-none placeholder:text-[#8A7862]/70 sm:text-base"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="mt-8 overflow-x-auto pb-2 [-ms-overflow-style:none] scrollbar-none [&::-webkit-scrollbar]:hidden">
          <div className="mx-auto flex w-max min-w-full justify-start gap-3 sm:justify-center">
            {menuCategories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.value;

              return (
                <button
                  key={category.value}
                  type="button"
                  onClick={() => setActiveCategory(category.value)}
                  className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] transition sm:text-sm ${
                    isActive
                      ? "border-[#3A2418] bg-[#3A2418] text-[#FFF8EC] shadow-lg shadow-[#3A2418]/15"
                      : "border-[#C9A35B]/25 bg-white text-[#5A3A28] hover:border-[#C9A35B] hover:bg-[#F7EFE3]"
                  }`}
                >
                  <Icon size={16} />
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Count */}
        <div className="mt-6 text-center">
          <p className="text-sm font-medium text-[#5A3A28]/70">
            Showing{" "}
            <span className="font-bold text-[#3A2418]">
              {filteredItems.length}
            </span>{" "}
            menu item{filteredItems.length === 1 ? "" : "s"}
          </p>
        </div>

        {/* Menu Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-4xl border border-[#C9A35B]/20 bg-white shadow-lg shadow-[#3A2418]/5 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#3A2418]/10"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden sm:h-60">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-linear-to-t from-[#1F1A17]/65 via-transparent to-transparent" />

                <div className="absolute left-4 top-4 rounded-full bg-[#FFF8EC]/95 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#5A3A28] shadow-md">
                  {item.tag}
                </div>

                <div className="absolute bottom-4 right-4 rounded-full bg-[#C9A35B] px-4 py-2 text-sm font-bold text-[#1F1A17] shadow-md">
                  {item.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="font-serif text-xl font-semibold text-[#3A2418] sm:text-2xl">
                  {item.name}
                </h3>

                <p className="mt-3 min-h-18 text-sm leading-6 text-[#5A3A28]/75">
                  {item.description}
                </p>

                <a
                  href={createWhatsappLink(item.name, item.price)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#3A2418] px-5 py-3.5 text-sm font-bold uppercase tracking-[0.14em] text-[#FFF8EC] shadow-lg shadow-[#3A2418]/15 transition hover:bg-[#5A3A28]"
                >
                  <MessageCircle size={18} />
                  Order on WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="mt-12 rounded-4xl border border-[#C9A35B]/20 bg-white p-10 text-center shadow-sm">
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
              className="mt-6 rounded-full bg-[#3A2418] px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] text-[#FFF8EC] transition hover:bg-[#5A3A28]"
            >
              Reset Menu
            </button>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 overflow-hidden rounded-4xl bg-[#3A2418] p-6 shadow-2xl shadow-[#3A2418]/15 sm:p-8 lg:p-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#C9A35B]">
                Quick Order
              </p>

              <h3 className="mt-3 font-serif text-2xl font-semibold text-[#FFF8EC] sm:text-3xl">
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
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#C9A35B] px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#1F1A17] shadow-lg shadow-[#C9A35B]/20 transition hover:bg-[#D8B76C] sm:w-auto"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}