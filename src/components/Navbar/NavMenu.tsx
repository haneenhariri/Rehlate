import { useTranslation } from "react-i18next";
import { NavMenuProps } from "../../types/Navbar";

export default function NavMenu({ data }: { data: NavMenuProps[] }) {
  const { t } = useTranslation();

  return (
    <ul className="hidden gap-[44px] lg:flex">
      {data.map((link, index) => (
        <li key={index}>
          <a
            href={link.path}
            className="inline-block text-[20px] transition-all duration-200 hover:scale-[1.2] hover:text-shadow-lg focus:scale-[1.2] focus:outline-0 focus:text-shadow-lg"
          >
            {t(link.title)}
          </a>
        </li>
      ))}
    </ul>
  );
}
