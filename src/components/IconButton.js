import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'reactstrap';
import {noop} from 'lodash';

import {childrenPropTypes, fontAwesomeIconPropTypes} from '../util';
import Icon from './Icon';

const IconButton = ({
    icon, pullIconRight, onClick, children, ...props
}) => (
    <Button onClick={onClick} {...props}>
        <Icon {...{pullIconRight, icon, children}}/>
    </Button>
);

IconButton.propTypes = {
    onClick: PropTypes.func,
    icon: fontAwesomeIconPropTypes,
    children: childrenPropTypes,
    pullIconRight: PropTypes.bool
};

IconButton.defaultProps = {
    icon: undefined,
    pullIconRight: false,
    onClick: noop,
    children: undefined
};

export default IconButton;
