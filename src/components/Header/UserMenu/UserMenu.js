import React from 'react';
import PropTypes from 'prop-types';
import {FaPowerOff} from 'react-icons/fa';
import {
    MenuDivider, MenuItem, MenuList, Text
} from '@chakra-ui/react';

const UserMenu = ({user, attributes, onLogout}) => (
    <MenuList alignItems="center" mr={1} data-testid="user-menu" isOpen>
        {(user.name && user.surname) && (
            <MenuItem data-testid="attribute-name">
                <Text
                    id="logout"
                    display="flex"
                    alignItems="center"
                    color="brand.neutral300"
                    fontSize="14px"
                    boxShadow="none !important"
                    padding="0 !important"
                >
                    <span>Nombre:</span>
                    <span data-testid="surname">{user.surname}</span>
                    , &nbsp;
                    <span data-testid="name">{user.name}</span>
                </Text>
            </MenuItem>
        )}
        {attributes.map(attribute => (
            <MenuItem key={attribute.key} data-testid={`attribute-${attribute.key}`}>
                <Text fontSize="14px" color="brand.neutral300">
                    <span>{`${attribute.label}:`}</span>
                    {user[attribute.key]}
                </Text>
            </MenuItem>
        ))}
        <MenuDivider/>
        {onLogout && (
            <MenuItem onClick={onLogout} data-testid="sign-out">
                <Text
                    id="logout"
                    display="flex"
                    alignItems="center"
                    color="brand.neutral300"
                    fontSize="14px"
                    boxShadow="none !important"
                    padding="0 !important"
                >
                    <FaPowerOff/>
                    &nbsp;
                    Cerrar sesión
                </Text>
            </MenuItem>
        )}
    </MenuList>
);

UserMenu.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string,
        surname: PropTypes.string
    }),
    attributes: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        label: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })),
    onLogout: PropTypes.func
};

UserMenu.defaultProps = {
    attributes: [],
    user: {},
    onLogout: undefined
};

export default UserMenu;
