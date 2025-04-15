import React from 'react';

import {UserIcon} from '../Icons';

export default function UserMenu({user, onLogout}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [dropdownPosition, setDropdownPosition] = React.useState({top: 0, right: 0});
  const menuRef = React.useRef(null);
  const buttonRef = React.useRef(null);

  React.useEffect(() => {
    const handleClickOutside = event => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  React.useEffect(() => {
    if (isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + 8,
        right: window.innerWidth - rect.right
      });
    }
  }, [isOpen]);

  const handleLogout = () => {
    setIsOpen(false);
    onLogout();
  };

  return (
    <div className="relative">
      <button ref={buttonRef} onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-full hover:bg-gray-100">
        <UserIcon className="w-8 h-8" />
      </button>

      {isOpen && (
        <div 
          ref={menuRef} 
          className="fixed bg-white shadow-lg rounded py-2 min-w-[200px] z-50"
          style={{
            top: `${dropdownPosition.top}px`,
            right: `${dropdownPosition.right}px`
          }}
        >
          {user && (
            <div className="px-4 py-2 border-b border-gray-200">
              {user.lastName}, {user.name}
            </div>
          )}
          <button onClick={handleLogout} className="w-full px-4 py-2 text-left hover:bg-gray-100">
            Cerrar sesion
          </button>
        </div>
      )}
    </div>
  );
}
