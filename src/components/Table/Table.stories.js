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
        user.deleted
    ];
    return ({key: user.id, values: rows});
});

export const Basic = args => {
    const spliceRows = getRows().slice(0, 5);
    const [prevArgs, updateArgs] = useArgs();
    const handleSearch = ({target: {id, value}}) => updateArgs(
        {...prevArgs, params: {...prevArgs.params, [id]: value}}
    );
    return (
        <VStack w="100%">
            <Table
                name="users"
                columns={columns}
                data={spliceRows}
                isLoading={false}
                caption="Users"
                perPage={5}
                total={users.length}
                onSearch={handleSearch}
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
