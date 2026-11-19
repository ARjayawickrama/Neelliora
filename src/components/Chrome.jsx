import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { SITE } from "../config/site";
import { waLink, isSet } from "../lib/booking";
import { ExtLink } from "./ui";

export const LINKS = [["Home", "home"], ["About", "about"], ["Stay", "stay"], ["Gallery", "gallery"], ["Facilities", "facilities"], ["Reviews", "reviews"], ["Location", "location"], ["Contact", "contact"]];

function useActive(ids) {
  const [a, setA] = useState(ids[0]);
  useEffect(() => {
    const o = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setA(e.target.id)), { rootMargin: "-45% 0px -50% 0px" });
    ids.forEach((id) => { const el = document.getElementById(id); if (el) o.observe(el); });
    return () => o.disconnect();
  }, []);
  return a;
}

export function Loader({ done }) {
  return (
    <AnimatePresence>
      {!done && (
        <motion.div key="loader" className="fixed inset-0 z-50 grid place-items-center bg-navy" exit={{ y: "-100%" }} transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}>
          <motion.p initial={{ opacity: 0, letterSpacing: "0.1em" }} animate={{ opacity: 1, letterSpacing: "0.4em" }} transition={{ duration: 1.2 }} className="font-display text-3xl text-white">NEEL LIORA</motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Nav({ onBook }) {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActive(LINKS.map((l) => l[1]));
  useEffect(() => {
    const f = () => setSolid(window.scrollY > 60);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);
  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${solid ? "bg-ocean/95 py-3 shadow-lg backdrop-blur-md" : "py-6"}`}>
        <nav aria-label="Main" className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <a href="#home" className="font-display text-2xl tracking-[0.3em] text-white">NEEL LIORA</a>
          <ul className="hidden gap-7 text-sm text-white/90 lg:flex">
            {LINKS.map(([label, id]) => (
              <li key={id} className="relative">
                <a href={`#${id}`} className="py-2 transition hover:text-white">{label}</a>
                {active === id && <motion.span layoutId="nav-line" className="absolute -bottom-0.5 left-0 right-0 h-px bg-sky" />}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <button type="button" onClick={onBook} className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ocean transition hover:bg-sky sm:inline-block">Book Your Stay</button>
            <button className="text-white lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((o) => !o)}>{open ? <X /> : <Menu />}</button>
          </div>
        </nav>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div key="menu" className="fixed inset-0 z-30 flex flex-col justify-center bg-navy px-10"
            initial={{ clipPath: "circle(0% at 100% 0%)" }} animate={{ clipPath: "circle(150% at 100% 0%)" }} exit={{ clipPath: "circle(0% at 100% 0%)" }} transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}>
            <ul>
              {LINKS.map(([label, id], i) => (
                <motion.li key={id} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.25 + i * 0.05 } }}>
                  <a href={`#${id}`} onClick={() => setOpen(false)} className="block py-2 font-display text-4xl text-white">{label}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function WhatsAppFab() {
  const href = waLink("Hello Neel Liora! I have a question about staying with you.");
  return (
    <a href={href || "#contact"} {...(href ? { target: "_blank", rel: "noopener noreferrer" } : {})} aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:scale-110">
      <MessageCircle />
    </a>
  );
}

export function Footer() {
  return (
    <motion.footer initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="bg-ocean px-6 pb-10 pt-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-display text-4xl tracking-[0.3em]">NEEL LIORA</p>
          <p className="mt-5 max-w-sm text-white/75">A peaceful boutique accommodation near Weligama Beach, Sri Lanka.</p>
          <p className="mt-6 font-display text-xl italic text-sky">{SITE.tagline}</p>
        </div>
        <nav aria-label="Footer" className="md:col-span-3">
          <ul className="space-y-2 text-white/80">{LINKS.map(([l, id]) => <li key={id}><a href={`#${id}`} className="transition hover:text-white">{l}</a></li>)}</ul>
        </nav>
        <ul className="space-y-2 text-white/80 md:col-span-4">
          <li><ExtLink href={SITE.bookingComUrl} className="transition hover:text-white">Booking.com</ExtLink></li>
          <li><ExtLink href={SITE.airbnbUrl} className="transition hover:text-white">Airbnb</ExtLink></li>
          <li><ExtLink href={waLink("Hello Neel Liora!")} className="transition hover:text-white">WhatsApp</ExtLink></li>
          {isSet(SITE.phone) && <li><a href={`tel:${SITE.phone}`} className="transition hover:text-white">{SITE.phone}</a></li>}
          {SITE.email && <li><a href={`mailto:${SITE.email}`} className="transition hover:text-white">{SITE.email}</a></li>}
          <li>{SITE.location}</li>
        </ul>
      </div>
      <p className="mx-auto mt-16 max-w-7xl border-t border-white/15 pt-6 text-sm text-white/60">© {new Date().getFullYear()} Neel Liora, {SITE.location}. All rights reserved.</p>
    </motion.footer>
  );
}
