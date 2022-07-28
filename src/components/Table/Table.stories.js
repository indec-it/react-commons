import React from 'react';
import {useArgs} from '@storybook/client-api';
import {VStack} from '@chakra-ui/react';
import {getThemingArgTypes} from '@chakra-ui/storybook-addon';

import {users} from '@/constants';
import {themed} from '@/theme';
import {Table} from '@/components';

export default {
    title: 'Components/Table/Table',
    component: Table,
    argTypes: getThemingArgTypes(themed, 'Table')
};

const columns = [
    {key: 'id', label: 'Id'},
    {key: 'name', label: 'Nombre'},
    {key: 'surname', label: 'Apellido'},
    {key: 'documentId', label: 'Documento'},
    {key: 'role', label: 'Rol'},
    {key: 'state', label: 'Provincia'},
    {key: 'deleted', label: 'Estado'}
];

const getRows = () => users.map(user => {
    const rows = [
        user.id,
        user.name,
        user.surname,
        user.documentId,
        user.role,
        user.state,
        user.status
    ];
    return ({key: user.id, values: rows});
});

export const Basic = args => {
    const rows = getRows();
    const [prevArgs, updateArgs] = useArgs();
    const handleSearch = ({target: {id, value}}) => updateArgs(
        {...prevArgs, params: {...prevArgs.params, [id]: value}}
    );
    const handleSort = ({sort, sortBy}) => {
        const orderedData = rows.sort((firstRow, secondRow) => {
            const selectedColumn = columns.findIndex(column => column.key === sort);
            if (firstRow.values[selectedColumn] < secondRow.values[selectedColumn]) {
                return sortBy === 'asc' ? -1 : 1;
            }
            if (firstRow.values[selectedColumn] > secondRow.values[selectedColumn]) {
                return sortBy === 'asc' ? 1 : -1;
            }
            return 0;
        });
        updateArgs({...prevArgs, data: orderedData});
    };
    return (
        <VStack w="100%">
            <Table
                name="users"
                columns={columns}
                data={rows}
                isLoading={false}
                caption="Users"
                perPage={5}
                total={users.length}
                onSearch={handleSearch}
                onSort={handleSort}
                params={args.params}
                variant="reg"
                size="sm"
                {...args}
            />
        </VStack>
    );
};

Basic.args = {
    params: {skip: undefined}
};
