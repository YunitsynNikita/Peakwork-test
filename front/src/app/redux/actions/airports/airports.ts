import { Dispatch } from 'redux';

import { Api } from '@app/api/Api';
import { SearchParams } from '@app/types/airports';
import { SearchActions } from '@app/redux/actionTypes/airports/airports';
import { FIRST_PAGE } from '@app/constants/Pagination/pagination.constants';
import { store } from '@app/redux/configureStore';
import { SEARCH_FORM_ID } from '@app/constants/Search/search.constants';

export const getData = (page: number, values?: SearchParams) => (
  dispatch: Dispatch,
) => {
  const { airports, form } = store.getState();
  const data = values ? values : form[SEARCH_FORM_ID].values;

  dispatch({
    type: SearchActions.GET_AIRPORTS,
    request: () =>
      Api.airports.searchAirport({
        ...data,
        page,
        dataPerPage: airports.dataPerPage,
      }),
    payload: page,
  });
};

export const setPerPageCount = (value: number) => (dispatch: Dispatch) => {
  dispatch({
    type: SearchActions.SET_PER_PAGE_COUNT,
    payload: value,
  });
  getData(FIRST_PAGE)(dispatch);
};

export const submit = (values: SearchParams, dispatch: Dispatch) => {
  getData(FIRST_PAGE, values)(dispatch);
};
