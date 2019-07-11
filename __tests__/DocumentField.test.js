import React from 'react';
import {shallow} from 'enzyme';

import DocumentField from '../src/components/DocumentField';

const onChange = jest.fn();

const renderComponent = (props = {}) => {
    const wrapper = shallow(
        <DocumentField control="documentField" label="document" value="14222113" onChange={onChange} {...props}/>
    );
    wrapper.validateInput = () => wrapper.props().validateInput;
    return wrapper;
};

describe('<DocumentField/>', () => {
    it('should validateInput be true if value is valid', () => {
        const wrapper = renderComponent();
        expect(wrapper.validateInput()).toBeTruthy();
    });
    it('should validateInput be false if value is invalid', () => {
        const wrapper = renderComponent({value: '11212121212121212'});
        expect(wrapper.validateInput()).toBeFalsy();
    });
    it('should return undefined if props value is equal to new value', () => {
        const wrapper = renderComponent();
        wrapper.simulate('change', {target: {value: '14222113'}});
    });
});
