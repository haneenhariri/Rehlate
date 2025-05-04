import { useTranslation } from "react-i18next";
import { ServiceCardProps } from "../../../types/ServiceCard";

export default function ServiceCard({
  title,
  text,
  image,
  arrow,
}: ServiceCardProps) {
  const {t} = useTranslation();
  return (
    <div className="service-card relative flex max-w-[263px] flex-col items-center text-center">
      {arrow ? arrow : ""}
      <div className="img-container">
        <img src={image} alt="" />
      </div>
      <div className="card-content">
        <h3 className="text-main-black mt-8 mb-4 text-2xl font-black">
          {t(title)}
        </h3>
        <p className="text-lg text-[#4C4C4C]">{t(text)}</p>
      </div>
    </div>
  );
}
