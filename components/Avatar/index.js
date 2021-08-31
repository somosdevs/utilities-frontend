import Image from "next/image";
import styles from "./avatar.module.css";

export default function Avatar({ src, alt, width, height, title, hasTitle }) {
  return (
    <div className={styles.container}>
      <Image
        src={src}
        alt={alt + "'s avatar"}
        width={width}
        height={height}
        className={styles.avatar}
      />
      {title && <strong>{title}</strong>}
    </div>
  );
}
