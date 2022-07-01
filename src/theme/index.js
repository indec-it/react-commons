import {extendTheme} from '@chakra-ui/react';

import {
    Button,
    Checkbox,
    inputs,
    Text,
    Flex,
    FormError,
    FormLabel,
    Box,
    colors,
    global,
    Table,
    Textarea
} from './components';

export const theme = {
    type: 'default',
    colors: {
        brand: colors
    },
    styles: {global},
    shadows: {light: `1px 1px 3px ${colors.neutral200}`, dark: `1px 1px 3px ${colors.neutral300}`},
    components: {
        Button,
        Checkbox,
        Input: inputs,
        NumberInput: inputs,
        Select: inputs,
        Textarea,
        Flex,
        FormError,
        FormLabel,
        Text,
        Box,
        Table
    }
};

export const themed = extendTheme(theme);

export default themed;
