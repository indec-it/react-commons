import {getByPlaceholderText} from '@testing-library/react';

import {DatePickerRange} from '@/components';

describe('<DatePickerRange>', () => {
    let props;
    const getComponent = () => render(DatePickerRange, props, {formik: {}});
    beforeEach(() => {
        props = {
            onChange: jest.fn(),
            startDateName: 'startDate',
            endDateName: 'endDate'
        };
    });
    afterEach(tearDown);

    describe('when `props.fromDatePlaceholder` is defined', () => {
        beforeEach(() => {
            props.fromDatePlaceholder = 'From date';
        });

        it('should display `props.fromDatePlaceholder` as placeholder', () => {
            const {container} = getComponent();
            expect(getByPlaceholderText(container, props.fromDatePlaceholder)).toBeInTheDocument();
        });
    });

    describe('when `props.toDatePlaceholder` is defined', () => {
        beforeEach(() => {
            props.toDatePlaceholder = 'To date';
        });

        it('should display `props.toDatePlaceholder` as placeholder', () => {
            const {container} = getComponent();
            expect(getByPlaceholderText(container, props.toDatePlaceholder)).toBeInTheDocument();
        });
    });
});
