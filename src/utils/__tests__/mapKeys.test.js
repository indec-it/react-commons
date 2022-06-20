import mapKeys from '../mapKeys';

describe('mapKeys', () => {
    let value;
    let fn;

    describe('when the value provided is an array and field is defined', () => {
        beforeEach(() => {
            value = [{value: 1, label: 'test 1'}, {value: 2, label: 'test 2'}];
            fn = option => option.value;
        });

        it('should return an object with the field`s value as key and the value', () => {
            expect(
                mapKeys(value, fn)
            ).toEqual(
                {1: {value: 1, label: 'test 1'}, 2: {value: 2, label: 'test 2'}}
            );
        });
    });
});
