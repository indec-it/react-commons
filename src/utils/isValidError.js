import {isStringsArray} from '@/utils';

/**
 * Return if is valid error to render in the browser.
 * @param {any} error
 * @return {boolean}
 */
const isValidError = error => !!(isStringsArray(error)
    || typeof error === 'boolean'
    || (typeof error === 'string' && error !== '')
    || typeof error === 'number');

export default isValidError;
