import {extendTheme} from '@chakra-ui/react';

import {
    Button,
    Checkbox,
    inputs,
    Text,
    Flex,
    FormErrorMessage,
    FormLabel,
    Box,
    colors,
    global,
    Table
} from './components';

export const theme = {
    type: 'default',
    colors: {
        brand: colors
    },
    styles: {global},
    components: {
        Button,
        Checkbox,
        Input: inputs,
        NumberInput: inputs,
        Select: inputs,
        Flex,
        FormErrorMessage,
        FormLabel,
        Text,
        Box,
        Table
    }
};

export const themed = extendTheme(theme);

export default themed;
