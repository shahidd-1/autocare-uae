export const services = [
  { n: "01", title: "Exterior Wash", desc: "Precision exterior care for a deep, refined finish.", image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1400&q=85" },
  { n: "02", title: "Interior Cleaning", desc: "Restore the cabin with meticulous surface-by-surface care.", image: "https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=1400&q=85" },
  { n: "03", title: "Deep Cleaning", desc: "A comprehensive reset for vehicles that need more.", image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1400&q=85" },
  { n: "04", title: "Ceramic Coating", desc: "Gloss-enhancing protection designed for a premium finish.", image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1400&q=85" },
  { n: "05", title: "Paint Protection", desc: "Protect the surfaces that make your car stand out.", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=85" },
  { n: "06", title: "Full Detailing", desc: "Inside, outside and every detail in between.", image: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=1400&q=85" },
  { n: "07", title: "Engine Bay", desc: "Careful cleaning for a cleaner, sharper engine bay.", image: "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&w=1400&q=85" },
  { n: "08", title: "Tyre Treatment", desc: "Finish the look with clean, conditioned tyres.", image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1400&q=85" }
];

export const plans = [
  { name: "Essential", price: "AED XXX", desc: "For regular vehicle care", features: ["Exterior care", "Interior refresh", "Tyre treatment", "Service reminders"] },
  { name: "Premium", price: "AED XXX", desc: "For complete care", popular: true, features: ["Everything in Essential", "Deep interior care", "Paint enhancement", "Priority scheduling"] },
  { name: "Ultimate", price: "AED XXX", desc: "For the full detailing experience", features: ["Everything in Premium", "Ceramic coating", "Paint protection", "Dedicated care plan"] }
];

export const translations = {
  en: {
    nav: ["Services", "Experience", "How It Works", "Plans", "Locations"],
    heroEyebrow: "PREMIUM CAR CARE · DUBAI & ABU DHABI",
    heroTitle1: "YOUR CAR.",
    heroTitle2: "PERFECTED.",
    heroCopy: "Exceptional detailing, protection and automotive care — delivered wherever you are.",
    primary: "BOOK YOUR SERVICE",
    secondary: "EXPLORE SERVICES",
    servicesTitle: "EVERY DETAIL.",
    servicesTitle2: "PERFECTED.",
    servicesCopy: "From everyday maintenance to deep detailing, AUTOCARE brings a premium standard of care to your doorstep.",
    processTitle: "YOUR CAR.",
    processTitle2: "OUR ROUTINE.",
    finalTitle: "YOUR CAR",
    finalTitle2: "DESERVES MORE.",
    finalCopy: "Experience premium car care, wherever you are."
  },
  ar: {
    nav: ["الخدمات", "التجربة", "كيف تعمل", "الباقات", "المواقع"],
    heroEyebrow: "عناية فاخرة بالسيارات · دبي وأبوظبي",
    heroTitle1: "سيارتك.",
    heroTitle2: "بأفضل صورة.",
    heroCopy: "تفصيل وحماية وعناية استثنائية بالسيارات — أينما كنت.",
    primary: "احجز خدمتك",
    secondary: "استكشف الخدمات",
    servicesTitle: "كل تفصيل.",
    servicesTitle2: "بأفضل عناية.",
    servicesCopy: "من العناية اليومية إلى التنظيف العميق، تقدم AUTOCARE مستوى فاخرًا من العناية حتى باب منزلك.",
    processTitle: "سيارتك.",
    processTitle2: "روتيننا.",
    finalTitle: "سيارتك",
    finalTitle2: "تستحق المزيد.",
    finalCopy: "اختبر عناية السيارات الفاخرة أينما كنت."
  }
} as const;