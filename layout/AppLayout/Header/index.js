import Image from "next/image";
import useUser from "hooks/useUser";
import Link from "next/link";

export default function AppLayout({ pageName }) {
  const user = useUser();

  return (
    <>
      <header>
        <h2>{pageName}</h2>
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
          font-size: 1.25rem;
        }
      `}</style>
    </>
  );
}
