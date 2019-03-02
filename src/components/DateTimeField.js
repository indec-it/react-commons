import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ControlLabel, FormControl, FormGroup} from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import DateUtilsService from '../services/dateUtils';

class DateTimeField extends Component {
    static propTypes = {
        control: PropTypes.string.isRequired,
        label: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]).isRequired,
        value: PropTypes.string,
        onChange: PropTypes.func.isRequired,
        maxDate: PropTypes.oneOfType([PropTypes.string, PropTypes.shape()]),
        minDate: PropTypes.oneOfType([PropTypes.string, PropTypes.shape()]),
        disabled: PropTypes.bool,
        timeFormat: PropTypes.string,
        timeIntervals: PropTypes.number,
        timeCaption: PropTypes.string
    };

    static defaultProps = {
        value: null,
        maxDate: null,
        minDate: null,
        disabled: false,
        timeFormat: 'HH:mm',
        timeIntervals: 15,
        timeCaption: 'Hs.'
    };

    handleChange(date) {
        const value = DateUtilsService.formatDateTimePicker(date);
        if (this.props.value === value) {
            return;
        }
        this.props.onChange({target: {value, id: this.props.control}});
    }

    render() {
        const {
            control, label, value, maxDate, minDate, disabled, timeFormat, timeIntervals, timeCaption
        } = this.props;
        return (
            <FormGroup controlId={control}>
                <ControlLabel>
                    {label}
                </ControlLabel>
                <FormControl
                    {...{
                        minDate, maxDate, disabled, timeFormat, timeIntervals, timeCaption
                    }}
                    componentClass={DatePicker}
                    selected={value ? moment(value, DateUtilsService.DATE_TIME_FORMAT) : null}
                    onChange={date => this.handleChange(date)}
                    dateFormat={DateUtilsService.DATE_TIME_FORMAT}
                    placeholderText="Haga click para seleccionar"
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    withPortal
                    showTimeSelect
                />
            </FormGroup>
        );
    }
}

export default DateTimeField;
