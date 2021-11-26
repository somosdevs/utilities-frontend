import Link from 'next/link'
import SidebarItem from './SidebarItem'
import { Home, Project, Code, People } from 'components/icons'

const LINKS = [
  {
    icon: <Home />,
    title: 'Home',
    url: '/home'
  },
  {
    icon: <Project />,
    title: 'Projects',
    url: '/projects'
  },
  {
    icon: <Code />,
    title: 'Snippets',
    url: '/snippets'
  },
  {
    icon: <People />,
    title: 'Team',
    url: '/team'
  }
]

export default function DashboardSidebar () {
  return (
    <>
      <nav>
        <Link href="/home">
          <a className="logo">
            <span>Utilities</span>X
          </a>
        </Link>
        <ul>
          {LINKS.map((link, index) => (
            <SidebarItem key={index} icon={link.icon} title={link.title} url={'/dashboard' + link.url} />
          ))}
        </ul>
      </nav>
      <style jsx>{`
        nav {
          position: sticky;
          top: 0;
          left: 0;
          height: 100vh;
          width: 260px;
          background-color: var(--primary);
          color: var(--white);
          scrollbar-width: 5px;
        }

        a.logo {
          display: flex;
          align-items: center;
          justify-content: center;
          height: var(--header-height);
          font-size: 1.5rem;
          box-shadow: inset 0 -1px 0 #ffffff55;
        }

        ul {
          display: block;
          height: calc(100% - var(--header-height) - 20px);
          margin-top: 20px;
          list-style: none;
          overflow-x: hidden;
          overflow-y: auto;
          overscroll-behavior: none;
        }

        @media (max-width: 430px) {
          nav {
            display: none;
          }
        }

        @media (max-width: 767px) {
          nav {
            width: 5rem;
            min-width:5rem;
          }

          .logo span {
            display: none;
          }
        }
      `}</style>
    </>
  )
}
