import React from 'react';
import PropTypes from 'prop-types';
import {Label, FormGroup} from 'reactstrap';
import DatePicker from 'react-datepicker';
import es from 'date-fns/locale/es';

const handleChange = (date, onChange, currentValue, control) => {
    if (currentValue === date) {
        return;
    }
    onChange({target: {value: date, id: control}});
};

const DateField = ({
    control, label, value, dateFormat, maxDate, minDate, disabled, onChange
}) => (
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
            locale={es}
            {...{
                maxDate,
                minDate,
                dateFormat,
                disabled
            }}
            selected={value}
            onChange={date => handleChange(date, onChange, value, control)}
        />
    </FormGroup>
);

DateField.propTypes = {
    onChange: PropTypes.func.isRequired,
    control: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    dateFormat: PropTypes.string,
    maxDate: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]),
    minDate: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]),
    disabled: PropTypes.bool
};

DateField.defaultProps = {
    value: null,
    dateFormat: 'dd/MM/yyyy',
    maxDate: new Date(),
    minDate: null,
    disabled: false
};

export default DateField;
