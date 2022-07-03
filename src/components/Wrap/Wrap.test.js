import {getByTestId} from '@testing-library/react';

import {Wrap} from '@/components';

describe('<Wrap>', () => {
    let props;
    const getComponent = () => render(Wrap, props);
    afterEach(tearDown);

    it('should render Wrap component', () => {
        const {container} = getComponent();
        expect(getByTestId(container, 'wrap')).toBeInTheDocument();
    });
});
