import React from 'react';
import PropTypes from 'prop-types';
import {Toast, ToastBody, ToastHeader} from 'reactstrap';
import {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';
import {childrenPropTypes, fontAwesomeIconPropTypes} from '../util';

import Icon from './Icon';

const IconButton = ({
    icon, pullIconRight, children
}) => (
    <div className="p-3 bg-info my-2 rounded">
        <Toast>
            <ToastHeader>
                <Icon icon={faExclamationTriangle}>
                    Información
                </Icon>
            </ToastHeader>
            <ToastBody>
                <Icon {...{pullIconRight, icon, children}}/>
            </ToastBody>
        </Toast>
    </div>
);

IconButton.propTypes = {
    icon: fontAwesomeIconPropTypes,
    pullIconRight: PropTypes.bool,
    children: childrenPropTypes
};

IconButton.defaultProps = {
    icon: undefined,
    pullIconRight: false,
    children: undefined
};

export default IconButton;
