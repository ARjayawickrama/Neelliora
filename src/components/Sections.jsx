import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Coffee, Wifi, Snowflake, Car, Flower2, Sparkles, BedDouble, Heart, X, ChevronLeft, ChevronRight, Palmtree, Sun, Waves, ArrowRight } from "lucide-react";
import { IMAGES, REVIEWS } from "../config/site";
import { Reveal, Magnetic, Photo } from "./ui";

const H2 = "font-display text-5xl font-light leading-tight sm:text-6xl";

export function Hero({ onBook }) {
  const rm = useReducedMotion();
  const words = ["Discover", "Your", "Own", "Paradise"];
  return (
    <section id="home" className="relative h-[100svh] min-h-[640px] overflow-hidden bg-navy text-white">
      <div className="absolute inset-0">
        <Photo img={IMAGES.hero} eager className="h-full" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-ocean/40 to-navy/50" />
      <div aria-hidden
        className="absolute right-[14%] top-[20%] z-10 hidden text-sky sm:block">
        <span className="relative grid h-24 w-24 place-items-center rounded-full border-4 border-sky/90 bg-sky/15 shadow-[6px_6px_0_rgba(7,29,53,0.45)] backdrop-blur-sm">
          <Sun size={58} strokeWidth={1.8} />
        </span>
      </div>
      <div aria-hidden
        className="absolute right-8 top-[38%] z-10 hidden text-white/75 md:block">
        <span className="grid h-20 w-20 place-items-center rounded-[45%_55%_55%_45%] border-2 border-white/60 bg-ocean/35 shadow-[5px_5px_0_rgba(145,213,245,0.35)] backdrop-blur-sm">
          <Palmtree size={44} strokeWidth={1.5} />
        </span>
      </div>
      <div aria-hidden
        className="absolute left-[55%] top-[19%] z-10 hidden rotate-[-8deg] text-sky/80 lg:block">
        <Waves size={52} strokeWidth={1.8} />
      </div>
      <motion.div
        animate={rm ? {} : { x: [0, -10, 0], y: [0, -8, 0], rotate: [-2, 1, -2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[4%] right-[4%] z-10 hidden w-[150px] origin-bottom md:block lg:right-[7%] lg:w-[190px]">
        <img src="/surfer.png" alt="Illustration of a surfer riding an ocean wave" className="block h-auto w-full" />
      </motion.div>
      <div aria-hidden
        className="absolute bottom-[24%] left-[8%] z-10 hidden items-end gap-2 text-sky/75 sm:flex">
        <Waves size={72} strokeWidth={1.5} />
        <span className="mb-1 h-2 w-2 rounded-full border-2 border-sky" />
      </div>
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        
       
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Magnetic>
            <button type="button" onClick={onBook} className="inline-flex min-h-14 min-w-[210px] items-center justify-center gap-3 rounded-full border-2 border-white bg-gradient-to-r from-white to-ice px-8 py-4 font-bold tracking-wide text-ocean shadow-[0_12px_32px_-10px_rgba(145,213,245,0.9)] ring-4 ring-white/15 hover:from-sky hover:to-white">
              <Sparkles size={18} className="text-royal" /> Book Your Stay
            </button>
          </Magnetic>
          <a href="#about" className="inline-flex min-h-14 min-w-[200px] items-center justify-center gap-3 rounded-full border-2 border-white/70 bg-navy/40 px-8 py-4 font-bold tracking-wide text-white shadow-[0_10px_28px_-12px_rgba(7,29,53,0.8)] backdrop-blur-sm hover:bg-navy/65">
            Explore More <ArrowRight size={18} />
          </a>
        </div>
      </div>
      <svg aria-hidden className="pointer-events-none absolute bottom-0 left-0 z-[8] h-36 w-full md:h-48" viewBox="0 0 1440 220" preserveAspectRatio="none">
        <motion.path fill="#168EBD" opacity="0.76"
          d="M0 105 C170 65 235 155 400 112 C585 64 690 175 855 126 C1035 73 1145 154 1440 82 L1440 220 L0 220Z"
          animate={rm ? {} : { d: [
            "M0 105 C170 65 235 155 400 112 C585 64 690 175 855 126 C1035 73 1145 154 1440 82 L1440 220 L0 220Z",
            "M0 126 C155 170 270 70 435 120 C600 170 715 72 885 118 C1065 164 1190 72 1440 108 L1440 220 L0 220Z",
            "M0 105 C170 65 235 155 400 112 C585 64 690 175 855 126 C1035 73 1145 154 1440 82 L1440 220 L0 220Z",
          ] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
        <motion.path fill="#6BCFEB" opacity="0.8"
          d="M0 155 C185 110 275 193 465 150 C650 108 760 194 930 152 C1115 108 1270 171 1440 142 L1440 220 L0 220Z"
          animate={rm ? {} : { d: [
            "M0 155 C185 110 275 193 465 150 C650 108 760 194 930 152 C1115 108 1270 171 1440 142 L1440 220 L0 220Z",
            "M0 174 C160 203 315 127 485 165 C665 204 790 120 965 165 C1145 210 1280 126 1440 169 L1440 220 L0 220Z",
            "M0 155 C185 110 275 193 465 150 C650 108 760 194 930 152 C1115 108 1270 171 1440 142 L1440 220 L0 220Z",
          ] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
        <path fill="none" stroke="white" strokeWidth="5" strokeLinecap="round" opacity="0.85"
          d="M-20 142 C130 95 240 155 375 126 C520 94 595 156 735 133" />
      </svg>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-ice px-6 py-24 lg:py-36">
      <div aria-hidden className="absolute -right-32 top-10 h-80 w-80 rounded-full border border-sky/50" />
      <div aria-hidden className="absolute -bottom-40 -left-24 h-96 w-96 rounded-full border border-royal/10" />
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-12">
        <Reveal className="relative lg:col-span-6">
          <div aria-hidden className="absolute -bottom-5 -left-5 h-full w-full rounded-t-[15rem] border border-royal/30" />
          <Photo img={IMAGES.about} className="relative aspect-[4/5] rounded-t-[15rem] shadow-[0_28px_80px_-38px_rgba(7,29,53,0.55)]" />
        </Reveal>
        <div className="lg:col-span-5 lg:col-start-8">
          <Reveal>
            <span className="mb-5 inline-flex items-center rounded-full border border-royal/15 bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.22em] text-royal">
              Our story
            </span>
            <h2 className={`${H2} text-ocean`}>Where Comfort Meets Serenity</h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-8 text-lg leading-8 text-navy/80">
              Welcome to <strong className="font-semibold text-ocean">Neel Liora</strong>, a peaceful and welcoming stay in Weligama, where the warmth of Sri Lankan hospitality meets the beauty of tranquil surroundings.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 leading-8 text-navy/70">
              Set in the charming area of <strong className="font-semibold text-ocean">Denipitiya, Weligama</strong>, Neel Liora offers a relaxing escape while keeping you close to the coast, local attractions, surfing spots, and everything that makes the southern coast special.
            </p>
          </Reveal>
          <Reveal delay={0.28}>
            <p className="mt-5 leading-8 text-navy/70">
              From the moment you arrive, our aim is simple — to create a place where you can slow down, relax, and feel at home. Enjoy the peaceful garden atmosphere, unwind on the terrace, start your day with a delicious breakfast, and experience the genuine warmth of a local Sri Lankan stay.
            </p>
          </Reveal>
          <Reveal delay={0.36}>
            <p className="mt-5 leading-8 text-navy/70">
              Whether you are visiting Weligama to surf, explore, relax, or simply enjoy a quiet getaway, Neel Liora is a place to pause, breathe, and enjoy every moment.
            </p>
            <p className="mt-8 font-display text-2xl italic text-ocean">
              Come for Weligama. Stay for the serenity.
            </p>
          </Reveal>
          <Reveal delay={0.44}>
            <p className="mt-8 flex items-center gap-3 border-t border-royal/15 pt-6 text-sm font-bold uppercase tracking-[0.16em] text-royal">
              <MapPin size={18} /> Denipitiya, Weligama, Sri Lanka
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const FEATURES = [[Coffee, "Complimentary Breakfast"], [Wifi, "Free High-Speed WiFi"], [Snowflake, "Air Conditioning"], [Car, "Free Private Parking"], [Flower2, "Beautiful Garden"], [Sparkles, "Daily Housekeeping"], [BedDouble, "Comfortable Accommodation"], [Heart, "Perfect for Couples"]];

export function Highlights() {
  return (
    <section id="facilities" className="bg-white px-6 py-24 lg:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4"><div className="lg:sticky lg:top-32"><Reveal><h2 className={`${H2} text-ocean`}>Everything for an easy stay</h2></Reveal></div></div>
        <ul className="grid sm:grid-cols-2 lg:col-span-8">
          {FEATURES.map(([Icon, title]) => (
            <li key={title} className="group flex items-center gap-5 border-b border-royal/15 px-3 py-7 hover:bg-ice">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-royal/30 text-royal group-hover:bg-royal group-hover:text-white"><Icon size={24} strokeWidth={1.5} /></span>
              <span className="font-display text-2xl text-ocean">{title}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Gallery() {
  const [open, setOpen] = useState(null);
  const [active, setActive] = useState(0);
  const items = IMAGES.gallery, n = items.length;
  const go = (d) => setOpen((o) => (o + d + n) % n);
  const move = (d) => setActive((i) => (i + d + n) % n);
  useEffect(() => {
    if (open === null) return;
    const k = (e) => { if (e.key === "Escape") setOpen(null); if (e.key === "ArrowRight") go(1); if (e.key === "ArrowLeft") go(-1); };
    document.addEventListener("keydown", k);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", k); document.body.style.overflow = ""; };
  }, [open !== null]);
  const btn = "absolute z-10 grid h-12 w-12 place-items-center rounded-full border border-white/30 text-white hover:bg-white/15";
  const carouselArrow = "grid h-12 w-12 place-items-center rounded-full border border-white/25 text-white transition hover:border-sky hover:bg-sky hover:text-navy";
  return (
    <section id="gallery" className="relative overflow-hidden bg-navy px-6 py-24 text-white lg:py-36">
      <div aria-hidden className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-sky/10" />
      <div aria-hidden className="absolute -bottom-48 -left-32 h-[30rem] w-[30rem] rounded-full border border-sky/10" />
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky/20 bg-white/5 px-5 py-2 text-xs font-bold uppercase tracking-[0.22em] text-sky">
              <Sparkles size={14} /> Life at Neel Liora
            </span>
            <h2 className={`${H2} max-w-2xl`}>A look around Neel Liora</h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="max-w-md text-base leading-7 text-white/65">
              Discover peaceful corners, tropical greenery, welcoming interiors and thoughtful spaces made for a relaxing stay.
            </p>
          </Reveal>
        </div>
        <div className="relative mt-10 h-[390px] [perspective:1400px] sm:h-[450px]">
          <div aria-hidden className="absolute bottom-3 left-1/2 h-20 w-[82%] -translate-x-1/2 rounded-[50%] bg-sky/10 blur-3xl" />
          {items.map((img, i) => {
            let offset = (i - active + n) % n;
            if (offset > n / 2) offset -= n;
            const distance = Math.abs(offset);
            const hidden = distance > 3;
            const width = distance === 0 ? "clamp(220px, 36vw, 390px)" : distance === 1 ? "clamp(150px, 24vw, 270px)" : "clamp(120px, 18vw, 210px)";
            const height = distance === 0 ? "clamp(300px, 33vw, 390px)" : "clamp(210px, 25vw, 300px)";
            return (
              <button
                key={img.src}
                type="button"
                onClick={() => distance === 0 ? setOpen(i) : setActive(i)}
                aria-label={distance === 0 ? `View ${img.label} photo full screen` : `Show ${img.label}`}
                className="group absolute top-1/2 overflow-hidden rounded-[1.4rem] border border-white/15 bg-ocean shadow-[0_30px_70px_-28px_rgba(145,213,245,0.55)] transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)]"
                style={{
                  left: `${50 + offset * 16}%`,
                  width,
                  height,
                  opacity: hidden ? 0 : distance === 0 ? 1 : distance === 1 ? 0.82 : 0.48,
                  zIndex: 10 - distance,
                  transform: `translate(-50%, -50%) rotateY(${offset * -13}deg) scale(${distance === 0 ? 1 : 0.92 - distance * 0.035})`,
                  pointerEvents: hidden ? "none" : "auto",
                }}>
                <Photo img={img} className="h-full w-full" imgClass="object-cover transition duration-700 ease-out group-hover:scale-[1.04]" />
                <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/10 to-transparent" />
                {distance === 0 && (
                  <span className="absolute bottom-0 left-0 flex w-full items-end justify-between p-5 text-left sm:p-7">
                    <span>
                      <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.24em] text-sky">Neel Liora</span>
                      <span className="font-display text-3xl leading-none text-white sm:text-4xl">{img.label}</span>
                    </span>
                    <span className="grid h-12 w-12 place-items-center rounded-full border border-white/35 bg-white/10 text-white backdrop-blur-sm transition group-hover:bg-white group-hover:text-ocean">
                      <ArrowRight size={19} />
                    </span>
                  </span>
                )}
              </button>
            );
          })}
        </div>
        <div className="mt-2 flex items-center justify-center gap-5">
          <button type="button" className={carouselArrow} aria-label="Previous gallery photo" onClick={() => move(-1)}><ChevronLeft /></button>
          <div className="flex gap-2">
            {items.map((img, i) => (
              <button key={img.src} type="button" aria-label={`Show ${img.label}`} onClick={() => setActive(i)} className={`h-2.5 rounded-full transition-all ${i === active ? "w-8 bg-sky" : "w-2.5 bg-white/25 hover:bg-white/50"}`} />
            ))}
          </div>
          <button type="button" className={carouselArrow} aria-label="Next gallery photo" onClick={() => move(1)}><ChevronRight /></button>
        </div>
      </div>
      {open !== null && (
          <div role="dialog" aria-modal="true" aria-label="Photo viewer" className="fixed inset-0 z-50 flex items-center justify-center bg-navy/95 p-4 backdrop-blur-sm"
            onClick={() => setOpen(null)}>
            <button type="button" aria-label="Close" className={`${btn} right-5 top-5`} onClick={() => setOpen(null)}><X /></button>
            <button type="button" aria-label="Previous photo" className={`${btn} left-4`} onClick={(e) => { e.stopPropagation(); go(-1); }}><ChevronLeft /></button>
            <button type="button" aria-label="Next photo" className={`${btn} right-4`} onClick={(e) => { e.stopPropagation(); go(1); }}><ChevronRight /></button>
              <figure onClick={(e) => e.stopPropagation()} className="w-full max-w-5xl">
                <Photo img={items[open]} className="h-[70vh] rounded-2xl !bg-none" imgClass="object-contain" eager />
                <figcaption className="mt-4 text-center font-display text-2xl">{items[open].label}</figcaption>
              </figure>
          </div>
      )}
    </section>
  );
}

export function Reviews() {
  const [i, setI] = useState(0);
  const n = REVIEWS.length;
  const arrow = "grid h-12 w-12 place-items-center rounded-full border border-royal/40 text-royal hover:bg-royal hover:text-white";
  return (
    <section id="reviews" className="bg-ice px-6 py-24 lg:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-royal/15 bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.22em] text-royal">
              <Sparkles size={14} /> Guest stories
            </span>
            <h2 className={`${H2} text-ocean`}>Memorable Experiences, Beautiful Memories</h2>
          </div>
        </Reveal>
        <div className="mt-14 overflow-hidden" aria-live="polite">
          <div className="grid gap-5 md:grid-cols-2">
            {REVIEWS.map((review, index) => {
              const initials = review.name
                .split(" ")
                .map((part) => part[0])
                .join("")
                .slice(0, 2)
                .toUpperCase();
              const accent = index === 0
                ? "bg-[#91C8FF] text-[#315A86]"
                : "bg-[#A8E3AF] text-[#397447]";
              return (
                <article
                  key={review.name}
                  className={`relative flex min-h-[330px] flex-col rounded-2xl border border-navy/[0.06] bg-white p-7 shadow-[0_12px_35px_-22px_rgba(7,29,53,0.55)] transition duration-500 sm:p-8 ${index === i ? "translate-y-0 opacity-100" : "opacity-80 hover:opacity-100"}`}
                  onMouseEnter={() => setI(index)}>
                  <div className="flex items-center gap-3">
                    <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-full text-lg font-bold ${accent}`}>
                      {initials}
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-navy">{review.name}</h3>
                      <p className="mt-1 text-xs text-navy/45">{review.flag} {review.country}</p>
                    </div>
                  </div>
                  <div className="mt-7">
                    <span className="inline-flex h-8 items-center rounded-md bg-ocean px-2.5 text-sm font-bold text-white">10</span>
                  </div>
                  <blockquote className="mt-4">
                    <p className="text-[15px] leading-7 text-navy/75 sm:text-base">
                      <span aria-hidden>“</span>{review.text}<span aria-hidden>”</span>
                    </p>
                  </blockquote>
                  <footer className="mt-auto flex items-center gap-2 pt-6 text-sm">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-[#126AA5] text-[10px] font-bold text-white">B</span>
                    <span className="text-navy/45">Verified guest</span>
                  </footer>
                </article>
              );
            })}
          </div>
        </div>
        <div className="mt-8 flex items-center justify-center gap-5">
          <button type="button" className={arrow} aria-label="Previous review" onClick={() => setI((i - 1 + n) % n)}><ChevronLeft /></button>
          <div className="flex gap-2">{REVIEWS.map((v, k) => <button key={v.name} type="button" aria-label={`Show review from ${v.name}`} aria-current={k === i} onClick={() => setI(k)} className={`h-2.5 rounded-full ${k === i ? "w-8 bg-royal" : "w-2.5 bg-royal/30"}`} />)}</div>
          <button type="button" className={arrow} aria-label="Next review" onClick={() => setI((i + 1) % n)}><ChevronRight /></button>
        </div>
      </div>
    </section>
  );
}
