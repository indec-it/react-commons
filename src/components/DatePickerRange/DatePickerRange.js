import React from 'react';
import PropTypes from 'prop-types';
import {Stack} from '@chakra-ui/react';

import {useFormikContext, useField} from 'formik';
import {DatePicker} from '@/components';

const DatePickerRange = ({
    startDate,
    endDate,
    startDateName,
    endDateName,
    onChange,
    fromDatePlaceholder,
    toDatePlaceholder,
    isDisabled,
    isFormik,
    ...props
}) => {
    const form = isFormik ? useFormikContext() : undefined;
    const containerStyle = {margin: '0 10px 10px 10px', maxWidth: '250px', minWidth: '250px'};
    const [startDateNameField] = isFormik ? useField(startDateName) : [];
    const [endDateNameField] = isFormik ? useField(endDateName) : [];

    return (
        <>
            <Stack {...containerStyle}>
                <DatePicker
                    name={startDateName}
                    onChange={onChange || form?.handleChange}
                    value={isFormik ? startDateNameField.value : startDate}
                    startDate={isFormik ? startDateNameField.value : startDate}
                    endDate={isFormik ? endDateNameField.value : endDate}
                    maxDate={isFormik ? endDateNameField.value : startDate}
                    selectsStart
                    placeholder={fromDatePlaceholder}
                    isDisabled={isDisabled}
                    form={form}
                    field={startDateNameField}
                    {...props}
                />
            </Stack>
            <Stack {...containerStyle}>
                <DatePicker
                    name={endDateName}
                    onChange={onChange || form?.handleChange}
                    value={isFormik ? endDateNameField.value : endDate}
                    startDate={isFormik ? startDateNameField.value : startDate}
                    endDate={isFormik ? endDateNameField.value : endDate}
                    minDate={isFormik ? startDateNameField.value : startDate}
                    selectsEnd
                    placeholder={toDatePlaceholder}
                    isDisabled={isDisabled}
                    form={form}
                    field={endDateNameField}
                    {...props}
                />
            </Stack>
        </>
    );
};

DatePickerRange.propTypes = {
    isFormik: PropTypes.bool,
    onChange: PropTypes.func,
    startDateName: PropTypes.string,
    endDateName: PropTypes.string,
    fromDatePlaceholder: PropTypes.string,
    toDatePlaceholder: PropTypes.string,
    startDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    endDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    isDisabled: PropTypes.bool,
    values: PropTypes.shape({
        startDate: PropTypes.string,
        endDate: PropTypes.string
    })
};

DatePickerRange.defaultProps = {
    isFormik: true,
    onChange: undefined,
    startDate: undefined,
    values: undefined,
    endDate: undefined,
    fromDatePlaceholder: undefined,
    toDatePlaceholder: undefined,
    isDisabled: false,
    startDateName: 'startDate',
    endDateName: 'endDate'
};

export default DatePickerRange;
