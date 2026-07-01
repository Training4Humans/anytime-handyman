// ============================================================
// 🔑 BUSINESS INFO, All site data lives here
// Update this file to change content across the entire site.
// ============================================================

export const businessInfo = {
  name: "The Anytime Handyman",
  shortName: "Anytime Handyman",
  tagline: "Austin's Most Reliable Handyman, On Time, Every Time.",
  subTagline: "Licensed · Insured · Satisfaction Guaranteed · Serving Austin & Surrounding Areas",
  domain: "theanytimehandyman.com",
  established: 2019,

  owner: {
    name: "Tronell Louis",
    title: "Owner & Lead Technician",
    bio: "Tronell Louis founded The Anytime Handyman in 2019 with a simple mission: deliver honest, high-quality craftsmanship to Austin homeowners, on time, every time. What started as a one-man operation has grown into a trusted name across the Austin metro, built on a foundation of reliability, integrity, and genuine care for every home we touch.",
    photo: "/images/owner-portrait.jpg",
  },

  contact: {
    phone: "512-731-5866",
    phoneHref: "tel:+15127315866",
    email: "quote@theanytimehandyman.com",
    whatsapp: "https://wa.me/15127315866",
  },

  social: {
    facebook: "https://www.facebook.com/theanytimehandyman",
    instagram: "",
    nextdoor: "",
  },

  hours: [
    { day: "Monday – Friday", hours: "7:00 AM – 7:00 PM" },
    { day: "Saturday", hours: "8:00 AM – 5:00 PM" },
    { day: "Sunday", hours: "By Appointment" },
  ],

  serviceAreas: [
    "Austin", "Pflugerville", "Round Rock", "Cedar Park",
    "Georgetown", "Manor", "Buda", "Kyle", "Bee Cave",
    "Lakeway", "Bastrop", "Leander", "Hutto",
  ],

  hero: {
    video: "/videos/hero-optimized.mp4",     // Web-optimized, no audio, H.264 faststart
    videoPoster: "/images/hero-poster.jpg",  // Fallback while video loads
    fallbackImage: "/images/hero-bg.jpg",    // If autoplay is blocked
  },

  // Formspree form ID, create free account at formspree.io
  formspreeId: "YOUR_FORMSPREE_ID",

  seo: {
    defaultTitle: "The Anytime Handyman | Austin's Most Reliable Handyman Service",
    defaultDescription: "Austin's trusted handyman service since 2019. Licensed, insured, and satisfaction guaranteed. Home repairs, maintenance plans, decks, fencing, epoxy floors & more. Serving Austin, Pflugerville, Round Rock & surrounding areas.",
    keywords: "handyman Austin TX, handyman near me, home repair Austin, maintenance plans Austin, deck repair Austin, epoxy floor Austin, fence repair Austin",
  },
} as const;


// ============================================================
// 🛠️ SERVICES, Update to add/remove services
// ============================================================

export const services = [
  {
    id: "drywall",
    title: "Drywall Repair",
    icon: "🧱",
    description: "Holes, cracks, water damage, we patch and texture to match your existing walls perfectly.",
    category: "interior",
    featured: true,
  },
  {
    id: "painting",
    title: "Interior & Exterior Painting",
    icon: "🎨",
    description: "Professional painting services for any room or exterior surface. Clean, precise, and long-lasting.",
    category: "interior",
    featured: true,
  },
  {
    id: "carpentry",
    title: "Carpentry & Trim Work",
    icon: "🪵",
    description: "Crown molding, baseboards, custom woodwork, and finish carpentry done to perfection.",
    category: "interior",
    featured: true,
  },
  {
    id: "doors",
    title: "Door & Window Repair",
    icon: "🚪",
    description: "Installation, adjustment, weatherstripping, and hardware replacement for doors and windows.",
    category: "interior",
    featured: true,
  },
  {
    id: "fixtures",
    title: "Fixture Installation",
    icon: "💡",
    description: "Light fixtures, ceiling fans, faucets, and appliance hookups installed safely and correctly.",
    category: "interior",
    featured: true,
  },
  {
    id: "tv-mounting",
    title: "TV & AV Mounting",
    icon: "📺",
    description: "Professional TV mounting with hidden wire management. Any size, any wall type.",
    category: "interior",
    featured: true,
  },
  {
    id: "flooring",
    title: "Flooring & Epoxy",
    icon: "🏠",
    description: "Hardwood, LVP, tile installation, and stunning metallic epoxy garage floors.",
    category: "specialty",
    featured: true,
  },
  {
    id: "decks",
    title: "Decks & Outdoor Spaces",
    icon: "🌿",
    description: "Deck building, repair, and refinishing. Pergolas, patios, and outdoor carpentry.",
    category: "exterior",
    featured: true,
  },
  {
    id: "fencing",
    title: "Fence Repair & Installation",
    icon: "🔧",
    description: "Wood, vinyl, and metal fence repair, replacement, and new installation.",
    category: "exterior",
    featured: true,
  },
  {
    id: "pressure-washing",
    title: "Pressure Washing",
    icon: "💧",
    description: "Driveways, patios, siding, decks, and fences, restored to like-new condition.",
    category: "exterior",
    featured: false,
  },
  {
    id: "gutters",
    title: "Gutter Cleaning & Repair",
    icon: "🍂",
    description: "Full gutter cleaning, minor repairs, and downspout maintenance to protect your home.",
    category: "exterior",
    featured: false,
  },
  {
    id: "smart-home",
    title: "Smart Home Installation",
    icon: "📱",
    description: "Ring doorbells, Nest thermostats, smart locks, and home automation setup.",
    category: "specialty",
    featured: false,
  },
  {
    id: "holiday-lights",
    title: "Holiday Lighting",
    icon: "✨",
    description: "Professional holiday light installation and removal. Safe, beautiful, and stress-free.",
    category: "specialty",
    featured: false,
  },
  {
    id: "water-damage",
    title: "Water Damage Repairs",
    icon: "🛠️",
    description: "Drywall, flooring, and structural repairs following water damage or leaks.",
    category: "specialty",
    featured: false,
  },
] as const;


