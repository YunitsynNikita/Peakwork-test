import { createReducer } from '@app/redux/reducers/createReducer';
import { initialState } from '@app/redux/states/airports/airports';
import { SearchActions } from '@app/redux/actionTypes/airports/airports';
import { AirportsState, Airport } from '@app/types/airports';

export const airports = createReducer(initialState, {
  [SearchActions.GET_AIRPORTS_REQUEST]: (
    state: AirportsState,
    page: number,
  ): AirportsState => ({
    ...state,
    totalResults: null,
    currentPage: page,
    isPending: true,
  }),

  [SearchActions.GET_AIRPORTS_SUCCESS]: (
    state: AirportsState,
    payload: { data: { airports: Airport[]; totalResults: number } },
  ): AirportsState => ({
    ...state,
    airports: payload.data.airports,
    totalResults: payload.data.totalResults,
    isPending: false,
  }),

  [SearchActions.GET_AIRPORTS_FAILED]: (
    state: AirportsState,
  ): AirportsState => ({
    ...state,
    isPending: false,
  }),

  [SearchActions.SET_PER_PAGE_COUNT]: (
    state: AirportsState,
    dataPerPage: number,
  ): AirportsState => ({
    ...state,
    dataPerPage,
  }),
});
