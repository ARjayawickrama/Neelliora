import { SITE } from "../config/site";

export const isSet = (v) => Boolean(v) && !String(v).startsWith("REPLACE_");

export const todayStr = () => new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 10);

export function validate({ name, checkIn, checkOut, guests }) {
  const e = {};
  if (name.trim().length < 2) e.name = "Enter your full name.";
  if (!checkIn) e.checkIn = "Choose a check-in date.";
  else if (checkIn < todayStr()) e.checkIn = "Check-in can’t be in the past.";
  if (!checkOut) e.checkOut = "Choose a check-out date.";
  else if (checkIn && checkOut <= checkIn) e.checkOut = "Check-out must be after check-in.";
  const g = Number(guests);
  if (!Number.isInteger(g) || g < 1 || g > SITE.maxGuests) e.guests = `Enter 1 to ${SITE.maxGuests} guests.`;
  return e;
}

export function bookingMessage({ name, checkIn, checkOut, guests }) {
  return `Hello Neel Liora!\n\nI would like to make a reservation.\n\nGuest Name: ${name.trim()}\n\nCheck-in Date: ${checkIn}\n\nCheck-out Date: ${checkOut}\n\nNumber of Guests: ${guests}\n\nPlease confirm room availability and the total price.\n\nThank you!`;
}

// Official WhatsApp click-to-chat URL. Returns null until the owner's number is configured.
export function waLink(text) {
  if (!isSet(SITE.whatsappNumber)) return null;
  let number = SITE.whatsappNumber.replace(/\D/g, "");
  if (number.startsWith("0")) number = `94${number.slice(1)}`;
  else if (/^[1-9]\d{8}$/.test(number)) number = `94${number}`;
  if (!/^94\d{9}$/.test(number)) return null;
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
