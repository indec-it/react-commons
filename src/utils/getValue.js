import isBoolean from '@/utils/isBoolean';

/**
 * Return a value filtered undefined, null, empty strings, or return array with value filtered.
 * @param {any} value
 * @param {boolean} castToArray
 * @return {array|any}
 */
const getValue = (value, castToArray) => {
    if (isBoolean(value)) {
        return castToArray ? [value] : value;
    }
    if (typeof value === 'number') {
        return castToArray ? [value] : value;
    }
    if (Array.isArray(value)) {
        return value.filter(val => !(val === undefined || val === null || val === ''));
    }
    return castToArray ? [value].filter(Boolean) : value || null;
};

export default getValue;
