import React from 'react';
import {shallow} from 'enzyme';

import EmailField from '../src/components/EmailField';

const onChange = jest.fn();

const renderComponent = (props = {}) => shallow(
    <EmailField label="emailField" value="test@test.com" control="email" onChange={onChange} {...props}/>
);

describe('<EmailField/>', () => {
    describe('validateInput', () => {
        it('should return true if email is valid', () => {
            const wrapper = renderComponent();
            wrapper.instance().validateInput('test@test.com.ar');
            const isValid = wrapper.state().valid;
            expect(isValid).toBe(true);
        });
        it('should return false if email is invalid', () => {
            const wrapper = renderComponent();
            wrapper.instance().validateInput('test');
            const isValid = wrapper.state().valid;
            expect(isValid).toBe(false);
        });
    });
});
