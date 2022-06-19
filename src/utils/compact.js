const falsyValues = [false, 0, '', null, undefined];
const compact = array => array.filter(value => !falsyValues.includes(value));

export default compact;
