import {isDate} from 'lodash';
import moment from 'moment';
import 'moment/locale/es';

export default class DateUtilsService {
    static LOCALE = 'es-AR';
    static MIN_DATE_FROM = moment('2018-04-01');
    static MAX_DATE_FROM = moment();

    static formatDate(input) {
        if (!input) {
            return '';
        }
        const date = isDate(input) ? input : new Date(input);
        return date.toLocaleDateString(DateUtilsService.LOCALE);
    }

    static formatTime(input) {
        if (!input) {
            return '';
        }
        const date = isDate(input) ? input : new Date(input);
        return date.toLocaleTimeString(DateUtilsService.LOCALE);
    }

    static formatDateTime(input) {
        return `${DateUtilsService.formatDate(input)} ${DateUtilsService.formatTime(input)}`;
    }

    static getDateTo(dateFrom, dateTo, range) {
        const from = moment(dateFrom);
        const to = moment(dateTo);
        return DateUtilsService.formatISODate(
            from > to ? from : moment.min(DateUtilsService.getMaxDateTo(dateFrom, range), to)
        );
    }

    static formatISODate(input) {
        if (!input) {
            return null;
        }
        const date = moment(input);
        return date.toISOString().substring(0, 10);
    }

    static getMaxDateTo(dateFrom, range) {
        return moment.min(moment(dateFrom).add(range, 'days'), moment());
    }
}
