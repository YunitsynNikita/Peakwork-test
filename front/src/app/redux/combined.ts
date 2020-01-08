import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';

import { airports } from '@app/redux/reducers/airports/airports.reducer';
import { AirportsState } from '@app/types/airports';

export interface RootStore {
  airports: AirportsState;
}

export const rootReducer = combineReducers({
  form: FormReducer,
  airports,
});
