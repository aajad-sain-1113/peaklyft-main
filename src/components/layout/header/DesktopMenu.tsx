import { headerMenu } from "@/utils/Header";
import MenuItem from "./MenuItem";

const DesktopMenu = () => {
  return (
    <nav className="hidden md:flex items-center gap-[53px] pl-[21px]">
      {headerMenu.map((item) => (
        <MenuItem key={item.label} item={item} />
      ))}
    </nav>
  );
};

export default DesktopMenu;
