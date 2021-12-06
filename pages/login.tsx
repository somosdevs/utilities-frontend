import { useState } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import tw from 'tailwind-styled-components';

// hooks
import { useUser } from 'hooks/useUser';

// types
import { Provider } from '@customTypes/login';

// icons
import { Github } from '@components/Icon';

// layout
import PublicPage from '@layouts/PublicPage';

// components
import { LoginAuthButton } from '@components/_auth';

// firebase
import { signInGithub } from '../firebase/client';

const Login: NextPage = () => {
  const { status } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const SignInProviders = [
    {
      handleClick: () => {
        setIsLoading(true);
        signInGithub().then(() => setIsLoading(false)).catch(console.error);
      },
      icon: <Github />,
      provider: 'Github',
      bgColor: '#111',
      textColor: '#fff',
    },
  ] as Provider[];

  (() => status === 'logged' && router.replace('/dashboard'))();

  return (
    <PublicPage title="Sign In">
      <Container>
        <Title>Log in</Title>
        {
          SignInProviders.map((props: Provider) => (
            <LoginAuthButton key={props.provider} {...props} pending={isLoading || status === 'not_known'} />
          ))
        }
      </Container>
    </PublicPage>
  );
};

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
  mb-8
`;

export default Login;
