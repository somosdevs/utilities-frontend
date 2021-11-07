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
