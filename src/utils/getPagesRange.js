import getMaxNumber from './getMaxNumber';
import getRangeNumbers from './getRangeNumbers';

const getPagesRange = (newPage, currentPage, total) => {
    if (total <= 4) {
        return getRangeNumbers(1, total + 1);
    }
    const page = currentPage || newPage;
    const hasMorePages = page + 1 < total;
    const start = getMaxNumber([hasMorePages ? page - 1 : page - 2, 1]);
    const end = getMaxNumber([hasMorePages ? page + 1 : page, 4]);
    return getRangeNumbers(start, end + 1);
};

export default getPagesRange;
