import React from 'react';

import {Button} from '@chakra-ui/react';

export default {
    title: 'Chakra/Button/Button',
    component: Button
};

// eslint-disable-next-line react/prop-types
export const Basic = ({text, ...args}) => {
    const handleClick = () => window.alert('click');

    return (
        <div style={{maxWidth: '330px'}}>
            <Button onClick={handleClick} {...args}>
                {text}
            </Button>
        </div>
    );
};

Basic.args = {
    text: 'Text'
};

// eslint-disable-next-line react/prop-types
export const Variants = () => {
    const handleClick = () => window.alert('click');

    return (
        <div style={{maxWidth: '230px', display: 'flex', flexDirection: 'column'}}>
            <Button
                variant="rounded"
                onClick={handleClick}
                mt={3}
            >
                Variant rounded
            </Button>
            <Button
                colorScheme="blue"
                onClick={handleClick}
                mt={3}
            >
                Default with colorScheme
            </Button>
            <Button
                size="sm"
                mt={3}
            >
                Size sm
            </Button>
            <Button
                variant="solid"
                onClick={handleClick}
                mt={3}
            >
                Variant solid
            </Button>
            <Button
                variant="outline"
                onClick={handleClick}
                mt={3}
            >
                Variant outline
            </Button>
            <Button
                variant="ghost"
                onClick={handleClick}
                mt={3}
            >
                Variant ghost
            </Button>
            <Button
                variant="link"
                onClick={handleClick}
                mt={3}
            >
                Variant link
            </Button>
            <Button
                variant="link"
                onClick={() => window.open('https://chakra-ui.com/docs/components/form/button', '_blank')}
                mt={10}
                colorScheme="yellow"
            >
                More Chakra Docs
            </Button>
        </div>
    );
};
