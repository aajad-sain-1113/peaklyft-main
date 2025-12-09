// Hero content ======================>
export const heroSections = {
  default: {
    type: "complex",
    topTagline: "Built by McKinsey Alums, Powered by Industry Leaders",
    title: {
      line1Start: "Build",
      highlight1: "Capability Academies",
      line1End: "",
      line2Start: "to achieve",
      highlight2: "Strategic Objectives",
      line2End: "",
    },
    description:
      ' Peaklyft <b>Business Capability Platform</b> empowers your workforce to achieve your business goals by driving organization-wide capability building through end-to-end Capability Academy​',
    button: { label: "Schedule a Demo!" },
    heroImage: "/hero.png",
  } as const,

  growth: {
    type: "complex",
    topTagline: "Accelerate Organizational Growth",
    title: {
      line1Start: "Elevate Your",
      highlight1: "Growth Teams",
      line1End: "",
      line2Start: "with",
      highlight2: "High-Impact Academies",
      line2End: "",
    },
    description: "Specialized capability academies designed...",
    button: { label: "Explore Growth" },
    heroImage: "/growth-hero.png",
  } as const,

  people: {
    type: "complex",
    topTagline: "Transform Your Workforce",
    title: {
      line1Start: "Build Strong",
      highlight1: "People Leaders",
      line1End: "",
      line2Start: "with",
      highlight2: "Leadership Academies",
      line2End: "",
    },
    description: "Leadership, talent and HR academies built...",
    button: { label: "Explore People" },
    heroImage: "/people-hero.png",
  } as const,

  "sales-academy": {
    type: "simple",
    badge: " Peaklyft Sales Academy",
    simpleTitle: "Close More Deals, Faster!",
    description:
      "Transform your salesforce with a dedicated Sales Capability Academy that builds skills, drives consistency, and accelerates revenue growth.",
    buttonText: "Schedule a Demo!",
    image: "/images/sales.png",
  } as const,

  "marketing-academy": {
    type: "simple",
    badge: " Peaklyft Marketing Academy",
    simpleTitle: "Grow Your Brand, Smarter!",
    description:
      "Boost your marketing performance with structured capability building...",
    buttonText: "Talk to Experts",
    image: "/images/marketing-academy.png",
  } as const,
} as const;






//////////////////////////////////////////
export const brandSections = {
  default: {
    title: "Trusted by Brands Globally",
    brands: [
      { name: "Kotak", logo: "/kotak.png" },
      { name: "Tata", logo: "/tata.png" },
      { name: "Tata Capital", logo: "/tatacapital.png" },
      { name: "Chola", logo: "/chola.png" },
      { name: "Aditya", logo: "/aditya.png" },
      { name: "Pocket", logo: "/pocket.png" },
      { name: "Purdue", logo: "/purdue.png" },
      { name: "RCF", logo: "/rcf.png" },
      { name: "PIL", logo: "/pil.png" },
      { name: "Perfios", logo: "/perfios.png" },
    ],
  },

  finance: {
    title: "Trusted by Finance Leaders",
    brands: [
      { name: "HDFC", logo: "/hdfc.png" },
      { name: "ICICI", logo: "/icici.png" },
      { name: "Axis Bank", logo: "/axis.png" },
    ],
  },

  healthcare: {
    title: "Trusted by Healthcare Organizations",
    brands: [
      { name: "Apollo", logo: "/apollo.png" },
      { name: "Fortis", logo: "/fortis.png" },
      { name: "Manipal", logo: "/manipal.png" },
    ],
  },
};


export const heroSectionsData = {
  default: {
    type: "complex",
    topTagline: "Built by McKinsey Alums, Powered by Industry Leaders",
    title: {
      line1Start: "Build",
      highlight1: "Capability Academies",
      line1End: "",
      line2Start: "to achieve",
      highlight2: "Strategic Objectives",
      line2End: "",
    },
    
  } as const,

  growth: {
    type: "complex",
    topTagline: "Accelerate Organizational Growth",
    title: {
      line1Start: "Elevate Your",
      highlight1: "Growth Teams",
      line1End: "",
      line2Start: "with",
      highlight2: "High-Impact Academies",
      line2End: "",
    },
    description: "Specialized capability academies designed...",
    button: { label: "Explore Growth" },
    heroImage: "/growth-hero.png",
  } as const,

  people: {
    type: "complex",
    topTagline: "Transform Your Workforce",
    title: {
      line1Start: "Build Strong",
      highlight1: "People Leaders",
      line1End: "",
      line2Start: "with",
      highlight2: "Leadership Academies",
      line2End: "",
    },
    description: "Leadership, talent and HR academies built...",
    button: { label: "Explore People" },
    heroImage: "/people-hero.png",
  } as const,

  blog: {
    type: "simple",
    badge: "Blog",
    simpleTitle: "Explore, Learn, and stay </br> informed with our blog section",
    description: "",
    image: "https://www.antwalk.com/wp-content/uploads/2024/05/9084-copy-1.png",
  } as const,

  "marketing-academy": {
    type: "simple",
    badge: " Peaklyft Marketing Academy",
    simpleTitle: "Grow Your Brand, Smarter!",
    description:
      "Boost your marketing performance with structured capability building...",
    buttonText: "Talk to Experts",
    image: "/images/marketing-academy.png",
  } as const,
} as const;
