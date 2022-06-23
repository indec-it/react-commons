import {getValue} from '@/utils';

describe('getValue', () => {
    describe('when the provided value is boolean', () => {
        it('should return false', () => {
            expect(getValue(false)).toEqual(false);
        });
    });

    describe('when the provided value is number', () => {
        it('should return a number', () => {
            expect(getValue(1)).toEqual(1);
        });
    });

    describe('when the provided value is string', () => {
        it('should return a string', () => {
            expect(getValue('a')).toEqual('a');
        });
    });

    describe('when the provided value is undefined', () => {
        it('should return null', () => {
            expect(getValue(undefined)).toEqual(null);
        });
    });

    describe('when castArray is defined', () => {
        describe('when the provided value is boolean', () => {
            it('should return an array with true', () => {
                expect(getValue(false, true)).toEqual([false]);
            });
        });

        describe('when the provided value is number', () => {
            it('should return an array with number', () => {
                expect(getValue(1, true)).toEqual([1]);
            });
        });

        describe('when the provided value is string', () => {
            it('should return an array empty', () => {
                expect(getValue('a', true)).toEqual(['a']);
            });
        });

        describe('when the provided value is a undefined', () => {
            it('should return an array empty', () => {
                expect(getValue(undefined, true)).toEqual([]);
            });
        });
    });
});
