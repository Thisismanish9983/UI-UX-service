export const projectsData = [
  {
    id: "fintech-dashboard",
    title: "ApexPay Global Treasury",
    category: "Fintech Dashboard",
    filterCategory: "Dashboard",
    client: "ApexPay Technologies",
    year: "2025",
    timeline: "7 Weeks",
    featured: true,
    tagline: "High-density institutional liquidity & FX risk intelligence console",
    description: "Architected a zero-latency financial operations platform enabling institutional traders and treasury leaders to manage $40M+ daily multi-currency cross-border transactions.",
    metrics: [
      { label: "Execution Speed", value: "+44%" },
      { label: "Friction Reduction", value: "-62%" },
      { label: "Asset Volume", value: "$4.2B" }
    ],
    tags: ["Dashboard", "Fintech", "Data Viz", "Design System"],
    challenge: "Treasury officers were bogged down by segmented legacy tools, causing fatal 3-minute delays during volatile foreign exchange market movements.",
    solution: "We designed a modular dark-mode dashboard with real-time liquidity telemetry, one-click hedging execution, and predictive cash flow trajectory graphs.",
    deliverables: [
      "Modular dashboard grid with drag-and-drop telemetry widgets",
      "High-density order book visualization",
      "Keyboard shortcut map for high-speed trading",
      "Dark theme design system with WCAG AAA contrast"
    ],
    accentColor: "#6366F1",
    mockupType: "dashboard"
  },
  {
    id: "ecommerce-mobile-app",
    title: "Aura Artisan Marketplace",
    category: "E-commerce Mobile App",
    filterCategory: "Mobile",
    client: "Aura Goods Collective",
    year: "2025",
    timeline: "6 Weeks",
    featured: true,
    tagline: "Sensory mobile shopping experience with 1-click tactile checkout",
    description: "Crafted a mobile commerce application focused on micro-interactions, editorial curation, and a streamlined 2-step checkout flow that converted casual browsers into brand advocates.",
    metrics: [
      { label: "Checkout Conversion", value: "+38%" },
      { label: "App Store Rating", value: "4.9 ★" },
      { label: "Repeat Purchase Rate", value: "+29%" }
    ],
    tags: ["Mobile", "iOS", "Android", "E-Commerce", "Prototyping"],
    challenge: "Cart abandonment was hitting 74% due to clumsy multi-screen shipping forms and slow product media loading.",
    solution: "Introduced an expressive bottom-sheet checkout sheet, gesture-based swipe browsing, and instant Apple Pay / Google Pay one-tap purchase loops.",
    deliverables: [
      "Full iOS & Android native component kit",
      "Interactive 3D item preview wireframes",
      "Micro-animated cart feedback & haptic cues",
      "Customer onboarding and personalization quiz"
    ],
    accentColor: "#EC4899",
    mockupType: "mobile"
  },
  {
    id: "saas-analytics-platform",
    title: "PulseAI Customer Intelligence",
    category: "SaaS Analytics Platform",
    filterCategory: "SaaS",
    client: "Pulse Technologies",
    year: "2025",
    timeline: "8 Weeks",
    featured: true,
    tagline: "Autonomous cohort tracking & revenue attribution suite",
    description: "Redesigned the core SaaS telemetry experience for 12,000+ marketing teams, condensing multi-channel attribution and user journey flows into intuitive graph interfaces.",
    metrics: [
      { label: "Activation Rate", value: "+52%" },
      { label: "Time-to-Value", value: "-70%" },
      { label: "Support Tickets", value: "-45%" }
    ],
    tags: ["SaaS", "AI Product", "Analytics", "UX Research"],
    challenge: "Complex custom SQL query builders alienated non-technical growth marketers, resulting in high churn after 14-day trials.",
    solution: "Created an AI-assisted visual query canvas with natural language prompt inputs and interactive sankey diagrams representing user retention paths.",
    deliverables: [
      "Self-serve visual funnel builder interface",
      "Natural language AI prompt bar & suggested queries",
      "Customizable KPI snapshot export tools",
      "Complete multi-brand design tokens"
    ],
    accentColor: "#38BDF8",
    mockupType: "saas"
  },
  {
    id: "healthcare-booking-platform",
    title: "CuraLink Telehealth Network",
    category: "Healthcare Booking Platform",
    filterCategory: "Web",
    client: "CuraLink Health",
    year: "2025",
    timeline: "5 Weeks",
    featured: true,
    tagline: "Frictionless patient triage & clinical consultation ecosystem",
    description: "Engineered an accessible web platform connecting patients with specialized clinicians in under 90 seconds, engineered to meet strict HIPAA and WCAG AA standards.",
    metrics: [
      { label: "Booking Completion", value: "94%" },
      { label: "Wait Time", value: "< 2 mins" },
      { label: "Patient NPS", value: "88" }
    ],
    tags: ["Web", "Healthcare", "Accessibility", "Design System"],
    challenge: "Elderly and stressed patients experienced significant anxiety navigating complex clinical intake questionnaires online.",
    solution: "Designed an empathetic, progressive disclosure questionnaire with high legibility, smart insurance auto-scan, and instant calendar synchronizations.",
    deliverables: [
      "Patient intake progressive disclosure flows",
      "Provider schedule & real-time telemedicine portal",
      "Accessibility audit compliant with WCAG 2.1 AA",
      "Responsive patient mobile & desktop interfaces"
    ],
    accentColor: "#10B981",
    mockupType: "web"
  },
  {
    id: "synthetix-developer-suite",
    title: "Synthetix API Developer Console",
    category: "Developer Tool / SaaS",
    filterCategory: "SaaS",
    client: "Synthetix Cloud Inc.",
    year: "2024",
    timeline: "6 Weeks",
    featured: false,
    tagline: "Unified API gateway & real-time webhooks debugger",
    description: "Built a developer-first SaaS workspace featuring real-time payload inspection, interactive SDK documentation, and sandbox environment switching.",
    metrics: [
      { label: "API Adoption", value: "+67%" },
      { label: "Dev Setup Time", value: "4 mins" },
      { label: "Dev Satisfaction", value: "98%" }
    ],
    tags: ["SaaS", "Developer Tools", "Web", "Dark Mode"],
    challenge: "Engineers struggled to debug complex nested webhook events across staging and production clusters.",
    solution: "Engineered an ultra-clean dark code environment with live curl generators, JSON schema validation, and instant replay simulations.",
    deliverables: [
      "Interactive code console & snippet generator",
      "Live webhook event inspector with replay capabilities",
      "Token management & rate limit telemetry widgets",
      "Engineering-grade component library"
    ],
    accentColor: "#F59E0B",
    mockupType: "saas"
  },
  {
    id: "stride-mobile-fitness",
    title: "Stride AI Motion Tracker",
    category: "Fitness & Wellness App",
    filterCategory: "Mobile",
    client: "Stride Biometrics",
    year: "2024",
    timeline: "5 Weeks",
    featured: false,
    tagline: "Computer-vision biomechanics & athletic coaching on iOS",
    description: "Designed a motion tracking mobile app providing real-time audio and visual posture feedback for elite marathon runners and sprint athletes.",
    metrics: [
      { label: "Daily Active Users", value: "+112%" },
      { label: "Workout Completion", value: "89%" },
      { label: "Retention D-60", value: "54%" }
    ],
    tags: ["Mobile", "iOS", "Health & Fitness", "Micro-interactions"],
    challenge: "Athletes couldn't look down at their phone screen safely while maintaining high-cadence sprint cycles.",
    solution: "Formulated large peripheral visual indicators, ambient color status shifts, and spatial audio feedback cues.",
    deliverables: [
      "Peripheral screen layout for rapid glanceability",
      "Heart-rate & cadence zone visualizations",
      "Spatial audio coaching cue architecture",
      "Wearable Apple Watch companion interface"
    ],
    accentColor: "#8B5CF6",
    mockupType: "mobile"
  },
  {
    id: "lumina-creator-portal",
    title: "Lumina Digital Assets CMS",
    category: "Enterprise Media Dashboard",
    filterCategory: "Dashboard",
    client: "Lumina Studios",
    year: "2024",
    timeline: "7 Weeks",
    featured: false,
    tagline: "High-throughput 4K video asset management & approval studio",
    description: "Modernized an enterprise digital asset management system for Hollywood creative teams handling terabytes of raw video files and color grading notes.",
    metrics: [
      { label: "Review Cycles", value: "-50%" },
      { label: "Asset Retrieval", value: "3x Faster" },
      { label: "Team Throughput", value: "+35%" }
    ],
    tags: ["Dashboard", "Enterprise", "Media", "Collaboration"],
    challenge: "Version control confusion and sluggish asset preview rendering crippled film post-production timelines.",
    solution: "Architected a dual-pane frame-by-frame annotation interface with timestamped markers and instant asset proxy generation.",
    deliverables: [
      "Timestamped video annotation player UI",
      "Batch asset tagging & smart search filtering",
      "Client presentation mode with secure review links",
      "High-density project board overview"
    ],
    accentColor: "#06B6D4",
    mockupType: "dashboard"
  },
  {
    id: "zenith-capital-portal",
    title: "Zenith Capital Marketing Redesign",
    category: "Institutional Web Redesign",
    filterCategory: "Web",
    client: "Zenith Asset Management",
    year: "2024",
    timeline: "4 Weeks",
    featured: false,
    tagline: "Bespoke digital brand transformation for a $12B asset manager",
    description: "Reinvented an institutional wealth management website with interactive fund performance charts, thought leadership hubs, and investor portal entrypoints.",
    metrics: [
      { label: "Inbound Leads", value: "+85%" },
      { label: "Page Speed Score", value: "99/100" },
      { label: "Avg Session Duration", value: "+140%" }
    ],
    tags: ["Web", "Redesign", "Institutional", "Typography"],
    challenge: "A 10-year-old corporate website failed to engage next-generation family office principals and venture fund partners.",
    solution: "Transformed the brand narrative with refined serif-sans typography, interactive market perspective visualizations, and a friction-free accredited investor gate.",
    deliverables: [
      "Modular marketing page template ecosystem",
      "Interactive historical return calculation widgets",
      "Executive team dossier and thought leadership layout",
      "Full responsive desktop, tablet, and mobile system"
    ],
    accentColor: "#3B82F6",
    mockupType: "web"
  }
];
