import React from 'react';

function ArrowRightIcon({className = '', size = 24, ...props}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 8 16 12 12 16" />
      <path d="m8 12 4 0" />
    </svg>
  );
}

export default ArrowRightIcon;
