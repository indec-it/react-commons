import React from 'react';

import {useScreenSize} from '../../hooks/useScreenSize';

function DesktopMenu({items = [], currentPath, onChangePage}) {
  const {isDesktop} = useScreenSize();

  if (!isDesktop) return null;

  return (
    <div className="flex flex-1 justify-center items-center">
      {items.map((item, index) => {
        const isActive = currentPath === item?.path;
        const textColor = isActive ? 'text-blue-600' : 'text-black hover:text-gray-700';

        return (
          <button
            key={item?.path}
            onClick={() => onChangePage(item)}
            className={`mx-4 px-2 py-1 block transition-colors ${
              isActive ? 'font-bold underline' : 'font-normal'
            } ${textColor}`}
            data-testid={`module-${index}`}
          >
            {item.name}
          </button>
        );
      })}
    </div>
  );
}

export default DesktopMenu;
