import Image from "next/image";
import Hero from "./components/hero";
import Gallery from "./components/gallery";
import Footer from "./components/footer";
import Portfolio from "./components/portfolio";
import QR from "./components/qr";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <Gallery />
      <Portfolio />
      <QR />
      <Footer />
    </main>
  );
}
