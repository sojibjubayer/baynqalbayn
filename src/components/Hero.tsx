// src/components/Hero.tsx

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Coffee,
  MapPin,
  MessageCircle,
  Sparkles,
  Star,
  Utensils,
} from "lucide-react";

const whatsappNumber = "97471344413";

const highlights = [
  {
    icon: Coffee,
    title: "Signature Coffee",
    text: "Freshly served hot and cold drinks.",
  },
  {
    icon: Utensils,
    title: "Cafe Dining",
    text: "Meals, desserts, and daily specials.",
  },
  {
    icon: Star,
    title: "Premium Ambience",
    text: "A warm place to relax and dine in Doha.",
  },
];

export default function Hero() {
  const whatsappMessage = encodeURIComponent(
    "Hello Bayn Qalbayn, I would like to place an order."
  );

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section
      id="home"
      className="relative isolate min-h-svh overflow-hidden bg-[#1F1A17] pt-20"
    >
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1920&auto=format&fit=crop"
        alt="Premium cafe and restaurant interior"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-[#1F1A17]/95 via-[#3A2418]/82 to-[#8A7862]/25" />
      <div className="absolute inset-0 bg-linear-to-t from-[#1F1A17]/95 via-[#1F1A17]/20 to-[#1F1A17]/35" />

      {/* Decorative Effects */}
      <div className="absolute left-20 top-28 h-56 w-56 rounded-full bg-[#C9A35B]/20 blur-3xl" />
      <div className="absolute bottom-16 right-22.5 h-72 w-72 rounded-full bg-[#D8C3A5]/20 blur-3xl" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-80px)] max-w-7xl items-center px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1.05fr_0.75fr]">
          {/* Left Content */}
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-[#C9A35B]/35 bg-[#FFF8EC]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#FFF8EC] shadow-sm backdrop-blur-md sm:text-sm">
              <MapPin size={15} className="shrink-0 text-[#C9A35B]" />
              <span className="truncate">Beside National Museum, Doha</span>
            </div>

            <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.32em] text-[#C9A35B] sm:text-sm">
              <Sparkles size={16} />
              Premium Cafe & Restaurant
            </p>

            <h1 className="font-serif text-4xl font-semibold uppercase leading-[1.05] tracking-[0.06em] text-[#FFF8EC] min-[380px]:text-5xl sm:text-6xl lg:text-7xl">
              Bayn
              <span className="block text-[#D8C3A5]">Qalbayn</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#F7EFE3]/90 sm:text-lg">
              A warm and elegant cafe experience in the heart of Doha, serving
              rich coffee, fresh flavors, desserts, and comfortable dining with
              simple WhatsApp ordering.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="#menu"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A35B] px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#1F1A17] shadow-xl shadow-[#C9A35B]/25 transition hover:-translate-y-0.5 hover:bg-[#D8B76C]"
              >
                View Menu
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#FFF8EC]/35 bg-[#FFF8EC]/10 px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#FFF8EC] backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-[#FFF8EC] hover:text-[#3A2418]"
              >
                <MessageCircle size={18} />
                Order on WhatsApp
              </a>
            </div>

            {/* Small Info Row */}
            <div className="mt-7 flex flex-col gap-3 text-sm text-[#F7EFE3]/80 sm:flex-row sm:items-center">
              <div className="flex items-center gap-2">
                <Clock size={17} className="text-[#C9A35B]" />
                <span>Dine-in, Takeaway & WhatsApp Orders</span>
              </div>

              <span className="hidden h-1 w-1 rounded-full bg-[#C9A35B] sm:block" />

              <div className="flex items-center gap-2">
                <MapPin size={17} className="text-[#C9A35B]" />
                <span>National Museum Area</span>
              </div>
            </div>
          </div>

          {/* Right Premium Card */}
          <div className="hidden lg:block">
            <div className="relative overflow-hidden rounded-4xl border border-[#FFF8EC]/15 bg-[#FFF8EC]/10 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl">
              <div className="relative h-107.5 overflow-hidden rounded-3xl">
                <Image
                  src="/images/bayn-qalbayn/menu/hero-image.webp"
                  alt="Elegant restaurant ambience"
                  fill
                  sizes="(min-width: 1024px) 420px, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#1F1A17]/85 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-[#FFF8EC]/15 bg-[#1F1A17]/70 p-5 backdrop-blur-md">
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#C9A35B]">
                    Taste • Coffee • Dining
                  </p>
                  <h2 className="mt-2 font-serif text-2xl font-semibold text-[#FFF8EC]">
                    A refined cafe destination in Doha
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Highlight Cards */}
          <div className="grid gap-3 sm:grid-cols-3 lg:col-span-2">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-[#FFF8EC]/15 bg-[#FFF8EC]/10 p-5 shadow-lg shadow-black/10 backdrop-blur-md"
                >
                  <Icon className="mb-3 text-[#C9A35B]" size={24} />
                  <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-[#FFF8EC]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#F7EFE3]/75">
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