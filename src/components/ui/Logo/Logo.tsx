import { LogoProps } from "../../../types/Logo";

export default function Logo({ src, alt, styles }: LogoProps) {
  return (
    <div>
      <img src={src} alt={alt} className={styles} />
    </div>
  );
}
