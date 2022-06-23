import {chakra} from '@chakra-ui/react';

const Quote = chakra('span', {
    baseStyle: {
        fontSize: '10px',
        color: 'brand.danger',
        marginBottom: '5px',
        marginInlineStart: 'var(--chakra-space-1)',
        marginInlineEnd: 'var(--chakra-space-1)',
        borderColor: 'brand.neutral200',
        wordWrap: 'break-word',
        borderWidth: 0,
        borderStyle: 'solid',
        boxSizing: 'border-box',
        textAlign: 'start',
        fontWeight: 'var(--chakra-fontWeights-medium)',
        fontFamily: 'var(--chakra-fonts-body)',
        position: 'relative',
        top: '-4px'
    }
});

export default Quote;
