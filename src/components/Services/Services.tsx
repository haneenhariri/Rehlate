import { useTranslation } from "react-i18next";
import { servicesData } from "../../data/Services";
import SectionTitle from "../ui/SectionTitle/SectionTitle";
import ServiceCard from "../ui/ServiceCard/ServiceCard";

export default function Services() {
  const {t} = useTranslation();
  return (
    <div className="services md:my-[120px] my-[70px] px-[20px] lg:px-[60px]">
      <SectionTitle
        title={t("Services.title")}
        text={t("Services.text")}
        styles="text-center"
      />
      <div className="services-container mt-16 flex w-full flex-col items-center justify-between gap-[40px] rounded-[25px] bg-[#F1EFFD] px-[35px] py-[96px] lg:flex-row lg:gap-0 lg:px-[120px]">
        {servicesData.map((item, index) => (
          <ServiceCard
            key={index}
            title={item.title}
            text={item.text}
            image={item.image}
            arrow={item.arrow}
          />
        ))}
      </div>
    </div>
  );
}
