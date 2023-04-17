import {fireEvent, getByTestId} from '@testing-library/react';
import {NumberInput} from '@/components';

describe('<NumberInput>', () => {
    let props;
    const getComponent = () => render(NumberInput, props, {formik: {}});
    beforeEach(() => {
        props = {
            name: 'test',
            onChange: jest.fn()
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

    describe('when `props.hasDecimal` is `true`', () => {
        beforeEach(() => {
            props.hasDecimal = true;
            const {container} = getComponent();
            const input = getByTestId(container, 'input-test');
            fireEvent.change(input, {target: {value: 11.22}});
        });

        it('should fire `props.onChange` with value as string', () => {
            expect(props.onChange).toHaveBeenCalled();
            expect(props.onChange).toHaveBeenCalledWith({target: {id: 'test', value: '11.22'}});
        });
    });

    describe('when `props.hasDecimal` is `false`', () => {
        beforeEach(() => {
            props.hasDecimal = false;
            const {container} = getComponent();
            const input = getByTestId(container, 'input-test');
            fireEvent.change(input, {target: {value: 11.22}});
        });

        it('should fire `props.onChange` with value as number', () => {
            expect(props.onChange).toHaveBeenCalled();
            expect(props.onChange).toHaveBeenCalledWith({target: {id: 'test', value: 11.22}});
        });
    });
});
