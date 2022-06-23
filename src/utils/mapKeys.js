const mapKeys = (object, iteratee) => {
    const parsedObject = Object(object);
    const result = {};

    Object.keys(parsedObject).forEach(key => {
        const value = parsedObject[key];
        result[iteratee(value, key, parsedObject)] = value;
    });
    return result;
};

export default mapKeys;
