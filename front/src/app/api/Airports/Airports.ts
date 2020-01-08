import { axiosAPI } from '@app/config';
import { AppRoutesPaths } from '@app/routes/app-routes-paths';
import { SearchParams } from '@app/types/airports';

export class AirportsApi {
  searchAirport(params: SearchParams) {
    return axiosAPI.get(AppRoutesPaths.API.SEARCH, {
      params,
    });
  }
}
