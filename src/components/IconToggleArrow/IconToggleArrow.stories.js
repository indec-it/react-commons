import React from 'react';
import {useArgs} from '@storybook/client-api';
import {IconButton} from '@chakra-ui/react';

import {IconToggleArrow} from '@/components';

export default {
    title: 'Components/Icons/IconToggleArrow',
    component: IconToggleArrow
};

export const Basic = args => {
    const [prevArgs, updateArgs] = useArgs();
    const handleClick = ({target: {value}}) => {
        const newValue = value === 'false';
        updateArgs({...prevArgs, isOpen: newValue});
    };
    return (
        <IconButton
            aria-label="arrow"
            onClick={handleClick}
            variant="rounded"
            value={args.isOpen}
            icon={(
                <IconToggleArrow
                    isOpen={args.isOpen}
                    color="white"
                />
            )}
        />
    );
};

Basic.args = {
    isOpen: false
};
