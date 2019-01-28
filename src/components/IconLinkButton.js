import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {noop} from 'lodash';

import {fontAwesomeIconPropTypes, childrenPropTypes} from '../util';

import Icon from './Icon';

const IconLinkButton = ({
    icon, pullIconRight, onClick, children, ...props
}) => (
    <Button componentClass={Link} {...props}>
        <Icon {...{pullIconRight, icon, children}}/>
    </Button>
);

IconLinkButton.propTypes = {
    icon: fontAwesomeIconPropTypes,
    pullIconRight: PropTypes.bool,
    onClick: PropTypes.func,
    children: childrenPropTypes
};

IconLinkButton.defaultProps = {
    icon: undefined,
    pullIconRight: false,
    onClick: noop,
    children: undefined
};

export default IconLinkButton;
