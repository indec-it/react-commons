import flatMap from 'lodash/flatMap';

const flattenNestedOptions = option => (option?.options ? flatMap(option.options, flattenNestedOptions) : option);

const flattenOptions = options => flatMap(options, flattenNestedOptions);

export default flattenOptions;
