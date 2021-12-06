import { ReactElement } from 'react';
import tw from 'tailwind-styled-components';

type PopoverItemProps = {
  title: string;
  icon: ReactElement;
  to?: string;
  external?: boolean;
  handleClick?: any;
}

export default function PopoverItem({
  title,
  icon,
  to,
  external,
  handleClick,
}: PopoverItemProps) {
  return (
    <Item>
      <Anchor href={to} target="_blank" rel="noopener noreferrer" onClick={handleClick}>
        {icon}
        {title}
        {
          external && '>'
        }
      </Anchor>
    </Item>
  );
}

const Item = tw.li`
  h-8 
  w-full 
  border-b-2
  cursor-pointer
`;

const Anchor = tw.a`
  flex 
  items-center
  justify-center
  gap-2 
  px-3 
  h-full 
  w-full 
  hover:bg-gray-100
`;
