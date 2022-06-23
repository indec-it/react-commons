import getMaxNumber from '../getMaxNumber';

describe('getMaxNumber', () => {
    let numbers;

    it('should return max number', () => {
        numbers = [1, 5, 3, 1, 2];
        expect(getMaxNumber(numbers)).toBe(5);
    });

    describe('when numbers are not provided', () => {
        beforeEach(() => {
            numbers = undefined;
        });

        it('should return undefined', () => {
            expect(getMaxNumber(numbers)).toBeUndefined();
        });
    });
});
