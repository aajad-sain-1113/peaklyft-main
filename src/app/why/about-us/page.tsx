
import AboutDesign from "@/src/components/about/AboutDesign/AboutDesign"; 
import { aboutData, cardsData, endSectionData, heroData, investors, leadership, teamSection } from "@/utils/about";


export default function Page() {
  return (
    <AboutDesign
      hero={heroData}
      about={aboutData}
      cards={cardsData}
      teams={teamSection}
      leadership={leadership}
      investors={investors}
      endSectionData={endSectionData}
    />
  );
}
