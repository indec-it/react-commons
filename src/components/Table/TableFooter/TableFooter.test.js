import {getByTestId, getByText, queryByTestId} from '@testing-library/react';
import {Table} from '@chakra-ui/react';

import TableFooter from '@/components/Table/TableFooter';

describe('<TableFooter>', () => {
    const props = {};
    const getComponent = () => render(TableFooter, props, {wrapper: Table});
    afterEach(tearDown);

    it('should not display table footer', () => {
        const {container} = getComponent();
        expect(queryByTestId(container, 'table-footer')).toBeNull();
    });

    describe('when `props.total` are greater than one', () => {
        beforeEach(() => {
            props.total = 20;
        });

        it('should display table footer', () => {
            const {container} = getComponent();
            expect(getByTestId(container, 'table-footer')).toBeInTheDocument();
        });

        it('should display `Cantidad total de registros:`', () => {
            const {container} = getComponent();
            expect(getByText(container, 'Cantidad total de registros:')).toBeInTheDocument();
        });

        it('should display total records', () => {
            const {container} = getComponent();
            const totalRecords = getByTestId(container, 'total-records');
            expect(getByText(totalRecords, '20')).toBeInTheDocument();
        });
    });
});
