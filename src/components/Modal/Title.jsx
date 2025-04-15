import React from 'react';

export default function Title({children, title}) {
  return children ? children : <h2 className="text-xl font-bold mt-4 mb-8 text-gray-900">{title}</h2>;
}
