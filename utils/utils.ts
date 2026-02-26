// utils/methodologyData.ts
export interface MethodologyItem {
  id: number;
  title: string;
  icon: string;
  heading: string;
  description: string;
}

export const methodologyData: MethodologyItem[] = [
  {
    id: 0,
    title: "Design",
    icon: "/spider.svg",
    heading: "Know what it takes to Succeed",
    description:
      "Comprehensive Success Profiles validated by Industry Experts Define role-specific capabilities essential for success. Utilize frameworks designed by experts and aligned with industry standards.",
  },
  {
    id: 1,
    title: "Measure",
    icon: "/cload.svg",
    heading: "Measure Holistically Where your team stands",
    description:
      "Comprehensive Assessments with Actionable Analytics Evaluate individual, team, and organizational capabilities using diverse tools. Track progress, identify skill gaps, and measure training effectiveness with our analytics dashboard.",
  },
  {
    id: 2,
    title: "Build",
    icon: "/darkrender.svg",
    heading: "Build gap with precise learning assets",
    description:
      "Specific Learning Assets created by Industry Experts Access a diverse library of learning materials from trusted partners and  Peaklyft Originals.​​Provide customized training to quickly upskill employees and enhance productivity.",
  },
];



//footerData

export const footerData = {
  contactUs: {
    label: "Contact Us",
    link: "/contact",
  },

  offices: [
    {
      title: "Corporate Headquarters",
      flag: "🇺🇸",
      lines: [
        "©  Peaklyft Inc.",
        "1521 Concord Pike Ste 301 #250 Wilmington, DE 19803",
      ],
    },
    {
      title: "India Corporate Office",
      flag: "🇮🇳",
      lines: [
        "3rd Floor, Building No. 380, 23rd Cross, 9th Main Rd, Sector 7,",
        "HSR Layout, Bengaluru, Karnataka 560102",
      ],
    },
  ],

  social: [
    { name: "Email", icon: "/icons/mail.svg", link: "mailto:info@peaklyft.com" },
    { name: "Facebook", icon: "/icons/fb.svg", link: "https://facebook.com" },
    { name: "LinkedIn", icon: "/icons/linkedin.svg", link: "https://linkedin.com" },
    { name: "Twitter", icon: "/icons/twitter.svg", link: "https://twitter.com" },
  ],

  columns: [
    {
      title: "Why  Peaklyft?",
      links: [
        { name: "Why  Peaklyft -  Peaklyft Difference", href: "/why- Peaklyft" },
        { name: "Why Capability Academy?", href: "/capability-academy" },
        { name: "Choose the right Assessment for team", href: "/assessment" },
        { name: "Success Stories", href: "/success-stories" },
        { name: "About us", href: "/about" },
        { name: "Careers at AnWalk", href: "/careers" },
      ],
    },

    {
      title: "Industries",
      links: [
        { name: "Financial Services", href: "/industries/financial" },
        { name: "Technology", href: "/industries/technology" },
        { name: "Manufacturing", href: "/industries/manufacturing" },
      ],
    },

    {
      title: "Academies",
      links: [
        { name: "Web Development Academy", href: "/solutions/web-development" },
        { name: "Customer Success Academy", href: "/solutions/customer-success-academy" },
        { name: "Finance Academy", href: "/solutions/finance-academy" },
        { name: "Leadership & EI Academy", href: "/solutions/leadership-academy" },
        { name: "Human Resource Academy", href: "/solutions/hr-academy" },
        { name: "PowerSkills Academy", href: "/solutions/powerskills-academy" },
        { name: "Data and AI Academy", href: "/solutions/data-ai" },
        { name: "Cybersecurity Academy", href: "/solutions/cybersecurity" },
        { name: "Software Engineering​ Academy", href: "/solutions/software" },
        { name: "Cloud & Infrastructure​ Academy​", href: "/solutions/cloud" },
        { name: "Product & Design Academy", href: "/solutions/design" },
        { name: "Gen AI Academy", href: "/solutions/gen-ai" },
      ],
    },

    {
      title: "Initiatives",
      links: [
        { name: "Financial Services", href: "/initiatives/financial" },
        { name: "Technology/ IT Services", href: "/initiatives/technology" },
        { name: "Manufacturing", href: "/initiatives/manufacturing" },
      ],
    },

    {
      title: "Partners",
      links: [
        { name: "Knowledge Partners", href: "/partners/knowledge" },
        { name: "Content Partners", href: "/partners/content" },
        { name: "Integration Partners", href: "/partners/integration" },
      ],
    },

    {
      title: "Resources",
      links: [
        { name: "Blogs", href: "/resources/blogs" },
        { name: "Podcasts", href: "/resources/podcasts" },
        { name: "Events", href: "/resources/events" },
        { name: "eBook", href: "/resources/ebook" },
        { name: "Newsletters", href: "/resources/newsletters" },
        { name: "Case Studies", href: "/resources/case-studies" },
      ],
    },
  ],

  bottomLinks: [
    { name: "Terms and conditions", href: "/terms" },
    { name: "FAQs", href: "/faqs" },
  ],
};




