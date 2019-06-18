import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Label, FormGroup} from 'reactstrap';
import DatePicker from 'react-datepicker';

class DateField extends Component {
    static propTypes = {
        control: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        value: PropTypes.string,
        onChange: PropTypes.func.isRequired,
        dateFormat: PropTypes.string,
        maxDate: PropTypes.oneOfType(PropTypes.string, PropTypes.shape({})),
        minDate: PropTypes.oneOfType(PropTypes.string, PropTypes.shape({})),
        disabled: PropTypes.bool
    };

    static defaultProps = {
        value: null,
        dateFormat: 'dd/MM/yyyy',
        maxDate: new Date(),
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

    render() {
        const {
            control, label, value, dateFormat, maxDate, minDate, disabled
        } = this.props;
        return (
            <FormGroup>
                <Label>
                    {label}
                </Label>
                <DatePicker
                    showYearDropdown
                    showMonthDropdown
                    isClearable
                    key="es"
                    id={control}
                    locale="es"
                    {...{
                        maxDate,
                        minDate,
                        dateFormat,
                        disabled
                    }}
                    selected={value}
                    onChange={this.handleChange}
                />
            </FormGroup>
        );
    }
}

export default DateField;
