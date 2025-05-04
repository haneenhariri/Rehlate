import { useTranslation } from "react-i18next";
import { PlansData } from "../../data/PlansData";
import PlanCard from "../ui/PlanCard/PlanCard";
import SectionTitle from "../ui/SectionTitle/SectionTitle";

export default function Plans() {
  const { t } = useTranslation();
  return (
    <div className="plans px-[20px] lg:px-[60px]">
      <SectionTitle title={t("plansSection.title")} text={t("plansSection.subtitle")} />
      <div className="cards mt-16 flex flex-col items-center justify-center gap-[45px] lg:flex-row">
        {PlansData.map((card, index) => (
          <PlanCard
            key={index}
            title={card.title}
            text={card.text}
            price={card.price}
            menu={card.menu}
            styles={card.styles}
            buttonStyles={card.buttonStyles}
          />
        ))}
      </div>
    </div>
  );
}
