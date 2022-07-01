import {fireEvent, getByTestId} from '@testing-library/react';

import Textarea from './Textarea';

describe('<Textarea>', () => {
    let props;
    const getComponent = () => render(Textarea, props, {formik: {}});
    beforeEach(() => {
        props = {
            name: 'test',
            value: 'textarea text',
            label: 'Test',
            onChange: jest.fn()
        };
    });
    afterEach(tearDown);

    it('should display a textarea', () => {
        const {container} = getComponent();
        const textarea = getByTestId(container, 'textarea-test');
        expect(textarea).toBeInTheDocument();
    });

    it('the textarea should display an label', () => {
        const {container} = getComponent();
        const label = getByTestId(container, 'label-test');
        expect(label).toHaveTextContent('Test');
    });

    describe('when `props.onChange` is defined and typing in the textarea', () => {
        beforeEach(() => {
            const {container} = getComponent();
            const input = getByTestId(container, 'textarea-test');
            fireEvent.change(input, {target: {value: 'typing text'}});
        });

        it('should fire `props.onChange` event', () => {
            expect(props.onChange).toHaveBeenCalledTimes(1);
        });
    });
});
