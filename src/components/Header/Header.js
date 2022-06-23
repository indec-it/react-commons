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
    options,
    hiddenTop,
    activePath,
    hiddenUserMenu,
    hiddenOptions,
    logos,
    smallScale
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
            >
                {!hiddenTop && <HeaderInfo logos={logos}/>}
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
                            />
                            <UserMenu user={user} onLogout={handleLogout}/>
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
    options: PropTypes.arrayOf(PropTypes.shape({})),
    activePath: PropTypes.string,
    hiddenUserMenu: PropTypes.bool,
    hiddenTop: PropTypes.bool,
    hiddenOptions: PropTypes.bool,
    logos: PropTypes.arrayOf(PropTypes.shape({})),
    smallScale: PropTypes.number
};

Header.defaultProps = {
    user: {},
    options: [],
    logos: [],
    activePath: undefined,
    hiddenUserMenu: false,
    hiddenTop: true,
    hiddenOptions: false,
    smallScale: 768
};

export default Header;
