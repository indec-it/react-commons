import getRangeNumbers from '../getRangeNumbers';

describe('getRangeNumbers', () => {
    let start;
    let end;

    it('should return range numbers', () => {
        start = 0;
        end = 5;
        expect(getRangeNumbers(start, end)).toEqual([0, 1, 2, 3, 4]);
    });

    describe('when start param is undefined', () => {
        beforeEach(() => {
            start = undefined;
        });

        it('should take zero as start number and return range numbers', () => {
            end = 5;
            expect(getRangeNumbers(start, end)).toEqual([0, 1, 2, 3, 4]);
        });
    });
});
