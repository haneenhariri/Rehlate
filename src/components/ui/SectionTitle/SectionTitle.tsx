import { SectionTitleProps } from "../../../types/SectionTitle";

export default function SectionTitle({
  title,
  text,
  styles,
}: SectionTitleProps) {
  return (
    <div className={`${styles}`}>
      <p className="text-main-gray text-2xl font-black mb-6">{text}</p>
      <h2 className="text-main-black text-5xl font-black">{title}</h2>
    </div>
  );
}
