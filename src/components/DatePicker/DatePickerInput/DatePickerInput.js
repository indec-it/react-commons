import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';
import {FaCalendar} from 'react-icons/fa';

import {TextInput} from '@/components';

const DatePickerInput = forwardRef(({id, onClick, ...props}, ref) => (
    <TextInput
        {...props}
        innerRef={ref}
        name={id}
        iconRight={<FaCalendar/>}
        onClick={onClick}
    />
));

DatePickerInput.propTypes = {
    id: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    field: PropTypes.shape({
        name: PropTypes.string
    })
};

DatePickerInput.defaultProps = {
    onClick: undefined,
    field: undefined
};

export default DatePickerInput;
