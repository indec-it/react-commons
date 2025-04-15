import React from 'react';

export default function ErrorMessage({error}) {
  return (
    <p className="text-md text-red-600" data-testid="error-message">
      {error}
    </p>
  );
}
