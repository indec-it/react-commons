import React from 'react';
import PropTypes from 'prop-types';
import {ControlLabel, FormGroup} from 'react-bootstrap';
import Select from 'react-select';
import {identity} from 'lodash';

const handleInputChange = (term, onLoadOptions) => {
    if (term.length > 3) {
        onLoadOptions(term);
    }
};

const Typeahead = ({
    control, onChange, onLoadOptions, disabled, options, label, value, placeholder
}) => (
    <FormGroup controlId={control}>
        <ControlLabel>
            {label}
        </ControlLabel>
        <Select
            id={control}
            name={control}
            value={value}
            filterOption={identity}
            placeholder={placeholder}
            onChange={onChange}
            disabled={disabled}
            onInputChange={term => handleInputChange(term, onLoadOptions)}
            options={options}
        />
    </FormGroup>
);

Typeahead.propTypes = {
    control: PropTypes.string.isRequired,
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func.isRequired,
    onLoadOptions: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({})),
    placeholder: PropTypes.string,
    disabled: PropTypes.bool
};

Typeahead.defaultProps = {
    label: '',
    value: '',
    placeholder: 'Escriba para buscar...',
    disabled: false,
    options: []
};

export default Typeahead;
