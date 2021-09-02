import Image from "next/image";
import useUser from "hooks/useUser";
import Link from "next/link";

export default function AppLayout({ pageName }) {
  const user = useUser();

  return (
    <>
      <header>
        <h1 className="header__title">{pageName}</h1>
        <Link href="/home" /* Debe llevar a /profile */>
          <a>
            <Image
              className="image__rounded"
              src={user ? user.avatar : "/vercel.svg"}
              alt="Avatar Image"
              width="40px"
              height="40px"
            />
          </a>
        </Link>
      </header>

      <style jsx>{`
        header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 5%;
        }

        .header__title {
          font-size: 1.8rem;
        }
      `}</style>
    </>
  );
}
