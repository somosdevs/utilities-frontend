import styles from "./AppLayout.module.css";

export default function AppLayout() {
  return (
    <div className={styles.AppLayout}>
      <nav className={styles.nav}></nav>
      <div className={styles.container}>
        <header className={styles.header}></header>
        <main className={styles.main}></main>
        <footer className={styles.footer}></footer>
      </div>
    </div>
  );
}
