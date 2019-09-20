import React from 'react';
import PropTypes from 'prop-types';
import {isEmpty, isNil} from 'lodash';

import LoadingIndicator from './LoadingIndicator';
import TableNullContent from './TableNullContent';

const TableContainer = ({
    loading, entities, message, children
}) => {
    if (loading) {
        return <LoadingIndicator/>;
    }
    if (isNil(entities)) {
        return null;
    }
    if (isEmpty(entities)) {
        return <TableNullContent message={message}/>;
    }
    return children;
};

TableContainer.propTypes = {
    entities: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.shape({})),
        PropTypes.shape({})
    ]),
    loading: PropTypes.bool.isRequired,
    message: PropTypes.string
};

TableContainer.defaultProps = {
    entities: null,
    message: 'No se encontraron resultados'
};

export default TableContainer;
