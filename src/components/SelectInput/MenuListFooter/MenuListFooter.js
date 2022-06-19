import React from 'react';
import PropTypes from 'prop-types';
import {Button, Stack} from '@chakra-ui/react';

const MenuListFooter = ({onClick, isLoading}) => (
    <Stack alignItems="center" data-testid="menu-list-footer">
        <Button
            type="button"
            data-testid="load-more-button"
            size="sm"
            bg="brand.primary"
            onClick={onClick}
            w="fit-content"
            isLoading={isLoading}
        >
            Cargar mas...
        </Button>
    </Stack>
);

MenuListFooter.propTypes = {
    onClick: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired
};

export default MenuListFooter;
