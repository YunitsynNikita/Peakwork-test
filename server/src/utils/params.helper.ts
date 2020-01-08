import { PreparedAirportSearchParams } from 'src/types/airport.types';

export const prepareParams = (params: PreparedAirportSearchParams) => {
  const preparedParams: { [key: string]: { $regex: RegExp } } = {};

  for (const key in params) {
    if (params[key]) {
      preparedParams[key] = {
        $regex: new RegExp('^' + params[key].toLowerCase(), 'i'),
      };
    }
  }

  return preparedParams;
};
