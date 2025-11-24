import AcademyTabs from "@/src/components/common/AcademyTabsSection";
import OnboardingSection from "@/src/components/common/SalesSection/SalesSection";
import SalesSection from "@/src/components/common/SalesSection/SalesSection";
import Hero from "@/src/components/Hero/Hero";
import { salesAcademyTabs } from "@/utils/academyTabsData";
import { brandSections, heroSections } from "@/utils/Hero";


export default function SalesAcademyPage() {
  return (
    <>
    <Hero
      heroData={heroSections["sales-academy"]}
      brandData={brandSections.default}
    />
      <AcademyTabs
      title="Explore Sales Academy Offerings"
      tabs={salesAcademyTabs}
      image="/explore.png"
    />
     <OnboardingSection />

    </>
    )
}
