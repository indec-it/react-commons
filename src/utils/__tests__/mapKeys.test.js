import mapKeys from '../mapKeys';

describe('mapKeys', () => {
    let object;

    it('should return an empty object if no object is passed', () => {
        expect(mapKeys()).toEqual({});
    });

    it('should return an object with the keys mapped', () => {
        object = {
            a: 1,
            b: 2,
            c: 3
        };
        expect(mapKeys(object)).toEqual({
            a1: 1,
            b2: 2,
            c3: 3
        });
    });
});
