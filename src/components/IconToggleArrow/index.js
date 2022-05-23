import React from 'react';
import PropTypes from 'prop-types';
import {Icon} from '@chakra-ui/react';
import {FaChevronDown} from 'react-icons/fa';

const IconArrow = ({isOpen, ...props}) => (
    <Icon
        as={FaChevronDown}
        transition="all .25s ease-in-out"
        transform={isOpen ? 'rotate(180deg)' : ''}
        color="brand.neutral300"
        w={4}
        h={4}
        {...props}
    />
);

IconArrow.propTypes = {
    isOpen: PropTypes.bool
};

IconArrow.defaultProps = {
    isOpen: false
};

export default IconArrow;
