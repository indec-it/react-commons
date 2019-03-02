import React from 'react';
import PropTypes from 'prop-types';
import {Col, Row} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';

import DateUtilsService from '../services/dateUtils';
import DateField from './DateField';

const handleChangeDateFrom = (value, dateTo, range, onChange) => {
    const dateFrom = value || null;
    onChange({dateFrom, dateTo: DateUtilsService.getDateTo(dateFrom, dateTo, range)});
};

const DateRange = ({
    dateFrom, dateTo, range, onChange
}) => (
    <Row>
        <Col sm={6} className="no-padding">
            <DateField
                control="dateFrom"
                label="Desde"
                value={dateFrom}
                minDate={DateUtilsService.MIN_DATE_FROM}
                maxDate={DateUtilsService.MAX_DATE_FROM}
                onChange={item => handleChangeDateFrom(item.target.value, dateTo, range, onChange)}
            />
        </Col>
        <Col sm={6} className="no-padding">
            <DateField
                control="dateTo"
                label={(
                    <span title={`El rango de fechas no puede superar los ${range} días.`}>
                        Hasta&nbsp;
                        <FontAwesomeIcon icon={faInfoCircle}/>
                        &nbsp;
                    </span>
                )}
                value={dateTo}
                minDate={moment(dateFrom)}
                maxDate={DateUtilsService.getMaxDateTo(dateFrom, range)}
                onChange={item => onChange({dateTo: item.target.value ? item.target.value : null})}
            />
        </Col>
    </Row>
);

DateRange.propTypes = {
    onChange: PropTypes.func.isRequired,
    dateFrom: PropTypes.string.isRequired,
    dateTo: PropTypes.string.isRequired,
    range: PropTypes.number
};

DateRange.defaultProps = {
    range: 45
};

export default DateRange;
