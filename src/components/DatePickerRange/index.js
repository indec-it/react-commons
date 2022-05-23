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
    isFormik
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
                    onChange={form?.handleChange || onChange}
                    value={isFormik ? startDateNameField.value : startDate}
                    startDate={isFormik ? startDateNameField.value : startDate}
                    endDate={isFormik ? endDateNameField.value : endDate}
                    maxDate={isFormik ? endDateNameField.value : startDate}
                    selectsStart
                    placeholder={fromDatePlaceholder}
                    isDisabled={isDisabled}
                    form={form}
                    field={startDateNameField}
                />
            </Stack>
            <Stack {...containerStyle}>
                <DatePicker
                    name={endDateName}
                    onChange={form?.handleChange || onChange}
                    value={isFormik ? endDateNameField.value : endDate}
                    startDate={isFormik ? startDateNameField.value : startDate}
                    endDate={isFormik ? endDateNameField.value : endDate}
                    minDate={isFormik ? startDateNameField.value : startDate}
                    selectsEnd
                    placeholder={toDatePlaceholder}
                    isDisabled={isDisabled}
                    form={form}
                    field={endDateNameField}
                />
            </Stack>
        </>
    );
};

DatePickerRange.propTypes = {
    isFormik: PropTypes.bool,
    onChange: PropTypes.func,
    handleChange: PropTypes.func,
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
    handleChange: undefined,
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
