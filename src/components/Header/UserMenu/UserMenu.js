import React from 'react';
import PropTypes from 'prop-types';
import {FaPowerOff} from 'react-icons/fa';
import {
    MenuDivider,
    MenuItem,
    MenuList,
    Text
} from '@chakra-ui/react';

const UserMenu = ({user, onLogout}) => (
    <MenuList alignItems="center" mr={1}>
        {(user.name && user.surname) && (
            <MenuItem>
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
        {user.roleName && (
            <MenuItem>
                <Text fontSize="14px" color="brand.neutral300">
                    <span>Role:</span>
                    {user.roleName}
                </Text>
            </MenuItem>
        )}
        {user.stateName && (
            <MenuItem>
                <Text fontSize="14px" color="brand.neutral300">
                    <span>Provincia:</span>
                    {user.stateName}
                </Text>
            </MenuItem>
        )}
        {user.documentId && (
            <MenuItem>
                <Text fontSize="14px" color="brand.neutral300">
                    <span>DNI:</span>
                    {user.documentId}
                </Text>
            </MenuItem>
        )}
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
        surname: PropTypes.string,
        roleName: PropTypes.string,
        stateName: PropTypes.string,
        documentId: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    }),
    onLogout: PropTypes.func
};

UserMenu.defaultProps = {
    user: {},
    onLogout: undefined
};

export default UserMenu;
