import Image from "next/image";
import useUser from "hooks/useUser";
import Link from "next/link";

export default function AppLayout({ pageName }) {
  const user = useUser();

  return (
    <>
      <header>
        <h1>{pageName}</h1>
        <Link href="/home" /* Debe llevar a /profile */>
          <a>
            <Image
              className="header__avatar"
              src={user ? user.avatar : "/vercel.svg"}
              alt="Avatar Image"
              width="40px"
              height="40px"
            />
          </a>
        </Link>
      </header>

      <style jsx global>{`
        header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 5%;
        }

        h1 {
          font-size: 1.8rem;
        }

        .header__avatar {
          border-radius: 50%;
        }
      `}</style>
    </>
  );
}
