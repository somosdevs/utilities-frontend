import styles from './AppLayout.module.css'
import Sidebar from './Sidebar'
import Header from './Header'

export default function AppLayout ({ pageName, children }) {
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
    </>
  )
}

/*
    h1.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 65px;
  font-size: 1.5rem;
  box-shadow: inset 0 -1px 0 #ffffff55;
}
  */
