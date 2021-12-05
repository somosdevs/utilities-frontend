import PublicPage from '@layouts/PublicPage';
import type { NextPage } from 'next';
import tw from 'tailwind-styled-components';

const Home: NextPage = () => (
  <PublicPage title="home">
    <Main>
      <Title>¡Hola!</Title>
    </Main>
  </PublicPage>
);

const Main = tw.div`
  flex
  items-center
  justify-center
  h-100
  w-100
`;

const Title = tw.h1`
  mt-44
  font-bold
  text-4xl
  text-black
`;

export default Home;
