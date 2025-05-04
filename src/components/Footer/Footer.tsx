import Logo from "../ui/Logo/Logo";
import LogoImage from "./../../assets/logo.png";
import Youtube from "./../../assets/youtube.svg";
import Instagram from "./../../assets/instagram.svg";
import Facebook from "./../../assets/facebook.svg";
import { useTranslation } from "react-i18next";
import { FooterSection } from "../../types/Footer";

export default function Footer() {
  const { t } = useTranslation();

  const sections = t("footer.sections", {
    returnObjects: true,
  }) as FooterSection[];

  return (
    <footer className="bg-main-black mt-[124px] px-[20px] lg:px-[60px]">
      <div className="website-content mb-[40px] lg:mb-0 flex flex-wrap gap-[93px] border-b border-[#4C4C4C] pt-[100px] pb-[40px] lg:pb-16">
        <div className="company lg:max-w-[337px]">
          <Logo src={LogoImage} alt="Logo" styles="w-[132px]" />
          <p className="text-footer-text mt-7 text-lg font-medium lg:mt-8 lg:text-[20px]">
            {t("footer.description")}
          </p>
        </div>
        <div className="website-sections flex flex-wrap gap-[107px]">
          {sections.map((item, index) => (
            <div className="flex flex-col" key={index}>
              <h3 className="text-footer-title mb-8 text-[20px] font-black lg:text-2xl">
                {item.title}
              </h3>
              <ul className="flex flex-col gap-[20px]">
                {item.items.map((section, idx) => (
                  <li
                    key={idx}
                    className="text-footer-text text-lg font-medium lg:text-[20px]"
                  >
                    {section}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="footer-contact text-footer-text flex flex-col justify-between lg:flex-row lg:items-center">
        <p className="text-[20px] font-medium">
          {t("footer.copyright", {
            name1: "عبد اللطيف جركس",
            name2: "حنين الحريري",
          })}
        </p>
        <div className="icons flex items-center gap-4 pt-7 pb-11 lg:py-[17px]">
          <img className="cursor-pointer" src={Youtube} alt="youtube" />
          <img className="cursor-pointer" src={Instagram} alt="instagram" />
          <img className="cursor-pointer" src={Facebook} alt="facebook" />
        </div>
      </div>
    </footer>
  );
}
