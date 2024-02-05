import React, {useState, isValidElement} from 'react';
import PropTypes from 'prop-types';
import {
    Flex,
    TableCaption,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    VStack,
    Table as ChakraTable,
    HStack,
    Text
} from '@chakra-ui/react';

import {sortDirections} from '@/constants';
import {LoadingPage, Pagination} from '@/components';
import {buildRows} from '@/utils';
import TableFooter from '@/components/Table/TableFooter';
import SortIcon from '@/components/Table/SortIcon';

const Table = ({
    caption,
    columns,
    data,
    emptyMessage,
    footer: Footer,
    isLoading,
    name,
    onSearch,
    onSort,
    paginationStyles,
    params,
    perPage,
    showDefaultFooter,
    showPagination,
    total,
    paintFreeRowsColor,
    ...props
}) => {
    const columnsData = Array.isArray(columns) ? columns : [];
    const sizeHeader = columnsData.length;
    const initialClassified = {sort: null, sortBy: null};
    const [classified, setClassified] = useState(initialClassified);

    const handleSort = ({target: {id}}) => {
        if (!id) {
            return;
        }
        let sort;
        if (id === 'action') {
            sort = initialClassified;
        } else if (classified?.sort === id && classified?.sortBy === sortDirections.ASC) {
            sort = {sort: id, sortBy: sortDirections.DESC};
        } else {
            sort = {sort: id, sortBy: sortDirections.ASC};
        }
        setClassified(sort);
        onSort(sort);
    };

    return (
        <VStack w="100%">
            <Flex w="100%" overflowX="auto" overflowY="hidden">
                <ChakraTable
                    data-testid={`${name}-table`}
                    border="1px"
                    borderColor="brand.neutral100"
                    {...props}
                >
                    {caption && (
                        <TableCaption data-testid="caption" placement="top">
                            {caption}
                        </TableCaption>
                    )}
                    <Thead>
                        <Tr>
                            {columnsData.map(column => (
                                <Th
                                    data-testid={`column-${column.key}`}
                                    key={column.key}
                                    onClick={onSort ? handleSort : undefined}
                                    cursor={onSort ? 'pointer' : 'initial'}
                                    {...column.style}
                                >
                                    <HStack>
                                        {data.length > 0 && <SortIcon classified={classified} columnKey={column.key}/>}
                                        <Text
                                            ml="0 !important"
                                            id={column.key}
                                            data-testid={`column-text-${column.key}`}
                                        >
                                            {column.label || ''}
                                        </Text>
                                    </HStack>
                                </Th>
                            ))}
                        </Tr>
                    </Thead>
                    <Tbody>
                        {!isLoading && data.length === 0 && (
                            <Tr key={emptyMessage}>
                                <Td colSpan={sizeHeader} textAlign="center">
                                    {emptyMessage}
                                </Td>
                            </Tr>
                        )}
                        {isLoading && (
                            <Tr key="loading">
                                <Td colSpan={sizeHeader}>
                                    <LoadingPage noStatic/>
                                </Td>
                            </Tr>
                        )}
                        {!isLoading && data.length > 0 && buildRows(data, columnsData).map(row => (
                            <Tr key={row?.key} {...row?.containerStyle} data-testid={`row-${row?.key}`}>
                                {columnsData.map(header => {
                                    const isEmpty = row[header.key] == null || row[header.key] === '';
                                    const updatRowsStyle = isEmpty ? header.emptyRow : header.tdStyle;
                                    return (
                                        <Td key={`${row.key}-${header.key}`} {...row.style} {...updatRowsStyle}>
                                            {row[header.key]}
                                        </Td>
                                    );
                                })}
                            </Tr>
                        ))}
                    </Tbody>
                    {isValidElement(Footer) ? Footer : undefined}
                    {showDefaultFooter && !isLoading && <TableFooter size={sizeHeader} total={total}/>}
                </ChakraTable>
            </Flex>
            {showPagination && !isLoading && (
                <Pagination
                    total={total}
                    perPage={perPage}
                    onChange={onSearch}
                    currentPage={params?.skip ? params.skip + 1 : 1}
                    styles={paginationStyles}
                />
            )}
        </VStack>
    );
};

Table.propTypes = {
    paintFreeRowsColor: PropTypes.string,
    caption: PropTypes.string,
    columns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({})),
    emptyMessage: PropTypes.string,
    footer: PropTypes.element,
    isLoading: PropTypes.bool,
    name: PropTypes.string,
    onSearch: PropTypes.func,
    onSort: PropTypes.func,
    paginationStyles: PropTypes.shape({}),
    params: PropTypes.shape({skip: PropTypes.number}),
    perPage: PropTypes.number,
    showDefaultFooter: PropTypes.bool,
    showPagination: PropTypes.bool,
    total: PropTypes.number
};

Table.defaultProps = {
    caption: null,
    data: [],
    footer: undefined,
    emptyMessage: 'No hay resultados',
    isLoading: false,
    name: 'table',
    onSearch: () => { },
    onSort: undefined,
    paginationStyles: undefined,
    params: undefined,
    perPage: 0,
    showDefaultFooter: true,
    showPagination: true,
    total: 0,
    paintFreeRowsColor: undefined
};

export default Table;
