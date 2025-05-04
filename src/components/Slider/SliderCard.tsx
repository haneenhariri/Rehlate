import { useTranslation } from "react-i18next"
import { slierCardProps } from "../../types/Slider";

export default function SliderCard({img , city , days ,cost } : slierCardProps) {
  const { t } = useTranslation();
  return (
    
    <div className="slide  md:h-[500px] h-[370px] relative">
        <img src={img} alt="" className="h-full" />
        <div className=" absolute bottom-3 left-3 right-3 md:bottom-8 md:left-6 md:right-6 rounded-2xl bg-white md:py-6 py-5 px-3 md:px-6.5">
            <h2 className=" md:text-2xl text-lg md:mb-4 mb-3 font-bold">{t(city)}</h2>
            <p className=" md:text-lg text-base font-medium text-main-gray">{t(days)} {t("Slider.days")} {t(cost)} $</p>
        </div>
    </div>
  )
}
