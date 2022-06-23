import React from 'react';
import {FaBomb} from 'react-icons/fa';

import {Text} from '@chakra-ui/react';
import {AlertMessage} from '@/components';

export default {
    title: 'Components/AlertMessage/AlertMessage',
    component: AlertMessage,
    argTypes: {
        status: 'info'
    }
};

export const Basic = args => <AlertMessage {...args}/>;

Basic.decorators = [
    args => (
        <>
            <Text>Status: error, success, warning, and info.</Text>
            <AlertMessage {...args} message="A message." status="info"/>
            <AlertMessage {...args} message="Hidden close." status="warning" hiddenClose/>
            <AlertMessage {...args} message="With icon." status="success" icon={FaBomb}/>
            <AlertMessage {...args} message="With default icon of theme." status="error" showDefaultIcon/>
            <br/>
            <Text>Variants: subtle (default), solid, left-accent or top-accent.</Text>
            <AlertMessage {...args} message="variant solid" status="success" variant="solid" showDefaultIcon/>
            <AlertMessage {...args} message="variant left-accent" status="error" variant="left-accent" showDefaultIcon/>
            <AlertMessage {...args} message="variant top-accent" status="warning" variant="top-accent" showDefaultIcon/>
            <AlertMessage
                {...args}
                message="variant top-accent colorSchema blackAlpha"
                variant="top-accent"
                showDefaultIcon
                colorScheme="blackAlpha"
            />
            <br/>
        </>
    )
];

Basic.args = {
    message: 'A message.',
    status: 'info'
};
