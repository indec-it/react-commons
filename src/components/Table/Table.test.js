import {
    getByTestId,
    getByText,
    queryByText,
    queryByTestId
} from '@testing-library/react';

import {Table} from '@/components';

describe('<Table>', () => {
    let props;
    const getComponent = () => render(Table, props);
    beforeEach(() => {
        props = {
            columns: [{key: 'name', label: 'Name'}, {key: 'action'}],
            total: 0,
            onSearch: jest.fn(),
            params: {skip: 0}
        };
    });
    afterEach(tearDown);

    describe('when `props.data` is empty', () => {
        it('should display `No hay resultados`', () => {
            const {container} = getComponent();
            expect(getByText(container, 'No hay resultados')).toBeInTheDocument();
        });
    });

    describe('when `props.columns` is not empty', () => {
        it('should display the columns', () => {
            const {container} = getComponent();
            props.columns.forEach(column => {
                if (column.label) {
                    expect(getByText(container, column.label)).toBeInTheDocument();
                }
            });
        });
    });

    describe('when `props.data` is not empty', () => {
        beforeEach(() => {
            props.data = [
                {
                    key: 1,
                    values: [
                        'test',
                        'test2'
                    ]
                }
            ];
        });

        it('should display the data', () => {
            const {container} = getComponent();
            props.data.forEach(datum => {
                expect(getByText(container, datum.values[0])).toBeInTheDocument();
            });
        });

        it('should not display `No hay resultados`', () => {
            const {container} = getComponent();
            expect(queryByText(container, 'No hay resultados')).toBeNull();
        });
    });

    describe('when `props.caption` is defined', () => {
        beforeEach(() => {
            props.caption = 'Caption test';
        });

        it('should display `props.caption`', () => {
            const {container} = getComponent();
            expect(getByText(container, props.caption)).toBeInTheDocument();
        });
    });

    describe('when `props.isLoading` is `true`', () => {
        beforeEach(() => {
            props.isLoading = true;
        });

        it('should render a spinner', () => {
            const {container} = getComponent();
            expect(getByTestId(container, 'spinner-loading')).toBeInTheDocument();
        });

        describe('when `props.total` is zero', () => {
            beforeEach(() => {
                props.total = 0;
            });

            it('should not display `Total de postulados:`', () => {
                const {container} = getComponent();
                expect(queryByText(container, 'Total de postulados:')).toBeNull();
            });

            it('should not display total records', () => {
                const {container} = getComponent();
                expect(queryByTestId(container, 'total-records')).toBeNull();
            });
        });
    });

    describe('when `props.emptyMessage` is defined', () => {
        beforeEach(() => {
            props.emptyMessage = 'Empty message';
        });

        it('should display empty message', () => {
            const {container} = getComponent();
            expect(getByText(container, 'Empty message')).toBeInTheDocument();
        });
    });
});
