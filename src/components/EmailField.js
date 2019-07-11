import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {ValidatorService} from '../services';
import TextField from './TextField';

class EmailField extends PureComponent {
    static propTypes = {
        onChange: PropTypes.func.isRequired,
        control: PropTypes.string.isRequired,
        label: PropTypes.string,
        value: PropTypes.string.isRequired,
        feedBackLabel: PropTypes.string,
        disabled: PropTypes.bool
    };

    static defaultProps = {
        disabled: false,
        label: null,
        feedBackLabel: 'Email invalido'
    };

    constructor(props) {
        super(props);
        this.state = {valid: undefined};
    }

    validateInput(value) {
        const valid = ValidatorService.validateEmail(value);
        this.setState(() => ({valid}));
    }

    render() {
        const {
            control, label, value, disabled, feedBackLabel, ...props
        } = this.props;
        const {valid} = this.state;
        return (
            <TextField
                type="email"
                {...{
                    control, label, value, disabled, feedBackLabel
                }}
                invalid={valid === false}
                validateInput={this.validateInput(value)}
                onChange={onChange}
                {...props}
            />
        );
    }
}

export default EmailField;
