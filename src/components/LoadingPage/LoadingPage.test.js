import {getByTestId} from '@testing-library/react';

import {LoadingPage} from '@/components';

describe('<LoadingPage>', () => {
    const getComponent = () => render(LoadingPage);
    afterEach(tearDown);

    it('should show a spinner', () => {
        const {container} = getComponent();
        expect(getByTestId(container, 'spinner-loading')).toBeInTheDocument();
    });
});
