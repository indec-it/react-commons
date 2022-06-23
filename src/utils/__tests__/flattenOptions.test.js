import {flattenOptions} from '@/utils';

describe('flattenOptions', () => {
    const options = [
        {value: 1, label: 'option 1', path: '/path1'},
        {
            value: 2,
            label: 'option 2',
            options: [
                {
                    value: 3,
                    label: 'subOption 1',
                    options: [
                        {value: 4, label: 'subSubOption 1', path: '/path2'},
                        {value: 5, label: 'subSubOption 2', path: '/path3'}
                    ]
                },
                {value: 6, label: 'subOption 2', path: '/path4'}
            ]
        }
    ];
    const flattenedOptions = [
        {value: 1, label: 'option 1', path: '/path1'},
        {value: 4, label: 'subSubOption 1', path: '/path2'},
        {value: 5, label: 'subSubOption 2', path: '/path3'},
        {value: 6, label: 'subOption 2', path: '/path4'}
    ];

    it('should return flattened options without subOptions', () => {
        expect(flattenOptions(options)).toEqual(flattenedOptions);
    });
});
