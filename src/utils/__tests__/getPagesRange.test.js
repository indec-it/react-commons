import {getPagesRange} from '@/utils';

describe('getPagesRange', () => {
    describe('when total is less than four', () => {
        const total = 4;

        it('should return range of one to total', () => {
            expect(getPagesRange(null, null, total)).toStrictEqual([1, 2, 3, 4]);
        });
    });

    describe('when the total is more than four and and it is located in the middle', () => {
        const total = 5;
        const currentPage = 3;

        it('should return range of three pages and currentPage is in middle', () => {
            expect(getPagesRange(null, currentPage, total)).toStrictEqual([2, 3, 4]);
        });
    });

    describe('when the total is more than four and is located at the beginning', () => {
        const total = 5;
        const currentPage = 2;

        it('should return range of pages with one page as first', () => {
            expect(getPagesRange(null, currentPage, total)).toStrictEqual([1, 2, 3, 4]);
        });
    });
});
