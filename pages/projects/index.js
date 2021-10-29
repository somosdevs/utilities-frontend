import Head from "next/head";
import useUser from "hooks/useUser";
import AppLayout from "layout/AppLayout";

export default function Projects() {
  const user = useUser();

  return (
    <>
      <Head>
        <title>UtilitiesX - Projects</title>
      </Head>
      <AppLayout pageName="Projects"></AppLayout>
    </>
  );
}
