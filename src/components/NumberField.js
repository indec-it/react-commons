import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ControlLabel, FormControl, FormGroup} from 'react-bootstrap';

import ValidatorService from '../services/validator';

const handleKeyPress = e => {
    if (!ValidatorService.validateNumber(e.key)) {
        e.preventDefault();
    }
};

class NumberField extends Component {
    static propTypes = {
        control: PropTypes.string.isRequired,
        label: PropTypes.string,
        value: PropTypes.string,
        placeholder: PropTypes.string,
        onChange: PropTypes.func.isRequired,
        onBlur: PropTypes.func,
        min: PropTypes.number,
        max: PropTypes.number,
        disabled: PropTypes.bool,
        required: PropTypes.bool
    };

    static defaultProps = {
        max: 3,
        min: 2,
        onBlur: null,
        placeholder: '',
        label: '',
        disabled: false,
        value: null,
        required: false
    };

    constructor(props) {
        super(props);
        this.state = {dirty: false};
    }

    validateInput() {
        if (!this.state.dirty || (!this.props.required && this.props.value)) {
            return null;
        }
        const {value, min, max} = this.props;
        return ValidatorService.validateNumber(value, min, max) ? 'success' : 'error';
    }

    handleChange({target}, onChange) {
        if (this.props.value === target.value) {
            return;
        }
        this.setState({dirty: true});
        onChange({target});
    }

    render() {
        const {
            control, label, value, disabled, onBlur, placeholder, required, onChange, min, max, ...props
        } = this.props;
        return (
            <FormGroup controlId={control} validationState={this.validateInput()}>
                {label && (
                    <ControlLabel>
                        {label}
                    </ControlLabel>
                )}
                <FormControl
                    type="number"
                    onKeyPress={handleKeyPress}
                    onBlur={e => this.handleBlur(e.target.value)}
                    onChange={e => this.handleChange(e, onChange)}
                    {...{
                        value, disabled, placeholder, required, min, max
                    }}
                    {...props}
                />
                <FormControl.Feedback/>
            </FormGroup>
        );
    }
}

export default NumberField;
