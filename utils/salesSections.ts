export interface OnboardingCard {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const onboardingCards: OnboardingCard[] = [
  {
    id: 1,
    title: "Accelerate Onboarding for Bank Relationship Managers",
    description: "Loan Advisors",
    image: "/slider.png",
  },
  {
    id: 2,
    title: "Onboarding for High-Impact Loan Advisors",
    description: "Wealth Associates",
    image: "/slider.png",
  },
  {
    id: 3,
    title: "New hire induction program for wealth associates",
    description: "Sales Executives",
    image: "/slider.png",
  },
  {
    id: 4,
    title: "Power Packed Self-Paced Onboarding for Home Finance",
    description: "Field Managers",
    image: "/slider.png",
  },
];
