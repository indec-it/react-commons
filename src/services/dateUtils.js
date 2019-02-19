import {isDate} from 'lodash';
import moment from 'moment';
import 'moment/locale/es';

export default class DateUtilsService {
    static LOCALE = 'es-AR';
    static DATE_TIME_FORMAT = 'DD/MM/YYYY HH:mm';

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

    static concatDateTime(input) {
        return `${DateUtilsService.formatDate(input)} ${DateUtilsService.formatTime(input)}`;
    }

    static formatDateTime(input) {
        if (!input) {
            return '';
        }
        return moment(input).format('DD/MM/YYYY HH:mm:ss');
    }
}
