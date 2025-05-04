import  img from '../../assets/hero/Rectangle 4.png'
import  img2 from '../../assets/hero/arrow.svg'
import  img3 from '../../assets/hero/Mouse.svg'
import { useTranslation } from 'react-i18next'

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section className="bg-[url(/hero.jpg)] overflow-hidden p-5 text-white text-center bg-cover bg-center font-lama flex justify-center items-center h-screen">
        <div className="sm:mt-32 mt-30 flex flex-col justify-center items-center w-max">
          <h1 className="text-shadow lg:text-7xl md:text-6xl text-5xl  font-bold  md:mb-6 mb-4.5">{t("hero.mainTitle")}</h1>
          <p className=" sm:w-2/3 w-11/12 font-lama lg:text-2xl md:text-xl text-lg">{t("hero.subtitle")}</p>
        <div className="flex animate-shadowPulse mb-10 items-center relative mt-9 rounded-2xl sm:w-[222px] w-[300px] bg-[#FEC430] p-3.5  gap-3 justify-center">
        <button className="  text-black lg:text-xl text-lg font-medium " >{t("plansSection.businessPlan.button")}</button>
        <div className="w-[30px] h-[30px] flex justify-center items-center rounded-full bg-white">
            <img src={img} alt="arrow"  className='ltr:rotate-180'/>
        </div>
        <img src={img2} className=' sm:-left-24 -left-5 sm:top-12 top-24 absolute ' alt="" />
        </div>
        <div className=' flex flex-col mt-10'>
            <p className=' lg:text-xl text-lg'>{t("hero.Scroll")}</p>
            <img src={img3} alt="mouse" className='sm:w-auto  w-20 ' />
        </div>
        </div>
    </section>
  )
}
