import Link from "next/link";
import { useRouter } from "next/router";

const links = [
  {
    title: "Home",
    url: "/home",
  },
  {
    title: "Team",
    url: "/team",
  },
];

export default function Sidebar() {
  const router = useRouter();
  const { pathname } = router;

  return (
    <>
      <nav>
        <Link href="/home">
          <a className="logo">
            <h1>UtilitiesX</h1>
          </a>
        </Link>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <Link href={link.url}>
                <a className={pathname === link.url ? "active" : ""}>
                  <span>{link.title}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <style jsx>{`
        nav {
          position: sticky;
          top: 0;
          left: 0;
          height: 100vh;
          width: 25rem;
          background-color: var(--primary);
          color: var(--white);
        }

        .logo {
          display: flex;
          align-items: center;
          justify-content: center;
          height: var(--header-height);
          box-shadow: inset 0 -1px 0 #ffffff55;
        }

        h1 {
          font-size: 2.5rem;
        }

        ul {
          margin: 25px auto 0;
          list-style: none;
        }

        li a {
          padding: 15px 0 15px 15%;
          font-size: 1.5rem;
        }

        li a {
          display: block;
          height: 100%;
          width: 100%;
        }

        .active {
          background-color: var(--primary-light);
          color: var(--blue);
          border-right: 4px solid var(--blue);
        }

        li:hover {
          background-color: var(--primary-light);
          box-shadow: inset -4px 0 0 #ffffff;
        }

        @media (max-width: 400px) {
          nav {
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
          nav {
            width: 5rem;
          }

          li span {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
