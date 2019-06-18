import React from 'react';
import {Alert} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSpinner} from '@fortawesome/free-solid-svg-icons';

const SaveIndicator = () => (
    <Alert color="info" className="text-center">
        <FontAwesomeIcon icon={faSpinner} pulse/>
        &nbsp; Guardando
    </Alert>
);

export default SaveIndicator;
