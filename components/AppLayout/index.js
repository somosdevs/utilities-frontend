import styles from "./AppLayout.module.css";
import Sidebar from "./Sidebar";

export default function AppLayout({ pageName, children }) {
  return (
    <div className={styles.AppLayout}>
      <Sidebar />
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>{pageName}</h1>
        </header>
        <main className={styles.main}>{children}</main>
        <footer className={styles.footer}></footer>
      </div>
    </div>
  );
}
