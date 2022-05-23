import {getByTestId} from '@testing-library/react';

import {FormLabel} from '@/components';

describe('<FormLabel>', () => {
    let props;
    const getComponent = () => render(FormLabel, props);
    beforeEach(() => {
        props = {
            quote: undefined
        };
    });
    afterEach(tearDown);

    it('should display a form label component', () => {
        const {container} = getComponent();
        expect(getByTestId(container, 'form-label')).toBeInTheDocument();
    });

    describe('when `props.quote` is defined', () => {
        beforeEach(() => {
            props.quote = 8;
        });

        it('should display a quote', () => {
            const {container} = getComponent();
            expect(getByTestId(container, 'quote-8')).toBeInTheDocument();
        });
    });
});
