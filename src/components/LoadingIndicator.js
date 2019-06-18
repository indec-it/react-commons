import React from 'react';
import {Alert} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSpinner} from '@fortawesome/free-solid-svg-icons';

const LoadingIndicator = () => (
    <Alert color="info" className="text-center">
        <FontAwesomeIcon icon={faSpinner} pulse/>
        &nbsp; Cargando
    </Alert>
);

export default LoadingIndicator;
