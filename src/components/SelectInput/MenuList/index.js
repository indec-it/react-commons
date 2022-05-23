import React from 'react';
import PropTypes from 'prop-types';
import {components} from 'react-select';

import {Box} from '@/components';

const MenuList = ({
    hasMore,
    children,
    selectProps,
    ...props
}) => {
    const {MenuListFooter} = selectProps.components;

    return (
        <Box __css={{background: 'white', border: '1px #e2e8f0 solid', borderRadius: '5px'}}>
            <components.MenuList {...props}>
                {children}
                {hasMore ? MenuListFooter : null}
            </components.MenuList>
        </Box>
    );
};

MenuList.propTypes = {
    hasMore: PropTypes.bool,
    selectProps: PropTypes.shape({
        components: PropTypes.shape({
            MenuListFooter: PropTypes.element
        })
    }).isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element,
        PropTypes.string,
        PropTypes.number
    ]).isRequired
};

MenuList.defaultProps = {
    hasMore: false
};

export default MenuList;