export const whatsNewDefaultContent = {
  title: {
    normalStart: "What's new at",
    highlight: " Peaklyft?",
    normalEnd: "",
  },
  subtitle: "Stay Connected, Stay Informed",
  description: " Peaklyft in news, Blogs, Case Studies, Events",
};

export const whatsNewDefaultData = [
  {
    image: "/craft.png",
    tag: "Uncategorized",
    title: "Key Skills and Capabilities Every DevOps Professional and Business Will Need in 2025",
    desc: "As businesses accelerate their digital transformation, the DevOps landscape is evolving faster than ever before.",
    link: "/news/et",
  },
  {
    image: "/macbook.png",
    tag: "BFSI",
    title: "Transformed Collaboration and Customer Experience at a well-known Small Finance Bank",
    desc: "Frontline Operations Associate Excellence Program",
    link: "/news/blog",
  },
  {
    image: "/craft.png",
    tag: "Uncategorized",
    title: "Key Skills and Capabilities Every DevOps Professional and Business Will Need in 2025",
    desc: "As businesses accelerate their digital transformation, the DevOps landscape is evolving faster than ever before.",
    link: "/news/event",
  },
];






export const whatsNewDefaultContent2 = {
  title: {
    normalStart: "What's new at",
    highlight: " Peaklyft?",
    normalEnd: "",
  },
  subtitle: "Stay Connected, Stay Informed",
  description: " Peaklyft in news, Blogs, Case Studies, Events",
};

export const whatsNewDefaultData2 = [
  {
    image: "/craft.png",
    tag: "Uncategorized",
    title: "Key Skills and Capabilities Every DevOps Professional and Business Will Need in 2025",
    desc: "As businesses accelerate their digital transformation, the DevOps landscape is evolving faster than ever before.",
    link: "/news/et",
  },
  {
    image: "/macbook.png",
    tag: "BFSI",
    title: "Transformed Collaboration and Customer Experience at a well-known Small Finance Bank",
    desc: "In today’s dynamic SaaS and X-Tech landscape, organizations face mounting pressure to innovate, scale, and",
    link: "/news/blog",
  },
  {
    image: "/craft.png",
    tag: "Uncategorized",
    title: "Key Skills and Capabilities Every DevOps Professional and Business Will Need in 2025",
    desc: "As businesses accelerate their digital transformation, the DevOps landscape is evolving faster than ever before.",
    link: "/news/event",
  },
    {
    image: "/craft.png",
    tag: "Uncategorized",
    title: "Key Skills and Capabilities Every DevOps Professional and Business Will Need in 2025",
    desc: "As businesses accelerate their digital transformation, the DevOps landscape is evolving faster than ever before.",
    link: "/news/event",
  },
];
















// export const FILTERS = ["All", "FinTech", "HealthTech", "E-Commerce", "SaaS", "DevOps"];

