import { Airport } from '../models/airport';
import { AirportSearchParams } from 'src/types/airport.types';
import { prepareParams } from '../../utils/params.helper';

const AirportsData = {
  findAirports: async ({
    country,
    name,
    iata,
    page,
    dataPerPage,
  }: AirportSearchParams) => {
    const preparedParams = prepareParams({
      country,
      name,
      iata,
    });
    const airports = await Airport.find(preparedParams, null, {
      limit: +dataPerPage,
      skip: +(page - 1) * dataPerPage,
    });
    const totalResults = await Airport.countDocuments(preparedParams);

    return { airports, totalResults };
  },
};

export { AirportsData };
