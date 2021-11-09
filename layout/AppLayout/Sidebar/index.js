import Link from 'next/link'
import SidebarLink from 'components/SidebarLink'
import Home from 'components/Icons/Home'
import People from 'components/Icons/People'
import Project from 'components/Icons/Project'
import Code from 'components/Icons/Code'

const links = [
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

export default function Sidebar () {
  return (
    <>
      <nav>
        <Link href="/home">
          <a className="logo">
            <span>Utilities</span>X
          </a>
        </Link>
        <ul>
          {links.map((link, index) => (
            <SidebarLink key={index} link={link} />
          ))}
        </ul>
      </nav>
      <style jsx>{`
        nav {
          position: sticky;
          top: 0;
          left: 0;
          height: 100vh;
          width: 16rem;
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
