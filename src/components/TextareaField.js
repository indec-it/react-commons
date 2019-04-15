import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Label, Input, FormGroup, FormFeedback} from 'reactstrap';
import {size} from 'lodash';

import ValidatorService from '../services/validator';

class TextareaField extends Component {
    static propTypes = {
        control: PropTypes.string.isRequired,
        label: PropTypes.string,
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        minLength: PropTypes.number,
        maxLength: PropTypes.number,
        disabled: PropTypes.bool
    };

    static defaultProps = {
        label: null,
        maxLength: 250,
        minLength: 2,
        disabled: false
    };

    constructor(props) {
        super(props);
        this.state = {dirty: false};
    }

    validateInput() {
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

    render() {
        const {
            control, label, value, maxLength, minLength, disabled
        } = this.props;
        return (
            <FormGroup>
                {label && (
                    <Label>
                        {label}
                    </Label>
                )}
                <Input
                    componentClass="textarea"
                    value={value}
                    required
                    disabled={disabled}
                    maxLength={maxLength}
                    minLength={minLength}
                    onChange={e => this.handleChange(e)}
                    valid={this.validateInput()}
                    name={control}
                />
                <FormFeedback/>
                <small>
                    Quedan&nbsp;
                    {maxLength - size(value)}
                    &nbsp;caracter(es) disponibles.
                </small>
            </FormGroup>

        );
    }
}

export default TextareaField;