// ============================================================
// 🏠 MAINTENANCE PLANS
// ============================================================

export const maintenancePlans = {
  tagline: "Your Home is Your Biggest Investment. Protect It.",
  subTagline: "The possibilities are endless with personalized Maintenance Lists & pricing to match your budget.",
  monthly: {
    label: "Monthly",
    color: "#D4940A",
    items: [
      { category: "Safety & Systems", tasks: [
        "Test Smoke & Carbon Monoxide Detectors",
        "Check HVAC Filters & Replace if Needed",
        "Check Fire Extinguishers (pressure & access)",
      ]},
      { category: "Plumbing", tasks: [
        "Inspect Under Sinks for Leaks",
        "Check Toilets for Running or Leaks",
        "Run Water in Unused Sinks/Tubs",
      ]},
      { category: "Appliances", tasks: [
        "Clean Dishwasher Filter",
        "Wipe Refrigerator Door Seals",
        "Inspect Washer Hoses",
      ]},
      { category: "General Interior", tasks: [
        "Inspect Doors and Windows for Drafts",
        "Light Clean Range Hood Filter",
      ]},
    ],
  },
  quarterly: {
    label: "Quarterly",
    color: "#D4940A",
    items: [
      { category: "HVAC & Electrical", tasks: [
        "Replace HVAC Air Filters",
        "Test GFCI/AFCI Outlets",
        "Check Thermostat Operation",
      ]},
      { category: "Plumbing", tasks: [
        "Test Water Heater Pressure Relief Valve",
        "Inspect Visible Plumbing Lines",
      ]},
      { category: "Interior", tasks: [
        "Inspect Caulking in Kitchen & Baths",
        "Check Ceilings and Walls for Stains & Cracks",
      ]},
      { category: "Exterior", tasks: [
        "Inspect Roof from Ground",
        "Clean Window Tracks & Screens",
        "Check Exterior Lighting",
      ]},
    ],
  },
  annual: {
    label: "Annual",
    color: "#D4940A",
    items: [
      { category: "HVAC & Utilities", tasks: [
        "Professional HVAC Service",
        "Flush Water Heater (tank models)",
        "Clean Dryer Vent",
      ]},
      { category: "Safety", tasks: [
        "Replace Smoke & CO Detector Batteries",
        "Review Emergency Exit Plan",
        "Check Stair & Handrail Safety",
      ]},
      { category: "Plumbing", tasks: [
        "Inspect Water Heater for Corrosion",
        "Inspect Outdoor Faucets & Shutoffs",
      ]},
      { category: "Exterior", tasks: [
        "Clean Gutters & Downspouts",
        "Inspect Siding, Trim & Paint",
        "Seal Driveway/Deck (as needed)",
      ]},
    ],
  },
  addOns: [
    "Spring Yard Clean Up & Gutter Cleaning",
    "Service Lawn Equipment",
    "Winterize Outdoor Plumbing",
    "Chimney Inspection & Cleaning",
    "Major Caulking Refresh",
    "Exterior Painting or Sealing",
    "Professional Roof Inspection",
    "Lock Rekeying or Replacement",
    "ADA-style Safety Upgrades (grab bars, handrails)",
    "Pressure Wash Siding, Driveway & Walkway",
  ],
} as const;


// ============================================================
// ❓ FAQ
// ============================================================

export const faqs = [
  {
    question: "Are you licensed and insured?",
    answer: "Yes. The Anytime Handyman is fully licensed and insured, protecting you and your home on every job. We carry general liability insurance and can provide proof upon request.",
  },
  {
    question: "Do you offer free estimates?",
    answer: "Absolutely. We provide free, no-obligation estimates for all projects. Simply fill out our contact form or give us a call and we'll get back to you promptly.",
  },
  {
    question: "How quickly can you schedule?",
    answer: "We strive to offer same-day and next-day availability for most jobs. For larger projects, we'll work with your schedule to find the earliest convenient time.",
  },
  {
    question: "What areas do you serve?",
    answer: "We serve Austin and the surrounding metro area including Pflugerville, Round Rock, Cedar Park, Georgetown, Manor, Buda, Kyle, Bee Cave, Lakeway, and more.",
  },
  {
    question: "Do you warranty your work?",
    answer: "Yes. We stand behind every job we do. If you're not satisfied with our work, we'll make it right, no questions asked.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, check, Venmo, Zelle, and all major credit cards. Payment is due upon completion of work unless otherwise arranged.",
  },
] as const;
