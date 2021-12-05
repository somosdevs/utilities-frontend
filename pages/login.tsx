import type { NextPage } from 'next';
import PublicPage from '@layouts/PublicPage';
import tw from 'tailwind-styled-components';
import { LoginAuthButton } from 'components/_auth';
import { Github } from 'components/Icon';
import { Provider } from 'types/login/provider';

const SignInProviders = [
  {
    handleClick: () => true,
    icon: <Github />,
    provider: 'Github',
    bgColor: '#111',
    textColor: '#fff',
  },
] as Provider[];

const Login: NextPage = () => (
  <PublicPage title="Sign In">
    <Container>
      <Title>Log in</Title>
      {
        SignInProviders.map((props: Provider) => <LoginAuthButton {...props} pending={false} />)
      }
    </Container>
  </PublicPage>
);

const Container = tw.div`
  flex
  flex-col
  items-center
  justify-center
  gap-4
  h-72
  w-full
`;

const Title = tw.h1`
  text-5xl
  font-bold
  mb-10
`;

export default Login;
