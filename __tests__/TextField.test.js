import React from 'react';
import {shallow} from 'enzyme';

import TextField from '../src/components/TextField';

const onChange = jest.fn();

const renderComponent = (props = {}) => {
    const wrapper = shallow(<TextField onChange={onChange} control="inputField" value="text" {...props}/>);
    wrapper.input = () => wrapper.children();
    wrapper.label = () => wrapper.find('FormGroup Label');
    wrapper.feedBackLabel = () => wrapper.find('FormGroup FormFeedback');
    return wrapper;
};

describe('<TextField/>', () => {
    it('should render Label component if exists label prop', () => {
        const wrapper = renderComponent({label: 'TextField'});
        expect(wrapper.label().exists()).toBe(true);
    });
    it('should render FormFeedback component if exists feedBackLabel prop', () => {
        const wrapper = renderComponent({feedBackLabel: 'You have an error'});
        expect(wrapper.feedBackLabel().exists()).toBe(true);
    });
    describe('handleChange', () => {
        it('should doesnt validate input if props value is equal to new value', () => {
            const wrapper = renderComponent();
            const handleChange = wrapper.instance().handleChange('text');
            expect(handleChange).toBeUndefined();
        });
        it('should return true if props value is different to new value and input is valid', () => {
            const wrapper = renderComponent();
            wrapper.instance().handleChange('new text');
            const isValid = wrapper.state().valid;
            expect(isValid).toBe(true);
        });
        it('should return false if props value is different to new value and input is invalid', () => {
            const wrapper = renderComponent();
            wrapper.instance().handleChange('a');
            const isValid = wrapper.state().valid;
            expect(isValid).toBe(false);
        });
    });
});
