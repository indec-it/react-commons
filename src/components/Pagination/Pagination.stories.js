import React from 'react';
import {useArgs} from '@storybook/client-api';

import {Pagination} from '@/components';

export default {
    title: 'Components/Pagination/Pagination',
    component: Pagination
};

export const Basic = args => {
    const [prevArgs, updateArgs] = useArgs();
    const handleChange = ({target: {value}}) => {
        updateArgs({...prevArgs, currentPage: value ? value + 1 : 1});
    };
    return (
        <div style={{maxWidth: '330px'}}>
            <Pagination {...args} onChange={handleChange}/>
        </div>
    );
};

Basic.args = {
    total: 40,
    perPage: 4,
    currentPage: 1
};
