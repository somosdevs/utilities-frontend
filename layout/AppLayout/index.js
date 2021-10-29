import styles from "./AppLayout.module.css";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function AppLayout({ pageName, children }) {
  return (
    <>
      <div className={styles.AppLayout}>
        <Sidebar />
        <div className={styles.container}>
          <Header pageName={pageName} />
          <main className={styles.main}>{children}</main>
          <footer className={styles.footer}></footer>
        </div>
      </div>

      <style jsx global>{`
        header {
          height: var(--header-height);
          width: 100%;
          background-color: var(--secondary);
          box-shadow: inset 0 -1px 0 #ffffff55;
        }
      `}</style>
    </>
  );
}
