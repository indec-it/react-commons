import PropTypes from 'prop-types';

export default PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element,
    PropTypes.node
]);
