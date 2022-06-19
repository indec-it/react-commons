const flattenNestedOptions = option => (option?.options ? option.options.flatMap(flattenNestedOptions) : option);

const flattenOptions = options => options.flatMap(flattenNestedOptions);

export default flattenOptions;
