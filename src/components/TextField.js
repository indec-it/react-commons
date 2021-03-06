import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {
    Label, Input, FormGroup, FormFeedback
} from 'reactstrap';

import {ValidatorService} from '../services';

class TextField extends PureComponent {
    static propTypes = {
        onChange: PropTypes.func.isRequired,
        onBlur: PropTypes.func,
        handleKeyPress: PropTypes.func,
        control: PropTypes.string.isRequired,
        label: PropTypes.string,
        value: PropTypes.string,
        validateInput: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
        placeholder: PropTypes.string,
        feedBackLabel: PropTypes.string,
        minLength: PropTypes.number,
        maxLength: PropTypes.number,
        disabled: PropTypes.bool,
        required: PropTypes.bool,
        row: PropTypes.bool,
        invalid: PropTypes.bool
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
        required: false,
        row: false,
        feedBackLabel: null,
        invalid: undefined
    };

    constructor(props) {
        super(props);
        this.state = {valid: undefined};
    }

    validateInput(value) {
        if (this.props.validateInput) {
            return this.props.validateInput;
        }
        const {maxLength, minLength} = this.props;
        const valid = ValidatorService.validateText(value, maxLength, minLength);
        return this.setState(() => ({valid}));
    }

    handleChange({target: {value}}) {
        if (this.props.value === value) {
            return;
        }
        this.validateInput(value);
        this.props.onChange({target: {value, id: this.props.control}});
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
            feedBackLabel,
            invalid,
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
                    type="text"
                    onKeyPress={handleKeyPress}
                    onBlur={e => this.handleBlur(e.target.value)}
                    invalid={value && (valid === false || invalid)}
                    name={control}
                    {...{
                        required, value, maxLength, minLength, disabled, placeholder, valid
                    }}
                    {...props}
                    onChange={e => this.handleChange(e)}
                />
                {feedBackLabel && (
                    <FormFeedback tooltip>
                        {feedBackLabel}
                    </FormFeedback>
                )}
            </FormGroup>
        );
    }
}

export default TextField;
