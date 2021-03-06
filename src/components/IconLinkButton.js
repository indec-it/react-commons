import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {noop} from 'lodash';

import {fontAwesomeIconPropTypes, childrenPropTypes} from '../util';
import Icon from './Icon';

const IconLinkButton = ({
    icon, pullIconRight, onClick, children, ...props
}) => (
    <Link className="btn btn-link" {...props}>
        <Icon {...{pullIconRight, icon, children}}/>
    </Link>
);

IconLinkButton.propTypes = {
    onClick: PropTypes.func,
    icon: fontAwesomeIconPropTypes,
    children: childrenPropTypes,
    pullIconRight: PropTypes.bool
};

IconLinkButton.defaultProps = {
    icon: undefined,
    pullIconRight: false,
    onClick: noop,
    children: undefined
};

export default IconLinkButton;
