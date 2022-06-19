import getValue from '@/utils/getValue';
import mapKeys from './mapKeys';

const getSelectedOptions = (options, selectedValue, getOptionValue) => {
    const indexed = mapKeys(options, option => getOptionValue(option));
    console.log(indexed)
    const valueInArray = getValue(selectedValue, true);
    return valueInArray.map(option => indexed[option] || {value: option, label: option}).filter(Boolean);
};

export default getSelectedOptions;
