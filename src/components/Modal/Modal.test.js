import {
    fireEvent,
    getByTestId,
    getByText,
    queryByTestId,
    queryByText
} from '@testing-library/react';

import {Modal} from '@/components';

describe('<Modal>', () => {
    let props;
    const getComponent = () => render(Modal, props);
    beforeEach(() => {
        props = {
            onAccept: jest.fn(),
            onCancel: jest.fn(),
            children: 'This is a content test'
        };
    });
    afterEach(tearDown);

    describe('when `props.isOpen` is `true`', () => {
        beforeEach(() => {
            props.isOpen = true;
            props.title = 'This is a title test';
        });

        it('should render the modal', () => {
            const {baseElement} = getComponent();
            expect(getByTestId(baseElement, 'test-modal')).toBeInTheDocument();
        });

        it('should display `props-title`', () => {
            const {baseElement} = getComponent();
            expect(getByText(baseElement, props.title)).toBeInTheDocument();
        });

        it('should render a button with `Aceptar` as label', () => {
            const {baseElement} = getComponent();
            expect(getByText(baseElement, 'Aceptar')).toBeInTheDocument();
        });

        describe('when the accept button is clicked', () => {
            beforeEach(() => {
                const {baseElement} = getComponent();
                const acceptButton = getByText(baseElement, 'Aceptar');
                fireEvent.click(acceptButton);
            });

            it('should fire `props.onAccept`', () => {
                expect(props.onAccept).toHaveBeenCalledTimes(1);
            });
        });

        it('should render a button with `Cancelar` as label', () => {
            const {baseElement} = getComponent();
            expect(queryByText(baseElement, 'Cancelar')).toBeInTheDocument();
        });

        describe('when the cancel button is clicked', () => {
            beforeEach(() => {
                const {baseElement} = getComponent();
                const cancelButton = getByText(baseElement, 'Cancelar');
                fireEvent.click(cancelButton);
            });

            it('should fire `props.onCancel`', () => {
                expect(props.onCancel).toHaveBeenCalledTimes(1);
            });
        });

        describe('when `props.onCancel` is not defined', () => {
            beforeEach(() => {
                props.onCancel = undefined;
            });

            it('should not display a button with `Cancelar` as label', () => {
                const {baseElement} = getComponent();
                expect(queryByText(baseElement, 'Cancelar')).toBeNull();
            });
        });
    });

    describe('when `props.isOpen` is `false`', () => {
        beforeEach(() => {
            props.isOpen = false;
        });

        it('should not render the modal', () => {
            const {baseElement} = getComponent();
            expect(queryByTestId(baseElement, 'test-modal')).toBeNull();
        });
    });
});
