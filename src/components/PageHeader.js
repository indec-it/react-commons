import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Col, Row} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

import {fontAwesomeIconPropTypes} from '../util';

import IconLinkButton from './IconLinkButton';

const PageHeader = ({
    path, title, icon, backIcon, ...props
}) => (
    <Row>
        {path && (
            <Col sm={1}>
                <br/>
                <IconLinkButton to={path} icon={backIcon} {...props}/>
            </Col>
        )}
        <Col sm={11}>
            <h2>
                {icon && (
                    <Fragment>
                        <FontAwesomeIcon icon={icon}/>
                        &nbsp;
                    </Fragment>
                )}
                {title}
            </h2>
        </Col>
    </Row>
);

PageHeader.propTypes = {
    title: PropTypes.string.isRequired,
    backIcon: PropTypes.string,
    icon: fontAwesomeIconPropTypes,
    path: PropTypes.string
};

PageHeader.defaultProps = {
    backIcon: faArrowLeft,
    icon: null,
    path: null
};

export default PageHeader;
