import Link from "next/link";
import SidebarLink from "components/SidebarLink";
import Home from "components/Icons/Home";
import People from "components/Icons/People";
import Project from "components/Icons/Project";

const links = [
  {
    icon: <Home />,
    title: "Home",
    url: "/home",
  },
  {
    icon: <Project />,
    title: "Projects",
    url: "/projects",
  },
  {
    icon: <People />,
    title: "Team",
    url: "/team",
  },
];

export default function Sidebar() {

  return (
    <>
      <aside>
        <nav>
          <Link href="/home">
            <a className="logo">
              <h1>
                <span>Utilities</span>X
              </h1>
            </a>
          </Link>
          <ul>
            {links.map((link, index) => (
              <SidebarLink key={index} link={link} />
            ))}
          </ul>
        </nav>
      </aside>
      <style jsx>{`
        aside {
          position: sticky;
          top: 0;
          left: 0;
          height: 100vh;
          width: 18rem;
          background-color: var(--primary);
          color: var(--white);
        }

        .logo {
          display: flex;
          align-items: center;
          justify-content: center;
          height: var(--header-height);
          font-size: 1.5rem;
          box-shadow: inset 0 -1px 0 #ffffff55;
        }

        ul {
          margin: 25px auto 0;
          list-style: none;
        }

        @media (max-width: 430px) {
          aside {
            display: none;
          }

          /* 
            Esto será para cuando esté en tamaño móvil,
            al abrir este Sidebar se muestren solo los íconos
          */
          a span {
            display: none;
          }
        }

        @media (max-width: 768px) {
          aside {
            width: 5rem;
          }

          h1 span {
            display: none;
          }

          li a {
            justify-content: center;
          }

          li span {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
