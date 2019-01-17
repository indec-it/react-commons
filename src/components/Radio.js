import React from 'react';
import PropTypes from 'prop-types';
import {ButtonToolbar, ToggleButtonGroup, ToggleButton} from 'react-bootstrap';

const Radio = ({
    value, onChange, name, options, disabled
}) => (
    <ButtonToolbar>
        <ToggleButtonGroup
            type="radio"
            name={name}
            value={value}
            onChange={result => onChange({[name]: result})}
        >
            {options && options.map(option => (
                <ToggleButton value={option._id} disabled={disabled}>
                    {option.name}
                </ToggleButton>
            ))}
        </ToggleButtonGroup>
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
