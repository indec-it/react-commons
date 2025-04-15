import React from 'react';

import {MenuIcon} from '../Icons';
import {useScreenSize} from '../../hooks/useScreenSize';

export default function MobileMenu({items = [], currentPath, onChangePage}) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const {isMobile} = useScreenSize();

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.mobile-menu-container')) {
        handleCloseNavMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleOpenNavMenu = () => {
    setIsMenuOpen(true);
  };

  const handleCloseNavMenu = () => {
    setIsMenuOpen(false);
  };

  if (!isMobile) return null;

  return (
    <div className="flex flex-1 justify-end mobile-menu-container">
      <button
        className="p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
      >
        <MenuIcon className="w-6 h-6" />
      </button>

      {isMenuOpen && (
        <div className="fixed top-16 right-4 z-50 bg-white rounded-lg shadow-lg border min-w-48">
          {items.map((item, index) => {
              const isActive = currentPath === item?.path;
              const textColor = isActive ? 'text-blue-600' : 'text-gray-900';

              return (
                <button
                  key={item?.path}
                  onClick={() => {
                    onChangePage(item);
                    handleCloseNavMenu();
                  }}
                  className={`w-full text-left px-4 py-2 hover:bg-gray-50 block transition-colors ${
                    isActive ? 'font-bold underline' : 'font-normal'
                  } ${textColor}`}
                  data-testid={`module-${index}`}
                >
                  {item.name}
                </button>
              );
            })}
        </div>
      )}
    </div>
  );
}
