import Img1 from "./../assets/services-image-1.png";
import Img2 from "./../assets/services-image-2.png";
import Img3 from "./../assets/services-image-3.png";
import Arrow from "./../assets/arrow.svg";

export const servicesData = [
  {
    image: Img1,
    title: "Services.data.title",
    text : "Services.data.text",
    arrow: <img src={Arrow} alt="arrow" className="lg:hidden absolute -top-[100px] -left-0" />,
  },
  {
    image: Img2,
    title: "Services.data.title2",
    text : "Services.data.text2",
    arrow: <img src={Arrow} alt="arrow" className="hidden lg:block absolute -top-[100px] -left-0" />,
  },
  {
    image: Img3,
    title: "Services.data.title3",
    text : "Services.data.text3",
  },
];
