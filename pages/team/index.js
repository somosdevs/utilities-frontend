import { useEffect, useState } from "react";
import Head from "next/head";
import useUser from "hooks/useUser";
import AppLayout from "components/AppLayout";
import ProfileCard from "components/ProfileCard";

export default function Home() {
  const user = useUser();
  const [team, setTeam] = useState([
    {
      name: "Loading...",
      discord: "Loading...",
      avatar: "",
      socialMedia: [],
      technologies: [],
    }
  ]);

  useEffect(() => {
    fetch("/api/team")
      .then((res) => res.json())
      .then(setTeam);
  }, []);

  return (
    <>
      <Head>
        <title>UtilitiesX - Team</title>
      </Head>
      <AppLayout pageName="Team">
        <section>
          {team.map((member) => (
            <ProfileCard key={member.name} {...member} />
          ))}
        </section>
      </AppLayout>
      <style jsx>{`
        section {
          display: flex;
          flex-wrap: wrap;
          padding: 25px;
        }
      `}</style>
    </>
  );
}
