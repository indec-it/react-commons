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
        required: PropTypes.bool
    };

    static defaultProps = {
        maxLength: 20,
        minLength: 2,
        onBlur: null,
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
        const {value, maxLength, minLength} = this.props;
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
            control, label, value, maxLength, minLength, disabled, onBlur, required, ...props
        } = this.props;
        return (
            <TextField
                handleKeyPress={handleKeyPress}
                validateInput={this.validateInput()}
                onChange={e => this.handleChange(e)}
                {...{
                    required, control, label, value, maxLength, minLength, disabled, onBlur
                }}
                {...props}
            />
        );
    }
}

export default NumberField;
