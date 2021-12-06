import { ReactChild, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import tw from 'tailwind-styled-components';
import { useUser } from 'hooks/useUser';
import { Popover } from '@components/navbar';

type PublicPageProps = {
  title: string;
  children: ReactChild;
}

export default function PublicPage({ title, children }: PublicPageProps) {
  const { status, user } = useUser();
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <Head>
        <title>UtilitiesX - {title}</title>
        <meta name="title" content="Utilities X" />
        <meta name="description" content="Our own web 👀" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Navbar>
          <Link href="/">
            <a className="text-xl sm:text-2xl font-bold cursor-pointer">UtilitiesX</a>
          </Link>
          {
            status === 'logged'
              ? (
                <div className="relative">
                  <Button onClick={() => setIsActive(!isActive)}>
                    <Image
                      src={user ? user.avatar : '/vercel.svg'}
                      alt="Avatar Image"
                      layout="fill"
                      objectFit="cover"
                    />
                  </Button>
                  <Popover isActive={isActive} />
                </div>
              )
              : (
                <Link href="/login">
                  <a className="border-2 border-secondary-200 rounded-md sm:px-6 sm:py-1.5 hover:bg-secondary-50 hover:bg-opacity-25">
                    <span className="sm:hidden px-2">+</span>
                    <span className="hidden sm:inline">
                      Sign in
                    </span>
                  </a>
                </Link>
              )
          }
        </Navbar>
        <Main>
          {children}
        </Main>
      </Layout>
    </>
  );
}

const Layout = tw.main`
  h-screen
  w-full
  p-4
  bg-primary-50
  bg-opacity-25
`;

const Main = tw.main`
  p-4
  text-gray-800
  dark:text-white
  max-w-screen-xl
`;

const Navbar = tw.nav`
  flex
  items-center
  justify-between
  gap-2
  h-16
  w-10/12
  max-w-screen-xl
  mx-auto
  px-14
  rounded-xl
  bg-primary
  text-secondary-200
`;

const Button = tw.button`
  relative
  h-10
  w-10
  rounded-full
  overflow-hidden
  cursor-pointer
`;
