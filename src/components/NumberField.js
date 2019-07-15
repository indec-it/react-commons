import React, {Component} from 'react';
import PropTypes from 'prop-types';

import ValidatorService from '../services/validator';

import TextField from './TextField';

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
        onChange: PropTypes.func.isRequired,
        onBlur: PropTypes.func,
        minLength: PropTypes.number,
        maxLength: PropTypes.number,
        disabled: PropTypes.bool,
        validateInput: PropTypes.string,
        validate: PropTypes.bool
    };

    static defaultProps = {
        maxLength: 20,
        minLength: 2,
        onBlur: null,
        label: '',
        disabled: false,
        value: null,
        validateInput: null,
        validate: true
    };

    constructor(props) {
        super(props);
        this.state = {dirty: false};
    }

    validateInput(validate, validateInput) {
        if (!this.state.dirty) {
            return null;
        }
        if (validateInput) {
            return validateInput;
        }
        const {value, maxLength, minLength} = this.props;
        if (!validate) {
            return null;
        }
        return ValidatorService.validateText(value, maxLength, minLength) ? 'success' : 'error';
    }

    handleChange({target}) {
        if (this.props.value === target.value) {
            return;
        }
        this.setState({dirty: true});
        this.props.onChange({target});
    }

    render() {
        const {
            control, label, value, maxLength, minLength, disabled, onBlur, validate, validateInput, ...props
        } = this.props;
        return (
            <TextField
                validateInput={this.validateInput(validate, validateInput)}
                {...{
                    control, label, value, disabled, onBlur, handleKeyPress, maxLength, minLength
                }}
                {...props}
                onChange={e => this.handleChange(e)}
            />
        );
    }
}

export default NumberField;
