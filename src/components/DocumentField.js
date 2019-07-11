import React from 'react';
import PropTypes from 'prop-types';

import {ValidatorService} from '../services';
import TextField from './TextField';

export const validateInput = value => ValidatorService.validateDocument(value);

export const handleChange = ({target}, value, onChange) => {
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
    onChange: PropTypes.func.isRequired,
    control: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    disabled: PropTypes.bool
};

DocumentField.defaultProps = {
    disabled: false
};

export default DocumentField;
