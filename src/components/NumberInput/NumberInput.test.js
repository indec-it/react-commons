import {
    fireEvent,
    getByTestId,
    getByPlaceholderText,
    waitFor
} from '@testing-library/react';
import {NumberInput} from '@/components';

describe('<NumberInput>', () => {
    let props;
    const getComponent = () => render(NumberInput, props, {formik: {}});
    beforeEach(() => {
        props = {
            name: 'test'
        };
    });
    afterEach(tearDown);

    it('should display an input', () => {
        const {container} = getComponent();
        const input = getByTestId(container, 'input-test');
        expect(input).toBeInTheDocument();
    });

    it('should have form control', () => {
        const {container} = getComponent();
        expect(getByTestId(container, 'form-control-test')).toBeInTheDocument();
    });

    describe('when `props.label` is defined', () => {
        beforeEach(() => {
            props.label = 'Test';
        });

        it('should display a label', () => {
            const {container} = getComponent();
            const label = getByTestId(container, 'label-test');
            expect(label).toHaveTextContent('Test');
        });
    });

    describe('when `props.hasDecimal` is true', () => {
        beforeEach(() => {
            props.hasDecimal = true;
        });

        it('should be with decimals', () => {
            const {container} = getComponent();
            const input = getByPlaceholderText(container, 'Ingrese');
            fireEvent.change(input, {target: {value: 11.22}});
            waitFor(() => {
                expect(input).toHaveValue(11.22);
            });
        });
    });
});
