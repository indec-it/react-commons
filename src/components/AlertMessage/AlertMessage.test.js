import {getByTestId, getByText} from '@testing-library/react';

import {AlertMessage} from '@/components';

describe('<AlertMessage>', () => {
    let props;
    const getComponent = () => render(AlertMessage, props);
    beforeEach(() => {
        props = {
            message: 'test message'
        };
    });
    afterEach(tearDown);

    it('should display an message', () => {
        const {container} = getComponent();
        expect(getByText(container, props.message)).toBeInTheDocument();
    });

    it('should have a button to close', () => {
        const {container} = getComponent();
        expect(getByTestId(container, 'close-button')).toBeInTheDocument();
    });
});
