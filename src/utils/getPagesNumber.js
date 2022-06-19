import compact from './compact';

const getPagesNumber = pages => compact(pages.map(page => (!Number.isNaN(page) ? page : null)));

export default getPagesNumber;
