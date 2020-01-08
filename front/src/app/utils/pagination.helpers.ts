import { DISPLAYED_PAGES } from '@app/constants/Pagination/pagination.constants';

const getPages = (totalPagesCount: number) => {
  const pages = [];

  if (totalPagesCount <= DISPLAYED_PAGES) {
    for (let i = 1; i <= totalPagesCount; i++) {
      pages.push(i);
    }

    return pages;
  }

  for (let i = 1; i <= totalPagesCount; i++) {
    pages.push(i);
  }

  return pages;
};

export const getList = (totalPagesCount: number, currentPage: number) => {
  const pages = getPages(totalPagesCount);
  let list: number[] = [];

  if (pages.length < DISPLAYED_PAGES) {
    return pages;
  }

  if ((currentPage === 1 && pages.length) || currentPage === 2) {
    for (let i = 1; i <= DISPLAYED_PAGES; i++) {
      list.push(i);
    }

    return list;
  }

  if (
    currentPage === pages[pages.length - 1] ||
    currentPage === pages[pages.length - 2]
  ) {
    for (
      let i = pages[pages.length - DISPLAYED_PAGES];
      i <= pages[pages.length - 1];
      i++
    ) {
      list.push(i);
    }

    return list;
  }

  for (let i = 1; i < pages.length; i++) {
    if (pages[i] === currentPage) {
      list = pages.slice(i - 2, i + 3);
    }
  }

  return list;
};
