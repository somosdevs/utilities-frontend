import { useEffect, useState } from "react";
import useUser from "hooks/useUser";

export default function Home() {
  const user = useUser();
  const [userData, setUserData] = useState({
    email: "...",
    username: "",
  });

  useEffect(() => {
    user && user.then(console.log);
  }, [user]);

  return (
    <>
      <section>
        <h1>Welcome, </h1>
      </section>

      <style jsx>{`
        h1 {
          font-size: 4rem;
        }
      `}</style>
    </>
  );
}