// export const PROJECTS = [
//   {
//     id: 1,
//     category: "FinTech",
//     title: "FinTrack — Real-Time Financial Analytics Platform",
//     client: "Leading SME Finance Provider",
//     description:
//       "End-to-end financial analytics SaaS platform with real-time dashboards, multi-currency support, automated reporting, and AI-driven cash-flow insights for 500+ SME clients.",
//     challenge:
//       "The client relied on manual Excel workflows causing 3-day reporting delays. They needed a secure, scalable platform handling millions of daily transactions.",
//     solution:
//       "We architected a cloud-native microservices platform on AWS with event-driven data pipelines, React dashboards with live WebSocket feeds, and a FastAPI backend processing 10M+ transactions/day.",
//     results: [
//       { metric: "2×", label: "Faster Reporting" },
//       { metric: "$1.2M", label: "ARR Achieved" },
//       { metric: "99.99%", label: "Uptime" },
//       { metric: "60%", label: "Cost Reduction" },
//     ],
//     tech: ["Next.js", "FastAPI", "PostgreSQL", "AWS Lambda", "Stripe", "Redis"],
//     icon: "💳",
//     headerBg: "bg-[#1a3564]",
//   },
//   {
//     id: 2,
//     category: "HealthTech",
//     title: "MediConnect — Telemedicine & EHR Platform",
//     client: "National HealthTech Startup",
//     description:
//       "Full-stack telemedicine platform connecting 50,000+ patients with doctors via real-time video, integrated EHR management, prescription workflows, and multi-language support.",
//     challenge:
//       "Healthcare provider needed to scale from in-clinic appointments to digital-first care during rapid market expansion, with strict HIPAA compliance requirements.",
//     solution:
//       "Built a React Native mobile app and web portal with WebRTC video consultation, HL7 FHIR-compliant EHR API integrations, and end-to-end encrypted data storage on Azure.",
//     results: [
//       { metric: "50K+", label: "Active Users" },
//       { metric: "4.8★", label: "App Store Rating" },
//       { metric: "3×", label: "Patient Throughput" },
//       { metric: "100%", label: "HIPAA Compliant" },
//     ],
//     tech: ["React Native", "Node.js", "MongoDB", "WebRTC", "Azure", "HL7 FHIR"],
//     icon: "🏥",
//     headerBg: "bg-[#E8640A]",
//   },
//   {
//     id: 3,
//     category: "E-Commerce",
//     title: "RetailX — Headless Commerce Engine",
//     client: "Multi-Vendor Retail Brand",
//     description:
//       "Headless e-commerce platform with AI-powered product recommendations, real-time inventory sync across 12 warehouses, multi-vendor marketplace, and omnichannel order management.",
//     challenge:
//       "Legacy monolithic platform couldn't handle peak traffic (Black Friday crashes) and lacked flexibility for rapid expansion into new markets.",
//     solution:
//       "Migrated to a headless architecture with Angular storefront, Express microservices, Elasticsearch product search, and Redis-powered cart deployed on GCP with auto-scaling.",
//     results: [
//       { metric: "300%", label: "Conversion Lift" },
//       { metric: "0", label: "Downtime on Peak" },
//       { metric: "12", label: "Warehouses Synced" },
//       { metric: "45%", label: "Faster Page Load" },
//     ],
//     tech: ["Angular", "Express", "Redis", "Elasticsearch", "GCP", "Stripe"],
//     icon: "🛒",
//     headerBg: "bg-[#1a3564]",
//   },
//   {
//     id: 4,
//     category: "SaaS",
//     title: "SalesIQ — AI-Powered Sales Enablement Suite",
//     client: "B2B SaaS Scale-up",
//     description:
//       "Intelligent sales enablement platform with competency tracking, AI coaching recommendations, pipeline forecasting, and gamified performance dashboards for enterprise sales teams.",
//     challenge:
//       "Sales managers lacked visibility into rep skill gaps and deal risks. Manual coaching didn't scale across 200+ distributed sales reps.",
//     solution:
//       "Built a Next.js SaaS platform with ML-powered competency scoring, automated coaching nudges via FastAPI AI engine, Salesforce CRM sync, and real-time leaderboards.",
//     results: [
//       { metric: "40%", label: "Revenue Increase" },
//       { metric: "200+", label: "Reps Managed" },
//       { metric: "2×", label: "Deal Velocity" },
//       { metric: "85%", label: "Adoption Rate" },
//     ],
//     tech: ["Next.js", "FastAPI", "Python ML", "PostgreSQL", "Salesforce API", "AWS"],
//     icon: "📈",
//     headerBg: "bg-[#E8640A]",
//   },
//   {
//     id: 5,
//     category: "DevOps",
//     title: "CloudOps Dashboard — Infra Visibility Platform",
//     client: "Enterprise Technology Company",
//     description:
//       "Internal cloud infrastructure monitoring platform providing CI/CD pipeline visibility, Kubernetes cluster management, cost anomaly detection, and one-click rollback capabilities.",
//     challenge:
//       "Engineering team of 80+ struggled with fragmented infra tooling across AWS, GCP, and on-prem causing slow incident response and ballooning cloud costs.",
//     solution:
//       "Unified monitoring portal with React and Prometheus/Grafana data layers, custom Python alert engine, Kubernetes operators for auto-remediation, and Slack-native incident workflows.",
//     results: [
//       { metric: "40%", label: "Infra Cost Cut" },
//       { metric: "70%", label: "Faster Incidents" },
//       { metric: "1", label: "Unified Dashboard" },
//       { metric: "80+", label: "Engineers Enabled" },
//     ],
//     tech: ["React", "Python", "Prometheus", "Grafana", "Docker", "Kubernetes"],
//     icon: "⚙️",
//     headerBg: "bg-[#1a3564]",
//   },
//   {
//     id: 6,
//     category: "FinTech",
//     title: "BlockPay — Blockchain Payment Gateway",
//     client: "Web3 Fintech Startup",
//     description:
//       "Enterprise-grade blockchain payment gateway supporting multi-chain crypto settlements, fiat on/off ramps, KYC/AML compliance workflows, and merchant management portal.",
//     challenge:
//       "Client needed to launch a compliant crypto payment product in 6 months while navigating complex regulatory requirements across 5 countries.",
//     solution:
//       "Architected a multi-chain integration layer (Ethereum, Polygon, Solana), built a React merchant portal, and integrated KYC/AML providers via Node.js microservices.",
//     results: [
//       { metric: "6mo", label: "Time to Launch" },
//       { metric: "5", label: "Countries Live" },
//       { metric: "$2M+", label: "Monthly Volume" },
//       { metric: "100%", label: "AML Compliant" },
//     ],
//     tech: ["React", "Node.js", "Solidity", "Ethereum", "Polygon", "MongoDB"],
//     icon: "🔗",
//     headerBg: "bg-[#E8640A]",
//   },
// ];

