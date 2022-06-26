import React from 'react';

import {FaCheck, FaCircle} from 'react-icons/fa';
import {Card} from '@/components';
import {
    Stack, ListItem, ListIcon, List
} from '@chakra-ui/react';

export default {
    title: 'Components/Card/Card',
    component: Card
};

export const Basic = args => (
    <Stack w="350px">
        <Card {...args}/>
    </Stack>
);

const renderChildren = (
    <Stack>
        <List ml={2} spacing={2}>
            <ListItem alignItems="center" display="flex">
                <ListIcon as={FaCheck} color="green.500"/>
                Item 1
            </ListItem>
            <ListItem alignItems="center" display="flex">
                <ListIcon as={FaCircle} w={2} h={2}/>
                Item 2
            </ListItem>
            <ListItem alignItems="center" display="flex">
                <ListIcon as={FaCircle} w={2} h={2}/>
                Item 3
            </ListItem>
        </List>
    </Stack>
);

Basic.args = {
    title: 'Card',
    description: 'Description',
    children: renderChildren
};
