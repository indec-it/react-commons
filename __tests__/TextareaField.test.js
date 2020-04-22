import React from 'react';
import {shallow} from 'enzyme';

import TextareaField from '../src/components/TextareaField';

const onChange = jest.fn();

describe('<TextareaField/>', () => {
    it('should renders correctly', () => {
        const wrapper = shallow(<TextareaField control="textArea" onChange={onChange} value="text"/>);
        expect(wrapper).toMatchSnapshot();
    });
});
