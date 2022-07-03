import React from 'react';
import {Menu} from '@chakra-ui/react';
import {
    fireEvent, getByTestId, getByText, queryByTestId
} from '@testing-library/react';

import UserMenu from './UserMenu';

const Component = props => (
    <Menu><UserMenu {...props}/></Menu>
);

describe('UserMenu', () => {
    let props;
    const getComponent = newProps => render(Component, newProps);
    beforeEach(() => {
        props = {};
    });
    afterEach(tearDown);

    it('should not render name and surname if not defined', () => {
        const {container} = getComponent(props);
        expect(queryByTestId(container, 'attribute-name')).toBeNull();
    });

    describe('when `user.name` and `user.surname` is defined', () => {
        beforeEach(() => {
            props.user = {name: 'John', surname: 'Doe'};
        });

        it('should display `Nombre:`', () => {
            const {container} = getComponent(props);
            expect(getByText(container, 'Nombre:')).toBeInTheDocument();
        });

        it('should display `user.name`', () => {
            const {container} = getComponent(props);
            expect(getByText(container, 'John')).toBeInTheDocument();
        });

        it('should display `user.surname`', () => {
            const {container} = getComponent(props);
            expect(getByText(container, 'Doe')).toBeInTheDocument();
        });
    });

    describe('when `props.onLogout` is defined', () => {
        beforeEach(() => {
            props.onLogout = jest.fn();
        });

        it('should display `Cerrar sesion`', () => {
            const {container} = getComponent(props);
            expect(getByText(container, 'Cerrar sesión')).toBeInTheDocument();
        });

        describe('when the button to sign out is clicked', () => {
            beforeEach(() => {
                const {container} = getComponent(props);
                const button = getByTestId(container, 'sign-out');
                fireEvent.click(button);
            });

            it('should fire `props.onLogout`', () => {
                expect(props.onLogout).toHaveBeenCalled();
            });
        });
    });

    describe('when `props.onLogout` is not defined', () => {
        beforeEach(() => {
            props.onLogout = undefined;
        });

        it('should not render a button to sign out', () => {
            const {container} = getComponent(props);
            expect(queryByTestId(container, 'sign-out')).toBeNull();
        });
    });

    describe('when `props.attributes` is defined', () => {
        beforeEach(() => {
            props.attributes = [
                {key: 'username', label: 'Username'},
                {key: 'documentId', label: 'DocumentId'},
                {key: 'state', label: 'State'}
            ];
            props.user = {username: 'test', documentId: '12345678', state: 'Buenos Aires'};
        });

        it('should render the attributes list', () => {
            const {container} = getComponent(props);
            props.attributes.forEach(attribute => {
                expect(getByText(container, `${attribute.label}:`)).toBeInTheDocument();
                expect(getByText(container, props.user[attribute.key])).toBeInTheDocument();
            });
        });
    });
});
