import React from 'react';
import PropTypes from 'prop-types';

import ValidatorService from '../services/validator';
import TextField from './TextField';

const validateInput = value => {
    if (!value) {
        return null;
    }
    return ValidatorService.validateDocument(value);
};

const handleChange = ({target}, value, onChange) => {
    if (value === target.value) {
        return;
    }
    onChange({target});
};

const DocumentField = ({
    control, label, value, disabled, onChange
}) => (
    <TextField
        required
        minLength={7}
        maxLength={8}
        {...{
            disabled, control, label, value
        }}
        onChange={e => handleChange(e, value, onChange)}
        validateInput={validateInput(value)}
    />
);

DocumentField.propTypes = {
    control: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.bool
};

DocumentField.defaultProps = {
    disabled: false
};

export default DocumentField;
