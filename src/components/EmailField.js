import React from 'react';
import PropTypes from 'prop-types';
import {
    Label, Input, FormGroup, FormFeedback
} from 'reactstrap';

import ValidatorService from '../services/validator';

const validateInput = value => {
    if (!value) {
        return null;
    }
    return ValidatorService.validateEmail(value) ? 'success' : 'error';
};

const handleChange = ({target}, value, onChange) => {
    if (value === target.value) {
        return;
    }
    onChange({target});
};

const EmailField = ({
    control, label, value, disabled, onChange
}) => (
    <FormGroup>
        <Label>
            {label}
        </Label>
        <Input
            type="email"
            value={value}
            required
            disabled={disabled}
            onChange={e => handleChange(e, value, onChange)}
            valid={validateInput(value)}
            name={control}
        />
        <FormFeedback/>
    </FormGroup>
);

EmailField.propTypes = {
    control: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.bool
};

EmailField.defaultProps = {
    disabled: false
};

export default EmailField;
