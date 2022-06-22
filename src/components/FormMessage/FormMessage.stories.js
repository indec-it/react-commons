import React from 'react';
import {FormControl, Stack, Text} from '@chakra-ui/react';

import {FormMessage, TextInput} from '@/components';

export default {
    title: 'Components/FormMessage/FormMessage',
    component: FormMessage
};

export const Basic = () => (
    <FormControl isInvalid h="100px">
        <FormMessage message="Normal Message"/>
    </FormControl>
);

export const Variants = () => (
    <>
        <Text pl={0}>Message Types:</Text>
        <FormControl isInvalid h="100px">
            <Stack style={{
                maxWidth: '330px',
                width: '100%',
                height: '25px',
                position: 'relative'
            }}
            >
                <FormMessage messageError="Message error"/>
            </Stack>
            <Stack style={{
                maxWidth: '330px',
                width: '100%',
                height: '25px',
                position: 'relative'
            }}
            >
                <FormMessage message="Normal message"/>
            </Stack>
            <Stack style={{
                maxWidth: '330px',
                width: '100%',
                height: '25px',
                position: 'relative'
            }}
            >
                <FormMessage message="With color" color="brand.primary"/>
            </Stack>
        </FormControl>
        <Text pl={0}>View in inputs:</Text>
        <TextInput hasError="with error" variant="flushed" maxWidth="200px"/>
        <TextInput message="with message" variant="flushed" maxWidth="200px" mt={8}/>
        <TextInput message="with color" variant="flushed" messageColor="brand.primary" maxWidth="200px" mt={8}/>
    </>
);

Variants.args = {
    hiddenText: false
};
