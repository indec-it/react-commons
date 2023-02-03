import React from 'react';
import PropTypes from 'prop-types';
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';
import {Flex, IconButton, Select} from '@chakra-ui/react';
import {months} from '@/constants';

const DatePickerHeader = ({
    date,
    changeYear,
    changeMonth,
    decreaseMonth,
    increaseMonth,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled,
    yearStart,
    yearRange
}) => {
    const years = Array.from({length: yearRange}, (_, i) => yearStart - i);
    const getYear = input => new Date(input).getFullYear();
    const getMonth = newDate => new Date(newDate).getMonth();
    return (
        <Flex pt={2} data-testid="custom-header">
            <IconButton
                onClick={decreaseMonth}
                isDisabled={prevMonthButtonDisabled}
                size="sm"
                icon={<FaChevronLeft size={10}/>}
                aria-label="left"
                data-testid="decrease-month"
            />
            <Select
                value={months[getMonth(date)]}
                onChange={({target: {value}}) => changeMonth(months.indexOf(value))}
                size="sm"
                pr={1}
                w="auto"
                data-testid="month-select"
            >
                {months.map(month => (
                    <option key={month} value={month}>
                        {month}
                    </option>
                ))}
            </Select>
            <Select
                value={getYear(date)}
                onChange={({target: {value}}) => changeYear(value)}
                size="sm"
                pl={1}
                w="auto"
                data-testid="year-select"
            >
                {years.map(year => (
                    <option key={year} value={year}>
                        {year}
                    </option>
                ))}
            </Select>
            <IconButton
                onClick={increaseMonth}
                isDisabled={nextMonthButtonDisabled}
                size="sm"
                icon={<FaChevronRight size={10}/>}
                aria-label="right"
                data-testid="increase-month"
            />
        </Flex>
    );
};

DatePickerHeader.propTypes = {
    date: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string, PropTypes.number]),
    changeYear: PropTypes.func.isRequired,
    changeMonth: PropTypes.func.isRequired,
    decreaseMonth: PropTypes.func.isRequired,
    increaseMonth: PropTypes.func.isRequired,
    prevMonthButtonDisabled: PropTypes.bool.isRequired,
    nextMonthButtonDisabled: PropTypes.bool.isRequired,
    yearStart: PropTypes.number.isRequired,
    yearRange: PropTypes.number.isRequired
};

DatePickerHeader.defaultProps = {
    date: undefined
};

export default DatePickerHeader;
