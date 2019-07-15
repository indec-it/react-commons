import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {ControlLabel, FormControl, FormGroup} from 'react-bootstrap';

import ValidatorService from '../services/validator';

class EmailField extends PureComponent {
    static propTypes = {
        control: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        disabled: PropTypes.bool,
        onBlur: PropTypes.func,
        validateInput: PropTypes.string
    };

    static defaultProps = {
        disabled: false,
        validateInput: null,
        onBlur: null
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
        return ValidatorService.validateEmail(this.props.value) ? 'success' : 'error';
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
            control, label, value, disabled, onBlur, validateInput, ...props
        } = this.props;
        return (
            <FormGroup controlId={control} validationState={this.validateInput(validateInput)}>
                <ControlLabel>
                    {label}
                </ControlLabel>
                <FormControl
                    type="email"
                    required
                    onBlur={e => this.handleBlur(e.target.value)}
                    {...{value, onBlur, disabled}}
                    {...props}
                    onChange={e => this.handleChange(e)}
                />
                <FormControl.Feedback/>
            </FormGroup>
        );
    }
}

export default EmailField;
