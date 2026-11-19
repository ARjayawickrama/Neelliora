// Central owner configuration. Replace every value that starts with REPLACE_ before launch.
// Anything still set to REPLACE_ keeps its button visible and tells the visitor the link is not set up yet.
export const SITE = {
  name: "NEEL LIORA",
  tagline: "Experience Luxury. Discover Serenity. Stay Beautiful.",
  location: "Weligama, Sri Lanka",
  whatsappNumber: "94742545074", 
  phone: "94742545074",           
  email: "",                                      
  bookingComUrl: "https://www.booking.com/hotel/lk/neel-liora.html?aid=304142&label=gen173nr-10CAsohQFCCm5lZWwtbGlvcmFIM1gEaIUBiAEBmAEzuAEXyAEM2AED6AEB-AEBiAIBqAIBuAKGzazWBsACAdICJDljZTU4YjI3LTNiMzgtNDNkYi04ZTA2LTFmODMyOTg3NzU3NdgCAeACAQ&sid=e902cb887979873e7c39bf60ef390076&checkin=2026-10-12&checkout=2026-10-15&dest_id=-2240150&dest_type=city&do_availability_check=1&group_adults=1&group_children=0&hp_avform=1&keep_landing=1&no_rooms=1&origin=hp&sb_price_type=total&src=hotel&type=total&#availability_target",
  airbnbUrl: "https://www.airbnb.com/rooms/1794308140051766671?search_mode=regular_search&adults=1&check_in=2026-11-23&check_out=2026-11-25&children=0&infants=0&pets=0&source_impression_id=p3_2e266b95-0e3d-49e5-899b-777b32017444_a83c15c4-7f65-4f93-bc96-c6e01410607e_0_1794308140051766671_0&previous_page_section_name=1000&federated_search_id=2e266b95-0e3d-49e5-899b-777b32017444",
  mapsUrl: "https://maps.app.goo.gl/gMcefaFBYycRvHNg9",      // used by Get Directions
  mapsEmbedUrl: "https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1s5.9834088,80.4439112!6i17", // Embed Neel Liora in Weligama
  maxGuests: 8,
};

// Real property photos only. Put the files in /public/images and edit the alt text to match.
export const IMAGES = {
  hero: { src: "/images/hero.png", alt: "Neel Liora, a boutique stay near Weligama Beach" },
  about: { src: "/images/about.png", alt: "Neel Liora property" },
  gallery: [
    { src: "/images/bedroom.png", alt: "Bedroom at Neel Liora", label: "Bedrooms" },
    { src: "/images/bathroom.png", alt: "Bathroom at Neel Liora", label: "Bathrooms" },
    { src: "/images/terrace.png", alt: "Terrace at Neel Liora", label: "Terrace" },
    { src: "/images/garden.png", alt: "Garden at Neel Liora", label: "Garden" },
    { src: "/images/exterior.jpg", alt: "Exterior of Neel Liora", label: "Exterior" },
    { src: "/images/breakfast.png", alt: "Breakfast at Neel Liora", label: "Breakfast" },
    { src: "/images/surroundings.png", alt: "Surroundings of Neel Liora", label: "Surroundings" },
  ],
};

// Genuine guest reviews supplied by the owner. Do not add or edit without the guest's text.
export const REVIEWS = [
  { name: "Aliaksandr", country: "Belarus", flag: "🇧🇾", text: "Very clean and comfortable house, nice big terrace for dining, bike parking, very quiet place. Everything is working: water heater, conditioner, wifi. Owners family is very nice and kind, will help you if you need, breakfast was included..." },
  { name: "Jack", country: "Australia", flag: "🇦🇺", text: "The staff were very friendly and helpful, and the rooms were clean, modern, and comfortable. The peaceful location and delicious food made our stay even more enjoyable." },
];
