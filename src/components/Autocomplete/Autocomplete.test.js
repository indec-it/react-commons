import {
    fireEvent, getByTestId, getByText, queryByText
} from '@testing-library/react';

import {Autocomplete} from '@/components';

const suggestionsMock = [
    'Av. Rivadavia',
    'Rivarola',
    'Rivera indarte',
    'River'
];

describe('<Autocomplete>', () => {
    let props;
    const getComponent = () => render(Autocomplete, props, {formik: {}});
    beforeEach(() => {
        props = {
            name: 'test',
            value: 'text',
            label: 'Test',
            onChange: jest.fn(),
            suggestions: suggestionsMock
        };
    });
    afterEach(tearDown);

    it('should display a autocomplete input', () => {
        const {container} = getComponent();
        const input = getByTestId(container, 'autocomplete-test');
        expect(input).toBeInTheDocument();
    });

    it('should display a label', () => {
        const {container} = getComponent();
        const label = getByTestId(container, 'label-test');
        expect(label).toHaveTextContent('Test');
    });

    describe('when `props.onChange` is defined and typing in the input `riva`', () => {
        beforeEach(() => {
            const {container} = getComponent();
            const autocomplete = getByTestId(container, 'autocomplete-test');
            fireEvent.change(autocomplete, {target: {id: 'test', value: 'riva'}});
        });

        it('should fire `props.onChange` event', () => {
            expect(props.onChange).toHaveBeenCalledTimes(1);
        });

        it('should show a list of suggestions', () => {
            const {container} = getComponent();
            const suggestionList = getByTestId(container, 'autocomplete-list-test');
            expect(suggestionList).toBeInTheDocument();
        });

        it('should show `Rivarola` as option', () => {
            const {container} = getComponent();
            const suggestionList = getByTestId(container, 'autocomplete-list-test');
            expect(getByText(suggestionList, 'Rivarola')).toBeInTheDocument();
        });

        it('should show `Av. Rivadavia` as option', () => {
            const {container} = getComponent();
            const suggestionList = getByTestId(container, 'autocomplete-list-test');
            expect(getByText(suggestionList, 'Rivarola')).toBeInTheDocument();
        });

        it('should not show `Rivera indarte` as option', () => {
            const {container} = getComponent();
            const suggestionList = getByTestId(container, 'autocomplete-list-test');
            expect(queryByText(suggestionList, 'Rivera indarte')).toBeNull();
        });

        it('should not show `River` as option', () => {
            const {container} = getComponent();
            const suggestionList = getByTestId(container, 'autocomplete-list-test');
            expect(queryByText(suggestionList, 'River')).toBeNull();
        });
    });
});
