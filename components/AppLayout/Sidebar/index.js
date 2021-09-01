import Link from "next/link";

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
                <a>
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
          width: 20%;
          background-color: var(--primary);
          color: var(--white);
        }

        .logo {
          display: block;
          height: var(--header-height);
          padding-top: 15px;
          text-align: center;
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

        li a,
        li a span {
          display: block;
          height: 100%;
          width: 100%;
        }

        li:hover {
          background-color: var(--primary-light);
        }

        @media (max-width: 500px) {
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
      `}</style>
    </>
  );
}
