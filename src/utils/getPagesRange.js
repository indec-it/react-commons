import range from 'lodash/range';
import max from 'lodash/max';

const getPagesRange = (newPage, currentPage, total) => {
    if (total <= 4) {
        return range(1, total + 1);
    }
    const page = currentPage || newPage;
    const hasMorePages = page + 1 < total;
    const start = max([hasMorePages ? page - 1 : page - 2, 1]);
    const end = max([hasMorePages ? page + 1 : page, 4]);
    return range(start, end + 1);
};

export default getPagesRange;
