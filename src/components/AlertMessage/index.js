import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
    CloseButton,
    Alert,
    Icon,
    AlertIcon,
    Box
} from '@chakra-ui/react';

const AlertMessage = ({
    status,
    message,
    icon,
    hiddenClose,
    showDefaultIcon,
    ...props
}) => {
    const [showAlert, setShowAlert] = useState(true);

    return (
        <Alert status={status} mt={2} mb={2} hidden={!showAlert} data-testid="alert" {...props}>
            {icon && <Icon as={icon} aria-label={status} mr={2}/>}
            {showDefaultIcon && <AlertIcon/>}
            <Box mr={4}>
                {message}
            </Box>
            {!hiddenClose && (
                <CloseButton
                    data-testid="close-button"
                    position="absolute"
                    right="8px"
                    top="8px"
                    onClick={() => setShowAlert(false)}
                />
            )}
        </Alert>
    );
};

AlertMessage.propTypes = {
    status: PropTypes.oneOf(['info', 'warning', 'success', 'error']),
    message: PropTypes.string.isRequired,
    icon: PropTypes.elementType,
    hiddenClose: PropTypes.bool,
    showDefaultIcon: PropTypes.bool
};

AlertMessage.defaultProps = {
    icon: undefined,
    status: 'info',
    hiddenClose: false,
    showDefaultIcon: false
};

export default AlertMessage;
