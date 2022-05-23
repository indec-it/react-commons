import {getByTestId} from '@testing-library/react';

import {SelectInput} from '@/components';

describe('<SelectInput>', () => {
    let props;
    const getComponent = () => render(SelectInput, props, {chakra: true});
    beforeEach(() => {
        props = {
            name: 'test',
            label: 'Test',
            onChange: jest.fn(),
            value: '',
            isDisabled: false,
            loadOptions: jest.fn(),
            variant: 'outline'
        };
    });
    afterEach(tearDown);

    it('should display a select', () => {
        const {container} = getComponent();
        const select = getByTestId(container, 'form-control-test');
        expect(select).toBeInTheDocument();
    });

    it('should display a select not disabled', () => {
        const {container} = getComponent();
        expect(getByTestId(container, 'form-control-test')).not.toHaveAttribute('disabled');
    });
});
