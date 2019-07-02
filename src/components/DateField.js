import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {ControlLabel, FormControl, FormGroup} from 'react-bootstrap';
import DatePicker from 'react-datepicker';

import ValidatorService from '../services/validator';

class DateField extends PureComponent {
    static propTypes = {
        control: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        value: PropTypes.string,
        onChange: PropTypes.func.isRequired,
        dateFormat: PropTypes.string,
        maxDate: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]),
        minDate: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]),
        disabled: PropTypes.bool
    };

    static defaultProps = {
        value: null,
        dateFormat: 'dd/MM/yyyy',
        maxDate: null,
        minDate: null,
        disabled: false
    };

    handleChange(date) {
        const value = date.toISOString();
        if (this.props.value === value) {
            return;
        }
        this.props.onChange({target: {value, id: this.props.control}});
    }

    validateInput() {
        if (!this.props.value) {
            return null;
        }
        return ValidatorService.validateDate(this.props.value) ? 'success' : 'error';
    }

    render() {
        const {
            control, label, value, dateFormat, maxDate, minDate, disabled
        } = this.props;
        return (
            <FormGroup controlId={control} validationState={this.validateInput()}>
                <ControlLabel>
                    {label}
                </ControlLabel>
                <FormControl
                    componentClass={DatePicker}
                    selected={value}
                    onChange={date => this.handleChange(date)}
                    placeholderText="Haga click para seleccionar"
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    withPortal
                    {...{
                        dateFormat, maxDate, minDate, disabled
                    }}
                />
            </FormGroup>
        );
    }
}

export default DateField;
