import React from 'react';
import {shallow} from 'enzyme';

import LoadingButton from '../src/components/LoadingButton';

describe('<LoadingButton/>', () => {
    it('should renders correctly', () => {
        const wrapper = shallow(<LoadingButton/>);
        expect(wrapper).toMatchSnapshot();
    });

    it('should receive label Cargando instead of Loading', () => {
        const wrapper = shallow(<LoadingButton label="Cargando"/>);
        expect(wrapper.children().text()).toBe('Cargando');
    });
});
