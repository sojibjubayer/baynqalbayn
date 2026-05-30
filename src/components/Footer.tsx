// src/components/Footer.tsx

import Link from "next/link";
import {
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

const whatsappNumber = "97471344413";
const phoneNumber = "+974 7134 4413";
const email = "info@baynqalbayn.com";

const whatsappMessage = encodeURIComponent(
  "Hello Bayn Qalbayn, I would like to know more about your menu and location."
);

const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "Order", href: "#order" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
];

const menuLinks = [
  { label: "Coffee", href: "#menu" },
  { label: "Drinks", href: "#menu" },
  { label: "Breakfast", href: "#menu" },
  { label: "Main Course", href: "#menu" },
  { label: "Desserts", href: "#menu" },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[#1F1A17] px-4 pt-20 text-[#FFF8EC] sm:px-6 lg:px-8"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute -left-35 top-10 h-80 w-80 rounded-full bg-[#C9A35B]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-30 h-96 w-96 rounded-full bg-[#D8C3A5]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Top CTA */}
        <div className="overflow-hidden rounded-4xl border border-[#FFF8EC]/15 bg-[#FFF8EC]/10 p-6 shadow-2xl shadow-black/20 backdrop-blur-md sm:p-8 lg:p-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#C9A35B]">
                Bayn Qalbayn Cafe & Restaurant
              </p>

              <h2 className="mt-3 font-serif text-2xl font-semibold leading-tight text-[#FFF8EC] sm:text-3xl lg:text-4xl">
                Visit us beside the National Museum or order directly on
                WhatsApp.
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#F7EFE3]/75 sm:text-base">
                Enjoy coffee, food, desserts, and a warm dining experience in
                the heart of Doha.
              </p>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#C9A35B] px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#1F1A17] shadow-xl shadow-[#C9A35B]/20 transition hover:-translate-y-0.5 hover:bg-[#D8B76C] sm:w-auto"
            >
              <MessageCircle size={18} />
              Order on WhatsApp
            </a>
          </div>
        </div>

        {/* Footer Main */}
        <div className="grid gap-10 border-b border-[#FFF8EC]/10 py-14 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.8fr_0.8fr_1.1fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C9A35B]/35 bg-[#FFF8EC] text-[#3A2418] shadow-sm">
                <span className="font-serif text-lg font-bold">BQ</span>
              </div>

              <div>
                <h3 className="font-serif text-xl font-semibold uppercase tracking-[0.16em] text-[#FFF8EC]">
                  Bayn Qalbayn
                </h3>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C9A35B]">
                  Cafe & Restaurant
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-[#F7EFE3]/70">
              A premium cafe and restaurant experience beside the National Museum
              of Qatar, designed for coffee lovers, families, visitors, and food
              enthusiasts.
            </p>

            {/* Social Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#"
                className="inline-flex h-11 items-center justify-center rounded-full border border-[#FFF8EC]/15 bg-[#FFF8EC]/10 px-5 text-xs font-bold uppercase tracking-[0.16em] text-[#FFF8EC] transition hover:border-[#C9A35B] hover:bg-[#C9A35B] hover:text-[#1F1A17]"
              >
                Instagram
              </a>

              <a
                href="#"
                className="inline-flex h-11 items-center justify-center rounded-full border border-[#FFF8EC]/15 bg-[#FFF8EC]/10 px-5 text-xs font-bold uppercase tracking-[0.16em] text-[#FFF8EC] transition hover:border-[#C9A35B] hover:bg-[#C9A35B] hover:text-[#1F1A17]"
              >
                Facebook
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#FFF8EC]/15 bg-[#FFF8EC]/10 text-[#FFF8EC] transition hover:border-[#C9A35B] hover:bg-[#C9A35B] hover:text-[#1F1A17]"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.22em] text-[#C9A35B]">
              Quick Links
            </h4>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#F7EFE3]/70 transition hover:text-[#C9A35B]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.22em] text-[#C9A35B]">
              Menu
            </h4>

            <ul className="mt-5 space-y-3">
              {menuLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#F7EFE3]/70 transition hover:text-[#C9A35B]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.22em] text-[#C9A35B]">
              Contact
            </h4>

            <div className="mt-5 space-y-4">
              <a
                href="https://www.google.com/maps/search/?api=1&query=National%20Museum%20of%20Qatar%20Doha"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 text-sm leading-6 text-[#F7EFE3]/70 transition hover:text-[#C9A35B]"
              >
                <MapPin size={18} className="mt-0.5 shrink-0 text-[#C9A35B]" />
                <span>Beside National Museum, Doha, Qatar</span>
              </a>

              <a
                href={`tel:${phoneNumber.replace(/\s/g, "")}`}
                className="flex gap-3 text-sm leading-6 text-[#F7EFE3]/70 transition hover:text-[#C9A35B]"
              >
                <Phone size={18} className="mt-0.5 shrink-0 text-[#C9A35B]" />
                <span>{phoneNumber}</span>
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 text-sm leading-6 text-[#F7EFE3]/70 transition hover:text-[#C9A35B]"
              >
                <MessageCircle
                  size={18}
                  className="mt-0.5 shrink-0 text-[#C9A35B]"
                />
                <span>Order / Reserve on WhatsApp</span>
              </a>

              <a
                href={`mailto:${email}`}
                className="flex gap-3 text-sm leading-6 text-[#F7EFE3]/70 transition hover:text-[#C9A35B]"
              >
                <Mail size={18} className="mt-0.5 shrink-0 text-[#C9A35B]" />
                <span>{email}</span>
              </a>

              <div className="flex gap-3 text-sm leading-6 text-[#F7EFE3]/70">
                <Clock size={18} className="mt-0.5 shrink-0 text-[#C9A35B]" />
                <span>Opening hours can be added after confirmation.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Contact CTA */}
        <div className="grid gap-6 border-b border-[#FFF8EC]/10 py-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h4 className="font-serif text-xl font-semibold text-[#FFF8EC]">
              Stay connected with Bayn Qalbayn
            </h4>

            <p className="mt-2 text-sm leading-6 text-[#F7EFE3]/65">
              Follow our latest menu items, offers, cafe moments, and special
              updates.
            </p>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#C9A35B]/35 bg-[#FFF8EC]/10 px-6 py-3.5 text-sm font-bold uppercase tracking-[0.14em] text-[#FFF8EC] transition hover:bg-[#FFF8EC] hover:text-[#3A2418] sm:w-auto"
          >
            <Send size={17} />
            Contact Us
          </a>
        </div>

        {/* Copyright */}
       {/* Copyright */}
<div className="flex flex-col gap-4 py-6 text-center text-xs text-[#F7EFE3]/55 sm:flex-row sm:items-center sm:justify-between sm:text-left">
  <p>
    © {new Date().getFullYear()} Bayn Qalbayn Cafe & Restaurant. All
    rights reserved.
  </p>

  <a
    href="https://samiracloud.com"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center gap-2 text-[#F7EFE3]/60 transition hover:text-[#C9A35B] sm:justify-end"
  >
    <span>Design & Developed by</span>
    <img
      src="/images/samiracloud-logo.png"
      alt="Samira Cloud"
      className="h-6 w-auto"
    />
  </a>
</div>
      </div>
    </footer>
  );
}