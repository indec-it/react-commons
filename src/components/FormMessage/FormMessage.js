import React from 'react';
import PropTypes from 'prop-types';
import {FormErrorMessage, FormHelperText} from '@chakra-ui/react';

const FormMessage = ({
    message,
    messageError,
    hiddenText,
    messageColor,
    ...props
}) => (
    !messageError ? (
        <FormHelperText
            fontWeight="bold"
            data-testid="message"
            color={messageColor || 'brand.neutral200'}
            position="absolute"
            fontSize={13}
            hidden={hiddenText}
            mt={1}
            {...props}
        >
            {message}
        </FormHelperText>
    ) : (
        <FormErrorMessage
            fontWeight="bold"
            data-testid="message-error"
            color={messageColor || 'brand.danger'}
            position="absolute"
            fontSize={13}
            hidden={hiddenText}
            mt={1}
            {...props}
        >
            {messageError}
        </FormErrorMessage>
    )
);

FormMessage.propTypes = {
    message: PropTypes.string,
    messageError: PropTypes.string,
    messageColor: PropTypes.string,
    hiddenText: PropTypes.bool
};

FormMessage.defaultProps = {
    hiddenText: false,
    message: undefined,
    messageColor: undefined,
    messageError: undefined
};

export default FormMessage;
