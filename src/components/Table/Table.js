import React, {isValidElement} from 'react';
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
    Table as ChakraTable
} from '@chakra-ui/react';

import {LoadingPage, Pagination} from '@/components';
import {buildRows} from '@/utils';
import TableFooter from '@/components/Table/TableFooter';

const Table = ({
    name,
    columns,
    data,
    caption,
    isLoading,
    emptyMessage,
    total,
    showDefaultFooter,
    perPage,
    onSearch,
    params,
    footer: Footer,
    showPagination,
    ...props
}) => {
    const columnsData = Array.isArray(columns) ? columns : [];
    const sizeHeader = columnsData.length;

    return (
        <VStack w="100%">
            <Flex w="100%" overflowX="auto" overflowY="hidden" p={5}>
                <ChakraTable
                    data-testid={`${name}-table`}
                    m={3}
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
                                    id={column.key}
                                    {...column.style}
                                >
                                    {column.label}
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
                                {columnsData.map(header => (
                                    <Td key={`${row.key}-${header.key}`} {...row.style} {...header.tdStyle} >
                                        {row[header.key]}
                                    </Td>
                                ))}
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
                />
            )}
        </VStack>
    );
};

Table.propTypes = {
    onSearch: PropTypes.func,
    columns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    params: PropTypes.shape({
        skip: PropTypes.number
    }),
    name: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.shape({})),
    caption: PropTypes.string,
    isLoading: PropTypes.bool,
    showDefaultFooter: PropTypes.bool,
    emptyMessage: PropTypes.string,
    total: PropTypes.number,
    footer: PropTypes.element,
    perPage: PropTypes.number,
    showPagination: PropTypes.bool
};

Table.defaultProps = {
    name: 'table',
    onSearch: () => {},
    caption: null,
    isLoading: false,
    params: undefined,
    showDefaultFooter: true,
    showPagination: true,
    data: [],
    total: 0,
    perPage: 0,
    footer: undefined,
    emptyMessage: 'No hay resultados'
};

export default Table;
