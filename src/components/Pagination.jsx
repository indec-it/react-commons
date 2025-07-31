import React from 'react';

import {ChevronLeftIcon, ChevronRightIcon} from './Icons';

export default function Pagination({total = 0, perPage = 10, onChange = () => {}, page = 1, pageRowsCount = 0}) {
  const [newPage, setNewPage] = React.useState(0);

  const safePage = Math.max(1, page || 1);
  const safePerPage = Math.max(1, perPage || 10);
  const safeTotal = Math.max(0, total || 0);

  const startIndex = (safePage - 1) * safePerPage + 1;
  const pagesCount = safePerPage ? Math.ceil(safeTotal / safePerPage) : 1;
  const endIndex = Math.min(safePage * safePerPage, pageRowsCount || safeTotal);

  const handlePageChange = e => {
    const inputValue = e.target.value;
    setNewPage(inputValue < 1 || inputValue > pagesCount ? 1 : inputValue);
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisible = window.innerWidth < 640 ? 3 : 5;
    let startPage = Math.max(1, safePage - Math.floor(maxVisible / 2));
    let endPage = Math.min(pagesCount, startPage + maxVisible - 1);

    if (endPage - startPage + 1 < maxVisible) {
      startPage = Math.max(1, endPage - maxVisible + 1);
    }

    if (startPage > 1) {
      pages.push(
        <button
          type="button"
          key={1}
          onClick={() => onChange(1)}
          className="px-2 sm:px-3 py-2 mx-0.5 sm:mx-1 text-xs sm:text-sm rounded-md bg-white border border-gray-300 hover:bg-gray-50 whitespace-nowrap"
        >
          1
        </button>
      );
      if (startPage > 2) {
        pages.push(
          <span key="start-ellipsis" className="px-2">
            ...
          </span>
        );
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          type="button"
          key={i}
          onClick={() => onChange(i)}
          className={`px-2 sm:px-3 py-2 mx-0.5 sm:mx-1 text-xs sm:text-sm rounded-md whitespace-nowrap ${
            i === safePage
              ? 'bg-blue-600 text-white border border-blue-600'
              : 'bg-white border border-gray-300 hover:bg-gray-50'
          }`}
        >
          {i}
        </button>
      );
    }

    if (endPage < pagesCount) {
      if (endPage < pagesCount - 1) {
        pages.push(
          <span key="end-ellipsis" className="px-2">
            ...
          </span>
        );
      }
      pages.push(
        <button
          type="button"
          key={pagesCount}
          onClick={() => onChange(pagesCount)}
          className="px-2 sm:px-3 py-2 mx-0.5 sm:mx-1 text-xs sm:text-sm rounded-md bg-white border border-gray-300 hover:bg-gray-50 whitespace-nowrap"
        >
          {pagesCount}
        </button>
      );
    }

    return pages;
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-6 flex-wrap px-4">
        <div className="flex items-center space-x-1 sm:space-x-2 overflow-x-auto max-w-full">
          <button
            type="button"
            onClick={() => onChange(1)}
            disabled={safePage === 1}
            className="p-1.5 sm:p-2 rounded-md bg-white border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeftIcon className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => onChange(safePage - 1)}
            disabled={safePage === 1}
            className="p-1.5 sm:p-2 rounded-md bg-white border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeftIcon className="w-4 h-4" />
          </button>

          {renderPageNumbers()}

          <button
            type="button"
            onClick={() => onChange(safePage + 1)}
            disabled={safePage === pagesCount}
            className="p-1.5 sm:p-2 rounded-md bg-white border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRightIcon className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => onChange(pagesCount)}
            disabled={safePage === pagesCount}
            className="p-1.5 sm:p-2 rounded-md bg-white border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRightIcon className="w-4 h-4" />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
          <span className="text-sm text-gray-600">Ir a la página:</span>
          <input
            type="number"
            min={1}
            max={pagesCount}
            onChange={handlePageChange}
            className="w-20 px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            onClick={() => onChange(newPage)}
            disabled={newPage === 0}
            className="p-1.5 sm:p-2 rounded-md bg-white border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRightIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="text-center text-gray-600 text-sm py-4">{`${startIndex} - ${endIndex} | ${total}`}</div>
    </>
  );
}
