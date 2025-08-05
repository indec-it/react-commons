import React from 'react';

import LoginForm from './LoginForm.jsx';

export default function Login({title, onLogin, isLoging, error}) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen">
        <div
          className="flex flex-col justify-center items-center text-white p-8"
          style={{
            backgroundColor: '#0093E9',
            background: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)'
          }}
        >
          <h1 className="text-5xl font-bold text-center uppercase">{title}</h1>
        </div>
        <div className="flex flex-col gap-3 justify-center p-3">
          <h2 className="font-bold text-2xl">Login</h2>
          <LoginForm isLoging={isLoging} onLogin={onLogin} error={error} />
        </div>
      </div>
    </>
  );
}
