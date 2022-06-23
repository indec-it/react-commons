import React from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    Modal as ChakraModal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter
} from '@chakra-ui/react';

import {childrenPropTypes} from '@/utils/propTypes';

const Modal = ({
    isOpen,
    onCancel,
    onAccept,
    hiddenAccept,
    hiddenCancel,
    title,
    acceptText,
    cancelText,
    typeAccept,
    children
}) => (
    <ChakraModal
        blockScrollOnMount={false}
        motionPreset="slideInBottom"
        onClose={onCancel}
        isOpen={isOpen}
    >
        <ModalOverlay/>
        <ModalContent pb={5} data-testid="test-modal">
            {title && <ModalHeader>{title}</ModalHeader>}
            <ModalCloseButton/>
            <ModalBody>
                {children}
            </ModalBody>
            {(!hiddenAccept || !hiddenCancel) && (
                <ModalFooter>
                    {!hiddenCancel && onCancel && (
                        <Button onClick={onCancel} bg="brand.neutral200" color="white" mr={3}>
                            {cancelText}
                        </Button>
                    )}
                    {!hiddenAccept && (
                        <Button type={typeAccept} bg="brand.primary" onClick={onAccept} color="white">
                            {acceptText}
                        </Button>
                    )}
                </ModalFooter>
            )}
        </ModalContent>
    </ChakraModal>
);

Modal.propTypes = {
    onAccept: PropTypes.func,
    onCancel: PropTypes.func,
    isOpen: PropTypes.bool,
    hiddenAccept: PropTypes.bool,
    hiddenCancel: PropTypes.bool,
    title: PropTypes.string,
    children: childrenPropTypes.isRequired,
    acceptText: PropTypes.string,
    cancelText: PropTypes.string,
    typeAccept: PropTypes.oneOf(['button', 'submit'])
};

Modal.defaultProps = {
    onAccept: undefined,
    onCancel: undefined,
    isOpen: false,
    hiddenAccept: false,
    hiddenCancel: false,
    title: undefined,
    acceptText: 'Aceptar',
    cancelText: 'Cancelar',
    typeAccept: 'button'
};

export default Modal;
