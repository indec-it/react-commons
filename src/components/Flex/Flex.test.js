import {getByTestId} from '@testing-library/react';

import {Flex} from '@/components';

describe('<Flex>', () => {
    let props;
    const getComponent = () => render(Flex, props);
    afterEach(tearDown);

    it('should render Flex component', () => {
        const {container} = getComponent();
        expect(getByTestId(container, 'flex')).toBeInTheDocument();
    });
});
