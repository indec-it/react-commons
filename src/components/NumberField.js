import React from 'react';
import PropTypes from 'prop-types';

import ValidatorService from '../services/validator';

import TextField from './TextField';

const handleKeyPress = e => {
    if (!ValidatorService.validateNumber(e.key)) {
        e.preventDefault();
    }
};

const NumberField = ({
    control, label, value, maxLength, minLength, disabled, onBlur, onChange
}) => (
    <TextField
        control={control}
        label={label}
        value={value}
        maxLength={maxLength}
        minLength={minLength}
        disabled={disabled}
        onBlur={onBlur}
        handleKeyPress={handleKeyPress}
        onChange={onChange}
    />
);

NumberField.propTypes = {
    control: PropTypes.string.isRequired,
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func,
    minLength: PropTypes.number,
    maxLength: PropTypes.number,
    disabled: PropTypes.bool
};

NumberField.defaultProps = {
    maxLength: 20,
    minLength: 2,
    onBlur: null,
    label: '',
    disabled: false,
    value: null
};

export default NumberField;
