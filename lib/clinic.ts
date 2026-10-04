export const clinic = {
  name: "Klinik Dr Sophia Y",
  phone: "+60 17-324 2801",
  whatsapp: "https://wa.me/60173242801",
  socials: {
    instagram: "https://www.instagram.com/klinik.dr.sophia.y/",
    facebook: "https://www.facebook.com/KlinikDrSophiaY",
  },
};
export function enquiry(phone = "60173242801", subject = "a consultation") {
  return `https://wa.me/${phone}?text=${encodeURIComponent(`Hello Klinik Dr Sophia Y, I would like to enquire about ${subject}.`)}`;
}
export const branches = [
  {
    name: "Shah Alam",
    designation: "Headquarters",
    address: "34, Jalan Zirkon F7/F, Seksyen 7, 40000 Shah Alam, Selangor",
    phone: "60173242801",
    displayPhone: "+60 17-324 2801",
  },
  {
    name: "Kota Damansara",
    designation: "Petaling Jaya",
    address:
      "Unit G-10, I Residence, Persiaran Surian, Seksyen 4, Kota Damansara, 47810 Petaling Jaya, Selangor",
    phone: "60196517501",
    displayPhone: "+60 19-651 7501",
  },
  {
    name: "Bangi",
    designation: "Bandar Baru Bangi",
    address:
      "No. 39, 1st Floor (39A), Jalan 8/1, Seksyen 8, 43650 Bandar Baru Bangi, Selangor",
    phone: "60135057501",
    displayPhone: "+60 13-505 7501",
  },
  {
    name: "Jelatek",
    designation: "Setiawangsa",
    address:
      "2-04, 2nd Floor, Dataran Jelatek, Jalan Jelatek, Taman Keramat, 54200 Kuala Lumpur",
    phone: "60193582801",
    displayPhone: "+60 19-358 2801",
  },
  {
    name: "Seremban 2",
    designation: "Negeri Sembilan",
    address:
      "36, Ground Floor, Jalan S2 B16, Pusat Dagangan Seremban 2, 70300 Seremban, Negeri Sembilan",
    phone: "60132722801",
    displayPhone: "+60 13-272 2801",
  },
];
// Editorial stock photographs. Replace here with approved clinic assets.
// These depict neither the clinic premises nor its patients or medical team.
export const images = {
  hero: {
    src: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=1800&q=85",
    alt: "Illustrative editorial portrait; not a clinic patient or treatment result",
  },
  treatment: {
    src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=85",
    alt: "Illustrative facial skincare photograph",
  },
  detail: {
    src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1400&q=85",
    alt: "Ocean waves and soft light, an editorial study of natural texture",
  },
};
export const treatments = [
  {
    title: "Skin & clarity",
    subtitle: "A thoughtful foundation.",
    description:
      "Start with a conversation about acne, pigmentation, uneven tone or texture. Explore skin treatments and peel options with the clinic.",
    examples: "Hydrofacial · LHA LA Peel · Skin consultation",
  },
  {
    title: "Laser & renewal",
    subtitle: "A more considered approach.",
    description:
      "Discuss laser-based options for your skin concerns, including Pico and CO₂ laser treatments. Your consultation helps establish suitability and expectations.",
    examples: "Pico laser · CO₂ laser",
  },
  {
    title: "Rejuvenation",
    subtitle: "Still unmistakably you.",
    description:
      "Explore the clinic’s aesthetic options, including HIFU and skin boosters. Discuss your preferences, treatment considerations and an individual plan.",
    examples: "HIFU · Skin boosters · V-shape · Under-eye care",
  },
];

export const additionalTreatments = [
  {
    name: "Hydrofacial",
    description: "Explore facial care for your skin’s individual needs.",
  },
  {
    name: "LHA LA Peel",
    description: "Discuss peel options, suitability and aftercare.",
  },
  {
    name: "Hair loss treatment",
    description: "Begin with an assessment of your hair and scalp concerns.",
  },
  {
    name: "V-shape treatment",
    description: "Discuss facial contour preferences and available options.",
  },
  {
    name: "Under-eye treatment",
    description: "Explore care for your individual under-eye concerns.",
  },
  {
    name: "Weight loss",
    description: "Speak with the clinic about weight management options.",
  },
];
export const operatingHours = [
  { days: "Monday", hours: "10am–3pm" },
  { days: "Tuesday", hours: "Off day" },
  { days: "Wednesday–Friday", hours: "10am–7pm" },
  { days: "Saturday–Sunday", hours: "9:30am–5:30pm" },
];
export const feedback = [
  {
    name: "Emma Abdul",
    quote: "The doctors and staff are so welcoming and friendly! Had a consultation prior to treatment, enjoyed the service and definitely recommend",
  },
  {
    name: "Izwan Anuar",
    quote: "I did my Pico Laser and Lala Peel at Sophia Y Clinic the staff were super friendly, and Dr. Noshee gave such a clear and professional explanation. Loved the experience! Definitely coming back for my next session! ",
  },
  {
    name: "fara diyana",
    quote: "Saya datang ke klinik untuk redeem treatment. Staff semua cantik & friendly, terutama Dr Nosheen sangat friendly dan menerangkan dengan baik punca skin dan treatment yang akan dilakukan. I really appreciate her effort. Thank you, Dr Nosheen & semua staff. Yang penting klinik sangat selesa & bersih.",
  },
  {
    name: "Nursyazlina",
    quote: "So satisfying. Made my facial with beautification Anis. She’s so sweet and give some useful tips. Also, consultation with Dr Sarah. So helpful. Really recommended and will come again for follow up.",
  },

];
export const feedbackSource =
  "https://www.aestheticclinics.my/place/klinik-dr-sophia-y-shah-alam-hq";
