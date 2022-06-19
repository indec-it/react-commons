import React from 'react';
import PropTypes from 'prop-types';
import es from 'date-fns/locale/es';
import ReactDatePicker from 'react-datepicker';

import DatePickerInput from './DatePickerInput';

const DatePicker = ({
    name,
    value,
    placeholder,
    onChange,
    isDisabled,
    onClick,
    form,
    field,
    minDate,
    maxDate,
    endDate,
    selectsEnd,
    selectsStart,
    startDate,
    ...props
}) => {
    const handleChange = newValue => form?.setFieldValue(field.name, newValue)
        || onChange({target: {id: name, value: newValue}});

    return (
        <ReactDatePicker
            id={field?.name || name}
            dateFormat="dd/MM/yyyy"
            selected={Date.parse(field?.value || value)}
            onChange={handleChange}
            locale={es}
            placeholderText={placeholder}
            showMonthDropdown
            showYearDropdown
            adjustDateOnChange
            disabled={isDisabled}
            minDate={minDate}
            maxDate={maxDate}
            selectsEnd={selectsEnd}
            selectsStart={selectsStart}
            startDate={startDate}
            endDate={endDate}
            customInput={(
                <DatePickerInput
                    {...props}
                    id={field?.name || name}
                    form={form}
                    field={{name: field?.name}}
                />
            )}
        />
    );
};

DatePicker.propTypes = {
    name: PropTypes.string,
    onClick: PropTypes.func,
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
    placeholder: PropTypes.string,
    isDisabled: PropTypes.bool,
    variant: PropTypes.string,
    form: PropTypes.shape({
        setFieldValue: PropTypes.func
    }),
    field: PropTypes.shape({
        name: PropTypes.string,
        value: PropTypes.string,
        onChange: PropTypes.func,
        onBlur: PropTypes.func
    }),
    minDate: PropTypes.string,
    maxDate: PropTypes.string,
    endDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    selectsEnd: PropTypes.bool,
    selectsStart: PropTypes.bool,
    startDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)])
};

DatePicker.defaultProps = {
    name: undefined,
    value: undefined,
    onClick: undefined,
    placeholder: '[Seleccione]',
    variant: undefined,
    isDisabled: false,
    onChange: () => {},
    form: undefined,
    field: undefined,
    selectsStart: false,
    selectsEnd: false,
    minDate: undefined,
    maxDate: undefined,
    endDate: undefined,
    startDate: undefined
};

export default DatePicker;
