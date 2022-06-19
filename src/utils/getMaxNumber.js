const getMaxNumber = (numbers = []) => {
    const numbersSorted = numbers.sort((a, b) => b - a);
    return numbersSorted[0];
};

export default getMaxNumber;
