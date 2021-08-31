import styles from "./Button.module.css";

export default function Button({
  children,
  handleClick,
  backgroundColor = "#fff",
  color = "#000",
  fontSize = "1.6rem",
}) {
  return (
    <>
      <button className={styles.button} onClick={handleClick}>
        {children}
      </button>
      <style jsx>{`
        background-color: ${backgroundColor};
        font-size: ${fontSize};
        color: ${color};
      `}</style>
    </>
  );
}
