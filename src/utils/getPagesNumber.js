import compact from 'lodash/compact';
import isNumber from 'lodash/isNumber';

const getPagesNumber = pages => compact(pages.map(page => (isNumber(page) ? page : null)));

export default getPagesNumber;
