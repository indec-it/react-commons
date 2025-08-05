import React from 'react';
import ReactDOM from 'react-dom';

import {MoreVertIcon} from './Icons';

export default function ButtonWithOptions({options}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [menuPosition, setMenuPosition] = React.useState({top: 0, left: 0});
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
    if (isOpen && buttonRef.current && menuRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const menuRect = menuRef.current.getBoundingClientRect();
      const padding = 8;
      const gap = 4;

      let top = buttonRect.bottom + gap;
      let left = buttonRect.right - menuRect.width;

      if (left < padding) {
        left = buttonRect.left;
      }

      if (left + menuRect.width > window.innerWidth - padding) {
        left = window.innerWidth - menuRect.width - padding;
      }

      if (top + menuRect.height > window.innerHeight - padding) {
        top = buttonRect.top - menuRect.height - gap;
      }

      setMenuPosition({top, left});
    }
  }, [isOpen]);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        aria-controls={isOpen ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={isOpen ? 'true' : undefined}
        onClick={handleButtonClick}
        data-testid="fade-button"
        className="p-2 rounded-full hover:bg-gray-100 group"
        title="Más acciones"
      >
        <MoreVertIcon className="w-6 h-6" />
      </button>

      {isOpen &&
        ReactDOM.createPortal(
          <div
            ref={menuRef}
            id="fade-menu"
            className="fixed bg-white border border-gray-200 shadow-lg rounded py-1 min-w-[200px] max-h-[300px] overflow-y-auto z-50"
            style={{
              top: `${menuPosition.top}px`,
              left: `${menuPosition.left}px`,
              visibility: menuPosition.top === 0 && menuPosition.left === 0 ? 'hidden' : 'visible'
            }}
            aria-labelledby="fade-button"
          >
            {options.map(option => (
              <button
                key={option.id}
                onClick={() => {
                  option.onClick();
                  setIsOpen(false);
                }}
                disabled={option.disabled}
                className={`w-full px-4 py-2 text-left flex items-center gap-2 ${
                  option.disabled ? 'text-gray-400 cursor-not-allowed' : 'hover:bg-gray-100'
                } ${option.selected ? 'bg-gray-100' : ''}`}
              >
                {option.icon && <span className="flex-shrink-0">{option.icon}</span>}
                <span className="break-words">{option.label}</span>
              </button>
            ))}
          </div>,
          document.body
        )}
    </div>
  );
}
