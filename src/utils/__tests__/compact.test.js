import compact from '../compact';

describe('compact', () => {
    let array;

    it('should return an array without falsy values', () => {
        array = [1, undefined, null, '', 'a', 0];
        expect(compact(array)).toEqual([1, 'a']);
    });
});
