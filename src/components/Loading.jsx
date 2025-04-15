import React from 'react';

export default function Loading() {
  return (
    <div className="flex justify-center items-center">
      <div data-testid="loading" className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600" />
    </div>
  );
}
