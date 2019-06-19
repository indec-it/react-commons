import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {
    Label, Input, FormGroup, FormFeedback
} from 'reactstrap';

import {ValidatorService} from '../services';

class EmailField extends PureComponent {
    static propTypes = {
        onChange: PropTypes.func.isRequired,
        control: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        feedBackLabel: PropTypes.string,
        disabled: PropTypes.bool
    };

    static defaultProps = {
        disabled: false,
        feedBackLabel: 'Email invalido'
    };

    constructor(props) {
        super(props);
        this.state = {valid: undefined};
    }

    validateInput(value, onChange) {
        const valid = ValidatorService.validateEmail(value);
        this.setState(() => ({valid}), onChange());
    }

    handleChange({target}, onChange) {
        if (this.props.value === target.value) {
            return;
        }
        this.validateInput(target.value, onChange({target}));
    }

    render() {
        const {
            control, label, value, disabled, onChange, feedBackLabel
        } = this.props;
        const {valid} = this.state;
        return (
            <FormGroup>
                <Label>
                    {label}
                </Label>
                <Input
                    type="email"
                    {...{value, disabled, valid}}
                    required
                    onChange={e => this.handleChange(e, onChange)}
                    invalid={valid === false}
                    name={control}
                />
                <FormFeedback tooltip>
                    {feedBackLabel}
                </FormFeedback>
            </FormGroup>
        );
    }
}

export default EmailField;
