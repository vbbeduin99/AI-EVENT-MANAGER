import { Blueprint, EventInputState, EventType, BudgetItem, ChecklistMilestone } from '../types';

export const budgetModels: Record<EventType, Record<string, number>> = {
  "Wedding": { venue: 0.28, catering: 0.35, decoration: 0.16, photography: 0.08, entertainment: 0.05, production: 0.04, contingency: 0.04 },
  "Birthday": { venue: 0.20, catering: 0.36, decoration: 0.18, photography: 0.09, entertainment: 0.08, production: 0.04, contingency: 0.05 },
  "Corporate Event": { venue: 0.32, catering: 0.30, decoration: 0.10, photography: 0.07, entertainment: 0.06, production: 0.10, contingency: 0.05 },
  "Product Launch": { venue: 0.25, catering: 0.20, decoration: 0.20, photography: 0.12, entertainment: 0.08, production: 0.11, contingency: 0.04 },
  "Conference": { venue: 0.35, catering: 0.30, decoration: 0.07, photography: 0.06, entertainment: 0.04, production: 0.13, contingency: 0.05 },
  "Anniversary": { venue: 0.24, catering: 0.38, decoration: 0.18, photography: 0.08, entertainment: 0.06, production: 0.02, contingency: 0.04 },
  "Graduation": { venue: 0.22, catering: 0.35, decoration: 0.16, photography: 0.10, entertainment: 0.09, production: 0.03, contingency: 0.05 },
  "Baby Shower": { venue: 0.20, catering: 0.38, decoration: 0.22, photography: 0.09, entertainment: 0.04, production: 0.02, contingency: 0.05 },
  "Party": { venue: 0.22, catering: 0.34, decoration: 0.18, photography: 0.08, entertainment: 0.12, production: 0.02, contingency: 0.04 },
  "Other": { venue: 0.25, catering: 0.35, decoration: 0.15, photography: 0.08, entertainment: 0.07, production: 0.05, contingency: 0.05 }
};

const typeTitles: Record<EventType, string[]> = {
  "Wedding": ["Heirloom Grandeur", "Luminescent Botanica", "Gilded Romance", "Celestial Union", "Verdant Opulence"],
  "Birthday": ["Euphoria Jubilee", "Velvet Reverie", "Nocturne Solstice", "Aura Radiance", "Golden Meridian"],
  "Corporate Event": ["Apex Synergy Summit", "Horizon Keynote", "Nexis Leadership Assembly", "Vanguard Colloquium"],
  "Product Launch": ["Genesis Reveal", "Neon Frontier Keynote", "Prism Premiere", "Nova Kinetic Showcase"],
  "Conference": ["Convergence Global", "Symposium Matrix", "FutureMind Discourse", "Intellect Forum"],
  "Anniversary": ["Gilded Odyssey", "Silver Serenade", "Timeless Echoes", "Eternal Symphony"],
  "Graduation": ["Laurel Horizon", "Ascent Commencement", "Valedictory Gala", "NextChapter Soirée"],
  "Baby Shower": ["Pastel Blossom", "Starlight Lullaby", "Flora Cradle", "Celestial Welcome"],
  "Party": ["Midnight Mirage", "Electric Solstice", "Velvet Rave", "Aura Soirée"],
  "Other": ["Bespoke Architecture", "Signature Gathering", "Curated Experience"]
};

