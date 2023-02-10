import React from 'react';
import PropTypes from 'prop-types';
import es from 'date-fns/locale/es';
import ReactDatePicker from 'react-datepicker';

import DatePickerInput from './DatePickerInput';
import DatePickerHeader from './DatePickerHeader';

const DatePicker = ({
    name,
    value,
    placeholder,
    onChange,
    onChangeRaw,
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
    isCustomHeader,
    yearStart,
    yearRange,
    ...props
}) => {
    const handleChange = newValue => (onChange ? onChange({target: {id: name, value: newValue.toISOString()}})
        : form?.setFieldValue(field.name, newValue.toISOString()));
    const customHeader = isCustomHeader
        ? {
            renderCustomHeader: datePickerProps => (
                <DatePickerHeader
                    {...datePickerProps}
                    {...{yearRange, yearStart}}
                />
            )
        }
        : {};

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
            onChangeRaw={onChangeRaw}
            {...customHeader}
        />
    );
};

DatePicker.propTypes = {
    name: PropTypes.string,
    onClick: PropTypes.func,
    onChange: PropTypes.func,
    onChangeRaw: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
    placeholder: PropTypes.string,
    isDisabled: PropTypes.bool,
    variant: PropTypes.string,
    form: PropTypes.shape({
        setFieldValue: PropTypes.func
    }),
    field: PropTypes.shape({
        name: PropTypes.string,
        value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
        onChange: PropTypes.func,
        onBlur: PropTypes.func
    }),
    minDate: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
    maxDate: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
    endDate: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
    selectsEnd: PropTypes.bool,
    isCustomHeader: PropTypes.bool,
    selectsStart: PropTypes.bool,
    startDate: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
    yearStart: PropTypes.number,
    yearRange: PropTypes.number
};

DatePicker.defaultProps = {
    name: undefined,
    value: undefined,
    onClick: undefined,
    onChangeRaw: undefined,
    placeholder: '[Seleccione]',
    variant: undefined,
    isDisabled: false,
    isCustomHeader: false,
    onChange: undefined,
    form: undefined,
    field: undefined,
    selectsStart: false,
    selectsEnd: false,
    minDate: undefined,
    maxDate: undefined,
    endDate: undefined,
    startDate: undefined,
    yearStart: new Date().getFullYear(),
    yearRange: 100
};

export default DatePicker;
