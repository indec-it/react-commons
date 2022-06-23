import {getSelectedOptions} from '@/utils';

describe('getSelectedOptions', () => {
    describe('when there is a value', () => {
        it('should return an array with selected options', () => {
            const options = [{value: 1, label: 'test 1'}, {value: 2, label: 'test 2'}];
            const selectedValue = 1;
            const getOptionValue = option => option.value;
            expect(getSelectedOptions(options, selectedValue, getOptionValue)).toEqual([{value: 1, label: 'test 1'}]);
        });
    });

    describe('when selectedValue is an array', () => {
        it('should return an array with selected options', () => {
            const options = [{value: 1, label: 'test 1'}, {value: 2, label: 'test 2'}];
            const selectedValue = [1, 2];
            const getOptionValue = option => option.value;
            expect(getSelectedOptions(options, selectedValue, getOptionValue))
                .toEqual([{value: 1, label: 'test 1'}, {value: 2, label: 'test 2'}]);
        });
    });

    describe('when the options have `id`, `name` and there is a selectedValue', () => {
        it('should return an array with selected options', () => {
            const options = [{id: 1, name: 'test 1'}, {id: 2, name: 'test 2'}];
            const selectedValue = 2;
            const getOptionValue = option => option.id;
            expect(getSelectedOptions(options, selectedValue, getOptionValue)).toEqual([{id: 2, name: 'test 2'}]);
        });
    });

    describe('when the options have `id`, `name` and `selectedValue` is an array', () => {
        it('should return an array with selected options', () => {
            const options = [{id: 1, name: 'test 1'}, {id: 2, name: 'test 2'}];
            const selectedValue = [1, 2];
            const getOptionValue = option => option.id;
            expect(getSelectedOptions(options, selectedValue, getOptionValue))
                .toEqual([{id: 1, name: 'test 1'}, {id: 2, name: 'test 2'}]);
        });
    });
});
