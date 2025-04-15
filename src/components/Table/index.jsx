import React from 'react';

import Loading from '../Loading.jsx';
import Pagination from '../Pagination.jsx';
import getPaginationFields from '../../utils/getPaginationFields';

import Cards from './Cards';
import TableHeader from './TableHeader';

export default function Table({
  columns,
  rows,
  page,
  totalResults = 0,
  resultsPerPage = 0,
  onChangePage,
  isLoading,
  onSort = () => {},
  noResults = 'No se encontraron resultados',
  showPagination = true
}) {
  const {pageRowsCount} = getPaginationFields({
    skip: page - 1,
    total: totalResults,
    perPage: resultsPerPage,
    documentsSize: rows.length
  });

  if (isLoading && (!rows || rows.length === 0)) {
    return <Loading />;
  }

  return (
    <>
      <Cards columns={columns} rows={rows} />
      <div className="hidden md:block">
        <div className="bg-white mt-8 rounded-lg shadow-sm overflow-hidden">
          <table className="min-w-full">
            <TableHeader columns={columns} onSort={onSort} />
            <tbody>
              {rows.length === 0 ? (
                <tr>
                  <td colSpan={columns.length} className="text-center py-8 text-gray-500">
                    {noResults}
                  </td>
                </tr>
              ) : (
                rows.map((row, index) => (
                  <tr
                    key={row.key}
                    className={`${index % 2 === 1 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-100 transition-colors`}
                  >
                    {columns.map(column => (
                      <td key={column.key} className="px-4 py-3 text-sm border-b border-gray-200 last:border-r-0">
                        {row[column.key]}
                      </td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      {showPagination && (
        <Pagination
          total={totalResults}
          perPage={resultsPerPage}
          onChange={onChangePage}
          page={page}
          pageRowsCount={pageRowsCount}
        />
      )}
    </>
  );
}
