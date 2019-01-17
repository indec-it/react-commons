import React from 'react';
import PropTypes from 'prop-types';
import {faSpinner} from '@fortawesome/free-solid-svg-icons';

import IconButton from './IconButton';

const LoadingButton = ({label, bsSize}) => (
    <IconButton bsStyle="primary" bsSize={bsSize} className="btn-group-justified" disabled icon={faSpinner} pulse>
        {label}
    </IconButton>
);

LoadingButton.propTypes = {
    label: PropTypes.string,
    bsSize: PropTypes.string
};

LoadingButton.defaultProps = {
    label: 'Cargando...',
    bsSize: undefined
};

export default LoadingButton;
