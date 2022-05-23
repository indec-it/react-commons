import React from 'react';
import PropTypes from 'prop-types';
import {Box as ChakraBox, useStyleConfig} from '@chakra-ui/react';

import {childrenPropTypes} from '@/utils/propTypes';

const Box = ({
    variant,
    children,
    hidden,
    ...rest
}) => {
    const styles = useStyleConfig('Box', {variant});

    return <ChakraBox data-testid="box" hidden={!!hidden} __css={styles} {...rest}>{children}</ChakraBox>;
};

Box.propTypes = {
    variant: PropTypes.string,
    children: childrenPropTypes,
    hidden: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number,
        PropTypes.string,
        PropTypes.func
    ])
};

Box.defaultProps = {
    variant: undefined,
    children: undefined,
    hidden: undefined
};

export default Box;
