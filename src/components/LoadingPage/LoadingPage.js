import React from 'react';
import PropTypes from 'prop-types';
import {Flex, Spinner} from '@chakra-ui/react';

const LoadingPage = ({noStatic, ...props}) => (
    <Flex
        flex={1}
        justify="center"
        alignItems="center"
        position={noStatic ? 'initial' : 'fixed'}
        top={0}
        bottom={0}
        left={0}
        right={0}
        p={10}
    >
        <Spinner
            data-testid="spinner-loading"
            color="brand.primary"
            size="lg"
            speed="0.65s"
            {...props}
        />
    </Flex>
);

LoadingPage.propTypes = {
    noStatic: PropTypes.bool
};

LoadingPage.defaultProps = {
    noStatic: false
};

export default LoadingPage;
