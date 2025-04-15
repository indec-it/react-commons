import React from 'react';

export default function Card({columns = [], rows = []}) {
  return (
    <div className="md:hidden mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {rows.map(row => (
          <div key={row.key} className="bg-white shadow-md rounded-2xl p-4">
            {columns.map(column => (
              <div key={column.key} className="flex flex-col sm:flex-row mb-4 sm:items-center">
                <span className="font-bold pr-2">{column.label}:</span>
                <span className="truncate">{row[column.key]}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
