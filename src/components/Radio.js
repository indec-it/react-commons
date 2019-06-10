import React from 'react';
import PropTypes from 'prop-types';
import {
    ButtonToolbar, FormGroup, Label, Input
} from 'reactstrap';

const Radio = ({
    value, onChange, name, options, disabled
}) => (
    <ButtonToolbar>
        <FormGroup>
            {options && options.map(option => (
                <Label check>
                    <Input
                        type="radio"
                        name={name}
                        value={value}
                        onChange={result => onChange({[name]: result})}
                        disabled={disabled}
                    >
                        {option.name}
                    </Input>
                </Label>
            ))}
        </FormGroup>
    </ButtonToolbar>
);

Radio.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.number,
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        text: PropTypes.string
    })).isRequired,
    disabled: PropTypes.bool
};

Radio.defaultProps = {
    disabled: false,
    value: 0
};

export default Radio;
