import MegaSection from "./MegaSection";

const MegaDropdown = ({ sections }: any) => {
  return (
    <div className="
      absolute top-full left-0 hidden group-hover:flex
      bg-main p-6 rounded-lg border
      w-[900px] gap-6 z-50
    ">
      {sections.map((section: any) => (
        <MegaSection key={section.title} data={section} />
      ))}
    </div>
  );
};

export default MegaDropdown;
