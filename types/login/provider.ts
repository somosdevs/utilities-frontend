import { ReactElement } from 'react';

export type Provider = {
  handleClick: () => void;
  icon: ReactElement;
  provider: string;
  bgColor?: string;
  textColor?: string;
};
