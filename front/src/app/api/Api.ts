import { AirportsApi } from './Airports/Airports';

class ApiBuilder {
  airports = new AirportsApi();
}

export const Api = new ApiBuilder();
