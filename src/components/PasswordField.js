import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {ValidatorService} from '../services';
import TextField from './TextField';

class PasswordField extends PureComponent {
    static propTypes = {
        onChange: PropTypes.func.isRequired,
        onBlur: PropTypes.func,
        handleKeyPress: PropTypes.func,
        minLength: PropTypes.number,
        maxLength: PropTypes.number,
        control: PropTypes.string,
        label: PropTypes.string,
        value: PropTypes.string,
        feedBackLabel: PropTypes.string,
        validateInput: PropTypes.string,
        placeholder: PropTypes.string,
        required: PropTypes.bool,
        row: PropTypes.bool,
        disabled: PropTypes.bool
    };

    static defaultProps = {
        label: null,
        maxLength: 50,
        minLength: 2,
        onBlur: null,
        disabled: false,
        validateInput: '',
        value: '',
        handleKeyPress: null,
        placeholder: '',
        control: '',
        required: false,
        row: false,
        feedBackLabel: 'La contraseña debe ser de al menos 8 caracteres contener 1 mayúscula 3 minúsculas y 2 números'
    };

    constructor(props) {
        super(props);
        this.state = {valid: undefined};
    }

    validateInput(value) {
        const {maxLength, minLength} = this.props;
        const valid = ValidatorService.validatePassword(value, maxLength, minLength);
        return this.setState(() => ({valid}));
    }

    render() {
        const {value, onChange, ...props} = this.props;
        const {valid} = this.state;
        return (
            <TextField
                type="password"
                invalid={valid === false}
                validateInput={this.validateInput(value)}
                value={value}
                onChange={onChange}
                {...props}
            />
        );
    }
}

export default PasswordField;
