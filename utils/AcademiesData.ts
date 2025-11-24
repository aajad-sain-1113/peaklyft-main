interface Academy {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface TitleStructure {
  normalStart: string;
  highlight: string;
  normalEnd: string;
}

interface Category {
  id: string;
  name: string;
  title?: TitleStructure;
  subtitle?: string;
  academies: Academy[];
}

export const academiesData: Category[] = [
  {
    id: "growth",
    name: "Growth Acceleration",

    title: {
      normalStart: "Achieve Your",
      highlight: "Business Strategies",
      normalEnd: "with Targeted Academies",
    },

    subtitle: "Empower your workforce with future-ready skills",

    academies: [
      {
        id: "sales",
        title: "Sales Academy",
        description:
          "Equip your sales team to close deals faster and drive revenue growth.",
        icon: "wrench",
      },
      {
        id: "customer-success",
        title: "Customer Success Academy",
        description:
          "Enable your team to build lasting relationships and turn customer success into business growth.",
        icon: "wrench",
      },
      {
        id: "finance",
        title: "Finance Academy",
        description:
          "Equip account managers to grow key accounts and deliver consistent, measurable value.",
        icon: "wrench",
      },
      {
        id: "marketing",
        title: "Marketing Academy",
        description:
          "Transform your marketing team into growth drivers with data-driven strategies and campaigns.",
        icon: "wrench",
      },
      {
        id: "business-dev",
        title: "Business Development Academy",
        description:
          "Expand market reach and identify new opportunities for sustainable business growth.",
        icon: "wrench",
      },
      {
        id: "revenue-ops",
        title: "Revenue Operations Academy",
        description:
          "Optimize revenue generation through streamlined operations and strategic alignment.",
        icon: "wrench",
      },
    ],
  },

  {
    id: "people",
    name: "People Transformation",

    title: {
      normalStart: "Transform Your",
      highlight: "People Function",
      normalEnd: "with Expert-Led Academies",
    },

    subtitle:
      "Develop leaders, nurture talent, and build a thriving organizational culture.",

    academies: [
      {
        id: "leadership",
        title: "Leadership Academy",
        description:
          "Develop strong leaders who inspire teams and drive organizational excellence.",
        icon: "wrench",
      },
      {
        id: "hr",
        title: "HR Excellence Academy",
        description:
          "Transform your HR function into a strategic business partner.",
        icon: "wrench",
      },
      {
        id: "talent",
        title: "Talent Development Academy",
        description:
          "Build a culture of continuous learning and employee growth.",
        icon: "wrench",
      },
      {
        id: "culture",
        title: "Culture & Engagement Academy",
        description:
          "Foster a positive workplace culture that drives engagement and retention.",
        icon: "wrench",
      },
      {
        id: "diversity",
        title: "Diversity & Inclusion Academy",
        description:
          "Build inclusive teams that leverage diverse perspectives for innovation.",
        icon: "wrench",
      },
      {
        id: "change-management",
        title: "Change Management Academy",
        description:
          "Lead organizational transformations with confidence and strategic planning.",
        icon: "wrench",
      },
    ],
  },

  {
    id: "technology",
    name: "Technology Transformation",

    title: {
      normalStart: "Upgrade Your",
      highlight: "Technology Teams",
      normalEnd: "for the Future of Work",
    },

    subtitle:
      "Build excellence in cloud, AI/ML, agile, data, and cybersecurity.",

    academies: [
      {
        id: "digital",
        title: "Digital Innovation Academy",
        description:
          "Drive digital transformation and stay ahead in the technology landscape.",
        icon: "wrench",
      },
      {
        id: "data",
        title: "Data Analytics Academy",
        description:
          "Leverage data-driven insights to make informed business decisions.",
        icon: "wrench",
      },
      {
        id: "agile",
        title: "Agile Delivery Academy",
        description:
          "Master agile methodologies to accelerate product delivery and innovation.",
        icon: "wrench",
      },
      {
        id: "cloud",
        title: "Cloud Engineering Academy",
        description:
          "Build scalable cloud infrastructure and modern application architectures.",
        icon: "wrench",
      },
      {
        id: "cybersecurity",
        title: "Cybersecurity Academy",
        description:
          "Protect your organization with advanced security practices and threat management.",
        icon: "wrench",
      },
      {
        id: "ai-ml",
        title: "AI & Machine Learning Academy",
        description:
          "Harness the power of artificial intelligence to innovate and automate.",
        icon: "wrench",
      },
    ],
  },
];
