import React from 'react';
import PropTypes from 'prop-types';
import {ControlLabel, FormGroup} from 'react-bootstrap';
import Select from 'react-select';
import {find, isNil} from 'lodash';

const Dropdown = ({
    value,
    control,
    label,
    getOptionValue,
    getOptionLabel,
    disabled,
    placeholder,
    options,
    onChange,
    isClearable,
    ...props
}) => (
    <FormGroup controlId={control}>
        {label && (
            <ControlLabel>
                {label}
            </ControlLabel>
        )}
        <Select
            value={!isNil(value) ? find(options, option => getOptionValue(option) === value) : null}
            name={control}
            isDisabled={disabled}
            onChange={option => onChange({
                target: {id: control, value: !isNil(option) ? getOptionValue(option) : null}
            })}
            menuPlacement="auto"
            {...{
                options, getOptionValue, getOptionLabel, isClearable, placeholder
            }}
            {...props}
        />
    </FormGroup>
);

Dropdown.propTypes = {
    onChange: PropTypes.func.isRequired,
    control: PropTypes.string.isRequired,
    value: PropTypes.string,
    getOptionValue: PropTypes.func,
    getOptionLabel: PropTypes.func,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape({})),
    disabled: PropTypes.bool,
    isClearable: PropTypes.bool
};

Dropdown.defaultProps = {
    getOptionValue: option => option._id,
    getOptionLabel: option => option.name,
    label: undefined,
    placeholder: '[Seleccione]',
    options: [],
    disabled: false,
    isClearable: false,
    value: ''
};

export default Dropdown;
