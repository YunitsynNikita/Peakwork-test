import * as React from 'react';

import './airports.scss';
import { Airport } from '@app/types/airports';
import { Items } from '@app/components/Airports/Items/Items';
import { Pagination } from '@app/components/base/Pagination/Pagination';
import { PER_PAGE_VALUES } from '@app/constants/Pagination/pagination.constants';
import { Loader } from '@app/components/base/Loader/Loader';
import { Select } from '@app/components/base/Select/Select';

interface Props {
  airports?: Airport[];
  isPending: boolean;
  totalResults?: number;
  currentPage: number;
  dataPerPage: number;
  getData: (page: number) => void;
  setPerPageCount: (dataPerPage: number) => void;
}

const Airports = ({
  airports,
  isPending,
  totalResults,
  getData,
  currentPage,
  dataPerPage,
  setPerPageCount,
}: Props) => {
  if (isPending) {
    return <Loader />;
  }

  if (airports && airports.length) {
    return (
      <>
        <div className="info">
          <div className="total-results mb--8">
            Total results: {totalResults}
          </div>
          <Select
            options={PER_PAGE_VALUES}
            label="Results per page"
            onSelect={setPerPageCount}
            initial={dataPerPage}
          />
        </div>

        <div className="airports">
          <Items items={airports} />
        </div>

        {totalResults > dataPerPage && (
          <Pagination
            totalItemsCount={totalResults}
            currentPage={currentPage}
            itemsPerPage={dataPerPage}
            onPageSelect={getData}
          />
        )}
      </>
    );
  }

  if (airports && !airports.length) {
    return <span>No data</span>;
  }

  return null;
};

export { Airports };
