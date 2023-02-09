import {fireEvent, getByTestId} from '@testing-library/react';

import DatePickerHeader from './DatePickerHeader';

describe('<DatePickerHeader>', () => {
    let props;
    const getComponent = () => render(DatePickerHeader, props, {formik: {}});
    beforeEach(() => {
        props = {
            date: '10-10-2022',
            changeYear: jest.fn(),
            changeMonth: jest.fn(),
            decreaseMonth: jest.fn(),
            increaseMonth: jest.fn(),
            prevMonthButtonDisabled: false,
            nextMonthButtonDisabled: false,
            yearStart: 2023,
            yearRange: 10
        };
    });
    afterEach(tearDown);

    it('should display a custom header', () => {
        const {container} = getComponent();
        expect(getByTestId(container, 'custom-header')).toBeInTheDocument();
        expect(getByTestId(container, 'decrease-month')).toBeInTheDocument();
        expect(getByTestId(container, 'month-select')).toBeInTheDocument();
        expect(getByTestId(container, 'year-select')).toBeInTheDocument();
        expect(getByTestId(container, 'increase-month')).toBeInTheDocument();
    });

    describe('when the decrease button is clicked', () => {
        beforeEach(() => {
            const {container} = getComponent();
            const button = getByTestId(container, 'decrease-month');
            fireEvent.click(button);
        });

        it('should fire `props.decreaseMonth`', () => {
            expect(props.decreaseMonth).toHaveBeenCalledTimes(1);
        });
    });

    describe('when the increase button is clicked', () => {
        beforeEach(() => {
            const {container} = getComponent();
            const button = getByTestId(container, 'increase-month');
            fireEvent.click(button);
        });

        it('should fire `props.increaseMonth`', () => {
            expect(props.increaseMonth).toHaveBeenCalledTimes(1);
        });
    });
});
