import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { isSet } from "../lib/booking";

export const Reveal = ({ children, delay = 0, className = "" }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}>
    {children}
  </motion.div>
);

export function Magnetic({ children, className = "inline-block" }) {
  const ref = useRef(null);
  const x = useMotionValue(0), y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 }), sy = useSpring(y, { stiffness: 200, damping: 15 });
  const move = (e) => {
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.25);
    y.set((e.clientY - r.top - r.height / 2) * 0.25);
  };
  return (
    <motion.div ref={ref} style={{ x: sx, y: sy }} onPointerMove={move} onPointerLeave={() => { x.set(0); y.set(0); }} className={className}>
      {children}
    </motion.div>
  );
}

// Opens the link in a new tab. If the owner hasn't set it yet, the button says so instead of failing silently.
export function ExtLink({ href, children, className = "", blank = true }) {
  const [note, setNote] = useState(false);
  if (isSet(href)) {
    return <a href={href} className={className} {...(blank ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{children}</a>;
  }
  return (
    <button type="button" className={className} onClick={() => { setNote(true); setTimeout(() => setNote(false), 2800); }}>
      {note ? "Link not set yet. Add it in src/config/site.js" : children}
    </button>
  );
}

// Real photo with a blue placeholder until the file exists in /public/images.
export function Photo({ img, className = "", imgClass = "object-cover", eager = false }) {
  const [bad, setBad] = useState(false);
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-royal via-ocean to-navy ${className}`}>
      {!bad && <img src={img.src} alt={img.alt} loading={eager ? "eager" : "lazy"} decoding="async" onError={() => setBad(true)} className={`h-full w-full ${imgClass}`} />}
      {bad && <span className="absolute inset-0 grid place-items-center p-4 text-center text-xs text-sky/70">Add real photo: public{img.src}</span>}
    </div>
  );
}
