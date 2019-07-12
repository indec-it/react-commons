import React from 'react';
import {shallow} from 'enzyme';

import PasswordField from '../src/components/PasswordField';

const onChange = jest.fn();

const renderComponent = (props = {}) => shallow(<PasswordField onChange={onChange} value="Test1234" {...props}/>);

describe('<PasswordField/>', () => {
    describe('validateInput', () => {
        it('should return true if password is valid', () => {
            const wrapper = renderComponent();
            wrapper.instance().validateInput(wrapper.props().value);
            const isValid = wrapper.state().valid;
            expect(isValid).toBe(true);
        });
        it('should return false if password is invalid', () => {
            const wrapper = renderComponent();
            wrapper.instance().validateInput('123456');
            const isValid = wrapper.state().valid;
            expect(isValid).toBe(false);
        });
    });
});
