import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { rootReducer, RootStore } from './combined';
import { requestMiddleware } from '@app/redux/middleware/request.middleware';

let storeBuilder: any;

if ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  storeBuilder = composeEnhancers(applyMiddleware(thunk, requestMiddleware))(
    createStore,
  );
} else {
  storeBuilder = applyMiddleware(thunk, requestMiddleware)(createStore);
}

const configureStore = (initialState?: RootStore) =>
  storeBuilder(rootReducer, initialState);

export const store = configureStore();
