import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import tw from 'tailwind-styled-components';

const Home: NextPage = () => (
  <Main>
    <Head>
      <title>Utilities ~ X ~</title>
      <meta name="title" content="Utilities X" />
      <meta name="description" content="Our own web 👀" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Link href="/login">
      <Title>¡Hola!</Title>
    </Link>
  </Main>
);

const Main = tw.div`
  flex
  items-center
  justify-center
  h-screen
  w-screen
`;

const Title = tw.a`
  font-bold
  text-4xl
  cursor-pointer

  hover:opacity-60
`;

export default Home;
