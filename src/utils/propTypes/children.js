import PropTypes from 'prop-types';
import elementPropTypes from './element';

export default PropTypes.oneOfType([
    elementPropTypes,
    PropTypes.arrayOf(elementPropTypes)
]);
