// src/components/Navbar.tsx

"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, MapPin, Phone, MessageCircle } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

const whatsappNumber = "97471344413";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappMessage = encodeURIComponent(
    "Hello Bayn Qalbayn, I would like to place an order.",
  );

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#C9A35B]/20 bg-[#FFF8EC]/90 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[#C9A35B]/40 bg-[#FFFDF8] shadow-sm">
            <Image
              src="/images/bayn-qalbayn/logo.png"
              alt="Bayn Qalbayn Cafe and Restaurant logo"
              fill
              sizes="48px"
              className="object-contain p-1.5"
              priority
            />
          </div>

          <div className="leading-none">
            <h1 className="font-serif text-[18px] font-semibold uppercase tracking-[0.18em] text-[#3A2418] sm:text-xl">
              Bayn Qalbayn
            </h1>
            <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.32em] text-[#8A7862]">
              Cafe & Restaurant
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium uppercase tracking-[0.16em] text-[#5A3A28] transition hover:text-[#C9A35B]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="#location"
            className="inline-flex items-center gap-2 rounded-full border border-[#C9A35B]/35 bg-white/60 px-4 py-2 text-sm font-semibold text-[#5A3A28] transition hover:border-[#C9A35B] hover:bg-[#FFFDF8]"
          >
            <MapPin size={16} />
            Direction
          </Link>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#3A2418] px-5 py-2.5 text-sm font-semibold text-[#FFF8EC] shadow-md shadow-[#3A2418]/20 transition hover:bg-[#5A3A28]"
          >
            <MessageCircle size={17} />
            Order Now
          </a>
        </div>

        {/* Mobile Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#C9A35B]/30 bg-white/70 text-[#3A2418] shadow-sm lg:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden ${
          isOpen
            ? "max-h-130 border-t border-[#C9A35B]/20 opacity-100"
            : "max-h-0 opacity-0"
        } overflow-hidden bg-[#FFF8EC] transition-all duration-300 ease-in-out`}
      >
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6">
          <nav className="grid gap-2">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#5A3A28] transition hover:bg-[#F7EFE3] hover:text-[#3A2418]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <a
              href="tel:+97471344413"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#C9A35B]/40 bg-white px-5 py-3 text-sm font-semibold text-[#5A3A28] shadow-sm"
            >
              <Phone size={17} />
              Call Cafe
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#3A2418] px-5 py-3 text-sm font-semibold text-[#FFF8EC] shadow-md shadow-[#3A2418]/20"
            >
              <MessageCircle size={17} />
              Order on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
