import {Children, cloneElement, Component} from 'react';
import PropTypes from 'prop-types';
import {includes, some} from 'lodash';

const includeRole = (roles, sessionRoles) => some(roles, role => includes(sessionRoles, role));

const disableChild = child => cloneElement(child, {disabled: true});

const Role = ({
    roles, rolesReadOnly, children, sessionRoles
}) => {
    if (!includeRole(roles, sessionRoles)) {
        return false;
    }
    if (!includeRole(rolesReadOnly, sessionRoles)) {
        return children;
    }
    return Children.map(children, disableChild);
};

Role.propTypes = {
    roles: PropTypes.arrayOf(PropTypes.string).isRequired,
    sessionRoles: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.shape({})
    ]),
    children: PropTypes.oneOfType([
        PropTypes.instanceOf(Component),
        PropTypes.func,
        PropTypes.shape(),
        PropTypes.arrayOf(PropTypes.oneOfType([
            PropTypes.instanceOf(Component),
            PropTypes.func
        ]))
    ]),
    rolesReadOnly: PropTypes.arrayOf(PropTypes.string)
};

Role.defaultProps = {
    rolesReadOnly: [],
    sessionRoles: null,
    children: undefined
};

export default Role;
