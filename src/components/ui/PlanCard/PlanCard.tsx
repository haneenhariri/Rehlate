import { PlanCardProps } from "../../../types/PlanCard";
import CheckIcon from "./../../../assets/check-icon.svg";
import ButtonArrow from "./../../../assets/button-arrow.svg";
import { useTranslation } from "react-i18next";

export default function PlanCard({
  title,
  price,
  text,
  menu,
  styles,
  buttonStyles,
}: PlanCardProps) {
  const { t } = useTranslation();

  return (
    <div
      className={`${styles} border-main-black max-w-[410px] rounded-[25px] border-[1.5px] px-[33px] py-12 shadow-[10px_10px_0_0_#000]`}
    >
      <p className="text-4xl font-black">${price} / {t("plansSection.perPerson")}</p>
      <p className="my-4 text-2xl font-black">{t(title)}</p>
      <p className="border-main-gray mb-8 border-b pb-8 text-lg">{t(text)}</p>
      <ul className="flex flex-col gap-[20px]">
        {menu.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <img src={CheckIcon} alt="check icon" />
            <p className="text-lg font-semibold">{t(item)}</p>
          </li>
        ))}
      </ul>
      <div
        className={`${buttonStyles} mt-[76px] flex items-center justify-center gap-3 rounded-[15px] py-3 text-lg font-bold`}
      >
        <p>{t("plansSection.bookNow")}</p>
        <img src={ButtonArrow} alt="button arrow" />
      </div>
    </div>
  );
}
