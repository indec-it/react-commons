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
        onBlur: PropTypes.func.isRequired,
        validateInput: PropTypes.string
    };

    static defaultProps = {
        disabled: false,
        validateInput: ''
    };

    constructor(props) {
        super(props);
        this.state = {dirty: false};
    }

    validateInput() {
        if (!this.state.dirty) {
            return null;
        }
        if (this.props.validateInput) {
            return this.props.validateInput;
        }
        return ValidatorService.validateEmail(this.props.value) ? 'success' : 'error';
    }

    handleChange({target}, onChange) {
        if (this.props.value === target.value) {
            return;
        }
        this.setState(() => ({dirty: true}));
        onChange({target});
    }

    handleBlur(value) {
        if (!value || !this.props.onBlur) {
            return;
        }
        this.props.onBlur(value);
    }

    render() {
        const {
            control, label, value, disabled, onBlur, onChange, ...props
        } = this.props;
        return (
            <FormGroup controlId={control} validationState={this.validateInput()}>
                <ControlLabel>
                    {label}
                </ControlLabel>
                <FormControl
                    type="email"
                    required
                    onBlur={e => this.handleBlur(e.target.value)}
                    onChange={e => this.handleChange(e, onChange)}
                    {...{value, onBlur, disabled}}
                    {...props}
                />
                <FormControl.Feedback/>
            </FormGroup>
        );
    }
}

export default EmailField;
