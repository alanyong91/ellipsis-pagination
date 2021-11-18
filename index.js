const ellipsisPagination = ({
  prefix = 2,
  suffix = 2,
  displayNumber = 5,
  currentPage,
  totalPage
}) => {
  if (totalPage === null || currentPage === null) {
    throw Error('`currentPage` and `totalPage` are required!');
  }

  if (prefix >= 3 || suffix >= 3) {
    throw Error('`prefix` and `suffix` number cannot larger or equal to 3');
  }

  if (displayNumber <= 3 || !(displayNumber % 2)) {
    throw Error('`displayNumber` must larger than 3 and must be an odd number');
  }

  const pageObject = (type, page) => ({
    type,
    page,
    isActive: currentPage === page
  });

  if (totalPage < displayNumber + prefix + suffix + 1) {
    return [...new Array(totalPage)].map((_, i) => pageObject('PAGE', i + 1));
  }

  const startNumber =
    currentPage >= displayNumber
      ? currentPage - Math.floor(displayNumber / 2)
      : 1;

  const numberOfSuffixPagination =
    totalPage - (currentPage + Math.floor(displayNumber / 2));

  const numberToDisplay =
    currentPage === totalPage
      ? suffix + 1
      : currentPage + suffix >= totalPage
      ? displayNumber - (totalPage - currentPage)
      : displayNumber;

  const prefixNumber =
    startNumber !== 1 ? [...new Array(prefix)].map((_, i) => i + 1) : [];
  const prefixEllipsis = currentPage >= displayNumber;
  const paginate = [...new Array(numberToDisplay)].map(
    (_, i) => i + startNumber
  );
  const suffixEllipsis =
    currentPage <= totalPage - Math.ceil(displayNumber / 2) - suffix;
  const suffixNumber =
    currentPage <= totalPage - Math.ceil(displayNumber / 2)
      ? [
          ...new Array(
            numberOfSuffixPagination <= suffix
              ? numberOfSuffixPagination
              : suffix
          )
        ]
          .map((_, i) => i)
          .reverse()
          .map((i) => totalPage - i)
      : [];

  return [
    ...prefixNumber.map((n) => pageObject('PAGE', n)),
    ...(prefixEllipsis ? [pageObject('ELLIPSIS', 'prefix-ellipsis')] : []),
    ...paginate.map((n) => pageObject('PAGE', n)),
    ...(suffixEllipsis ? [pageObject('ELLIPSIS', 'suffix-ellipsis')] : []),
    ...suffixNumber.map((n) => pageObject('PAGE', n))
  ];
};

export default ellipsisPagination