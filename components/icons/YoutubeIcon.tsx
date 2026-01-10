
import React from 'react';

export const YoutubeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10A24.12 24.12 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
    <path d="M2.5 7.5c.75-1 1.5-2 2.5-3A24.12 24.12 0 0 1 12 4a24.12 24.12 0 0 1 7 0.5c1 .9 1.8 2 2.5 3" />
    <path d="M21.5 16.5c-.75 1-1.5 2-2.5 3A24.12 24.12 0 0 1 12 20a24.12 24.12 0 0 1-7-0.5c-1-.9-1.8-2-2.5-3" />
  </svg>
);
