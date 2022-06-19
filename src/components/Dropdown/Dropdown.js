import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import {
    Stack, Button, Collapse, useDisclosure
} from '@chakra-ui/react';

import {elementPropTypes} from '@/utils/propTypes';
import {IconToggleArrow} from '@/components';
import HeaderItem from '@/components/Header/HeaderItem';
import {useClickOutside} from '@/hooks';

const Dropdown = ({
    id,
    label,
    onChange,
    options,
    activePath,
    icon: Icon,
    isSubItem,
    isSmallScreen,
    isHidden,
    isDisabled
}) => {
    const {isOpen, onClose, onToggle} = useDisclosure();
    const containerRef = useRef(null);
    useClickOutside(containerRef, onClose);

    const handleChange = e => {
        onClose();
        onChange(e);
    };

    return (
        <Stack
            data-testid={`container-${id}${isSubItem ? '-subItem' : ''}`}
            ref={containerRef}
            position="relative"
            mt="0 !important"
            hidden={isHidden}
            maxWidth="300px"
        >
            <Button
                data-testid={`option-${id}`}
                onClick={onToggle}
                disabled={isDisabled}
                leftIcon={Icon && <Icon/>}
                rightIcon={<IconToggleArrow isOpen={isOpen}/>}
                hidden={isHidden}
                shadow="none !important"
                mt="0 !important"
                _hover={{filter: 'brightness(90%)'}}
                maxWidth="250px"
                justifyContent={(!isSmallScreen && !isSubItem) ? 'flex-start' : 'center'}
                overflowX="hidden"
                variant="unstyled"
                padding="0 5px"
                display="flex"
            >
                {label}
            </Button>
            <Stack
                position={(isSubItem || isSmallScreen) ? 'initial' : 'absolute'}
                bg="brand.neutral200"
                top="45px"
                left={0}
                right={0}
                borderRadius={5}
                mt="0 !important"
            >
                <Collapse
                    in={isOpen}
                    data-testid="display-mobile-"
                    direction="column"
                >
                    <Stack data-testid={`menu-${id}`} direction="column">
                        <HeaderItem
                            isSubItem
                            onChange={handleChange}
                            {...{
                                options, isSmallScreen, activePath, id, isHidden, isOpen
                            }}
                        />
                    </Stack>
                </Collapse>
            </Stack>
        </Stack>
    );
};

Dropdown.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    onChange: PropTypes.func.isRequired,
    icon: elementPropTypes,
    label: PropTypes.string.isRequired,
    activePath: PropTypes.string,
    isSubItem: PropTypes.bool,
    isSmallScreen: PropTypes.bool,
    isHidden: PropTypes.bool,
    isDisabled: PropTypes.bool,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.number,
            label: PropTypes.string
        })
    )
};

Dropdown.defaultProps = {
    activePath: null,
    icon: null,
    options: [],
    isDisabled: false,
    isSubItem: false,
    isSmallScreen: false,
    isHidden: false
};

export default Dropdown;
