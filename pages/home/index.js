import Head from "next/head";
import useUser from "hooks/useUser";
import AppLayout from "components/AppLayout";

export default function Home() {
  const user = useUser();

  return (
    <>
      <Head>
        <title>UtilitiesX - Home</title>
      </Head>
      <AppLayout pageName="Home"></AppLayout>
    </>
  );
}
