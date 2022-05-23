import mapKeys from 'lodash/mapKeys';
import getValue from '@/utils/getValue';

const getSelectedOptions = (options, selectedValue, getOptionValue) => {
    const indexed = mapKeys(options, option => getOptionValue(option));
    const valueInArray = getValue(selectedValue, true);
    return valueInArray.map(option => indexed[option] || {value: option, label: option}).filter(Boolean);
};

export default getSelectedOptions;
