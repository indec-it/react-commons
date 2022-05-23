import {isBoolean} from '@/utils';

describe('isBoolean', () => {
    describe('when the value provided is a boolean', () => {
        it('should return true', () => {
            expect(isBoolean(false)).toBe(true);
        });
    });

    describe('when the provided value is number', () => {
        it('should return a false', () => {
            expect(isBoolean(1)).toBe(false);
        });
    });

    describe('when the provided value is string', () => {
        it('should return a false', () => {
            expect(isBoolean('a')).toBe(false);
        });
    });

    describe('when the provided value is undefined', () => {
        it('should return false', () => {
            expect(isBoolean(undefined)).toBe(false);
        });
    });

    describe('when the provided value is an array', () => {
        it('should return false', () => {
            expect(isBoolean([])).toBe(false);
        });
    });
});
