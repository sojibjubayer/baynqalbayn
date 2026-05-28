import Image from "next/image";
import {
  Clock,
  ExternalLink,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Route,
} from "lucide-react";

const whatsappNumber = "97471344413";
const phoneNumber = "+974 7134 4413";

const whatsappMessage = encodeURIComponent(
  "Hello Bayn Qalbayn, I would like to know your location and opening hours."
);

const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const googleMapsLink =
  "https://www.google.com/maps/search/?api=1&query=National%20Museum%20of%20Qatar%20Doha";

const locationImage =
  "/images/bayn-qalbayn/location/national-museum-area.webp";

const locationCards = [
  {
    icon: MapPin,
    title: "Prime Location",
    text: "Located beside the National Museum of Qatar, making it easy for tourists, families, and nearby visitors to find.",
  },
  {
    icon: Route,
    title: "Easy Directions",
    text: "Customers can open Google Maps directly from the website and reach the cafe without confusion.",
  },
  {
    icon: Clock,
    title: "Visit Friendly",
    text: "Perfect for dine-in, takeaway, coffee breaks, casual meetings, and after-museum visits.",
  },
];

export default function Location() {
  return (
    <section
      id="location"
      className="relative overflow-hidden bg-[#F7EFE3] px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="pointer-events-none absolute -left-24 top-10 h-60 w-60 rounded-full bg-[#C9A35B]/15 blur-3xl sm:h-80 sm:w-80" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-[#3A2418]/10 blur-3xl sm:h-96 sm:w-96" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#C9A35B]/35 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#5A3A28] shadow-sm sm:text-xs">
            <MapPin size={15} className="shrink-0 text-[#C9A35B]" />
            <span>Find Us</span>
          </div>

          <h2 className="mt-5 font-serif text-3xl font-semibold uppercase leading-tight tracking-[0.06em] text-[#3A2418] sm:text-4xl lg:text-5xl">
            Visit Bayn Qalbayn in Doha
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#5A3A28]/80 sm:text-base">
            Bayn Qalbayn Cafe & Restaurant is located beside the National Museum
            of Qatar, a strong and easy-to-recognize destination for local
            customers, tourists, and visitors.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <div className="overflow-hidden rounded-4xl border border-[#C9A35B]/20 bg-white p-3 shadow-2xl shadow-[#3A2418]/10 sm:p-4">
            <div className="relative h-130 overflow-hidden rounded-3xl sm:h-155 lg:h-full lg:min-h-155">
              <Image
                src={locationImage}
                alt="National Museum area near Bayn Qalbayn Cafe in Doha"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-t from-[#1F1A17]/90 via-[#1F1A17]/30 to-transparent" />

              <div className="absolute left-4 top-4 rounded-full bg-[#FFF8EC]/95 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#5A3A28] shadow-md sm:left-5 sm:top-5 sm:px-4 sm:text-xs">
                National Museum Area
              </div>

              <div className="absolute bottom-4 left-4 right-4 rounded-3xl border border-[#FFF8EC]/15 bg-[#1F1A17]/75 p-4 backdrop-blur-md sm:bottom-5 sm:left-5 sm:right-5 sm:p-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A35B] sm:text-xs">
                  Location Highlight
                </p>

                <h3 className="mt-2 font-serif text-2xl font-semibold leading-tight text-[#FFF8EC] sm:text-3xl">
                  Beside National Museum, Doha
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#F7EFE3]/80">
                  A premium spot for coffee, food, meetings, and relaxing dining
                  moments near one of Doha’s most visited landmarks.
                </p>

                <a
                  href={googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#C9A35B] px-4 py-3 text-xs font-bold uppercase tracking-widest text-[#1F1A17] shadow-lg shadow-[#C9A35B]/20 transition hover:bg-[#D8B76C] sm:w-auto sm:px-5 sm:text-sm"
                >
                  <Navigation size={17} />
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-4xl bg-[#3A2418] p-5 shadow-2xl shadow-[#3A2418]/15 sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C9A35B] text-[#1F1A17]">
                <MapPin size={22} />
              </div>

              <h3 className="mt-5 font-serif text-2xl font-semibold text-[#FFF8EC] sm:text-3xl">
                Easy to Find, Easy to Visit
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#F7EFE3]/75 sm:text-base">
                The website will guide customers directly to the cafe location
                with a clear address, Google Maps direction button, and contact
                options for quick assistance.
              </p>

              <div className="mt-6 rounded-3xl border border-[#FFF8EC]/15 bg-[#FFF8EC]/10 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#C9A35B]">
                  Address
                </p>
                <p className="mt-2 text-base font-semibold leading-7 text-[#FFF8EC]">
                  Bayn Qalbayn Cafe & Restaurant
                  <br />
                  Beside National Museum, Doha, Qatar
                </p>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <a
                  href={`tel:${phoneNumber.replace(/\s/g, "")}`}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#FFF8EC]/25 bg-[#FFF8EC]/10 px-4 py-3 text-xs font-bold uppercase tracking-widest text-[#FFF8EC] transition hover:bg-[#FFF8EC] hover:text-[#3A2418] sm:text-sm"
                >
                  <Phone size={17} />
                  Call Now
                </a>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#C9A35B] px-4 py-3 text-xs font-bold uppercase tracking-widest text-[#1F1A17] shadow-lg shadow-[#C9A35B]/20 transition hover:bg-[#D8B76C] sm:text-sm"
                >
                  <MessageCircle size={17} />
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {locationCards.map((card) => {
                const Icon = card.icon;

                return (
                  <div
                    key={card.title}
                    className="rounded-3xl border border-[#C9A35B]/20 bg-white p-5 shadow-lg shadow-[#3A2418]/5"
                  >
                    <div className="flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FFF8EC] text-[#C9A35B] shadow-sm">
                        <Icon size={21} />
                      </div>

                      <div>
                        <h4 className="font-serif text-xl font-semibold text-[#3A2418]">
                          {card.title}
                        </h4>
                        <p className="mt-2 text-sm leading-6 text-[#5A3A28]/75">
                          {card.text}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-4xl border border-[#C9A35B]/20 bg-white p-3 shadow-2xl shadow-[#3A2418]/10 sm:mt-14 sm:p-4">
          <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-stretch">
            <div className="flex flex-col justify-center rounded-3xl bg-[#FFF8EC] p-5 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#C9A35B]">
                Google Maps
              </p>

              <h3 className="mt-4 font-serif text-2xl font-semibold text-[#3A2418] sm:text-3xl">
                Customers can reach the cafe with one click
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#5A3A28]/75 sm:text-base">
                Once the exact Google Maps profile is available, this section can
                show the cafe’s direct map location, directions, reviews, and
                opening hours.
              </p>

              <a
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#3A2418] px-5 py-4 text-xs font-bold uppercase tracking-widest text-[#FFF8EC] shadow-lg shadow-[#3A2418]/15 transition hover:bg-[#5A3A28] sm:w-fit sm:px-6 sm:text-sm"
              >
                Open in Google Maps
                <ExternalLink size={17} />
              </a>
            </div>

            <div className="h-90 overflow-hidden rounded-3xl sm:h-107.5 lg:h-full lg:min-h-107.5">
              <iframe
                title="Bayn Qalbayn Cafe location map"
                src="https://www.google.com/maps?q=National%20Museum%20of%20Qatar%20Doha&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}