export const STATS = [
  { value: "150+", label: "Projects Delivered" },
  { value: "80+", label: "Happy Clients" },
  { value: "6+", label: "Years of Excellence" },
  { value: "99.9%", label: "Uptime Guaranteed" },
];

export const RESULTS = [
  { n: "150+", l: "Digital Products Shipped", icon: "🚀" },
  { n: "80+", l: "Enterprise Clients Served", icon: "🏢" },
  { n: "12", l: "Industries Covered", icon: "🌐" },
  { n: "40%", l: "Avg. Cost Optimisation", icon: "💰" },
  { n: "2×", l: "Avg. Dev Speed Improvement", icon: "⚡" },
  { n: "99.9%", l: "Average Uptime SLA", icon: "🛡️" },
];

export const TECH_STACK = [
  {
    cat: "Frontend",
    items: ["React", "Next.js", "Angular", "TypeScript", "CSS / Tailwind"],
  },
  {
    cat: "Backend",
    items: ["FastAPI", "Node.js", "Express", "Python", "GraphQL"],
  },
  {
    cat: "Cloud & DevOps",
    items: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "Terraform"],
  },
  {
    cat: "Data & AI",
    items: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "ML / LLM"],
  },
];

// ─── Types ────────────────────────────────────────────────────────────────────
interface Result { metric: string; label: string }
interface Project {
  id: number;
  title: string;
  client: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  icon: string;
  results: Result[];
  tech: string[];
  image: string;
  accentColor: string;
  bgGradient: string;
}


