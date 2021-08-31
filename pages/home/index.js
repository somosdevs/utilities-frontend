import Head from "next/head";
import useUser from "hooks/useUser";

export default function Home() {
  const user = useUser();

  return (
    <>
      <Head>
        <title>UtilitiesX - Home</title>
      </Head>
      <div>
        <h1>Bienvenido, {user && user.username}</h1>
      </div>
      <style jsx>{`
        h1 {
          font-size: 5rem;
        }
      `}</style>
    </>
  );
}
