import getValue from './getValue';
import mapKeys from './mapKeys';

const getSelectedOptions = (options, selectedValue, getOptionValue) => {
    const indexed = mapKeys(options, option => getOptionValue(option));
    const valueInArray = getValue(selectedValue, true);
    return valueInArray.map(option => indexed[option] || {value: option, label: option}).filter(Boolean);
};

export default getSelectedOptions;
