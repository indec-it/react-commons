const mapKeys = (object = {}) => {
    const result = {};
    Object.keys(object).forEach(key => {
        const value = object[key];
        result[`${key}${value}`] = value;
    });
    return result;
};

export default mapKeys;
