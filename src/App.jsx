import { useEffect, useState } from "react";
import { MotionConfig } from "framer-motion";
import { Loader, Nav, Footer, WhatsAppFab } from "./components/Chrome";
import { Hero, About, Highlights, Gallery, Reviews } from "./components/Sections";
import { Booking, MapSection, Contact } from "./components/Booking";

export default function App() {
  const [ready, setReady] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  useEffect(() => { const t = setTimeout(() => setReady(true), 1700); return () => clearTimeout(t); }, []);
  return (
    <MotionConfig reducedMotion="user">
      <Loader done={ready} />
      <Nav onBook={() => setBookingOpen(true)} />
      <main>
        <Hero ready={ready} onBook={() => setBookingOpen(true)} />
        <About />
        <Highlights />
        <Gallery />
        <Reviews />
        <Booking open={bookingOpen} onClose={() => setBookingOpen(false)} />
        <MapSection />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </MotionConfig>
  );
}
