import React from 'react';

import {Dropdown} from '@/components';

export default {title: 'Dropdown'};

export const Basic = args => <Dropdown {...args}/>;

Basic.args = {
    label: 'Example',
    disabled: false,
    isLoading: false,
    options: [
        {value: 1, label: 'Option 1'},
        {value: 2, label: 'Option 2'},
        {value: 3, label: 'Option 3'}
    ]
};
