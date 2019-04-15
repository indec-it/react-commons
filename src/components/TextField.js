import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Label, Input, FormGroup, FormFeedback} from 'reactstrap';

import ValidatorService from '../services/validator';

class TextField extends Component {
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
        validateInput: '',
        handleKeyPress: null,
        placeholder: '',
        control: '',
        required: false
    };

    constructor(props) {
        super(props);
        this.state = {dirty: false};
    }

    validateInput() {
        if (this.props.validateInput) {
            return this.props.validateInput;
        }
        if (!this.state.dirty) {
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

    handleBlur(value) {
        if (!value || !this.props.onBlur) {
            return;
        }
        this.props.onBlur(value);
    }

    render() {
        const {
            control, label, value, maxLength, minLength, disabled, handleKeyPress, required, placeholder, ...props
        } = this.props;
        return (
            <FormGroup>
                {label && (
                    <Label>
                        {label}
                    </Label>
                )}
                <Input
                    type="text"
                    onKeyPress={handleKeyPress}
                    onBlur={e => this.handleBlur(e.target.value)}
                    onChange={e => this.handleChange(e)}
                    valid={this.validateInput()}
                    name={control}
                    {...{
                        required, value, maxLength, minLength, disabled, placeholder
                    }}
                    {...props}
                />
                <FormFeedback/>
            </FormGroup>
        );
    }
}

export default TextField;
