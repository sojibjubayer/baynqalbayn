// src/app/page.tsx

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedItems from "@/components/FeaturedItems";
import MenuSection from "@/components/MenuSection";
import WhatsAppOrder from "@/components/WhatsAppOrder";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFF8EC]">
      <Navbar />
      <Hero />
      <FeaturedItems />
      <MenuSection />
      <WhatsAppOrder />
      <Gallery />
      <Location />
      <Footer />
    </main>
  );
}