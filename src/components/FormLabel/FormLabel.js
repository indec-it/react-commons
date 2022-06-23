import React from 'react';
import PropTypes from 'prop-types';
import {FormLabel as ChakraFormLabel} from '@chakra-ui/react';

import {Quote} from '@/theme/components';

const FormLabel = ({
    quote,
    isInvalid,
    children,
    ...rest
}) => (
    <ChakraFormLabel
        data-testid="form-label"
        fontSize={13}
        fontWeight={600}
        color={isInvalid ? 'brand.danger' : undefined}
        mb={1}
        {...rest}
    >
        {children}
        {quote && <Quote data-testid={`quote-${quote}`}>{quote}</Quote>}
    </ChakraFormLabel>
);

FormLabel.propTypes = {
    quote: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element,
        PropTypes.string,
        PropTypes.number
    ]),
    isInvalid: PropTypes.bool
};

FormLabel.defaultProps = {
    quote: undefined,
    children: undefined,
    isInvalid: false
};

export default FormLabel;
