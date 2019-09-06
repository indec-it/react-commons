import React from 'react';
import {shallow} from 'enzyme';

import ActionIndicator from '../src/components/ActionIndicator';

const renderComponent = (props = {}) => {
    const wrapper = shallow(<ActionIndicator {...props}/>);
    wrapper.indicator = () => wrapper.find('Modal').children();
    return wrapper;
};

describe('<ActionIndicator/>', () => {
    it('should match snapshot', () => {
        const wrapper = renderComponent();
        expect(wrapper).toMatchSnapshot();
    });
});
