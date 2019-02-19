import {isDate} from 'lodash';
import 'moment/locale/es';

export default class DateUtilsService {
    static LOCALE = 'es-AR';

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
}
