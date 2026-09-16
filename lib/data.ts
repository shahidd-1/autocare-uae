export const services = [
  { n: "01", image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1400&q=85",
    en: { title: "Exterior Wash", desc: "Precision exterior care for a deep, refined finish." },
    ar: { title: "غسيل خارجي", desc: "عناية خارجية دقيقة تمنح سيارتك لمسة نهائية راقية." } },
  { n: "02", image: "https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=1400&q=85",
    en: { title: "Interior Cleaning", desc: "Restore the cabin with meticulous surface-by-surface care." },
    ar: { title: "تنظيف داخلي", desc: "استعادة نضارة المقصورة بعناية فائقة لكل سطح." } },
  { n: "03", image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1400&q=85",
    en: { title: "Deep Cleaning", desc: "A comprehensive reset for vehicles that need more." },
    ar: { title: "تنظيف عميق", desc: "إعادة تأهيل شاملة للسيارات التي تحتاج عناية أكبر." } },
  { n: "04", image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1400&q=85",
    en: { title: "Ceramic Coating", desc: "Gloss-enhancing protection designed for a premium finish." },
    ar: { title: "طلاء سيراميك", desc: "حماية تعزز اللمعان بتصميم يمنح لمسة نهائية فاخرة." } },
  { n: "05", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=85",
    en: { title: "Paint Protection", desc: "Protect the surfaces that make your car stand out." },
    ar: { title: "حماية الطلاء", desc: "احمِ الأسطح التي تُبرز تميّز سيارتك." } },
  { n: "06", image: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=1400&q=85",
    en: { title: "Full Detailing", desc: "Inside, outside and every detail in between." },
    ar: { title: "تلميع شامل", desc: "من الداخل والخارج، وكل تفصيل بينهما." } },
  { n: "07", image: "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&w=1400&q=85",
    en: { title: "Engine Bay", desc: "Careful cleaning for a cleaner, sharper engine bay." },
    ar: { title: "تنظيف غرفة المحرك", desc: "تنظيف دقيق لغرفة محرك أنظف وأكثر بريقًا." } },
  { n: "08", image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1400&q=85",
    en: { title: "Tyre Treatment", desc: "Finish the look with clean, conditioned tyres." },
    ar: { title: "عناية بالإطارات", desc: "أكمل المظهر بإطارات نظيفة ومهيأة بعناية." } }
];

export const plans = [
  { name: { en: "Essential", ar: "أساسية" }, price: "AED XXX",
    desc: { en: "For regular vehicle care", ar: "للعناية المنتظمة بالسيارة" },
    features: {
      en: ["Exterior care", "Interior refresh", "Tyre treatment", "Service reminders"],
      ar: ["عناية خارجية", "تجديد داخلي", "عناية بالإطارات", "تذكير بالخدمة"]
    } },
  { name: { en: "Premium", ar: "مميزة" }, price: "AED XXX", popular: true,
    desc: { en: "For complete care", ar: "للعناية الكاملة" },
    features: {
      en: ["Everything in Essential", "Deep interior care", "Paint enhancement", "Priority scheduling"],
      ar: ["كل ما في الباقة الأساسية", "عناية داخلية عميقة", "تحسين الطلاء", "جدولة ذات أولوية"]
    } },
  { name: { en: "Ultimate", ar: "فائقة" }, price: "AED XXX",
    desc: { en: "For the full detailing experience", ar: "لتجربة تلميع شاملة" },
    features: {
      en: ["Everything in Premium", "Ceramic coating", "Paint protection", "Dedicated care plan"],
      ar: ["كل ما في الباقة المميزة", "طلاء سيراميك", "حماية الطلاء", "خطة عناية مخصصة"]
    } }
];

