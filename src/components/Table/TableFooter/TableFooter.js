import React from 'react';
import PropTypes from 'prop-types';
import {
    Text,
    Th,
    Tr,
    Tfoot
} from '@chakra-ui/react';

const TableFooter = ({size, total}) => (
    total > 0 && (
        <Tfoot data-testid="table-footer">
            <Tr>
                <Th colSpan={size}>
                    <Text
                        color="brand.primary"
                        fontFamily='"Montserrat Bold", sans serif'
                    >
                        <span data-testid="total-records-label">Cantidad total de registros:</span>
                        <span data-testid="total-records">{total}</span>
                    </Text>
                </Th>
            </Tr>
        </Tfoot>
    )
);

TableFooter.propTypes = {
    size: PropTypes.number,
    total: PropTypes.number
};

TableFooter.defaultProps = {
    size: 1,
    total: 0
};

export default TableFooter;
