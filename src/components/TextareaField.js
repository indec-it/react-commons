import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {
    Label, Input, FormGroup, FormFeedback
} from 'reactstrap';
import {size} from 'lodash';

import ValidatorService from '../services/validator';

class TextareaField extends PureComponent {
    static propTypes = {
        control: PropTypes.string.isRequired,
        label: PropTypes.string,
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        minLength: PropTypes.number,
        maxLength: PropTypes.number,
        disabled: PropTypes.bool,
        feedBack: PropTypes.bool,
        feedBackLabel: PropTypes.string
    };

    static defaultProps = {
        label: null,
        maxLength: 250,
        minLength: 2,
        disabled: false,
        feedBack: false,
        feedBackLabel: 'Valor invalido'
    };

    constructor(props) {
        super(props);
        this.state = {valid: undefined};
    }

    validateInput = (value, callback) => {
        const {maxLength, minLength} = this.props;
        const valid = ValidatorService.validateText(value, maxLength, minLength);
        this.setState(() => ({valid}), callback());
    };

    handleChange({target}) {
        if (this.props.value === target.value) {
            return;
        }
        this.validateInput(target.value, this.props.onChange({target}));
    }

    render() {
        const {
            control, label, value, maxLength, minLength, disabled, feedBack, feedBackLabel
        } = this.props;
        const {valid} = this.state;
        return (
            <FormGroup>
                {label && (
                    <Label>
                        {label}
                    </Label>
                )}
                <Input
                    componentClass="textarea"
                    {...{
                        value, disabled, maxLength, minLength, valid
                    }}
                    required
                    onChange={e => this.handleChange(e)}
                    invalid={valid === false}
                    name={control}
                />
                {feedBack && (
                    <FormFeedback tooltip>
                        {feedBackLabel}
                    </FormFeedback>
                )}
                <small>
                    {`Quedan ${maxLength - size(value)} caracter(es) disponibles.`}
                </small>
            </FormGroup>

        );
    }
}

export default TextareaField;
