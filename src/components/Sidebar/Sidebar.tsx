import { useTranslation } from "react-i18next";
import { navbarData } from "../../data/Navbar";
import { SidebarProps } from "../../types/Sidebar";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import CloseIcon from "./../../assets/close.svg";

export default function Sidebar({ open, setOpen }: SidebarProps) {
  const { t } = useTranslation();

  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 ${open ? "translate-x-0" : "-translate-x-full"} items-center transition duration-500 flex flex-col justify-center gap-7 bg-main-black px-4 lg:hidden`}
    >
      <ul className="flex flex-col items-center gap-7 text-left">
        {navbarData.map((link, index) => (
          <li key={index} className="text-[20px]">
            <a href={link.path}>{t(link.title)}</a>
          </li>
        ))}
      </ul>
      <LanguageSelector />
      <div
        className="menu cursor-pointer rounded-md bg-white p-2 lg:hidden"
        onClick={() => setOpen(false)}
      >
        <img src={CloseIcon} alt="menu icon" />
      </div>
    </div>
  );
}
