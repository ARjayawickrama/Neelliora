import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation, MessageCircle, Phone, Mail, ExternalLink, X } from "lucide-react";
import { SITE } from "../config/site";
import { validate, bookingMessage, waLink, isSet, todayStr } from "../lib/booking";
import { Reveal, Magnetic, ExtLink } from "./ui";

const H2 = "font-display text-5xl font-light leading-tight sm:text-6xl";

const Field = ({ id, label, error, ...p }) => (
  <div>
    <label htmlFor={id} className="mb-1.5 block text-sm text-sky">{label}</label>
    <input id={id} aria-invalid={!!error} aria-describedby={error ? `${id}-err` : undefined}
      className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-sky focus:bg-white/15 [color-scheme:dark]" {...p} />
    {error && <p id={`${id}-err`} className="mt-1.5 text-sm text-red-200">{error}</p>}
  </div>
);

export function Booking({ open = false, onClose = () => {} }) {
  const [f, setF] = useState({ name: "", checkIn: "", checkOut: "", guests: "2" });
  const [err, setErr] = useState({});
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.value }));

  useEffect(() => {
    if (!open) return undefined;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open, onClose]);

  const submit = (e) => {
    e.preventDefault();
    setSent(false);
    const er = validate(f);
    setErr(er);
    if (Object.keys(er).length) return;
    const url = waLink(bookingMessage(f));
    if (!url) return setErr({ form: "WhatsApp isn’t set up yet. Add whatsappNumber in src/config/site.js." });
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  };
  const ghost = "inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-3.5 font-semibold transition hover:bg-white hover:text-ocean";

  const content = (
    <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal><h2 id="booking-title" className={H2}>Reserve Your Stay</h2></Reveal>
          <Reveal delay={0.1}><p className="mt-6 max-w-md text-lg text-white/80">Message the host directly on WhatsApp, or book through the platform you already use.</p></Reveal>
          <Reveal delay={0.2} className="mt-10 flex flex-col gap-4 sm:flex-row lg:flex-col xl:flex-row">
            <ExtLink href={SITE.bookingComUrl} className={ghost}>Reserve on Booking.com</ExtLink>
            <ExtLink href={SITE.airbnbUrl} className={ghost}>Book on Airbnb</ExtLink>
          </Reveal>
        </div>
        <Reveal className="lg:col-span-7">
          <form noValidate onSubmit={submit} className="rounded-3xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-xl sm:p-10">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2"><Field id="name" label="Guest name" autoComplete="name" value={f.name} onChange={set("name")} error={err.name} placeholder="Your full name" /></div>
              <Field id="checkIn" label="Check-in date" type="date" min={todayStr()} value={f.checkIn} onChange={set("checkIn")} error={err.checkIn} />
              <Field id="checkOut" label="Check-out date" type="date" min={f.checkIn || todayStr()} value={f.checkOut} onChange={set("checkOut")} error={err.checkOut} />
              <Field id="guests" label="Number of guests" type="number" inputMode="numeric" min={1} max={SITE.maxGuests} value={f.guests} onChange={set("guests")} error={err.guests} />
            </div>
            <Magnetic className="mt-8 block">
              <button type="submit" className="flex w-full items-center justify-center gap-3 rounded-full bg-[#25D366] px-8 py-4 font-semibold text-navy transition hover:brightness-110"><MessageCircle size={20} />Book Directly with Neel Liora</button>
            </Magnetic>
            <p className="mt-4 text-sm text-white/70">This opens WhatsApp with your request ready to send. Nothing is booked until the host confirms availability and the total price.</p>
            {err.form && <p role="alert" className="mt-4 text-red-200">{err.form}</p>}
            {sent && <motion.p role="status" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-4 rounded-xl bg-white/10 p-4 text-sky">WhatsApp opened with your request. Press Send there to reach the host. This is a request, not a confirmed booking.</motion.p>}
          </form>
        </Reveal>
      </div>
  );

  if (open) {
    return (
      <div role="dialog" aria-modal="true" aria-labelledby="booking-title" className="fixed inset-0 z-50 overflow-y-auto bg-navy/70 px-4 py-6 backdrop-blur-sm sm:py-10" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
        <section id="stay" className="relative mx-auto max-w-6xl rounded-3xl bg-gradient-to-b from-ocean to-navy px-5 py-12 text-white shadow-2xl sm:px-8 lg:py-14">
          <button type="button" onClick={onClose} aria-label="Close booking dialog" className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/30 text-white hover:bg-white/10">
            <X size={20} />
          </button>
          {content}
        </section>
      </div>
    );
  }

  return (
    <section id="stay" className="bg-gradient-to-b from-ocean to-navy px-6 py-24 text-white lg:py-36">
      {content}
    </section>
  );
}

