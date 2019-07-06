import React from 'react';
import {shallow} from 'enzyme';

import LoadingIndicator from '../src/components/LoadingIndicator';
import SaveIndicator from '../src/components/SaveIndicator';

describe('<SaveIndicator/>', () => {
    it('should contain the LoadingIndicator component with label Guardando', () => {
        const wrapper = shallow(<SaveIndicator/>);
        expect(wrapper.contains(<LoadingIndicator label="Guardando..."/>)).toBe(true);
    });
});
