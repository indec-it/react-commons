import React from 'react';

function LaptopMacIcon({className = '', size = 24, ...props}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
      {...props}
    >
      <rect x="3" y="4" width="18" height="12" rx="1" ry="1" />
      <line x1="2" y1="20" x2="22" y2="20" />
    </svg>
  );
}

export default LaptopMacIcon;
