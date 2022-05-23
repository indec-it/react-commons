const removeKeys = (object, keys) => {
    const newObject = {...object};
    keys.forEach(key => {
        delete newObject[key];
    });
    return newObject;
};
export default removeKeys;
