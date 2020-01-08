import { AirportsState } from '@app/types/airports';

export const initialState: AirportsState = {
  isPending: false,
  currentPage: 1,
  dataPerPage: 5,
};
