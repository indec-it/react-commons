const getPaginationFields = ({skip, total, perPage, documentsSize}) => {
  let pageRowsCount = 0;
  if (skip === 0) {
    pageRowsCount = documentsSize;
  } else if (skip === Math.round(total / perPage)) {
    pageRowsCount = total;
  } else if (documentsSize < perPage) {
    pageRowsCount = total;
  } else {
    pageRowsCount = (skip + 1) * documentsSize;
  }
  return {pageRowsCount};
};

export default getPaginationFields;
