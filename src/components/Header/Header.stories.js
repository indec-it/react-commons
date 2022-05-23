import React from 'react';
import find from 'lodash/find';
import {useArgs} from '@storybook/client-api';

import {headerOptions} from '@/constants';
import {flattenOptions} from '@/utils';
import logoRight from '@/assets/logoRight.png';
import logoLeft from '@/assets/logo.svg';
import {Header} from '@/components';

export default {
    title: 'Components/Header/Header',
    component: Header
};

export const Basic = args => {
    const [prevArgs, updateArgs] = useArgs();
    const flattenedOptions = flattenOptions(headerOptions);
    const handleRedirect = e => {
        const selectedOption = find(flattenedOptions, option => option.path === e.target.value);
        updateArgs({...prevArgs, activePath: selectedOption?.path});
    };
    const handleLogout = () => window.alert('logout');
    return <Header options={headerOptions} redirectTo={handleRedirect} onLogout={handleLogout} {...args}/>;
};

Basic.args = {
    activePath: '/example4',
    hiddenTop: false,
    hiddenOptions: false,
    hiddenUserMenu: false,
    smallScale: 650,
    logos: [
        {source: logoLeft, alt: 'logo-left', onClick: () => window.alert('image')},
        {source: logoRight, alt: 'logo-right'}
    ],
    user: {
        name: 'Jordan',
        surname: 'Walke',
        roleName: 'Admin',
        stateName: 'Buenos Aires',
        documentId: 21554378
    }
};