// ─── Demo Data ────────────────────────────────────────────────────────────────
export const FILTERS = ["All", "FinTech", "HealthTech", "E-Commerce", "SaaS", "AI/ML"];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Real-Time Trading Analytics Platform",
    client: "NexaCapital · FinTech",
    category: "FinTech",
    description:
      "End-to-end trading analytics suite with sub-millisecond data pipelines, risk dashboards, and algorithmic signal monitoring for institutional investors.",
    challenge:
      "Legacy systems couldn't handle 500k+ trades/day with the latency requirements mandated by SEC regulations. Real-time P&L calculations were delayed by up to 4 seconds.",
    solution:
      "Built a Rust-based data layer with Kafka event streaming and a React dashboard using WebSockets for live updates. Deployed on AWS with 99.99% SLA.",
    icon: "📈",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    accentColor: "#3B82F6",
    bgGradient: "from-blue-600 to-indigo-700",
    results: [
      { metric: "0.8ms", label: "Avg Latency" },
      { metric: "99.99%", label: "Uptime SLA" },
      { metric: "500k+", label: "Trades/Day" },
      { metric: "4× ROI", label: "First Year" },
    ],
    tech: ["Rust", "Kafka", "React", "WebSockets", "AWS", "PostgreSQL"],
  },
  {
    id: 2,
    title: "AI-Powered Patient Triage System",
    client: "MedCore Health · HealthTech",
    category: "HealthTech",
    description:
      "Intelligent triage assistant that triages inbound patient requests using NLP, routes to the right specialist, and auto-fills clinical intake forms.",
    challenge:
      "Emergency rooms were overwhelmed with non-urgent cases. Manual triage took 18 min on average, and misclassifications led to costly callbacks.",
    solution:
      "Fine-tuned a medical-domain LLM on 2M clinical notes. Built a HIPAA-compliant API layer with real-time EHR integration across Epic and Cerner.",
    icon: "🏥",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    accentColor: "#10B981",
    bgGradient: "from-emerald-500 to-teal-600",
    results: [
      { metric: "76%", label: "Faster Triage" },
      { metric: "94.3%", label: "Accuracy" },
      { metric: "2.1M", label: "Patients/yr" },
      { metric: "$8.2M", label: "Savings" },
    ],
    tech: ["Python", "LLM", "FHIR", "Epic API", "Cerner", "Azure"],
  },
  {
    id: 3,
    title: "Unified Commerce & Inventory Engine",
    client: "ShopCore Inc · E-Commerce",
    category: "E-Commerce",
    description:
      "Omnichannel inventory and order management system unifying 14 sales channels with real-time sync, predictive restocking, and dynamic pricing.",
    challenge:
      "Selling across Amazon, Shopify, TikTok Shop, and 11 other channels meant manual inventory reconciliation—causing oversells and $1.2M in annual returns.",
    solution:
      "Built a GraphQL orchestration layer with event-driven inventory updates across all channels. Integrated ML forecasting that reduced stockouts by 61%.",
    icon: "🛒",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    accentColor: "#F59E0B",
    bgGradient: "from-amber-500 to-orange-600",
    results: [
      { metric: "14", label: "Channels Synced" },
      { metric: "61%", label: "Fewer Stockouts" },
      { metric: "$1.2M", label: "Loss Recovered" },
      { metric: "3.4s", label: "Sync Speed" },
    ],
    tech: ["GraphQL", "Node.js", "Shopify", "Amazon SP-API", "TikTok", "Redis"],
  },
  {
    id: 4,
    title: "Enterprise SaaS Data Observability",
    client: "Dataform Labs · SaaS",
    category: "SaaS",
    description:
      "Data quality monitoring platform with automated anomaly detection, lineage tracking, and incident routing for Fortune 500 data engineering teams.",
    challenge:
      "Silent data failures in ETL pipelines were discovered days late, causing downstream reporting errors that affected C-suite decisions at 3 enterprise clients.",
    solution:
      "Designed a column-level lineage graph engine with ML-based drift detection. Alerts routed via PagerDuty with auto-generated RCA reports in Slack.",
    icon: "🔍",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    accentColor: "#8B5CF6",
    bgGradient: "from-violet-600 to-purple-700",
    results: [
      { metric: "99.2%", label: "Detection Rate" },
      { metric: "< 2min", label: "Alert Time" },
      { metric: "40+", label: "Enterprise Clients" },
      { metric: "12×", label: "MTTR Reduction" },
    ],
    tech: ["Python", "dbt", "Snowflake", "Airflow", "PagerDuty", "Slack API"],
  },
  {
    id: 5,
    title: "Generative AI Content Operations Suite",
    client: "Brandify Media · AI/ML",
    category: "AI/ML",
    description:
      "Multi-modal AI content factory for marketing teams—automating brief-to-publish workflows with brand-voice fine-tuning and compliance guardrails.",
    challenge:
      "Content teams at 200+ brands spent 70% of time on repetitive copy tasks. Brand inconsistency was a constant legal risk with no automated compliance checks.",
    solution:
      "Fine-tuned brand-specific LLMs per client with a RAG pipeline over brand guidelines. Built a Next.js editor with real-time tone scoring and legal flag detection.",
    icon: "🤖",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    accentColor: "#EC4899",
    bgGradient: "from-pink-500 to-rose-600",
    results: [
      { metric: "200+", label: "Brands Served" },
      { metric: "83%", label: "Time Saved" },
      { metric: "0", label: "Compliance Fails" },
      { metric: "47M", label: "Assets Created" },
    ],
    tech: ["LLM", "RAG", "Next.js", "Pinecone", "OpenAI", "Vercel"],
  },
  {
    id: 6,
    title: "Supply Chain Risk Intelligence Platform",
    client: "LogiSense Global · AI/ML",
    category: "AI/ML",
    description:
      "Predictive risk platform that monitors 10,000+ suppliers globally, scoring geopolitical, financial, and operational risk in real-time.",
    challenge:
      "Manual supplier audits took 6 weeks and only covered Tier-1 vendors. The 2021 chip shortage blindsided clients because Tier-3 risks were invisible.",
    solution:
      "Scraped and structured 800+ data sources—news, shipping, financials, sanctions—into a graph database. ML models predict disruptions 14 days in advance.",
    icon: "🌐",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    accentColor: "#06B6D4",
    bgGradient: "from-cyan-500 to-sky-600",
    results: [
      { metric: "10k+", label: "Suppliers Tracked" },
      { metric: "14 days", label: "Lead Warning" },
      { metric: "800+", label: "Data Sources" },
      { metric: "91%", label: "Predict Accuracy" },
    ],
    tech: ["Neo4j", "Python", "NLP", "Kafka", "GCP", "React"],
  },
];