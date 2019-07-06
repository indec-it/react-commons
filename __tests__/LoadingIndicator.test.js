import React from 'react';
import {shallow} from 'enzyme';

import LoadingIndicator from '../src/components/LoadingIndicator';

describe('<LoadingIndicator/>', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<LoadingIndicator/>);
        expect(wrapper).toMatchSnapshot();
    });
});
