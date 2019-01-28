import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {isNil} from 'lodash';

import {childrenPropTypes, fontAwesomeIconPropTypes} from '../util';

const Icon = ({
    pullIconRight, icon, children, ...props
}) => (
    <Fragment>
        {!pullIconRight && (
            <Fragment>
                <FontAwesomeIcon icon={icon} {...props}/>
                {!isNil(children) ? <span>&nbsp;</span> : null}
            </Fragment>
        )}
        {children}
        {pullIconRight && (
            <Fragment>
                {!isNil(children) ? <span>&nbsp;</span> : null}
                <FontAwesomeIcon icon={icon} {...props}/>
            </Fragment>
        )}
    </Fragment>
);

Icon.propTypes = {
    icon: fontAwesomeIconPropTypes,
    pullIconRight: PropTypes.bool,
    children: childrenPropTypes
};

Icon.defaultProps = {
    icon: undefined,
    pullIconRight: false,
    children: undefined
};

export default Icon;