export function MapSection() {
  return (
    <section id="location" className="bg-white px-6 py-24 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-2xl">
          <h2 className={`${H2} text-ocean`}>Find Your Way to Neel Liora</h2>
          <p className="mt-5 text-lg text-navy/70">Discover our peaceful location in beautiful Weligama, Sri Lanka.</p>
        </Reveal>
        <motion.div initial={{ clipPath: "inset(0 50% 0 50% round 1.5rem)" }} whileInView={{ clipPath: "inset(0 0% 0 0% round 1.5rem)" }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="mt-12 h-[26rem] overflow-hidden rounded-3xl bg-ice shadow-xl lg:h-[34rem]">
          {isSet(SITE.mapsEmbedUrl) ? (
            <iframe title="Map showing Neel Liora in Weligama, Sri Lanka" src={SITE.mapsEmbedUrl} className="h-full w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          ) : (
            <div className="grid h-full place-items-center p-8 text-center text-royal"><div><MapPin className="mx-auto mb-4" size={40} /><p className="max-w-sm">Map not set up yet. Paste the verified Google Maps embed link for Neel Liora into mapsEmbedUrl in src/config/site.js.</p></div></div>
          )}
        </motion.div>
        <Reveal className="mt-8">
          <ExtLink href={SITE.mapsUrl} className="inline-flex items-center gap-2 rounded-full bg-ocean px-8 py-4 font-semibold text-white transition hover:bg-royal"><Navigation size={18} />Get Directions</ExtLink>
        </Reveal>
      </div>
    </section>
  );
}

export function Contact() {
  const rows = [
    { Icon: MessageCircle, label: "WhatsApp", hint: "Message the host", href: waLink("Hello Neel Liora!") },
    { Icon: Phone, label: "Phone", hint: isSet(SITE.phone) ? SITE.phone : "Call the host", href: isSet(SITE.phone) ? `tel:${SITE.phone}` : null, blank: false },
    ...(SITE.email ? [{ Icon: Mail, label: "Email", hint: SITE.email, href: `mailto:${SITE.email}`, blank: false }] : []),
    { Icon: MapPin, label: "Google Maps", hint: SITE.location, href: SITE.mapsUrl },
    { Icon: ExternalLink, label: "Booking.com", hint: "Reserve online", href: SITE.bookingComUrl },
    { Icon: ExternalLink, label: "Airbnb", hint: "Book online", href: SITE.airbnbUrl },
  ];
  return (
    <section id="contact" className="bg-ice px-6 py-24 lg:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5"><Reveal><h2 className={`${H2} text-ocean`}>We’d love to host you</h2></Reveal></div>
        <ul className="lg:col-span-7">
          {rows.map(({ Icon, label, hint, href, blank }, i) => (
            <li key={label}>
              <Reveal delay={i * 0.05}>
                <ExtLink href={href} blank={blank} className="group flex w-full items-center gap-5 border-b border-royal/20 py-6 text-left transition-all duration-300 hover:pl-4">
                  <Icon className="shrink-0 text-royal" size={26} strokeWidth={1.5} />
                  <span><span className="block font-display text-2xl text-ocean">{label}</span><span className="text-navy/70">{hint}</span></span>
                </ExtLink>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
