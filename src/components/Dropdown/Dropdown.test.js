import {getByText} from '@testing-library/react';

import {Dropdown} from '@/components';

describe('<Dropdown>', () => {
    let props;
    const getComponent = () => render(Dropdown, props);
    beforeEach(() => {
        props = {
            id: 1,
            label: 'Test',
            onChange: jest.fn()
        };
    });
    afterEach(tearDown);

    it('should display `props.label`', () => {
        const {container} = getComponent();
        expect(getByText(container, props.label)).toBeInTheDocument();
    });
});
