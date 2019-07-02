import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';
import {noop} from 'lodash';

import {childrenPropTypes, fontAwesomeIconPropTypes} from '../util';

import Icon from './Icon';

const IconButton = ({
    icon, pullIconRight, onClick, children, className, ...props
}) => (
    <Button onClick={onClick} {...props} className>
        <Icon
            {...{
                pullIconRight, icon, children, ...props
            }}
        />
    </Button>
);

IconButton.propTypes = {
    icon: fontAwesomeIconPropTypes,
    pullIconRight: PropTypes.bool,
    onClick: PropTypes.func,
    children: childrenPropTypes,
    className: PropTypes.string
};

IconButton.defaultProps = {
    icon: undefined,
    pullIconRight: false,
    onClick: noop,
    children: undefined,
    className: ''
};

export default IconButton;
