import PropTypes from 'prop-types';

export default PropTypes.shape({
    icon: PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.number.isRequired,
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.string.isRequired
    ])),
    iconName: PropTypes.string,
    prefix: PropTypes.string
});
