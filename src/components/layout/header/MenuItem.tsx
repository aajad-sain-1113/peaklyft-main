import Link from "next/link";
import MegaDropdown from "./MegaDropdown";

const MenuItem = ({ item }: any) => {
  return (
    <div className="relative group">
      <Link
        href={item.href || "#"}
        className="font-poppins text-[15px] font-medium text-black px-2 py-3 sh hover:text-secondary transition-all"
      >
        {item.label}
      </Link>
      {item.type === "mega" && (
        <MegaDropdown sections={item.sections} />
      )}
    </div>
  );
};

export default MenuItem;
