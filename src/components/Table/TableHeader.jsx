import React from 'react';

import {SortIcon} from '../Icons';

export default function TableHeader({columns = [], onSort = () => {}}) {
  const [orderBy, setOrderBy] = React.useState('');
  const [order, setOrder] = React.useState('asc');

  const handleSort = columnKey => {
    let newOrder;
    if (orderBy === columnKey) {
      newOrder = order === 'asc' ? 'desc' : 'asc';
    } else {
      setOrderBy(columnKey);
      newOrder = 'asc';
    }
    setOrder(newOrder);
    onSort({columnKey, order: newOrder});
  };

  return (
    <thead>
      <tr>
        {columns.map(column => (
          <th key={column.key} className="px-4 py-3 text-left text-[#71797E] font-bold text-sm border-b border-gray-200">
            {column.isSortable ? (
              <button
                type="button"
                onClick={() => handleSort(column.key)}
                className="flex items-center gap-1 hover:text-gray-900 transition-colors"
              >
                {column.label}
                <SortIcon
                  direction={orderBy === column.key ? order : 'none'}
                  className={orderBy === column.key ? 'text-blue-600' : 'text-gray-400'}
                />
              </button>
            ) : (
              column.label
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
}
