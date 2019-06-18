import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSpinner} from '@fortawesome/free-solid-svg-icons';

const LoadingIndicator = ({iconSize, label}) => (
    <div className="text-modal text-center">
        <FontAwesomeIcon icon={faSpinner} pulse size={iconSize}/>
        <br/>
        {label}
    </div>
);

LoadingIndicator.propTypes = {
    iconSize: PropTypes.string,
    label: PropTypes.string
};

LoadingIndicator.defaultProps = {
    iconSize: '2x',
    label: 'Cargando...'
};

export default LoadingIndicator;
