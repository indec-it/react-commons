import React from 'react';
import PropTypes from 'prop-types';
import {ControlLabel, FormGroup} from 'react-bootstrap';
import Select from 'react-select';
import {
    identity, find, size, isNil
} from 'lodash';

const handleInputChange = (term, onLoadOptions) => {
    if (size(term) > 3) {
        onLoadOptions(term);
    }
};

const Typeahead = ({
    control,
    onChange,
    onLoadOptions,
    disabled,
    options,
    label,
    value,
    placeholder,
    getOptionValue,
    getOptionLabel,
    ...props
}) => (
    <FormGroup controlId={control}>
        <ControlLabel>
            {label}
        </ControlLabel>
        <Select
            id={control}
            name={control}
            value={find(options, option => getOptionValue(option) === value) || null}
            filterOption={identity}
            onChange={
                option => onChange({target: {id: control, value: isNil(option) ? option : getOptionValue(option)}})
            }
            onInputChange={term => handleInputChange(term, onLoadOptions)}
            {...{
                options, placeholder, disabled, getOptionValue, getOptionLabel
            }}
            {...props}
        />
    </FormGroup>
);

Typeahead.propTypes = {
    control: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onLoadOptions: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({})),
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    getOptionValue: PropTypes.func,
    getOptionLabel: PropTypes.func
};

Typeahead.defaultProps = {
    label: '',
    value: '',
    placeholder: 'Escriba para buscar...',
    disabled: false,
    options: [],
    getOptionValue: option => option._id,
    getOptionLabel: option => option.name
};

export default Typeahead;
