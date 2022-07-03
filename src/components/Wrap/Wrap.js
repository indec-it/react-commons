import React from 'react';
import PropTypes from 'prop-types';
import {Wrap as ChakraWrap, useStyleConfig} from '@chakra-ui/react';

import {childrenPropTypes} from '@/utils/propTypes';

const Wrap = ({variant, children, ...rest}) => {
    const styles = useStyleConfig('Wrap', {variant});
    return <ChakraWrap data-testid="wrap" {...styles} {...rest}>{children}</ChakraWrap>;
};

Wrap.propTypes = {
    variant: PropTypes.string,
    children: childrenPropTypes
};

Wrap.defaultProps = {
    variant: undefined,
    children: undefined
};

export default Wrap;