export function generateBlueprint(input: EventInputState): Blueprint {
  const { eventType, guests, budget, location, prompt } = input;
  const titles = typeTitles[eventType] || typeTitles["Other"];
  const selectedTitlePrefix = titles[Math.floor(Math.random() * titles.length)];
  const title = `${selectedTitlePrefix}: ${location} ${eventType}`;

  const model = budgetModels[eventType] || budgetModels["Other"];

  // Budget calculations
  const categoryDefs = [
    { name: "Venue", ratio: model.venue, color: "#D9FF65", desc: "Premier hall / estate booking & generator power backup" },
    { name: "Catering", ratio: model.catering, color: "#B8C6FF", desc: `Multi-course banquet for ${guests} guests + live mocktail bar` },
    { name: "Decoration", ratio: model.decoration, color: "#A3E635", desc: "Stage design, entrance tunnel, hanging florals & tablescapes" },
    { name: "Photography & Video", ratio: model.photography, color: "#E879F9", desc: "Cinematic 4K coverage, drone sweeps, and photo gallery" },
    { name: "Entertainment", ratio: model.entertainment, color: "#38BDF8", desc: "Live acoustic musicians, sound tech, and curated soundscapes" },
    { name: "Production & Tech", ratio: model.production, color: "#FACC15", desc: "Warm illumination trusses, ambient pin-spots, LED screens" },
    { name: "Contingency Buffer", ratio: model.contingency, color: "#94A3B8", desc: "Reserve safety margin & municipal logistical buffer" }
  ];

  let sumCost = 0;
  const budgetCategories: BudgetItem[] = categoryDefs.map(cat => {
    const amount = Math.round(budget * cat.ratio);
    sumCost += amount;
    return {
      name: cat.name,
      ratio: cat.ratio,
      color: cat.color,
      desc: cat.desc,
      amount,
      percent: Math.round(cat.ratio * 100)
    };
  });

  const contingencyAmount = Math.round(budget * model.contingency);
  const contingencyPercent = Math.round(model.contingency * 100);

  // Creative direction & palette
  let paletteName = "Botanical & Champagne";
  let paletteColors = [
    { color: "#1B281E", label: "Deep Moss" },
    { color: "#E3D8B8", label: "Champagne Gold" },
    { color: "#0E1318", label: "Midnight Charcoal" },
    { color: "#D9FF65", label: "Acid Lime Accent" }
  ];

  if (prompt.toLowerCase().includes("neon") || prompt.toLowerCase().includes("cyber")) {
    paletteName = "Cyber Neon & Obsidian";
    paletteColors = [
      { color: "#0A0D14", label: "Obsidian" },
      { color: "#00F0FF", label: "Cyan Laser" },
      { color: "#FF007A", label: "Neon Magenta" },
      { color: "#D9FF65", label: "Lime Highlight" }
    ];
  } else if (prompt.toLowerCase().includes("royal") || prompt.toLowerCase().includes("emerald")) {
    paletteName = "Emerald Imperial & Gold";
    paletteColors = [
      { color: "#042F1A", label: "Imperial Emerald" },
      { color: "#E6C665", label: "Antique Gold" },
      { color: "#16131B", label: "Royal Velvet" },
      { color: "#FFFFFF", label: "Pearl White" }
    ];
  } else if (eventType === "Corporate Event" || eventType === "Conference") {
    paletteName = "Slate Modern & Electric Cobalt";
    paletteColors = [
      { color: "#0F172A", label: "Slate Navy" },
      { color: "#3B82F6", label: "Cobalt Blue" },
      { color: "#E2E8F0", label: "Titanium White" },
      { color: "#D9FF65", label: "Signal Lime" }
    ];
  }

  // Visual cards
  const visuals = [
    {
      zone: "Zone Alpha",
      title: "Luminous Curved Stage",
      desc: `Low-profile deck with seamless backdrop emitting ambient waves, wrapped in tailored foliage and soft acoustic baffle panels.`,
      badgeColor: "text-neon-accent",
      bgGradient: "from-[#1c241d] to-[#0d1218]",
      dotPatternColor: "#D9FF65"
    },
    {
      zone: "Entrance Portal",
      title: "Illuminated Botanical Tunnel",
      desc: `Cascading florals, cold-fog scent dispersal system, and personalized laser-cut welcome typography welcoming ${guests} attendees.`,
      badgeColor: "text-periwinkle",
      bgGradient: "from-[#1e1c28] to-[#0e1017]",
      dotPatternColor: "#B8C6FF"
    },
    {
      zone: "Illumination",
      title: "Dynamic Dusk-to-Glow",
      desc: `2400K warm hanging filament fixtures paired with discrete pin-spots focused on tablescapes, programmed to dim for celebration moments.`,
      badgeColor: "text-amber-300",
      bgGradient: "from-[#28251b] to-[#12100a]",
      dotPatternColor: "#ffd565"
    },
    {
      zone: "Viral Moment",
      title: "Infinity Mirror Floral Alcove",
      desc: `Two-way mirror enclosure with interior illuminated foliage giving endless architectural depth for high-fashion guest portraits.`,
      badgeColor: "text-cyan-300",
      bgGradient: "from-[#172428] to-[#091114]",
      dotPatternColor: "#38bdf8"
    },
    {
      zone: "Dining Tablescape",
      title: "Matte Black & Raw Linen",
      desc: `Long banquet tables with stoneware crockery, smoked glassware, hand-poured soy tapers, and personalized calligraphy seating cards.`,
      badgeColor: "text-rose-300",
      bgGradient: "from-[#251b21] to-[#110d10]",
      dotPatternColor: "#f43f5e"
    },
    {
      zone: "Auditory Setup",
      title: "Dispersed High-Fidelity Audio",
      desc: `Column array line systems hidden inside decorative pillars ensuring crystal clear speeches and live music without harsh echoes.`,
      badgeColor: "text-indigo-300",
      bgGradient: "from-[#1d1f2b] to-[#0c0d15]",
      dotPatternColor: "#818cf8"
    }
  ];

  // Guest journey
  const journey = [
    {
      phase: "Arrival & Valet",
      title: "Atmospheric Transition",
      desc: `Gentle acoustic welcome, cold towel service, and scented misting portal separating guests from city traffic in ${location}.`
    },
    {
      phase: "Welcome Bar",
      title: "Signature Welcome Toast",
      desc: `Personalized mocktail reception customized for ${eventType} attendees with botanical garnishes and artisan infusions.`
    },
    {
      phase: "Photo Moment",
      title: "Editorial Portrait Alcove",
      desc: "Dedicated photographer station with studio lighting for pristine social and family portraits."
    },
    {
      phase: "Main Experience",
      title: "Grand Gathering & Stage Reveal",
      desc: `Seamless ushering of ${guests} guests to their seats with thematic ambient lighting and curated audio cues.`
    },
    {
      phase: "Dining",
      title: "Gourmet Culinary Banquet",
      desc: "Attentive table service and curated stations ensuring smooth crowd dispersion and warm dining."
    },
    {
      phase: "Entertainment",
      title: "Live Melodic Performance",
      desc: "Curated live sets elevating the evening energy without overpowering personal conversation."
    },
    {
      phase: "Signature Moment",
      title: "Climactic Celebration",
      desc: "Key ceremonial moment accompanied by choreographed low-smoke illumination and confetti fountain."
    },
    {
      phase: "Farewell",
      title: "Curated Keepsake Departure",
      desc: "Custom keepsake boxes, printed instant memories, and seamless valet vehicle dispatch."
    }
  ];

  // Timelines
  const preEventTimeline = [
    { time: "30 Days Before", title: "Venue & Permits Lock", desc: `Finalize booking in ${location} and lock capacity for ${guests} guests.` },
    { time: "20 Days Before", title: "Decor & Production Blueprint", desc: "Approve stage 3D render, lighting plots, and floral sourcing." },
    { time: "10 Days Before", title: "Catering Menu Tasting", desc: `Sample banquet menu designed for ${guests} guests.` },
    { time: "3 Days Before", title: "Vendor Rehearsal & Power Check", desc: "Generator soundcheck and run-of-show synchronization." },
    { time: "1 Day Before", title: "Full Venue Load-In", desc: "Structural trussing, stage carpentry, and floral setup begins." }
  ];

  const dayFlowTimeline = [
    { time: "14:00", title: "Production Crew Setup & Tech Check", tag: "Tech" },
    { time: "17:30", title: "Floristry & Lighting Fine-Tuning", tag: "Aesthetics" },
    { time: "18:30", title: "Guest Arrival & Welcome Mocktails", tag: "Reception" },
    { time: "19:30", title: "Formal Program Opening & Speeches", tag: "Program" },
    { time: "20:30", title: "Dinner Banquet & Live Acoustic Set", tag: "Banquet" },
    { time: "22:00", title: "Signature Toast & Dancing", tag: "Party" },
    { time: "23:00", title: "Farewell & Guest Egress", tag: "Conclusion" }
  ];

  // Requirements
  const requirements = [
    {
      icon: "home" as const,
      title: "Venue Requirements",
      items: [
        `Minimum ${guests * 15} sq. ft unobstructed hall space`,
        "Dedicated high-capacity air conditioning",
        "Separate green room for performers / hosts",
        "60 kVA soundproof generator backup"
      ]
    },
    {
      icon: "utensils" as const,
      title: "Catering Requirements",
      items: [
        `Service capacity for ${guests} pax simultaneous dining`,
        "Live bread station and dessert trolley",
        "Dedicated baristas for signature espresso & mocktails",
        "Hygienic warming chafers & food safety cert"
      ]
    },
    {
      icon: "flower" as const,
      title: "Decor Requirements",
      items: [
        "Fire-retardant drapery and flame-polished acrylics",
        "Fresh seasonal florals conditioned 24h prior",
        "Custom neon or brass laser-cut name typography",
        "Subtle floor carpeting matching theme tones"
      ]
    },
    {
      icon: "video" as const,
      title: "Production & Media",
      items: [
        "3-camera 4K setup including roving stabilizer gimbal",
        "Wireless audio lapels for speeches",
        "Same-day 60-second teaser edit for social sharing",
        "Private cloud gallery delivered within 72 hours"
      ]
    },
    {
      icon: "volume" as const,
      title: "Sound & Acoustic Brief",
      items: [
        "Line array speaker distribution preventing echo",
        "Dedicated sound technician for live acoustic mix",
        "Curated warm background playlist pre-programmed",
        "Low-profile microphones on podium"
      ]
    },
    {
      icon: "shield" as const,
      title: "Security & Valet",
      items: [
        `Valet capacity for ~${Math.round(guests / 3)} vehicles`,
        "Fire safety kit and trained venue coordinator",
        "First aid & emergency contact board on-site",
        "VIP and guest check-in hostesses at portal"
      ]
    }
  ];

  return {
    title,
    eventType,
    guests,
    budget,
    location,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    tagline: `Harmonic Botanica & Atmospheric Elegance`,
    description: `Designed specifically for ${guests} guests in ${location}. Inspired by your vision: "${prompt}". The blueprint translates this into a high-caliber execution matrix balancing spatial ease, acoustic intimacy, and memorable hospitality.`,
    creativeDirectionTitle: "Organic Modernism",
    creativeDirectionDesc: `Tailored to ${eventType} aesthetics in ${location}. Highlighting refined lighting temperature, spatial ergonomics for ${guests} people, and seamless transitions between program segments.`,
    themePaletteName: paletteName,
    themeColors: paletteColors,
    narrativeTitle: "The Unfolding Arc",
    narrativeStory: "Guests arrive into an ambient arrival zone, receive their personalized welcome experience, and are drawn into the main celebration area designed with tailored focal installations. Each milestone of the program is choreographed to peak emotional resonance.",
    atmosphericRating: "9.8/10 Cinematic",
    visuals,
    budgetCategories,
    targetBudget: budget,
    estimatedCost: sumCost,
    contingencyAmount,
    contingencyPercent,
    journey,
    preEventTimeline,
    dayFlowTimeline,
    requirements
  };
}

