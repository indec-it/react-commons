import {fireEvent, getByTestId, getByText} from '@testing-library/react';

import {Checkbox} from '@/components';

describe('<Checkbox>', () => {
    let props;
    const getComponent = () => render(Checkbox, props, {formik: {}, chakra: {}});
    beforeEach(() => {
        props = {
            name: 'test'
        };
    });
    afterEach(tearDown);

    it('should render a checkbox', () => {
        const {container} = getComponent();
        const input = getByTestId(container, 'checkbox-test');
        expect(input).toBeInTheDocument();
    });

    describe('when `props.label` is defined', () => {
        beforeEach(() => {
            props.label = 'Test checkbox';
        });

        it('should display a label', () => {
            const {container} = getComponent();
            expect(getByText(container, 'Test checkbox')).toBeInTheDocument();
        });
    });

    describe('when `props.onChange` is defined', () => {
        beforeEach(() => {
            props.onChange = jest.fn();
        });

        describe('when a user click the checkbox', () => {
            beforeEach(() => {
                const {container} = getComponent();
                const checkbox = getByTestId(container, 'checkbox-test');
                fireEvent.click(checkbox);
            });

            it('should fire `props.onChange`', () => {
                expect(props.onChange).toHaveBeenCalledTimes(1);
                expect(props.onChange).toHaveBeenCalledWith(expect.objectContaining({
                    target: expect.objectContaining({
                        value: ''
                    })
                }));
            });
        });
    });
});
