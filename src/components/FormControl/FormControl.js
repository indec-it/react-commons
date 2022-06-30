import React from 'react';
import PropTypes from 'prop-types';
import {
    FormControl as ChakraFormControl,
    InputLeftElement,
    InputRightElement,
    InputGroup
} from '@chakra-ui/react';

import {FormLabel, FormMessage} from '@/components';

const FormControl = ({
    name,
    error,
    isRequired,
    isDisabled,
    style,
    label,
    iconLeft,
    iconRight,
    iconStyles,
    quote,
    children,
    message,
    messageColor
}) => (
    <ChakraFormControl
        data-testid={`form-control-${name}`}
        isInvalid={!!error}
        isRequired={isRequired}
        isReadOnly={isDisabled}
        mb={5}
        pb={1}
        {...style}
    >
        {label && (
            <FormLabel
                quote={quote}
                htmlFor={name}
                data-testid={`label-${name}`}
                isInvalid={!!error}
                m={0}
            >
                {label}
            </FormLabel>
        )}
        <InputGroup>
            {iconLeft && <InputLeftElement {...iconStyles} h="100%" children={iconLeft}/>}
            {children}
            {iconRight && <InputRightElement {...iconStyles} h="100%" children={iconRight}/>}
        </InputGroup>
        <FormMessage data-testid="form-error" messageError={error} message={message} color={messageColor}/>
    </ChakraFormControl>
);

FormControl.propTypes = {
    name: PropTypes.string,
    children: PropTypes.element.isRequired,
    error: PropTypes.string,
    message: PropTypes.string,
    messageColor: PropTypes.string,
    isDisabled: PropTypes.bool,
    isRequired: PropTypes.bool,
    isInvalid: PropTypes.bool,
    style: PropTypes.shape({}),
    label: PropTypes.string,
    iconRight: PropTypes.shape({}),
    iconLeft: PropTypes.shape({}),
    iconStyles: PropTypes.shape({}),
    quote: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FormControl.defaultProps = {
    name: undefined,
    message: undefined,
    messageColor: undefined,
    style: {},
    iconStyles: {},
    error: undefined,
    label: undefined,
    isInvalid: false,
    isDisabled: false,
    isRequired: false,
    iconRight: undefined,
    iconLeft: undefined,
    quote: undefined
};

export default FormControl;
