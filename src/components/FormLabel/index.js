import React from 'react';
import PropTypes from 'prop-types';
import {FormLabel} from '@chakra-ui/react';

import {Quote} from '@/theme/components';

const _FormLabel = ({
    quote,
    isInvalid,
    children,
    ...rest
}) => (
    <FormLabel
        data-testid="form-label"
        fontSize={13}
        fontWeight={600}
        color={isInvalid ? 'brand.danger' : undefined}
        mb={1}
        {...rest}
    >
        {children}
        {quote && <Quote data-testid={`quote-${quote}`}>{quote}</Quote>}
    </FormLabel>
);

_FormLabel.propTypes = {
    quote: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element,
        PropTypes.string,
        PropTypes.number
    ]),
    isInvalid: PropTypes.bool
};

_FormLabel.defaultProps = {
    quote: undefined,
    children: undefined,
    isInvalid: false
};

export default _FormLabel;
