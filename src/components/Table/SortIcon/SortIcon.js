import React from 'react';
import {sortDirections} from '@/constants';
import {Icon} from '@chakra-ui/react';
import {FaChevronDown, FaChevronUp} from 'react-icons/fa';
import PropTypes from 'prop-types';

const SortIcon = ({classified, columnKey, ...props}) => classified && classified?.sort === columnKey && (
    <Icon
        as={classified.sortBy === sortDirections.ASC ? FaChevronUp : FaChevronDown}
        color="brand.neutral300"
        w={4}
        h={4}
        {...props}
    />
);

SortIcon.propTypes = {
    classified: PropTypes.shape({
        sortBy: PropTypes.oneOf([sortDirections.ASC, sortDirections.DESC]),
        sort: PropTypes.string
    }),
    columnKey: PropTypes.string
};

SortIcon.defaultProps = {
    classified: undefined,
    columnKey: undefined
};

export default SortIcon;
