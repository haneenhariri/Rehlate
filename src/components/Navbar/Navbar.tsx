import { useEffect, useState } from "react";
import { navbarData } from "../../data/Navbar";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import Sidebar from "../Sidebar/Sidebar";
import LogoImage from "./../../assets/logo.png";
import NavMenu from "./NavMenu";
import MenuIcon from "./../../assets/menu.svg";
import Logo from "../ui/Logo/Logo";

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className={`flex  items-center justify-between  fixed w-full sm:px-[60px] px-5  z-50 text-white
                    ${isScrolled ? 'bg-main-black  py-5' : 'h-[60px] bg-transparent mt-5 '}`}>
      <Logo src={LogoImage} alt="logo" styles="h-[30px]" />
      <NavMenu data={navbarData} />
      <div className="hidden lg:block">
        <LanguageSelector />
      </div>
      <div
        className="menu cursor-pointer rounded-md bg-white p-2 lg:hidden"
        onClick={() => setOpen(true)}
      >
        <img src={MenuIcon} alt="menu icon" />
      </div>
      <Sidebar setOpen={setOpen} open={open} />
    </nav>
  );
}
