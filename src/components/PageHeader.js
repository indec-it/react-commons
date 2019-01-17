import React from 'react';
import PropTypes from 'prop-types';
import {Col, Row} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {fontAwesomeIconPropTypes} from '../util/propTypes';

const PageHeader = ({title, icon}) => (
    <Row className="title-strong form-group">
        <Col sm={12}>
            <h2>
                <FontAwesomeIcon icon={icon}/>
                &nbsp;
                {title}
            </h2>
        </Col>
    </Row>
);

PageHeader.propTypes = {
    title: PropTypes.string.isRequired,
    icon: fontAwesomeIconPropTypes
};

PageHeader.defaultProps = {
    icon: null
};

export default PageHeader;
