import React from 'react';
import PropTypes from 'prop-types';
import {FormErrorMessage} from '@chakra-ui/react';

const MessageError = ({messageError, hiddenText, ...props}) => (
    <FormErrorMessage
        fontWeight="bold"
        data-testid="message-error"
        color="brand.danger"
        position="absolute"
        fontSize={13}
        hidden={hiddenText}
        mt={1}
        {...props}
    >
        {messageError}
    </FormErrorMessage>
);

MessageError.propTypes = {
    messageError: PropTypes.string,
    hiddenText: PropTypes.bool
};

MessageError.defaultProps = {
    hiddenText: false,
    messageError: undefined
};

export default MessageError;
