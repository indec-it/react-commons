import {FaExpand} from 'react-icons/fa';

export default [
    {
        label: 'Example 0',
        path: '/example0',
        isHidden: true
    },
    {
        label: 'Example 1',
        path: '/example1',
        isDisabled: true
    },
    {
        label: 'Example 2',
        path: '/example2'
    },
    {
        label: 'Options',
        icon: FaExpand,
        options: [
            {
                label: 'Example 3  with long long text',
                path: '/example3'
            },
            {
                label: 'Example 4',
                path: '/example4',
                isDisabled: true
            },
            {
                label: 'Example 5',
                path: '/example5',
                isHidden: true
            }
        ]
    },
    {
        label: 'Nested options',
        icon: FaExpand,
        options: [
            {
                label: 'Example 6',
                icon: FaExpand,
                options: [
                    {
                        label: 'Example 7',
                        options: [
                            {
                                label: 'Example 8  with very long long long long long long text',
                                path: '/example8'
                            },
                            {
                                label: 'Example 9',
                                path: '/example9'
                            }
                        ]
                    },
                    {
                        label: 'Example 10',
                        options: [
                            {
                                label: 'Example 11',
                                path: '/example11'
                            },
                            {
                                label: 'Example 12',
                                path: '/example12'
                            },
                            {
                                label: 'Example 13',
                                path: '/example13'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Example 14',
                icon: FaExpand,
                path: '/example14'
            },
            {
                label: 'Example 15',
                icon: FaExpand,
                isDisabled: true,
                options: [
                    {
                        label: 'Example 16',
                        path: '/example16'
                    }
                ]
            }
        ]
    }
];
