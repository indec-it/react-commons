import React from 'react';
import PropTypes from 'prop-types';
import {Alert, Col, Row} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSpinner} from '@fortawesome/free-solid-svg-icons';

const LoadingIndicator = ({label}) => (
    <Row className="text-center">
        <Col sm={6} smOffset={3}>
            <Alert>
                <FontAwesomeIcon icon={faSpinner} pulse/>
                &nbsp;
                {label}
            </Alert>
        </Col>
    </Row>
);

LoadingIndicator.propTypes = {
    label: PropTypes.string
};

LoadingIndicator.defaultProps = {
    label: 'Cargando...'
};

export default LoadingIndicator;
