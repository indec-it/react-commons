import React from 'react';

export default function Footer({children}) {
  return <footer className="fixed bottom-0 w-full bg-white px-2 shadow-sm border-b border-gray-200">{children}</footer>;
}
