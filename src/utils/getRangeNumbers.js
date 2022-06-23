const getRangeNumbers = (start = 0, end) => new Array(end - start).fill().map((d, i) => i + start);

export default getRangeNumbers;
