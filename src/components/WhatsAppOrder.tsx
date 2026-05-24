// src/components/WhatsAppOrder.tsx

import Image from "next/image";
import {
  CalendarCheck,
  CheckCircle2,
  Clock,
  MapPin,
  MessageCircle,
  ShoppingBag,
  Utensils,
} from "lucide-react";

const whatsappNumber = "97471344413";

const orderMessage = encodeURIComponent(
  `Hello Bayn Qalbayn, I would like to place an order.

Order Type: Pickup / Delivery
Item Name:
Quantity:
Customer Name:
Location:
Special Note:`
);

const reservationMessage = encodeURIComponent(
  `Hello Bayn Qalbayn, I would like to reserve a table.

Name:
Date:
Time:
Number of Guests:
Special Request:`
);

const orderLink = `https://wa.me/${whatsappNumber}?text=${orderMessage}`;
const reservationLink = `https://wa.me/${whatsappNumber}?text=${reservationMessage}`;

const steps = [
  {
    icon: Utensils,
    title: "Choose Items",
    text: "Customers select food, drinks, desserts, or special menu items.",
  },
  {
    icon: MessageCircle,
    title: "Send on WhatsApp",
    text: "The order message opens automatically with ready-made details.",
  },
  {
    icon: CheckCircle2,
    title: "Confirm Order",
    text: "The restaurant team confirms availability, time, and final details.",
  },
];

export default function WhatsAppOrder() {
  return (
    <section
      id="order"
      className="relative overflow-hidden bg-[#3A2418] px-4 py-20 sm:px-6 lg:px-8"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute -left-30 top-20 h-80 w-80 rounded-full bg-[#C9A35B]/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -right-35 h-96 w-96 rounded-full bg-[#D8C3A5]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          {/* Left Image Card */}
          <div className="relative">
            <div className="overflow-hidden rounded-4xl border border-[#FFF8EC]/15 bg-[#FFF8EC]/10 p-3 shadow-2xl shadow-black/25 backdrop-blur-md sm:p-4">
              <div className="relative h-90 overflow-hidden rounded-3xl sm:h-117.5">
                <Image
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop"
                  alt="Cafe food and restaurant table"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-linear-to-t from-[#1F1A17]/80 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-[#FFF8EC]/15 bg-[#1F1A17]/70 p-5 backdrop-blur-md">
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#C9A35B] px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#1F1A17]">
                    <ShoppingBag size={15} />
                    Easy Ordering
                  </div>

                  <h3 className="font-serif text-2xl font-semibold text-[#FFF8EC] sm:text-3xl">
                    Order your favorites in seconds
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#F7EFE3]/80">
                    Simple WhatsApp ordering for dine-in enquiries, pickup, and
                    customer requests.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 left-4 right-4 rounded-3xl border border-[#C9A35B]/30 bg-[#FFF8EC] p-5 shadow-2xl shadow-black/20 sm:left-auto sm:right-8 sm:w-72">
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#3A2418] text-[#C9A35B]">
                  <Clock size={20} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8A7862]">
                    Fast Response
                  </p>
                  <h4 className="mt-1 font-serif text-xl font-semibold text-[#3A2418]">
                    WhatsApp First
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-[#5A3A28]/75">
                    Customers can send orders directly to the restaurant team.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="pt-8 lg:pt-0">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#C9A35B] sm:text-sm">
              Order System
            </p>

            <h2 className="mt-4 font-serif text-3xl font-semibold uppercase leading-tight tracking-[0.08em] text-[#FFF8EC] sm:text-4xl lg:text-5xl">
              Simple WhatsApp Ordering
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#F7EFE3]/80 sm:text-base">
              Customers do not need to create an account or use a complicated
              payment system. They can choose their items, send the order on
              WhatsApp, and confirm directly with the restaurant team.
            </p>

            {/* Steps */}
            <div className="mt-8 grid gap-4">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.title}
                    className="rounded-3xl border border-[#FFF8EC]/15 bg-[#FFF8EC]/10 p-5 shadow-lg shadow-black/10 backdrop-blur-md"
                  >
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#C9A35B] text-[#1F1A17] shadow-lg shadow-[#C9A35B]/20">
                        <Icon size={21} />
                      </div>

                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A35B]">
                          Step {index + 1}
                        </p>
                        <h3 className="mt-1 font-serif text-xl font-semibold text-[#FFF8EC]">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-[#F7EFE3]/75">
                          {step.text}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <a
                href={orderLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A35B] px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[#1F1A17] shadow-xl shadow-[#C9A35B]/20 transition hover:-translate-y-0.5 hover:bg-[#D8B76C]"
              >
                <MessageCircle size={18} />
                Order on WhatsApp
              </a>

              <a
                href={reservationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#FFF8EC]/30 bg-[#FFF8EC]/10 px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[#FFF8EC] backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-[#FFF8EC] hover:text-[#3A2418]"
              >
                <CalendarCheck size={18} />
                Reserve Table
              </a>
            </div>

            {/* Info Bar */}
            <div className="mt-8 rounded-3xl border border-[#C9A35B]/25 bg-[#1F1A17]/35 p-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <Clock size={19} className="mt-0.5 shrink-0 text-[#C9A35B]" />
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-[0.14em] text-[#FFF8EC]">
                      Order Type
                    </h4>
                    <p className="mt-1 text-sm leading-6 text-[#F7EFE3]/70">
                      Dine-in enquiry, pickup, takeaway, and reservation request.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    size={19}
                    className="mt-0.5 shrink-0 text-[#C9A35B]"
                  />
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-[0.14em] text-[#FFF8EC]">
                      Location
                    </h4>
                    <p className="mt-1 text-sm leading-6 text-[#F7EFE3]/70">
                      Beside National Museum, Doha, Qatar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom mini feature cards */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "No customer login needed",
            "No online payment setup required",
            "Auto-filled WhatsApp messages",
            "Easy for mobile customers",
          ].map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-[#FFF8EC]/15 bg-[#FFF8EC]/10 p-5 text-center backdrop-blur-md"
            >
              <CheckCircle2 className="mx-auto text-[#C9A35B]" size={24} />
              <p className="mt-3 text-sm font-semibold leading-6 text-[#FFF8EC]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}