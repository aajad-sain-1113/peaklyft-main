import MegaDropdown from "./MegaDropdown";
import Link from "next/link";
import { MenuItemType } from "@/utils/header";

const MenuItem = ({ item }: { item: MenuItemType }) => {
  // 🔗 Normal link
  if (item.type === "link") {
    return (
      <Link href={item.href!} className="py-4 px-2">
        {item.label}
      </Link>
    );
  }

  // 🧩 Mega menu
  if (item.type === "mega") {
    return (
      <div className="relative group">
        <button className="py-4 px-2">{item.label}</button>

        <MegaDropdown
          sections={item.sections || []}
          image={item.image}     // ⭐ SAFE & TYPED!
        />
      </div>
    );
  }

  return null;
};

export default MenuItem;
