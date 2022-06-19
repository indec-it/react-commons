import {getByTestId} from '@testing-library/react';

import {Box} from '@/components';

describe('<Box>', () => {
    let props;
    const getComponent = () => render(Box, props);
    afterEach(tearDown);

    it('should render Box component', () => {
        const {container} = getComponent();
        expect(getByTestId(container, 'box')).toBeInTheDocument();
    });
});
