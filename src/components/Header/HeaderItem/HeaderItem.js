import React from 'react';
import PropTypes from 'prop-types';
import {Button} from '@chakra-ui/react';

import {elementPropTypes} from '@/utils/propTypes';
import {Dropdown} from '@/components';

const HeaderItem = ({
    id,
    options,
    onChange,
    activePath,
    isSmallScreen,
    isOpen,
    isSubItem,
    isHidden,
    menuStyles
}) => options.map((option, index) => (option.options?.length > 0 ? (
    <Dropdown
        key={`select-${index}`}
        id={index}
        icon={option.icon}
        rightIcon={option.rightIcon}
        label={option.label}
        options={option.options}
        isDisabled={option.isDisabled}
        isHidden={option.isHidden || (isSmallScreen && !isOpen)}
        styles={menuStyles}
        {...{
            isSubItem, isSmallScreen, activePath, onChange
        }}
    />
) : (
    <Button
        key={id ? `option-${id}-${index}}` : `option-${index}`}
        id={id ? `option-${id}-${index}}` : `option-${index}`}
        value={option.path}
        onClick={onChange}
        data-testid={id ? `option-${id}-${index}}` : `option-${index}`}
        disabled={option.isDisabled}
        color={option.path === activePath ? 'brand.primary' : 'brand.white'}
        boxShadow="none !important"
        leftIcon={option.icon && <option.icon/>}
        rightIcon={option.rightIcon && <option.rightIcon/>}
        hidden={isHidden || option.isHidden || (isSmallScreen && !isOpen)}
        variant="unstyled"
        _hover={{filter: 'brightness(90%)'}}
        mt="0 !important"
        whiteSpace="break-spaces"
        height="auto"
        minHeight="40px"
        padding="0 5px"
        display="block"
        textAlign={isSmallScreen ? 'center' : 'left'}
        {...menuStyles}
    >
        {option.label}
    </Button>
)));

HeaderItem.propTypes = {
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    options: PropTypes.arrayOf(PropTypes.shape({
        rightIcon: elementPropTypes,
        icon: elementPropTypes,
        label: PropTypes.string,
        isDisabled: PropTypes.bool,
        isHidden: PropTypes.bool,
        options: PropTypes.arrayOf(PropTypes.shape({}))
    })),
    menuStyles: PropTypes.shape({}).isRequired,
    onChange: PropTypes.func.isRequired,
    activePath: PropTypes.string,
    isSmallScreen: PropTypes.bool,
    isOpen: PropTypes.bool,
    isSubItem: PropTypes.bool,
    isHidden: PropTypes.bool
};

HeaderItem.defaultProps = {
    id: undefined,
    activePath: undefined,
    options: [],
    isSmallScreen: false,
    isOpen: false,
    isSubItem: false,
    isHidden: false
};

export default HeaderItem;
