import React from 'react';
import {shallow} from 'enzyme';

import EmailField from '../src/components/EmailField';

const onChange = jest.fn();

const renderComponent = (props = {}) => {
    const wrapper = shallow(
        <EmailField label="emailField" value="test@test.com" control="email" onChange={onChange} {...props}/>
    );
    wrapper.input = () => wrapper.find('FormGroup Input');
    return wrapper;
};

describe('<EmailField/>', () => {
    it('should return undefined if props value is equal to new value', () => {
        const wrapper = renderComponent();
        wrapper.input().simulate('change', {target: {value: 'test@test.com'}});
        const handleChange = wrapper.instance().handleChange;
    });
});
