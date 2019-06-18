import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {
    Label,
    Input,
    FormGroup,
    FormFeedback
} from 'reactstrap';

import ValidatorService from '../services/validator';

class EmailField extends PureComponent {
    static propTypes = {
        control: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        disabled: PropTypes.bool
    };

    static defaultProps = {
        disabled: false
    };

    constructor(props) {
        super(props);
        this.state = {valid: undefined};
    }

    validateInput = (value, callback) => {
        const valid = ValidatorService.validateEmail(value);
        this.setState(() => ({valid}), callback());
    };

    handleChange = ({target}, onChange) => {
        if (this.props.value === target.value) {
            return;
        }
        this.validateInput(target.value, onChange({target}));
    };

    render() {
        const {
            control, label, value, disabled, onChange
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
                    Email invalido
                </FormFeedback>
            </FormGroup>
        );
    }
}

export default EmailField;
