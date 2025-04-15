import React from 'react';

function SortIcon({className = '', size = 16, direction = 'none', ...props}) {
  if (direction === 'asc') {
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
        <polyline points="6 9 12 15 18 9" />
      </svg>
    );
  }

  if (direction === 'desc') {
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
        <polyline points="18 15 12 9 6 15" />
      </svg>
    );
  }

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
      <polyline points="6 9 12 15 18 9" />
      <polyline points="18 15 12 9 6 15" opacity="0.3" />
    </svg>
  );
}

export default SortIcon;
