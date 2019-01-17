import PropTypes from 'prop-types';

export default PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.node
    ]))
]);
