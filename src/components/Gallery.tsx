// src/components/Gallery.tsx

import Image from "next/image";
import { ArrowRight, Camera, Coffee, MapPin, Sparkles, Utensils } from "lucide-react";

const galleryImages = [
  {
    title: "Elegant Cafe Ambience",
    category: "Interior",
    image:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1200&auto=format&fit=crop",
    className: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "Signature Coffee",
    category: "Coffee",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=900&auto=format&fit=crop",
    className: "",
  },
  {
    title: "Fresh Desserts",
    category: "Desserts",
    image:
      "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=900&auto=format&fit=crop",
    className: "",
  },
  {
    title: "Restaurant Dining",
    category: "Dining",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=900&auto=format&fit=crop",
    className: "",
  },
  {
    title: "Premium Drinks",
    category: "Drinks",
    image:
      "https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=900&auto=format&fit=crop",
    className: "",
  },
];

const highlights = [
  {
    icon: Coffee,
    title: "Coffee Moments",
    text: "Showcase signature drinks, latte art, and cafe favorites.",
  },
  {
    icon: Utensils,
    title: "Dining Experience",
    text: "Present food, desserts, and table presentation beautifully.",
  },
  {
    icon: MapPin,
    title: "Doha Location",
    text: "Highlight the cafe’s presence beside the National Museum.",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#FFF8EC] px-4 py-20 sm:px-6 lg:px-8"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute -left-35 top-20 h-80 w-80 rounded-full bg-[#C9A35B]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -right-35 h-96 w-96 rounded-full bg-[#3A2418]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C9A35B]/35 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#5A3A28] shadow-sm">
              <Camera size={15} className="text-[#C9A35B]" />
              Gallery
            </div>

            <h2 className="mt-5 font-serif text-3xl font-semibold uppercase leading-tight tracking-[0.08em] text-[#3A2418] sm:text-4xl lg:text-5xl">
              Moments Worth Sharing
            </h2>
          </div>

          <div className="lg:max-w-2xl">
            <p className="text-sm leading-7 text-[#5A3A28]/80 sm:text-base">
              A premium gallery section helps customers experience the cafe
              before visiting. It can show the ambience, food, coffee, desserts,
              and the beautiful location beside the National Museum.
            </p>

            <a
              href="#location"
              className="group mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-[#3A2418]"
            >
              Visit Us in Doha
              <ArrowRight
                size={17}
                className="transition group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="mt-12 grid auto-rows-[260px] gap-4 sm:grid-cols-2 sm:auto-rows-[300px] lg:grid-cols-4 lg:auto-rows-[260px]">
          {galleryImages.map((item) => (
            <article
              key={item.title}
              className={`group relative overflow-hidden rounded-4xl border border-[#C9A35B]/20 bg-white shadow-xl shadow-[#3A2418]/5 ${item.className}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-t from-[#1F1A17]/85 via-[#1F1A17]/15 to-transparent" />

              <div className="absolute left-5 top-5 inline-flex rounded-full bg-[#FFF8EC]/95 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#5A3A28] shadow-md">
                {item.category}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-serif text-2xl font-semibold text-[#FFF8EC]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#F7EFE3]/75">
                  Bayn Qalbayn Cafe & Restaurant
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-14 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
          {/* Left brand note */}
          <div className="rounded-4xl bg-[#3A2418] p-6 shadow-2xl shadow-[#3A2418]/15 sm:p-8">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#C9A35B] text-[#1F1A17]">
              <Sparkles size={22} />
            </div>

            <h3 className="mt-5 font-serif text-2xl font-semibold text-[#FFF8EC] sm:text-3xl">
              A visual experience that builds appetite
            </h3>

            <p className="mt-4 text-sm leading-7 text-[#F7EFE3]/75 sm:text-base">
              High-quality photos make the website feel more premium and help
              customers trust the restaurant before they visit or place an
              order.
            </p>
          </div>

          {/* Right highlight cards */}
          <div className="grid gap-4 sm:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-4xl border border-[#C9A35B]/20 bg-white p-6 shadow-lg shadow-[#3A2418]/5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF8EC] text-[#C9A35B] shadow-sm">
                    <Icon size={22} />
                  </div>

                  <h4 className="mt-5 font-serif text-xl font-semibold text-[#3A2418]">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-sm leading-6 text-[#5A3A28]/75">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}