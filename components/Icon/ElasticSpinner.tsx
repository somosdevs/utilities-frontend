import * as React from 'react';
import { SVGProps } from 'react';

const ElasticSpinner = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 100 100"
    color="#000"
    {...props}
  >
    <style>
      {
        '@keyframes svg-animation-23116f45{0%{transform:rotate(0deg)}to{transform:rotate(360deg)}}@keyframes circle-animation-23116f45{0%,25%{stroke-dashoffset:280;transform:rotate(0)}50%,75%{stroke-dashoffset:75;transform:rotate(45deg)}to{stroke-dashoffset:280;transform:rotate(360deg)}}'
      }
    </style>
    <g
      style={{
        animation: '2s linear infinite svg-animation-23116f45',
        transformOrigin: '50% 50%',
      }}
    >
      <circle
        cx={50}
        cy={50}
        r={45}
        style={{
          animation: '2s ease-in-out infinite both circle-animation-23116f45',
          transformOrigin: '50% 50%',
        }}
        display="block"
        fill="transparent"
        stroke="currentColor"
        strokeLinecap="round"
        strokeDasharray={283}
        strokeDashoffset={280}
        strokeWidth={10}
      />
    </g>
  </svg>
);

export default ElasticSpinner;
