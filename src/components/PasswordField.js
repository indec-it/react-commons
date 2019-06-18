import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {
    Label, Input, FormGroup, FormFeedback
} from 'reactstrap';

import {ValidatorService} from '../services';

class PasswordField extends PureComponent {
    static propTypes = {
        onBlur: PropTypes.func,
        handleKeyPress: PropTypes.func,
        onChange: PropTypes.func.isRequired,
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
        feedBack: PropTypes.bool,
        disabled: PropTypes.bool
    };

    static defaultProps = {
        label: null,
        maxLength: 50,
        minLength: 2,
        onBlur: null,
        value: '',
        disabled: false,
        validateInput: '',
        handleKeyPress: null,
        placeholder: '',
        control: '',
        required: false,
        row: false,
        feedBack: false,
        feedBackLabel: 'La contraseña debe ser de al menos 8 caracteres contener 1 mayúscula 3 minúsculas y 2 números'
    };

    constructor(props) {
        super(props);
        this.state = {valid: undefined};
    }

    validateInput = (value, callback) => {
        if (this.props.validateInput) {
            callback();
            return this.props.validateInput;
        }
        const {maxLength, minLength} = this.props;
        const valid = ValidatorService.validatePassword(value, maxLength, minLength);
        return this.setState(() => ({valid}), callback);
    };

    handleChange(date) {
        const value = date.toISOString();
        if (this.props.value === value) {
            return;
        }
        this.validateInput(value, this.props.onChange({target: {value, id: this.props.control}}));
    }

    handleBlur(value) {
        if (!value || !this.props.onBlur) {
            return;
        }
        this.props.onBlur(value);
    }

    render() {
        const {
            control,
            label,
            value,
            maxLength,
            minLength,
            disabled,
            handleKeyPress,
            required,
            placeholder,
            feedBack,
            feedBackLabel,
            ...props
        } = this.props;
        const {valid} = this.state;
        return (
            <FormGroup row={this.props.row}>
                {label && (
                    <Label>
                        {label}
                    </Label>
                )}
                <Input
                    type="password"
                    onKeyPress={handleKeyPress}
                    onBlur={e => this.handleBlur(e.target.value)}
                    onChange={e => this.handleChange(e)}
                    valid={valid}
                    invalid={valid === false}
                    name={control}
                    {...{
                        required, value, maxLength, minLength, disabled, placeholder
                    }}
                    {...props}
                />
                {feedBack && (
                    <FormFeedback tooltip>
                        {feedBackLabel}
                    </FormFeedback>
                )}
            </FormGroup>
        );
    }
}

export default PasswordField;
