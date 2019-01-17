import document from 'arg.js/src/document';
import cuit from 'arg.js/src/cuit';

import {
    size, inRange, parseInt, isDate, isNil, isNumber
} from 'lodash';

// eslint-disable-next-line max-len
const emailRegex = /^([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
const numberRegex = /^[0-9]+$/;

export default class ValidatorService {
    static validateText(input, max = 50, min = 2) {
        return inRange(size(input), min, max + 1);
    }

    static validateNumber(input) {
        return numberRegex.test(input);
    }

    static validateDate(input) {
        if (isDate(input)) {
            return true;
        }
        return !!(new Date(input)).getTime();
    }

    static validateEmail(email) {
        return emailRegex.test(email);
    }

    static validateDocument(input) {
        return !isNil(input) && isNumber(parseInt(input)) && document.isValidDni(input);
    }

    static validateCuit(input) {
        return !isNil(input) && isNumber(parseInt(input)) && cuit.isValid(input);
    }
}
