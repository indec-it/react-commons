import React from 'react';
import PropTypes from 'prop-types';
import {
    Box,
    Heading,
    Text,
    useColorModeValue, useTheme,
    VStack
} from '@chakra-ui/react';

import {childrenPropTypes} from '@/utils/propTypes';

const Card = ({
    children,
    title,
    description,
    ...props
}) => {
    const id = `section-id-${Date.now()}`;
    const theme = useTheme();

    return (
        <Box
            as="section"
            id={id}
            data-testid="card"
            borderColor={useColorModeValue('brand.neutral100', 'brand.neutral300')}
            borderWidth={1}
            boxShadow={useColorModeValue(theme.shadows.light, theme.shadows.dark)}
            bg={useColorModeValue('brand.neutral50', 'brand.neutral400')}
            py={4}
            px={1}
            borderRadius={10}
            {...props}
        >
            {(title || description) && (
                <VStack spacing="1">
                    {title && (
                        <Heading as="h1" fontSize={18} data-testid="card-title">
                            {title}
                        </Heading>
                    )}
                    {description && <Text data-testid="card-description">{description}</Text>}
                </VStack>
            )}
            {children}
        </Box>
    );
};

Card.propTypes = {
    children: childrenPropTypes,
    title: PropTypes.string,
    description: PropTypes.string
};

Card.defaultProps = {
    title: undefined,
    description: undefined,
    children: undefined
};

export default Card;
