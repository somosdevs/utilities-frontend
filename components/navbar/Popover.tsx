import React from 'react';
import tw from 'tailwind-styled-components';

// icons
import { SignOut } from '@components/Icon';

// components
import { useUser } from '@hooks/useUser';
import PopoverItem from './PopoverItem';

export default function Popover({ isActive }: { isActive: boolean }) {
  const { signOut } = useUser();
  const ITEMS = [
    {
      title: 'Sign Out',
      icon: <SignOut />,
      handleClick: () => signOut(),
    },
  ];

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {
        isActive
        && (
          <Container>
            <ul>
              {
                ITEMS.map((item) => <PopoverItem key={item.title} {...item} />)
              }
            </ul>
          </Container>
        )
      }
    </>
  );
}

const Container = tw.div`
  absolute 
  z-10 
  top-[50px] 
  -right-6
  h-auto 
  w-48
  py-1 
  text-base 
  text-center 
  bg-white 
  rounded-lg 
  border 
  shadow-md 
  overflow-hidden
  text-black
`;
