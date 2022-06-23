import React from 'react';
import {useArgs} from '@storybook/client-api';
import {Button} from '@chakra-ui/react';

import {Modal} from '@/components';

export default {
    title: 'Components/Modal/Modal',
    component: Modal
};

export const Basic = args => {
    const [prevArgs, updateArgs] = useArgs();
    const handleClick = ({target: {value}}) => {
        const newValue = value === 'false';
        updateArgs({...prevArgs, isOpen: newValue});
    };
    const handleCancel = () => {
        updateArgs({...prevArgs, isOpen: false});
    };
    return (
        <>
            <Button value={args.isOpen} onClick={handleClick}>Modal</Button>
            <Modal {...args} onCancel={handleCancel}/>
        </>
    );
};

Basic.args = {
    onAccept: () => {},
    title: 'Title',
    children: 'Text',
    isOpen: false
};
