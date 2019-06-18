import React from 'react';
import PropTypes from 'prop-types';
import {Toast, ToastBody, ToastHeader} from 'reactstrap';
import {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';

import {childrenPropTypes, fontAwesomeIconPropTypes} from '../util';
import Icon from './Icon';

const ActionInfo = ({
    icon, show, pullIconRight, children
}) => show && (
    <Toast className="mx-auto w-50 p-3 text-white text-center">
        <ToastHeader>
            <Icon icon={faExclamationTriangle}>
                Información
            </Icon>
        </ToastHeader>
        <ToastBody>
            <Icon {...{pullIconRight, icon, children}}/>
        </ToastBody>
    </Toast>
);

ActionInfo.propTypes = {
    show: PropTypes.bool,
    icon: fontAwesomeIconPropTypes,
    pullIconRight: PropTypes.bool,
    children: childrenPropTypes
};

ActionInfo.defaultProps = {
    show: false,
    icon: undefined,
    pullIconRight: false,
    children: undefined
};

export default ActionInfo;
