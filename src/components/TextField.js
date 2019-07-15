import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {ControlLabel, FormControl, FormGroup} from 'react-bootstrap';

import {ValidatorService} from '../services';

class TextField extends PureComponent {
    static propTypes = {
        control: PropTypes.string,
        label: PropTypes.string,
        value: PropTypes.string,
        onChange: PropTypes.func.isRequired,
        onBlur: PropTypes.func,
        minLength: PropTypes.number,
        maxLength: PropTypes.number,
        disabled: PropTypes.bool,
        validateInput: PropTypes.string,
        handleKeyPress: PropTypes.func,
        placeholder: PropTypes.string,
        required: PropTypes.bool
    };

    static defaultProps = {
        label: null,
        maxLength: 50,
        minLength: 2,
        onBlur: null,
        value: '',
        disabled: false,
        validateInput: null,
        handleKeyPress: null,
        placeholder: '',
        control: '',
        required: false
    };

    constructor(props) {
        super(props);
        this.state = {dirty: false};
    }

    validateInput(validateInput) {
        if (!this.state.dirty) {
            return null;
        }
        if (validateInput) {
            return validateInput;
        }
        const {maxLength, minLength, value} = this.props;
        return ValidatorService.validateText(value, maxLength, minLength) ? 'success' : 'error';
    }

    handleChange({target}) {
        if (this.props.value === target.value) {
            return;
        }
        this.setState(() => ({dirty: true}));
        this.props.onChange({target});
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
            validateInput,
            ...props
        } = this.props;
        return (
            <FormGroup controlId={control} validationState={this.validateInput(validateInput)}>
                {label && (
                    <ControlLabel>
                        {label}
                    </ControlLabel>
                )}
                <FormControl
                    type="text"
                    onKeyPress={handleKeyPress}
                    onBlur={e => this.handleBlur(e.target.value)}
                    {...{
                        value, maxLength, minLength, disabled, placeholder, required
                    }}
                    {...props}
                    onChange={e => this.handleChange(e)}
                />
                <FormControl.Feedback/>
            </FormGroup>
        );
    }
}

export default TextField;