export const translations = {
  en: {
    nav: ["Services", "Experience", "How It Works", "Plans", "Locations"],
    bookNow: "BOOK NOW",

    heroEyebrow: "PREMIUM CAR CARE · DUBAI & ABU DHABI",
    heroTitle1: "YOUR CAR.",
    heroTitle2: "PERFECTED.",
    heroCopy: "Exceptional detailing, protection and automotive care — delivered wherever you are.",
    primary: "BOOK YOUR SERVICE",
    secondary: "EXPLORE SERVICES",
    heroStats: ["PREMIUM CARE", "24/7 BOOKING", "DUBAI · ABU DHABI"],

    marquee: ["PRECISION DETAILING", "PREMIUM CARE", "DOORSTEP SERVICE", "DUBAI", "ABU DHABI"],

    servicesLabel: "01 / SERVICES",
    servicesTitle: "EVERY DETAIL.",
    servicesTitle2: "PERFECTED.",
    servicesCopy: "From everyday maintenance to deep detailing, AUTOCARE brings a premium standard of care to your doorstep.",

    experienceLabel: "02 / EXPERIENCE",
    experienceTitle1: "NOT JUST",
    experienceTitle2: "A WASH.",
    experienceCopy: "AUTOCARE is built around the idea that vehicle care should feel effortless, precise and unmistakably premium.",
    experienceItems: [
      { title: "PRECISION", desc: "Careful, surface-by-surface attention." },
      { title: "CONVENIENCE", desc: "Professional service without the detour." },
      { title: "PROTECTION", desc: "Treatments designed around your finish." },
      { title: "EXPERIENCE", desc: "A premium journey from start to finish." }
    ],

    showcaseLabel: "03 / THE AUTOCARE STANDARD",
    showcaseTags: ["PAINT PROTECTION", "CERAMIC", "INTERIOR", "TYRE CARE"],
    showcaseSub: "PRECISION / PROTECTION / FINISH",
    showcaseTitle: "Engineered for the finish.",
    scroll: "SCROLL",

    processLabel: "04 / PROCESS",
    processTitle: "YOUR CAR.",
    processTitle2: "OUR ROUTINE.",
    steps: [
      { n: "01", title: "CHOOSE YOUR SERVICE", desc: "Select the care your vehicle needs." },
      { n: "02", title: "PICK YOUR LOCATION", desc: "Dubai or Abu Dhabi — wherever you are." },
      { n: "03", title: "WE COME TO YOU", desc: "Our team arrives at your chosen location." },
      { n: "04", title: "ENJOY THE FINISH", desc: "Your vehicle gets the AUTOCARE treatment." }
    ],

    differenceLabel: "05 / THE DIFFERENCE",
    differenceTitle1: "SEE THE",
    differenceTitle2: "DIFFERENCE.",
    dragToCompare: "DRAG TO COMPARE",
    before: "BEFORE",
    after: "AFTER",

    plansLabel: "06 / PLANS",
    plansTitle1: "CARE THAT",
    plansTitle2: "FITS YOU.",
    mostPopular: "MOST POPULAR",
    choosePlan: "CHOOSE PLAN",

    digitalLabel: "07 / DIGITAL EXPERIENCE",
    digitalTitle1: "YOUR CAR CARE.",
    digitalTitle2: "IN YOUR HANDS.",
    digitalCopy: "A future-ready app experience for scheduling, service updates and vehicle care management.",
    comingSoon: "COMING SOON",
    appGoodMorning: "GOOD MORNING",
    appCarName: "Your M4",
    appNextService: "NEXT SERVICE",
    appNextServiceTime: "Tomorrow · 10:00",
    appNextServiceType: "Exterior Detail",
    appStatus: "STATUS",
    appScheduled: "Scheduled",
    appPlan: "PLAN",
    appPlanValue: "Premium",
    appManage: "MANAGE SERVICE",

    locationsLabel: "08 / LOCATIONS",
    locationsTitle1: "WHEREVER",
    locationsTitle2: "YOU ARE.",
    locations: [
      { city: "DUBAI", areas: "Jumeirah · Downtown · Marina · Business Bay · Palm Jumeirah" },
      { city: "ABU DHABI", areas: "Al Reem · Saadiyat · Yas Island · Khalifa City · Al Raha" }
    ],

    finalLabel: "09 / READY WHEN YOU ARE",
    finalTitle: "YOUR CAR",
    finalTitle2: "DESERVES MORE.",
    finalCopy: "Experience premium car care, wherever you are.",
    whatsapp: "WHATSAPP US",

    footerTagline1: "Premium car care, redefined for the UAE.",
    footerTagline2: "Dubai · Abu Dhabi",
    footerNav: ["Services", "How It Works", "Plans", "Locations", "About", "Contact"],
    footerCopyright: "© 2026 AUTOCARE. ALL RIGHTS RESERVED.",
    footerLangLabel: "ENGLISH · العربية"
  },
  ar: {
    nav: ["الخدمات", "التجربة", "كيف تعمل", "الباقات", "المواقع"],
    bookNow: "احجز الآن",

    heroEyebrow: "عناية فاخرة بالسيارات · دبي وأبوظبي",
    heroTitle1: "سيارتك.",
    heroTitle2: "بأتمّ إتقان.",
    heroCopy: "تفصيل وحماية وعناية استثنائية بالسيارات — أينما كنت.",
    primary: "احجز خدمتك",
    secondary: "استكشف الخدمات",
    heroStats: ["عناية فاخرة", "حجز على مدار الساعة", "دبي · أبوظبي"],

    marquee: ["عناية دقيقة بالتفاصيل", "عناية فاخرة", "خدمة حتى باب المنزل", "دبي", "أبوظبي"],

    servicesLabel: "01 / الخدمات",
    servicesTitle: "كل تفصيل.",
    servicesTitle2: "بعناية فائقة.",
    servicesCopy: "من العناية اليومية إلى التنظيف العميق، تقدم AUTOCARE مستوى فاخرًا من العناية حتى باب منزلك.",

    experienceLabel: "02 / التجربة",
    experienceTitle1: "ليست مجرد",
    experienceTitle2: "غسيل.",
    experienceCopy: "تقوم AUTOCARE على فكرة أن العناية بالسيارة يجب أن تكون سلسة، دقيقة، وفاخرة بلا شك.",
    experienceItems: [
      { title: "الدقة", desc: "اهتمام دقيق بكل سطح على حدة." },
      { title: "الراحة", desc: "خدمة احترافية دون أي عناء." },
      { title: "الحماية", desc: "معالجات مصممة خصيصًا لحماية طلاء سيارتك." },
      { title: "التجربة", desc: "رحلة فاخرة من البداية إلى النهاية." }
    ],

    showcaseLabel: "03 / معيار AUTOCARE",
    showcaseTags: ["حماية الطلاء", "سيراميك", "العناية الداخلية", "عناية بالإطارات"],
    showcaseSub: "الدقة / الحماية / اللمسة النهائية",
    showcaseTitle: "مصمم للوصول إلى أفضل لمسة نهائية.",
    scroll: "مرّر",

    processLabel: "04 / كيف تعمل",
    processTitle: "سيارتك.",
    processTitle2: "روتيننا.",
    steps: [
      { n: "01", title: "اختر خدمتك", desc: "اختر العناية التي تحتاجها سيارتك." },
      { n: "02", title: "حدد موقعك", desc: "دبي أو أبوظبي — أينما كنت." },
      { n: "03", title: "نصل إليك", desc: "يصل فريقنا إلى الموقع الذي تختاره." },
      { n: "04", title: "استمتع بالنتيجة", desc: "تحصل سيارتك على عناية AUTOCARE الكاملة." }
    ],

    differenceLabel: "05 / الفرق واضح",
    differenceTitle1: "شاهد",
    differenceTitle2: "الفرق.",
    dragToCompare: "اسحب للمقارنة",
    before: "قبل",
    after: "بعد",

    plansLabel: "06 / الباقات",
    plansTitle1: "عناية",
    plansTitle2: "تناسبك.",
    mostPopular: "الأكثر طلبًا",
    choosePlan: "اختر الباقة",

    digitalLabel: "07 / تجربة رقمية",
    digitalTitle1: "عناية سيارتك.",
    digitalTitle2: "بين يديك.",
    digitalCopy: "تجربة تطبيق ذكية للجدولة وتحديثات الخدمة وإدارة العناية بسيارتك.",
    comingSoon: "قريبًا",
    appGoodMorning: "صباح الخير",
    appCarName: "سيارتك M4",
    appNextService: "الخدمة القادمة",
    appNextServiceTime: "غدًا · 10:00",
    appNextServiceType: "تلميع خارجي",
    appStatus: "الحالة",
    appScheduled: "مجدولة",
    appPlan: "الباقة",
    appPlanValue: "مميزة",
    appManage: "إدارة الخدمة",

    locationsLabel: "08 / المواقع",
    locationsTitle1: "أينما",
    locationsTitle2: "كنت.",
    locations: [
      { city: "دبي", areas: "جميرا · وسط المدينة · مارينا · بزنس باي · نخلة جميرا" },
      { city: "أبوظبي", areas: "الريم · السعديات · جزيرة ياس · مدينة خليفة · الراحة" }
    ],

    finalLabel: "09 / جاهزون عندما تكون جاهزًا",
    finalTitle: "سيارتك",
    finalTitle2: "تستحق المزيد.",
    finalCopy: "اختبر عناية السيارات الفاخرة أينما كنت.",
    whatsapp: "تواصل عبر واتساب",

    footerTagline1: "عناية فاخرة بالسيارات، بمعايير تليق بالإمارات.",
    footerTagline2: "دبي · أبوظبي",
    footerNav: ["الخدمات", "كيف تعمل", "الباقات", "المواقع", "نبذة عنا", "تواصل معنا"],
    footerCopyright: "© 2026 AUTOCARE. جميع الحقوق محفوظة.",
    footerLangLabel: "العربية · ENGLISH"
  }
} as const;
