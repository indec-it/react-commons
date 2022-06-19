import React from 'react';
import PropTypes from 'prop-types';
import {Flex as ChakraFlex, useStyleConfig} from '@chakra-ui/react';

import {childrenPropTypes} from '@/utils/propTypes';

const Flex = ({variant, children, ...rest}) => {
    const styles = useStyleConfig('Flex', {variant});

    return <ChakraFlex data-testid="flex" __css={styles} {...rest}>{children}</ChakraFlex>;
};

Flex.propTypes = {
    variant: PropTypes.string,
    children: childrenPropTypes
};

Flex.defaultProps = {
    variant: undefined,
    children: undefined
};

export default Flex;
