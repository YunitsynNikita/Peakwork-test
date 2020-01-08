import * as React from 'react';
import { Provider } from 'react-redux';

import { store } from '@app/redux/configureStore';
import { SearchForm } from '@app/containers/Search/Search.container';
import { AirportsContainer } from '@app/containers/Airports/Airports.container';

const App = () => (
  <Provider store={store}>
    <div className="content">
      <SearchForm />
      <AirportsContainer />
    </div>
  </Provider>
);

export { App };
