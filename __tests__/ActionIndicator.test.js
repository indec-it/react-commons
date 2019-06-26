import React from 'react';
import {shallow} from 'enzyme';

import ActionIndicator from '../src/components/ActionIndicator';

const renderComponent = (props = {}) => {
    const wrapper = shallow(<ActionIndicator {...props}/>);
    wrapper.indicator = () => wrapper.find('Fragment div div').children();
    return wrapper;
};

describe('<ActionIndicator/>', () => {
    it('should render the component if has prop saving', () => {
        const wrapper = renderComponent({saving: true});
        expect(wrapper.isEmptyRender()).toBe(false);
    });
    it('should render the component if has prop loading', () => {
        const wrapper = renderComponent({loading: true});
        expect(wrapper.isEmptyRender()).toBe(false);
    });
    it('should be empty component if doesnt exist prop loading or saving', () => {
        const wrapper = renderComponent();
        expect(wrapper.isEmptyRender()).toBe(true);
    });
    it('should render LoadingIndicator component if loading flag exists', () => {
        const wrapper = renderComponent({loading: true});
        expect(wrapper.indicator()).toMatchSnapshot();
    });
    it('should render SaveIndicator component if saving flag exists', () => {
        const wrapper = renderComponent({saving: true});
        expect(wrapper.indicator()).toMatchSnapshot();
    });
});
