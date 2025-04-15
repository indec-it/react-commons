import React from 'react';

import Logo from '../../assets/logo.svg';

import DesktopMenu from './DesktopMenu.jsx';
import MobileMenu from './MobileMenu.jsx';
import UserMenu from './UserMenu.jsx';

export default function Header({onRedirect, token, items, user, onLogout}) {
  const currentPath = window.location.pathname.split('/')[1];

  const handleSetButton = selectedModule => {
    onRedirect(`/${selectedModule.path}`);
  };

  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-200">
      <div className="relative flex items-center justify-between px-4 py-2 min-h-[64px] overflow-visible">
        <img src={Logo} alt="logo" className="h-10 w-auto" />
        {token && (
          <>
            <DesktopMenu items={items} currentPath={currentPath} onChangePage={handleSetButton} />
            <MobileMenu items={items} currentPath={currentPath} onChangePage={handleSetButton} />
            <UserMenu user={user} onLogout={onLogout} />
          </>
        )}
      </div>
    </header>
  );
}
