import { ReactElement } from 'react';

export type Provider = {
  handleClick: () => void;
  icon: ReactElement;
  provider: string;
  bgColor?: string;
  textColor?: string;
};

export type User = {
  avatar: string;
  username: string;
  email: string;
  uid: string;
}

export type AuthUser = {
  status: 'not_known' | 'not_logged' | 'logged';
  user: User | null;
};
