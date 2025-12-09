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
        { name: "Sales Academy", href: "/solutions/sales-academy" },
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
