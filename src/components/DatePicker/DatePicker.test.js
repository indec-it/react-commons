import {fireEvent, getByPlaceholderText} from '@testing-library/react';

import {DatePicker} from '@/components';

describe('<DatePicker>', () => {
    let props;
    const getComponent = () => render(DatePicker, props, {formik: {}});
    beforeEach(() => {
        props = {
            name: 'test',
            onChange: jest.fn(),
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
            fireEvent.change(input, {target: {value: '10-25-2020'}});
        });

        it('should fire `props.onChange`', () => {
            expect(props.onChange).toHaveBeenCalledTimes(1);
        });
    });
});
