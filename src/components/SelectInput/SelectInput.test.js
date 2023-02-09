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
            variant: 'outline',
            options: [{label: 'test', value: 'test'}],
            menuIsOpen: true
        };
    });
    afterEach(tearDown);

    it('should render a select', () => {
        const {container} = getComponent();
        const select = getByTestId(container, 'form-control-test');
        expect(select).toBeInTheDocument();
    });

    it('should render a select not disabled', () => {
        const {container} = getComponent();
        expect(getByTestId(container, 'form-control-test')).not.toHaveAttribute('disabled');
    });

    describe('and `props.hasMore` is defined and `props.total` is more is greater than options', () => {
        beforeEach(() => {
            props.hasMore = true;
            props.total = 10;
        });

        it('should display a menu list footer', () => {
            const {container} = getComponent();
            expect(getByTestId(container, 'menu-list-footer')).toBeInTheDocument();
        });
    });
});
