import {getPagesNumber} from '@/utils';

describe('getPagesNumber', () => {
    it('should return an array of numbers', () => {
        const pages = [1, 2, 3, 1, undefined];
        expect(getPagesNumber(pages)).toEqual([1, 2, 3, 1]);
    });
});
