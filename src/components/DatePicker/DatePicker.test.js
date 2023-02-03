import {fireEvent, getByPlaceholderText, getByTestId} from '@testing-library/react';

import {DatePicker} from '@/components';

describe('<DatePicker>', () => {
    let props;
    const getComponent = () => render(DatePicker, props, {formik: {}});
    beforeEach(() => {
        props = {
            name: 'test',
            onChangeRaw: jest.fn(),
            value: ''
        };
    });
    afterEach(tearDown);

    describe('when `props.placeholder` is defined', () => {
        beforeEach(() => {
            props.placeholder = 'Entry a date';
        });

        it('should display `props.placeholder` as placeholder', () => {
            const {container} = getComponent();
            expect(getByPlaceholderText(container, props.placeholder)).toBeInTheDocument();
        });
    });

    describe('when a date is selected', () => {
        beforeEach(() => {
            const {container} = getComponent();
            const input = getByPlaceholderText(container, '[Seleccione]');
            fireEvent.change(input, {target: {value: '2000-01-01'}});
        });

        it('should fire `props.onChangeRaw`', () => {
            expect(props.onChangeRaw).toHaveBeenCalledTimes(1);
        });
    });

    describe('when `props.isCustomHeader` is defined', () => {
        beforeEach(() => {
            props.isCustomHeader = true;
        });

        describe('and the calendar menu is open', () => {
            beforeEach(() => {
                const {container} = getComponent();
                const input = getByTestId(container, 'input-test');
                fireEvent.focus(input);
            });

            it('should display a custom header', () => {
                const {container} = getComponent();
                expect(getByTestId(container, 'custom-header')).toBeInTheDocument();
            });
        });
    });
});
