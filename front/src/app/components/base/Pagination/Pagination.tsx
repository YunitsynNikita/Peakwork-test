import * as React from 'react';

import './pagination.scss';
import { Page } from './SinglePage/SinglePage';
import { getList } from '@app/utils/pagination.helpers';

interface Props {
  totalItemsCount?: number;
  currentPage: number;
  itemsPerPage: number;
  onPageSelect: (page: number) => void;
}

const Pagination = ({
  totalItemsCount,
  currentPage,
  itemsPerPage,
  onPageSelect,
}: Props) => {
  const totalPagesCount = React.useMemo(
    () => Math.ceil(totalItemsCount / itemsPerPage),
    [itemsPerPage],
  );

  const handleClick = React.useCallback((value: number) => {
    onPageSelect(value);
  }, []);

  return (
    <div className="pagination mt--12">
      {getList(totalPagesCount, currentPage).map((item, index) => (
        <Page
          key={index}
          value={item}
          isCurrent={item === currentPage}
          onClick={handleClick}
        />
      ))}
    </div>
  );
};

export { Pagination };
