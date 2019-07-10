import React from 'react';
import {shallow} from 'enzyme';

import Pages from '../src/components/Pages';

const onChange = jest.fn();

const renderComponent = (props = {}) => shallow(
    <Pages selectedPage={0} pageSize={30} maxPage={50} resultsCount={300} onChange={onChange} {...props}/>
);

describe('<Pages/>', () => {
    it('should return 10 pages', () => {
        const wrapper = renderComponent();
        const pagination = wrapper.find('Row Col Pagination');
        expect(pagination.props().children.length).toBe(10);
    });
});
