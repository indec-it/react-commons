import {getByTestId} from '@testing-library/react';

import {LoadingPage} from '@/components';

describe('<LoadingPage>', () => {
    const getComponent = () => render(LoadingPage);
    afterEach(tearDown);

    it('should render a spinner', () => {
        const {container} = getComponent();
        expect(getByTestId(container, 'spinner-loading')).toBeInTheDocument();
    });
});