export function getDefaultMilestones(): ChecklistMilestone[] {
  return [
    {
      id: "col-1",
      category: "30 DAYS BEFORE",
      tasks: [
        { id: "t-1", text: "Finalize venue contract", done: false },
        { id: "t-2", text: "Confirm guest RSVP list", done: false },
        { id: "t-3", text: "Lock vendor contracts", done: false }
      ]
    },
    {
      id: "col-2",
      category: "15 DAYS BEFORE",
      tasks: [
        { id: "t-4", text: "Finalize food menu", done: false },
        { id: "t-5", text: "Confirm photography team", done: false },
        { id: "t-6", text: "Review stage 3D render", done: false }
      ]
    },
    {
      id: "col-3",
      category: "7 DAYS BEFORE",
      tasks: [
        { id: "t-7", text: "Confirm musical artists", done: false },
        { id: "t-8", text: "Finalize seating chart", done: false },
        { id: "t-9", text: "Procure favors/gifts", done: false }
      ]
    },
    {
      id: "col-4",
      category: "1 DAY BEFORE",
      tasks: [
        { id: "t-10", text: "Inspect venue load-in", done: false },
        { id: "t-11", text: "Sound & mic testing", done: false },
        { id: "t-12", text: "Review master checklist", done: false }
      ]
    },
    {
      id: "col-5",
      category: "EVENT DAY",
      tasks: [
        { id: "t-13", text: "Host briefing at 15:00", done: false },
        { id: "t-14", text: "Food temperature check", done: false },
        { id: "t-15", text: "Celebrate smoothly", done: false }
      ]
    }
  ];
}
