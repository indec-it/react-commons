import React from 'react';
import PropTypes from 'prop-types';
import {Alert, Col, Row} from 'reactstrap';

const TableNullContent = ({message}) => (
    <Row className="text-center">
        <Col sm={6} smOffset={3}>
            <Alert color="danger">
                {message}
            </Alert>
        </Col>
    </Row>
);

TableNullContent.propTypes = {
    message: PropTypes.string.isRequired
};

export default TableNullContent;
