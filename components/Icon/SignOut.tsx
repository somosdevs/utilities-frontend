import * as React from 'react';
import { SVGProps } from 'react';

const SignOut = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="currentColor"
    color="#000"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M2 2.75C2 1.784 2.784 1 3.75 1h2.5a.75.75 0 0 1 0 1.5h-2.5a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h2.5a.75.75 0 0 1 0 1.5h-2.5A1.75 1.75 0 0 1 2 13.25V2.75zm10.44 4.5H6.75a.75.75 0 0 0 0 1.5h5.69l-1.97 1.97a.75.75 0 1 0 1.06 1.06l3.25-3.25a.75.75 0 0 0 0-1.06l-3.25-3.25a.75.75 0 1 0-1.06 1.06l1.97 1.97z"
    />
  </svg>
);

export default SignOut;