import React from 'react';
import PropTypes from 'prop-types';
import {FaRegUserCircle} from 'react-icons/fa';
import {GiHamburgerMenu} from 'react-icons/gi';
import {
    Stack,
    useDisclosure,
    HStack,
    VStack,
    Menu,
    MenuButton,
    IconButton,
    useMediaQuery
} from '@chakra-ui/react';

import UserMenu from '@/components/Header/UserMenu';
import HeaderInfo from '@/components/Header/HeaderInfo';
import HeaderItem from '@/components/Header/HeaderItem';

const Header = ({
    redirectTo,
    onLogout,
    user,
    attributes,
    options,
    hiddenTop,
    activePath,
    hiddenUserMenu,
    hiddenOptions,
    logos,
    smallScale,
    headerStyles,
    containerStyles,
    userStyles,
    menuStyles,
    hamburgerStyles
}) => {
    const {isOpen, onClose, onToggle} = useDisclosure();
    const {isOpen: isOpenUser, onToggle: onToggleUser, onClose: onCloseUser} = useDisclosure();
    const [isSmallScreen] = useMediaQuery(`(max-width: ${smallScale}px)`);

    const handleLogout = () => {
        onCloseUser();
        onLogout();
    };

    const handleRedirect = e => {
        onClose();
        onCloseUser();
        redirectTo(e);
    };

    return (
        <VStack w="100%" mt="0 !important">
            <Stack
                as="nav"
                align="center"
                justify="space-between"
                mt="0 !important"
                p={0}
                color="white"
                data-testid="container-header"
                width="100%"
                bg="brand.neutral200"
                {...containerStyles}
            >
                {!hiddenTop && <HeaderInfo logos={logos} containerStyles={headerStyles}/>}
                <HStack
                    w="100%"
                    alignItems="flex-start"
                    p={1}
                    justifyContent="flex-end"
                    mt="0 !important"
                    hidden={hiddenOptions && hiddenUserMenu}
                >
                    {!hiddenOptions && (
                        <Stack alignItems="center" flexDirection={isOpen ? 'column' : 'row'} w="100%">
                            <HeaderItem
                                onChange={handleRedirect}
                                menuStyles={menuStyles}
                                {...{
                                    options, isSmallScreen, activePath, isOpen
                                }}
                            />
                        </Stack>
                    )}
                    {isSmallScreen && (
                        <Menu direction="rtl">
                            <MenuButton
                                data-testid="hamburger-icon"
                                as={IconButton}
                                m="0 !important"
                                aria-label="hamburger-user"
                                onClick={onToggle}
                                icon={<GiHamburgerMenu/>}
                                color="white"
                                fontSize={20}
                                boxShadow="none"
                                _focus={{boxShadow: 'none'}}
                                variant="unstyled"
                                {...hamburgerStyles}
                            />
                        </Menu>
                    )}
                    {!hiddenUserMenu && (
                        <Menu isActive={isOpenUser} direction="rtl">
                            <MenuButton
                                data-testid="user-icon"
                                as={IconButton}
                                m="0 !important"
                                aria-label="icon-user"
                                onClick={onToggleUser}
                                icon={<FaRegUserCircle/>}
                                color="white"
                                fontSize={20}
                                boxShadow="none"
                                _focus={{boxShadow: 'none'}}
                                variant="unstyled"
                                {...userStyles}
                            />
                            <UserMenu user={user} attributes={attributes} onLogout={handleLogout}/>
                        </Menu>
                    )}
                </HStack>
            </Stack>
        </VStack>
    );
};

Header.propTypes = {
    redirectTo: PropTypes.func.isRequired,
    onLogout: PropTypes.func.isRequired,
    user: PropTypes.shape({}),
    attributes: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        label: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })),
    options: PropTypes.arrayOf(PropTypes.shape({})),
    activePath: PropTypes.string,
    hiddenUserMenu: PropTypes.bool,
    hiddenTop: PropTypes.bool,
    hiddenOptions: PropTypes.bool,
    logos: PropTypes.arrayOf(PropTypes.shape({})),
    smallScale: PropTypes.number,
    headerStyles: PropTypes.shape({}),
    containerStyles: PropTypes.shape({}),
    menuStyles: PropTypes.shape({}),
    userStyles: PropTypes.shape({}),
    hamburgerStyles: PropTypes.shape({})
};

Header.defaultProps = {
    user: {},
    options: [],
    attributes: [],
    logos: [],
    activePath: undefined,
    hiddenUserMenu: false,
    hiddenTop: false,
    hiddenOptions: false,
    smallScale: 768,
    headerStyles: {},
    containerStyles: {},
    menuStyles: {},
    userStyles: {},
    hamburgerStyles: {}
};

export default Header;
