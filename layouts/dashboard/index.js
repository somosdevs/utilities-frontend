import Sidebar from './DashboardSidebar'
import Header from './DashboardHeader'

export default function AppLayout ({ pageName, children }) {
  return (
    <>
      <div className="AppLayout">
        <Sidebar />
        <div className="container">
          <Header pageName={pageName} />
          <main className="main">{children}</main>
          <footer className="footer"></footer>
        </div>
      </div>
      <style jsx>{`
        .AppLayout {
          display: flex;
        }
        
        .container {
          position: relative;
          display: flex;
          flex-direction: column;
          height: 100%;
          width: 100%;
          background-color: #fff;
        }
        
        .main {
          overflow-x: hidden;
          width: 100%;
          flex: calc(100vh - var(--header-height) - var(--footer-height));
          padding: 25px;
        }
        
        .footer {
          height: var(--footer-height);
          width: 100%;
          background-color: #fff;
        }        
      `}</style>
    </>
  )
}
