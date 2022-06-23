/**
 * Return true/false if is array of strings.
 * @param {any} value
 * @return {boolean}
 */
const isStringsArray = value => Array.isArray(value) && value.every(item => typeof item === 'string');

export default isStringsArray;
