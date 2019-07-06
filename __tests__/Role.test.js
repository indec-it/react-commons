import React from 'react';
import {shallow} from 'enzyme';

import Role from '../src/components/Role';

const renderComponent = (props = {}) => shallow(
    <Role {...props}>
        <div>Test role component</div>
    </Role>
);

describe('<Role/>', () => {
    it('should return zero children if doesnt match roles and sessionRoles props', () => {
        const wrapper = renderComponent({roles: ['admin'], sessionRoles: ['cn']});
        expect(wrapper.children().length).toBe(0);
    });
    it('should return a children if doesnt match rolesReadOnly and sessionRoles props', () => {
        const wrapper = renderComponent({sessionRoles: ['admin'], rolesReadOnly: ['cn'], roles: ['admin']});
        expect(wrapper.children().length).toBe(1);
    });
    it('should return a children with attribute disabled if match some props', () => {
        const wrapper = renderComponent({roles: ['admin'], sessionRoles: ['admin'], rolesReadOnly: ['admin']});
        const children = wrapper.find('div');
        expect(children.props().disabled).toBe(true);
    });
});
