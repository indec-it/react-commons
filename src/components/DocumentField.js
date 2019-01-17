import React, {Component} from 'react';
import PropTypes from 'prop-types';

import ValidatorService from '../services/validator';

import TextField from './TextField';

class DocumentField extends Component {
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

    validateInput() {
        if (!this.props.value) {
            return null;
        }
        return ValidatorService.validateDocument(this.props.value) ? 'success' : 'error';
    }

    handleChange({target}) {
        if (this.props.value === target.value) {
            return;
        }
        this.props.onChange({target});
    }

    render() {
        const {
            control, label, value, disabled
        } = this.props;
        return (
            <TextField
                control={control}
                label={label}
                value={value}
                required
                minLength={7}
                maxLength={8}
                disabled={disabled}
                onChange={e => this.handleChange(e)}
                validateInput={this.validateInput()}
            />
        );
    }
}

export default DocumentField;
